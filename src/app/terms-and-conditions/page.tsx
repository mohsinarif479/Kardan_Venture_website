import type { Metadata } from "next";
import Link from "next/link";
import {
  FileCheck,
  ChevronRight,
  ShieldAlert,
  Scale,
  Briefcase,
  AlertTriangle,
  Building2,
  Mail,
  FileText,
  Gavel,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { SITE_NAME, SITE_LEGAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms and Conditions governing the use of ${SITE_LEGAL} digital services, tender RFQ tools, and institutional procurement engagements.`,
};

export default function TermsAndConditionsPage() {
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
                Terms &amp; Conditions
              </li>
            </ol>
          </nav>

          <div className="gold-bar mb-4" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Statutory governance, commercial engagement frameworks, and institutional terms for {SITE_LEGAL}.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-300">
            <span className="inline-flex items-center gap-1.5 bg-[#1B3A5C] px-3 py-1.5 rounded-full text-slate-200">
              <Scale className="w-4 h-4 text-[#C5A46D]" /> Legal Framework
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
              These terms and conditions are a draft template. Please review and customize them according to your actual business operations, statutory procurement rules, and applicable laws.
            </p>
          </div>
        </div>

        {/* Terms Body */}
        <div className="space-y-12 text-[#334E68] leading-relaxed">
          {/* Section 1 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <FileCheck className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                1. Acceptance of Terms
              </h2>
            </div>
            <p className="mb-4">
              Welcome to the official digital portal of {SITE_LEGAL} (&ldquo;{SITE_NAME}&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By accessing, browsing, or utilizing this website (<code className="text-[#1D4ED8]">kardanventure.com</code>), including submitting requests for quotes (RFQs), downloading corporate capability dossiers, or utilizing procurement calculators, you acknowledge and agree to be bound by these Terms and Conditions.
            </p>
            <p className="mb-4">
              If you represent a government department, public enterprise, autonomous commission, or commercial entity, you represent and warrant that you hold full corporate authority to bind your organization to these terms. If you do not accept these terms without qualification, you must discontinue access to this site immediately.
            </p>
            {/* <!-- PLACEHOLDER: Verify with company: Specific electronic signature consent policy under Pakistan Electronic Transactions Ordinance 2002 --> */}
          </section>

          {/* Section 2 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                2. Corporate Services Description &amp; Engagement Scope
              </h2>
            </div>
            <p className="mb-4">
              {SITE_NAME} operates as an authorized government contractor, infrastructure constructor, and institutional procurement vendor. Our service scope featured on this website includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Public Sector Tender Participation:</strong> Technical and financial bidding pursuant to the Public Procurement Regulatory Authority (PPRA) and E-Pak Acquisition and Disposal System (EPADS) guidelines.
              </li>
              <li>
                <strong>Civil Infrastructure &amp; Works:</strong> Turnkey civil construction, MEP installations, and structural works under Pakistan Engineering Council (PEC) Category C-2 licensing.
              </li>
              <li>
                <strong>Enterprise IT Equipment Procurement:</strong> Tier-1 OEM supply of datacenter rack servers, commercial fleet laptops, high-lumen laser projectors, interactive flat panels, and network hardware.
              </li>
              <li>
                <strong>Institutional Supply Logistics:</strong> Turnkey corporate equipment, office automation, and rate contract execution for ministries and public institutions.
              </li>
            </ul>
            {/* <!-- PLACEHOLDER: Verify with company: Confirm exact PEC Category C-2 code sub-specializations (e.g. CE-01, CE-10, BC-01, EE-04) --> */}
          </section>

          {/* Section 3 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                3. Bidding &amp; Estimator Disclaimers
              </h2>
            </div>
            <div className="p-4 bg-[#F4F7FA] rounded-lg border border-[#E2E8F0] mb-4 text-sm text-[#334E68]">
              <strong className="text-[#102A43] block mb-1">Non-Binding Digital Estimates:</strong>
              Interactive features on this site, including the Tender Scope Estimator, equipment catalogs, and preliminary RFQ calculators, provide indicative budgetary approximations only. They do not constitute formal tender bids, binding price quotations, or legal offers under PPRA Rule 23 or contract law.
            </div>
            <p className="mb-4">
              Formal contractual relationships are established exclusively through:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Verified submission of sealed tender bids or EPADS digital bids with requisite Bid Bonds (Earnest Money).</li>
              <li>Issuance of formal Letters of Acceptance (LOA) or Purchase Orders by the procuring agency.</li>
              <li>Execution of bilateral contract agreements accompanied by bank Performance Guarantees.</li>
            </ol>
            {/* <!-- PLACEHOLDER: Verify with company: Statutory validity period for non-PPRA commercial quotations (e.g. 30 vs 60 days) --> */}
          </section>

          {/* Section 4 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                4. User &amp; Institutional Client Responsibilities
              </h2>
            </div>
            <p className="mb-4">
              When utilizing our digital forms, communicating through our procurement portal, or requesting tender dossiers, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide accurate, current, and authentic organizational information, including department affiliations, designations, and contact numbers.</li>
              <li>Refrain from transmitting fraudulent, defamatory, malicious, or technologically harmful code (including scripts, trojans, or automated scrapers).</li>
              <li>Maintain strict confidentiality of any non-public technical specifications, engineering drawings, or proprietary pricing schedules shared during bidding negotiations.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                5. Intellectual Property Rights
              </h2>
            </div>
            <p className="mb-4">
              All materials on this website—including company dossiers, logos, graphic marks, technical documentation, calculator logic, and project photography—are the exclusive intellectual property of {SITE_LEGAL} or its authorized licensors and are protected under the Copyright Ordinance 1962 and Trademarks Ordinance 2001 of Pakistan.
            </p>
            <p className="mb-4">
              Government procurement officers and authorized prospective clients are granted a revocable, non-exclusive license to download and print company capability dossiers solely for institutional evaluation and tender pre-qualification purposes. Any commercial reproduction, resale, or reverse engineering is strictly prohibited without prior written consent.
            </p>
            {/* <!-- PLACEHOLDER: Verify with company: Official registered trademark registration numbers for brand names and logotypes --> */}
          </section>

          {/* Section 6 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                6. Limitation of Liability
              </h2>
            </div>
            <p className="mb-4">
              To the fullest extent permissible by applicable law:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                {SITE_LEGAL}, its directors, officers, engineers, and affiliates shall not be liable for any direct, indirect, incidental, punitive, or consequential damages arising from website access, downtime, delay in transmission, or unreceived electronic RFQ submissions.
              </li>
              <li>
                We do not warrant that digital portal functions will operate uninterrupted or error-free, or that server components will be free of malicious payloads beyond standard institutional cybersecurity protocols.
              </li>
              <li>
                Procurement agencies are advised to confirm time-sensitive tender submissions through physical or direct email channels before formal bid closing deadlines.
              </li>
            </ul>
            {/* <!-- PLACEHOLDER: Verify with company: Liability cap clause (e.g. limited to aggregate fees paid in preceding 12 months) --> */}
          </section>

          {/* Section 7 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                7. Warranties &amp; Statutory Disclaimers
              </h2>
            </div>
            <p className="mb-4">
              This website and all published informational resources are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied.
            </p>
            <p className="mb-4">
              Contractual warranties regarding delivered equipment, civil works, or IT servers are governed strictly by the executed contract agreement and applicable OEM warranties:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Enterprise Hardware:</strong> Covered by Tier-1 OEM Manufacturer Authorization letters, standard 3-to-5-year onsite warranties, and Acceptance Test Procedures (ATP).
              </li>
              <li>
                <strong>Civil Infrastructure:</strong> Governed by PEC defect liability periods (typically 12 months post-handover) and certified engineer inspections.
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                8. Indemnification
              </h2>
            </div>
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless {SITE_LEGAL}, its directors, employees, and authorized agents against any claims, losses, damages, liabilities, costs, or expenses (including reasonable legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your violation of these Terms and Conditions or applicable statutory laws.</li>
              <li>Unauthorized distribution of confidential bidding documents obtained via this portal.</li>
              <li>Willful misconduct or technological interference with our digital infrastructure.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <Gavel className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                9. Governing Law &amp; Dispute Resolution
              </h2>
            </div>
            <p className="mb-4">
              These Terms and Conditions shall be governed by, construed, and enforced exclusively in accordance with the substantive laws of the Islamic Republic of Pakistan, without regard to conflict of law principles.
            </p>
            <p className="mb-4">
              Any dispute, controversy, or claim arising out of or relating to website usage, RFQs, or pre-qualification inquiries that cannot be resolved amicably shall be subject to the exclusive jurisdiction of the competent courts of Islamabad Capital Territory, Pakistan.
            </p>
            <div className="p-4 bg-[#F4F7FA] rounded-lg border border-[#E2E8F0] text-sm text-[#526174]">
              <strong className="text-[#102A43]">Public Sector Tenders:</strong> Disputes concerning formally executed public sector tender contracts shall be resolved strictly pursuant to the dispute resolution procedures specified in the respective contract agreement, PEC Standard Bidding Documents, and the Arbitration Act 1940.
            </div>
            {/* <!-- PLACEHOLDER: Verify with company: Specific seat of arbitration (Islamabad) and appointing authority for sole arbitrator --> */}
          </section>

          {/* Section 10 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <h2 className="text-2xl font-bold text-[#102A43] mb-4 tracking-tight">
              10. Modifications &amp; Severability
            </h2>
            <p className="mb-4">
              We reserve the right to revise, amend, or replace these Terms and Conditions at any time. Any changes take effect immediately upon publication on this website. Continued use of our digital platform constitutes acceptance of revised terms.
            </p>
            <p className="text-sm text-[#526174]">
              If any provision of these Terms is deemed unlawful, invalid, or unenforceable by an arbitrator or competent court, that provision shall be severable and shall not affect the validity of the remaining provisions.
            </p>
          </section>

          {/* Section 11: Contact */}
          <section className="bg-[#F4F7FA] p-6 sm:p-8 rounded-xl border border-[#E2E8F0]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <Building2 className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                11. Contact Legal &amp; Contracts Desk
              </h2>
            </div>
            <p className="mb-6 text-sm text-[#526174]">
              For contract inquiries, institutional authorizations, or clarification regarding these terms, please contact:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-[#E2E8F0]">
                <Building2 className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#102A43] font-semibold">Legal &amp; Statutory Compliance</strong>
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
                  <strong className="block text-[#102A43] font-semibold">Direct Correspondence</strong>
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
            {/* <!-- PLACEHOLDER: Verify with company: Specific designated company secretary or legal counsel contact details --> */}
          </section>
        </div>
      </main>
    </div>
  );
}
