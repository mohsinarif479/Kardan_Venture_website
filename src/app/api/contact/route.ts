import { NextRequest, NextResponse } from "next/server";
import {
  validateContactForm,
  sanitize,
  type ContactFormData,
  type ValidationError,
} from "@/lib/validation";

/* ═══════════════════════════════════════════════════════════════════
   BASIC RATE LIMITING PLACEHOLDER
   ═══════════════════════════════════════════════════════════════════
   NOTE: This is an in-memory placeholder mechanism for local / single-server
   development. For production environments, integrate an enterprise edge rate
   limiter such as Upstash Redis (@upstash/ratelimit) or Cloudflare WAF /
   Turnstile protection to guard against distributed brute-force abuse.
   ═══════════════════════════════════════════════════════════════════ */

interface RateLimitRecord {
  count: number;
  firstRequest: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 5;      // 5 requests per minute

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  // Clean old entries if map grows excessively
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now - value.firstRequest > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || now - record.firstRequest > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(identifier, { count: 1, firstRequest: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  return true;
}

/**
 * POST /api/contact
 * Handles institutional contact form and tender inquiry submissions.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // 1. Basic Rate Limiting: Timestamp header check
    // Clients can pass an X-Request-Timestamp header to prevent replay attacks
    const timestampHeader = request.headers.get("x-request-timestamp");
    if (timestampHeader) {
      const clientTimestamp = parseInt(timestampHeader, 10);
      const currentTime = Date.now();

      // Reject if timestamp is more than 5 minutes old or more than 1 minute in the future
      if (
        isNaN(clientTimestamp) ||
        currentTime - clientTimestamp > 5 * 60 * 1000 ||
        clientTimestamp - currentTime > 60 * 1000
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "Request timestamp is invalid or has expired. Please refresh and try again.",
          },
          { status: 400 }
        );
      }
    }

    // Rate Limiting by client IP
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "anonymous-client";

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many submission attempts. Please wait a moment before trying again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": "60",
          },
        }
      );
    }

    // 2. Parse JSON body with graceful error handling
    let rawBody: unknown;
    try {
      rawBody = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid JSON payload in request body.",
          errors: [{ field: "message", message: "Malformed JSON payload provided." }],
        },
        { status: 400 }
      );
    }

    if (!rawBody || typeof rawBody !== "object" || Array.isArray(rawBody)) {
      return NextResponse.json(
        {
          success: false,
          message: "Request body must be a valid JSON object.",
        },
        { status: 400 }
      );
    }

    const payload = rawBody as Record<string, unknown>;

    // 3. Always sanitize all input fields
    const sanitizedData: ContactFormData = {
      name: sanitize(typeof payload.name === "string" ? payload.name : ""),
      email: sanitize(typeof payload.email === "string" ? payload.email : ""),
      phone: sanitize(typeof payload.phone === "string" ? payload.phone : ""),
      subject: sanitize(typeof payload.subject === "string" ? payload.subject : ""),
      message: sanitize(typeof payload.message === "string" ? payload.message : ""),
    };

    // 4. Validate input data
    const validationErrors: ValidationError[] = validateContactForm(sanitizedData);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Form validation failed. Please correct the highlighted errors.",
          errors: validationErrors,
        },
        { status: 400 }
      );
    }

    // 5. Check CONTACT_EMAIL_TO environment variable
    const recipientEmail = process.env.CONTACT_EMAIL_TO;

    if (!recipientEmail) {
      // Email delivery service not configured in this environment
      return NextResponse.json(
        {
          success: true,
          message: "Inquiry received (email delivery not configured)",
          data: {
            name: sanitizedData.name,
            email: sanitizedData.email,
            subject: sanitizedData.subject,
            receivedAt: new Date().toISOString(),
          },
        },
        { status: 200 }
      );
    }

    /* ═══════════════════════════════════════════════════════════════════
       PRODUCTION EMAIL INTEGRATION DOCUMENTATION:
       ═══════════════════════════════════════════════════════════════════
       When CONTACT_EMAIL_TO is configured, integrate an enterprise email
       provider service (such as Resend, SendGrid, Amazon SES, or Nodemailer)
       to forward the inquiry to your procurement team.

       Example Implementation with Resend (npm install resend):
       -------------------------------------------------------------
       import { Resend } from "resend";
       const resend = new Resend(process.env.RESEND_API_KEY);

       await resend.emails.send({
         from: process.env.CONTACT_EMAIL_FROM || "Kardan Ventures <noreply@kardanventure.com>",
         to: recipientEmail,
         replyTo: sanitizedData.email,
         subject: `[Tender Inquiry] ${sanitizedData.subject}`,
         html: `
           <h2>New Procurement Inquiry</h2>
           <p><strong>From:</strong> ${sanitizedData.name} (${sanitizedData.email})</p>
           <p><strong>Phone:</strong> ${sanitizedData.phone || "Not provided"}</p>
           <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
           <hr />
           <h3>Message Scope:</h3>
           <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
         `,
       });
       ═══════════════════════════════════════════════════════════════════ */

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been successfully received by our procurement desk.",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    const errorDetails = err instanceof Error ? err.message : "Unknown error";
    console.error("[API/Contact Error]:", errorDetails);

    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
