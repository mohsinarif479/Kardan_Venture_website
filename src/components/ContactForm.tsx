"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { validateContactForm, type ContactFormData } from "@/lib/validation";

type FormState = "idle" | "submitting" | "success" | "error";

export interface ContactFormProps {
  className?: string;
}

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear specific field validation error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof ContactFormData];
        return next;
      });
    }

    // Reset error state if global error was active
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    // Client-side validation
    const validationErrors = validateContactForm(formData);
    if (validationErrors.length > 0) {
      const errMap: Partial<Record<keyof ContactFormData, string>> = {};
      for (const err of validationErrors) {
        if (!errMap[err.field]) {
          errMap[err.field] = err.message;
        }
      }
      setErrors(errMap);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let msg = "Failed to send message. Please try again later.";
        try {
          const data = await response.json();
          if (data && (data.message || data.error)) {
            msg = data.message || data.error;
          }
        } catch {
          // Keep fallback message
        }
        setErrorMessage(msg);
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData(INITIAL_FORM_DATA);
    } catch {
      setErrorMessage(
        "A network error occurred while submitting. Please check your connection and try again."
      );
      setStatus("error");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setErrorMessage("");
  };

  return (
    <div className={`w-full ${className}`}>
      {status === "success" ? (
        <div
          className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 transition-all flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-start gap-5"
          role="status"
          aria-live="polite"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
            <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#102A43]">
              Inquiry Submitted Successfully
            </h3>
            <p className="text-[#334E68] mt-1 text-sm sm:text-base leading-relaxed">
              Thank you for your inquiry. We will respond within 24 hours.
            </p>
            <div className="mt-5">
              <button
                type="button"
                onClick={handleReset}
                className="btn-outline text-xs py-2 px-5 border-emerald-300 text-emerald-800 hover:bg-emerald-100"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Global error banner */}
          {status === "error" && (
            <div
              className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 flex items-start gap-3"
              role="alert"
            >
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-sm">
                <p className="font-semibold text-red-800">Submission Error</p>
                <p className="mt-0.5">{errorMessage || "An unexpected error occurred. Please try again."}</p>
              </div>
            </div>
          )}

          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#334E68] mb-1.5"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Tariq Javed"
                disabled={status === "submitting"}
                className={`w-full px-4 py-3 border ${
                  errors.name ? "border-red-500 focus:ring-red-500" : "border-[#E2E8F0] focus:ring-blue-500"
                } rounded-lg text-[#334E68] focus:outline-none focus:ring-2 focus:border-transparent bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#334E68] mb-1.5"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@department.gov.pk"
                disabled={status === "submitting"}
                className={`w-full px-4 py-3 border ${
                  errors.email ? "border-red-500 focus:ring-red-500" : "border-[#E2E8F0] focus:ring-blue-500"
                } rounded-lg text-[#334E68] focus:outline-none focus:ring-2 focus:border-transparent bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Phone & Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[#334E68] mb-1.5"
              >
                Phone Number <span className="text-xs text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 300 1234567"
                disabled={status === "submitting"}
                className={`w-full px-4 py-3 border ${
                  errors.phone ? "border-red-500 focus:ring-red-500" : "border-[#E2E8F0] focus:ring-blue-500"
                } rounded-lg text-[#334E68] focus:outline-none focus:ring-2 focus:border-transparent bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed`}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-[#334E68] mb-1.5"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Tender inquiry, RFP scope, or procurement"
                disabled={status === "submitting"}
                className={`w-full px-4 py-3 border ${
                  errors.subject ? "border-red-500 focus:ring-red-500" : "border-[#E2E8F0] focus:ring-blue-500"
                } rounded-lg text-[#334E68] focus:outline-none focus:ring-2 focus:border-transparent bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed`}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
                  {errors.subject}
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#334E68] mb-1.5"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Provide tender title, required quantities, target submission deadline, and statutory terms..."
              disabled={status === "submitting"}
              className={`w-full px-4 py-3 border ${
                errors.message ? "border-red-500 focus:ring-red-500" : "border-[#E2E8F0] focus:ring-blue-500"
              } rounded-lg text-[#334E68] focus:outline-none focus:ring-2 focus:border-transparent bg-white transition-colors resize-y disabled:opacity-60 disabled:cursor-not-allowed`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  <span>Submitting inquiry...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
