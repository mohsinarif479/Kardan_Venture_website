/* ─── Contact form validation utilities ─── */

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ValidationError {
  field: keyof ContactFormData;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+\-().]{7,20}$/;

export function validateContactForm(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.push({ field: "name", message: "Please enter your full name." });
  }

  if (!EMAIL_RE.test(data.email.trim())) {
    errors.push({ field: "email", message: "Please enter a valid email address." });
  }

  if (data.phone.trim() && !PHONE_RE.test(data.phone.trim())) {
    errors.push({ field: "phone", message: "Please enter a valid phone number." });
  }

  if (!data.subject.trim() || data.subject.trim().length < 3) {
    errors.push({ field: "subject", message: "Please enter a subject." });
  }

  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.push({
      field: "message",
      message: "Message must be at least 10 characters.",
    });
  }

  return errors;
}

/** Sanitize a string for safe storage / display */
export function sanitize(str: string): string {
  return str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .trim()
    .slice(0, 5000);
}

