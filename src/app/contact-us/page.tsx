import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { SITE_NAME, SITE_LEGAL } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: `Contact Us | Tender Desk & Departmental Liaison | ${SITE_NAME}`,
  description:
    "Get in touch with Kardan Ventures (Pvt.) Limited for official government tender inquiries, institutional procurement requirements, and consortium partnerships.",
  openGraph: {
    title: `Contact Us — ${SITE_NAME}`,
    description:
      "Direct communication channel for public sector procurement officers, tender notices, and project collaborations.",
  },
};

export default function ContactUsPage() {
  return (
    <div className="bg-white text-[#334E68] min-h-screen">
      {/* ─── Hero Banner ─── */}
      <section className="bg-[#102A43] bg-gradient-to-b from-[#102A43] via-[#163656] to-[#102A43] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#1B3A5C] relative overflow-hidden">
        {/* Subtle background ambient graphic */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,78,216,0.15),transparent_60%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-slate-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded px-1"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-500">
                <ChevronRight className="w-3.5 h-3.5 inline" />
              </li>
              <li className="text-white font-medium" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>

          {/* Banner Content */}
          <div className="max-w-3xl">
            <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-wider text-[#C5A46D] mb-3">
              Official Inquiries & Coordination Desk
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              Contact Us
            </h1>
            <div className="gold-bar mb-6" aria-hidden="true" />
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Direct institutional communication for government procurement
              officers, tender RFQs, technical specification reviews, and joint
              venture inquiries. Our bid engineering team responds within 24
              business hours.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Contact Section ─── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* ── Left Column: Contact Info Cards (5 Cols) ── */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                  Direct Liaison
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#102A43] mt-2 mb-3">
                  Get in Touch with Our Team
                </h2>
                <p className="text-sm text-[#526174] leading-relaxed">
                  Connect with our Directorate of Public Sector Contracts for
                  bid coordination, capability verification, or urgent tender
                  inquiries.
                </p>
              </div>

              {/* Card 1: Address */}
              <div className="bg-[#F4F7FA] rounded-xl border border-[#E2E8F0] p-6 card-hover shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] shrink-0">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#102A43]">
                    Corporate Headquarters
                  </h3>
                  {/* Unverified contact detail - editable placeholder */}
                  {/* Address: Verify against official registered office records */}
                  <p className="text-xs sm:text-sm text-[#526174] leading-relaxed">
                    Corporate Commercial Tower, Plot 44-C, Sector F-6 / Blue
                    Area, Islamabad, Pakistan
                  </p>
                  <p className="text-xs text-[#1D4ED8] font-medium pt-1">
                    Regional Coordination: Lahore & Karachi
                  </p>
                </div>
              </div>

              {/* Card 2: Phone */}
              <div className="bg-[#F4F7FA] rounded-xl border border-[#E2E8F0] p-6 card-hover shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] shrink-0">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#102A43]">
                    Telephone & Tender Hotline
                  </h3>
                  {/* Unverified contact detail - editable placeholder */}
                  {/* Phone: Verify official UAN and emergency bid desk numbers */}
                  <div className="text-xs sm:text-sm text-[#526174] space-y-1">
                    <p>
                      <strong className="text-[#102A43]">Head Office UAN:</strong>{" "}
                      +92 (051) 844-9211
                    </p>
                    <p>
                      <strong className="text-[#102A43]">Emergency Tender Cell:</strong>{" "}
                      +92 300 8594120
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 pt-1">
                    Monitored continuously during active gazette bid deadlines
                  </p>
                </div>
              </div>

              {/* Card 3: Email */}
              <div className="bg-[#F4F7FA] rounded-xl border border-[#E2E8F0] p-6 card-hover shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] shrink-0">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#102A43]">
                    Official Email Addresses
                  </h3>
                  {/* Unverified contact detail - editable placeholder */}
                  {/* Email: Verify official company domain emails */}
                  <div className="text-xs sm:text-sm text-[#526174] space-y-1">
                    <p>
                      <strong className="text-[#102A43]">Tender Desk:</strong>{" "}
                      <a
                        href="mailto:tenders@kardanventure.com"
                        className="text-[#1D4ED8] hover:underline"
                      >
                        tenders@kardanventure.com
                      </a>
                    </p>
                    <p>
                      <strong className="text-[#102A43]">Procurement:</strong>{" "}
                      <a
                        href="mailto:procurement@kardanventure.com"
                        className="text-[#1D4ED8] hover:underline"
                      >
                        procurement@kardanventure.com
                      </a>
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 pt-1">
                    Direct routing to bid engineering coordinators
                  </p>
                </div>
              </div>

              {/* Card 4: Operating Hours */}
              <div className="bg-[#F4F7FA] rounded-xl border border-[#E2E8F0] p-6 card-hover shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] shrink-0">
                  <Clock className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#102A43]">
                    Operating Hours
                  </h3>
                  <div className="text-xs sm:text-sm text-[#526174] space-y-1">
                    <p>
                      <strong className="text-[#102A43]">Monday – Friday:</strong>{" "}
                      08:30 – 17:30 PKT
                    </p>
                    <p>
                      <strong className="text-[#102A43]">Saturday:</strong> By
                      Appointment (Bid Desk Active)
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 pt-1">
                    Sunday & Gazetted Holidays: Closed
                  </p>
                </div>
              </div>

              {/* Governance & Privacy Notice */}
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-start gap-3 text-xs text-[#334E68]">
                <ShieldCheck className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                <span>
                  All communications and tender documents submitted to{" "}
                  <strong>{SITE_LEGAL}</strong> are handled under strict
                  institutional confidentiality and statutory procurement
                  safeguards.
                </span>
              </div>
            </div>

            {/* ── Right Column: Official Inquiry ContactForm (7 Cols) ── */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-7 sm:p-9 md:p-10 shadow-xs">
                <div className="mb-8 pb-5 border-b border-[#E2E8F0]">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-1.5">
                    Departmental Communications
                  </span>
                  <h2 className="text-2xl font-bold text-[#102A43]">
                    Send Us a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-[#526174] mt-1.5 leading-relaxed">
                    Submit your procurement requirements, tender reference IDs,
                    or consortium inquiries. Our technical evaluation team will
                    review and respond promptly.
                  </p>
                </div>

                {/* Interactive ContactForm Component */}
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Map Placeholder Section ─── */}
      <section className="pb-20 md:pb-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
              Location & Access
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#102A43] mt-1">
              Office Location
            </h2>
          </div>

          {/* Light gray box placeholder — do not fabricate location */}
          <div className="bg-[#F4F7FA] border-2 border-dashed border-[#CBD5E1] rounded-2xl p-10 md:p-14 text-center flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-14 h-14 rounded-full bg-slate-200/80 flex items-center justify-center text-[#526174] mb-4">
              <MapPin className="w-7 h-7 text-[#102A43]" aria-hidden="true" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#102A43] mb-1">
              Corporate Headquarters Facility
            </h3>
            <p className="text-sm font-semibold text-[#1D4ED8] mb-2">
              Map location will be added here
            </p>
            <p className="text-xs text-[#526174] max-w-md mx-auto leading-relaxed">
              Interactive map embed and GPS coordinates will be published upon
              finalization of the commercial office building directory. Please
              refer to the physical address in the contact section above for
              scheduled departmental visits.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
