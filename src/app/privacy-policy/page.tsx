import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  ChevronRight,
  Lock,
  Eye,
  FileText,
  Database,
  Share2,
  Bell,
  HelpCircle,
  Building2,
  Mail,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { SITE_NAME, SITE_LEGAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Official Privacy Policy and data protection practices of ${SITE_LEGAL}. Learn how we safeguard institutional client and partner information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ─── Hero Banner ─── */}
      <section className="bg-[#102A43] text-white py-14 sm:py-20 border-b border-[#1B3A5C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-slate-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-200 focus-visible:ring-1 focus-visible:ring-white rounded"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </li>
              <li className="text-[#C5A46D] font-medium" aria-current="page">
                Privacy Policy
              </li>
            </ol>
          </nav>

          <div className="gold-bar mb-4" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Data governance, confidential tender handling, and institutional privacy standards for {SITE_LEGAL}.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-300">
            <span className="inline-flex items-center gap-1.5 bg-[#1B3A5C] px-3 py-1.5 rounded-full text-slate-200">
              <Shield className="w-4 h-4 text-[#C5A46D]" /> Institutional Compliance
            </span>
            <span>Effective Date: October 2024</span>
            <span className="hidden sm:inline">•</span>
            <span>Last Updated: October 2024</span>
          </div>
        </div>
      </section>

      {/* ─── Main Content Container ─── */}
      <main className="max-w-4xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        {/* Template Disclaimer Box */}
        <div
          role="alert"
          className="mb-12 p-5 sm:p-6 rounded-xl border border-amber-200 bg-amber-50/90 text-amber-950 flex items-start gap-4 shadow-sm"
        >
          <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5 shrink-0" aria-hidden="true" />
          <div className="text-sm leading-relaxed">
            <p className="font-semibold text-amber-900 mb-1">
              Statutory Template Notice
            </p>
            <p className="text-amber-800">
              This privacy policy is a draft template. Please review and customize it according to your actual data practices and applicable laws.
            </p>
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-12 text-[#334E68] leading-relaxed">
          {/* Section 1 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                1. Introduction &amp; Corporate Commitment
              </h2>
            </div>
            <p className="mb-4">
              {SITE_LEGAL} (&ldquo;{SITE_NAME}&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is an institutional government contractor and corporate procurement enterprise incorporated under the Companies Act 2017 in Pakistan. We deliver public infrastructure, turnkey engineering, enterprise ICT deployments, and statutory tender execution.
            </p>
            <p className="mb-4">
              We respect the confidentiality of government institutions, public sector procuring bodies, enterprise clients, and individual visitors. This Privacy Policy outlines how we collect, process, store, and safeguard data gathered through our corporate website, tender request portals, and formal business correspondence.
            </p>
            {/* <!-- PLACEHOLDER: Verify with company: Specific designated Data Protection Officer (DPO) registration details --> */}
            <div className="p-4 bg-[#F4F7FA] rounded-lg border border-[#E2E8F0] text-sm text-[#526174]">
              <strong className="text-[#102A43]">Scope:</strong> This policy applies to digital visitors of <code className="text-[#1D4ED8]">kardanventure.com</code>, respondents to requests for quotes (RFQs), government liaison officers, and commercial supply chain partners.
            </div>
          </section>

          {/* Section 2 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                2. Information Collection
              </h2>
            </div>
            <p className="mb-4">
              We collect information to facilitate transparent procurement, pre-qualification reviews, and formal tender negotiations. Information is obtained through the following channels:
            </p>

            <h3 className="text-lg font-semibold text-[#102A43] mt-6 mb-2">
              A. Information You Voluntarily Provide
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>Corporate &amp; Contact Details:</strong> Full name, institutional email address, department or ministry name, official telephone number, and physical office location provided when submitting an RFQ or contact inquiry.
              </li>
              <li>
                <strong>Tender &amp; Procurement Specifications:</strong> Bill of Quantities (BOQ), Tender Reference Numbers, procurement scopes, equipment configurations, and project delivery schedules.
              </li>
              <li>
                <strong>Verification Documentation:</strong> Pre-qualification credentials, NTN/STRN tax numbers, and corporate authorizations transmitted during contract mobilization.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-[#102A43] mt-6 mb-2">
              B. Automatically Collected Technical Data
            </h3>
            <p className="mb-3">
              When navigating our digital portal, standard non-identifying telemetry is logged to maintain infrastructure integrity:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Internet Protocol (IP) address and approximate geographical locality.</li>
              <li>Browser type, operating system version, and device characteristics.</li>
              <li>Referring URLs, pages visited, duration of visit, and technical error logs.</li>
            </ul>
            {/* <!-- PLACEHOLDER: Verify with company: Confirm whether server logs retain IP addresses for 30, 90, or 180 days before anonymization --> */}
          </section>

          {/* Section 3 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <Database className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                3. Use of Information
              </h2>
            </div>
            <p className="mb-4">
              All information collected is processed strictly for lawful corporate operations, public sector bidding compliance, and customer service fulfillment:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0]">
                <h4 className="font-bold text-[#102A43] mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" /> Tender Execution
                </h4>
                <p className="text-sm text-[#526174]">
                  Preparing compliant bid dossiers, tender pricing matrices, technical capability reports, and submission under PPRA/EPADS mandates.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0]">
                <h4 className="font-bold text-[#102A43] mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" /> Contract Administration
                </h4>
                <p className="text-sm text-[#526174]">
                  Executing purchase orders, coordinating supply logistics, issuing OEM warranty documentation, and managing project milestones.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0]">
                <h4 className="font-bold text-[#102A43] mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" /> Regulatory Auditing
                </h4>
                <p className="text-sm text-[#526174]">
                  Maintaining statutory books and records under the Federal Board of Revenue (FBR), Pakistan Engineering Council (PEC), and SECP guidelines.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0]">
                <h4 className="font-bold text-[#102A43] mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" /> Security &amp; Fraud Prevention
                </h4>
                <p className="text-sm text-[#526174]">
                  Protecting web infrastructure, verifying quote authenticity, preventing automated portal abuse, and safeguarding confidential project data.
                </p>
              </div>
            </div>
            {/* <!-- PLACEHOLDER: Verify with company: Confirm whether marketing newsletters or automated promotional mailers are currently dispatched --> */}
            <p className="text-sm text-[#526174]">
              We do not sell, rent, lease, or monetize institutional or personal data under any circumstances.
            </p>
          </section>

          {/* Section 4 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                4. Data Security &amp; Storage Protocols
              </h2>
            </div>
            <p className="mb-4">
              {SITE_LEGAL} enforces technical, administrative, and physical security measures to shield corporate and institutional data from unauthorized access, accidental alteration, disclosure, or destruction.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Encryption in Transit:</strong> All website traffic is protected using Transport Layer Security (TLS 1.3) with 256-bit cryptographic ciphers.
              </li>
              <li>
                <strong>Role-Based Access Control:</strong> Access to sensitive tender documents, client files, and engineering drawings is restricted to authorized personnel with authenticated access rights.
              </li>
              <li>
                <strong>Audit Logs:</strong> System activities, administrative access, and data modifications are logged for ongoing security auditing.
              </li>
            </ul>
            {/* <!-- PLACEHOLDER: Verify with company: ISO 27001 audit cycle dates, physical backup frequencies, and encrypted cloud storage provider locations --> */}
            <p className="text-sm text-[#526174] italic">
              While we deploy institutional-grade defensive controls, no digital transmission method over the Internet is 100% impenetrable. We encourage clients to exercise caution when transmitting classified documents via public email.
            </p>
          </section>

          {/* Section 5 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <Share2 className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                5. Third-Party Services &amp; Disclosures
              </h2>
            </div>
            <p className="mb-4">
              We may share information with reputable third parties only under strict confidentiality agreements and to the minimum extent necessary for contractual execution:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Statutory Bodies &amp; Procuring Entities:</strong> Federal and provincial government departments, evaluation committees, PPRA, SECP, and FBR as legally mandated for bidding and tax compliance.
              </li>
              <li>
                <strong>Financial Institutions:</strong> Scheduled commercial banks in Pakistan for the issuance of bid bonds, mobilization guarantees, performance securities, and letters of credit.
              </li>
              <li>
                <strong>OEM Hardware Partners:</strong> Authorized Tier-1 manufacturers (e.g. Dell, HPE, Lenovo) strictly to issue Manufacturer Authorization Forms (MAFs), serial warranties, and firmware access.
              </li>
              <li>
                <strong>Technical Infrastructure Providers:</strong> Secure cloud hosting, DNS management, and email infrastructure providers bound by non-disclosure and security standards.
              </li>
            </ul>
            {/* <!-- PLACEHOLDER: Verify with company: Complete sub-processor directory and cloud hosting server jurisdictions --> */}
          </section>

          {/* Section 6 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                6. Data Retention &amp; Disposal
              </h2>
            </div>
            <p className="mb-4">
              We retain business correspondence, procurement inquiries, and project records in accordance with the corporate statutory requirements of Pakistan:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Tender &amp; Executed Contracts:</strong> Retained for a minimum statutory period of seven (7) years following project closure, in compliance with public sector auditing and tax governance requirements.
              </li>
              <li>
                <strong>General Inquiries:</strong> Unsuccessful or exploratory inquiries submitted via our contact forms are reviewed periodically and securely purged if no business relationship is established.
              </li>
            </ul>
            {/* <!-- PLACEHOLDER: Verify with company: Electronic document shredding and sanitization standards (e.g. DoD 5220.22-M or NIST 800-88) --> */}
          </section>

          {/* Section 7 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                7. Your Rights &amp; Data Choices
              </h2>
            </div>
            <p className="mb-4">
              Subject to applicable corporate, banking, and public procurement regulations, you hold the following rights regarding your personal and institutional records:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Right of Access:</strong> Request a copy of the specific contact details and organizational data we retain on your behalf.</li>
              <li><strong>Right of Rectification:</strong> Request correction of inaccurate, outdated, or incomplete corporate records.</li>
              <li><strong>Right to Restrict or Delete:</strong> Request the deletion of general contact details where retention is not mandated by ongoing contractual obligations or statutory audit rules.</li>
            </ul>
            <p className="text-sm text-[#526174]">
              To submit a verification or access request, please contact our Compliance Desk using the contact details below.
            </p>
          </section>

          {/* Section 8 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <Bell className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                8. Cookies &amp; Tracking Technologies
              </h2>
            </div>
            <p className="mb-4">
              Our website uses cookies and similar storage tokens to ensure secure authentication, preserve your RFQ basket sessions, and monitor system performance.
            </p>
            <p className="mb-4">
              For comprehensive details regarding cookie categories, expiry intervals, and browser management instructions, please review our dedicated{" "}
              <Link
                href="/cookie-policy"
                className="text-[#1D4ED8] font-semibold underline underline-offset-4 hover:text-[#1e40af] focus-visible:ring-1 focus-visible:ring-[#1D4ED8] rounded"
              >
                Cookie Policy
              </Link>.
            </p>
          </section>

          {/* Section 9 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <h2 className="text-2xl font-bold text-[#102A43] mb-4 tracking-tight">
              9. Policy Updates
            </h2>
            <p className="mb-4">
              We may revise this Privacy Policy periodically to reflect technological enhancements, operational changes, or new regulatory standards from the SECP, PPRA, or Ministry of Information Technology.
            </p>
            <p className="text-sm text-[#526174]">
              The updated date will be reflected at the top of this document. We recommend periodic review to remain informed of our data protection standards.
            </p>
          </section>

          {/* Section 10: Contact */}
          <section className="bg-[#F4F7FA] p-6 sm:p-8 rounded-xl border border-[#E2E8F0]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <Building2 className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                10. Contact Our Compliance Office
              </h2>
            </div>
            <p className="mb-6 text-sm text-[#526174]">
              For questions regarding this policy, corporate privacy standards, or data protection practices, please contact our legal desk:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-[#E2E8F0]">
                <Building2 className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#102A43] font-semibold">Corporate Head Office</strong>
                  <span className="text-[#526174] leading-relaxed">
                    {SITE_LEGAL}<br />
                    Corporate Commercial Tower, Plot 44-C<br />
                    Blue Area / Sector F-6, Islamabad, Pakistan
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-[#E2E8F0]">
                <Mail className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#102A43] font-semibold">Electronic Mail</strong>
                  <span className="text-[#526174] block">
                    Legal Desk: <a href="mailto:legal@kardanventure.com" className="text-[#1D4ED8] hover:underline">legal@kardanventure.com</a>
                  </span>
                  <span className="text-[#526174] block">
                    Tenders Desk: <a href="mailto:tenders@kardanventure.com" className="text-[#1D4ED8] hover:underline">tenders@kardanventure.com</a>
                  </span>
                  <span className="text-[#526174] block">
                    Phone: <a href="tel:+92518449211" className="text-[#1D4ED8] hover:underline">+92 (051) 844-9211</a>
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- PLACEHOLDER: Verify with company: Specific designated privacy officer direct contact extension --> */}
          </section>
        </div>
      </main>
    </div>
  );
}
