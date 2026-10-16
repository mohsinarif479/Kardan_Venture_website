import type { Metadata } from "next";
import Link from "next/link";
import {
  Cookie,
  ChevronRight,
  ShieldCheck,
  SlidersHorizontal,
  Layers,
  HelpCircle,
  Building2,
  Mail,
  AlertCircle,
} from "lucide-react";
import { SITE_LEGAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie Policy for ${SITE_LEGAL}. Learn how cookies, local session storage, and analytics tokens are utilized across our digital platform.`,
};

export default function CookiePolicyPage() {
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
                Cookie Policy
              </li>
            </ol>
          </nav>

          <div className="gold-bar mb-4" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Cookie Policy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Transparent disclosure of digital tracking, session persistence, and cookie governance for {SITE_LEGAL}.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-300">
            <span className="inline-flex items-center gap-1.5 bg-[#1B3A5C] px-3 py-1.5 rounded-full text-slate-200">
              <Cookie className="w-4 h-4 text-[#C5A46D]" /> Session &amp; Privacy Control
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
              This cookie policy is a draft template. Please review and customize it according to your actual website technology stack and applicable regulations.
            </p>
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-12 text-[#334E68] leading-relaxed">
          {/* Section 1 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                1. What Are Cookies?
              </h2>
            </div>
            <p className="mb-4">
              Cookies are small text data files transferred to your computer, tablet, or mobile browser when accessing web pages. They permit web servers to recognize your device across multiple page visits, facilitate navigation, preserve session configurations, and verify security credentials.
            </p>
            <p className="mb-4">
              Alongside HTTP cookies, modern web platforms may utilize complementary browser technologies such as <code className="text-[#1D4ED8] bg-[#F4F7FA] px-1.5 py-0.5 rounded">localStorage</code> and <code className="text-[#1D4ED8] bg-[#F4F7FA] px-1.5 py-0.5 rounded">sessionStorage</code> to store client-side state without transmitting data over every network packet.
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <Layers className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                2. How We Use Cookies
              </h2>
            </div>
            <p className="mb-4">
              {SITE_LEGAL} uses cookies and client storage strictly for functional, security, and analytical purposes. We do not engage in behavioral advertising, third-party data tracking networks, or commercial profile monetization.
            </p>
            <p className="mb-4">
              Cookies enable us to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Maintain your active session when using interactive procurement estimators and tender scope calculators.</li>
              <li>Preserve your selected items in the Tender RFQ Basket between page views.</li>
              <li>Detect and prevent automated spam submissions and malicious denial-of-service attempts.</li>
              <li>Understand aggregated traffic patterns to optimize server delivery speed and mobile accessibility.</li>
            </ul>
            {/* <!-- PLACEHOLDER: Verify with company: Confirm whether server uses custom session cookie or relies solely on stateless Next.js JWT tokens --> */}
          </section>

          {/* Section 3 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                3. Categories of Cookies Used
              </h2>
            </div>

            <div className="space-y-6">
              {/* Category A */}
              <div className="p-5 rounded-xl border border-[#E2E8F0] bg-[#F4F7FA]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-[#102A43]">
                    A. Strictly Necessary &amp; Essential Cookies
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-[#102A43] text-white rounded">
                    Mandatory
                  </span>
                </div>
                <p className="text-sm text-[#526174] mb-3">
                  These cookies are foundational to the operation of the website and cannot be deactivated in our systems. They are established in response to actions requested by you, such as setting privacy preferences, navigating between pages, or submitting an RFQ.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#cbd7e6] text-[#102A43] font-semibold">
                        <th className="py-2 pr-4">Cookie / Key</th>
                        <th className="py-2 pr-4">Purpose</th>
                        <th className="py-2 pr-4">Provider</th>
                        <th className="py-2">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8F0] text-[#526174]">
                      <tr>
                        <td className="py-2 pr-4 font-mono font-medium text-[#102A43]">__kv_rfq_basket</td>
                        <td className="py-2 pr-4">Persists selected procurement equipment items for tender RFQ generation</td>
                        <td className="py-2 pr-4">kardanventure.com</td>
                        <td className="py-2">Session / Local</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-mono font-medium text-[#102A43]">__kv_csrf_token</td>
                        <td className="py-2 pr-4">Protects against Cross-Site Request Forgery on contact and tender forms</td>
                        <td className="py-2 pr-4">kardanventure.com</td>
                        <td className="py-2">Session</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Category B */}
              <div className="p-5 rounded-xl border border-[#E2E8F0] bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-[#102A43]">
                    B. Functional &amp; Preference Cookies
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-[#1D4ED8] text-white rounded">
                    Functional
                  </span>
                </div>
                <p className="text-sm text-[#526174] mb-3">
                  These allow the website to remember choices you make (such as preferred view modes, calculation parameters, or completed modal dismissals) to deliver enhanced functionality.
                </p>
                {/* <!-- PLACEHOLDER: Verify with company: Specific UI preference cookie expiration parameters --> */}
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#cbd7e6] text-[#102A43] font-semibold">
                        <th className="py-2 pr-4">Cookie / Key</th>
                        <th className="py-2 pr-4">Purpose</th>
                        <th className="py-2 pr-4">Provider</th>
                        <th className="py-2">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8F0] text-[#526174]">
                      <tr>
                        <td className="py-2 pr-4 font-mono font-medium text-[#102A43]">__kv_notice_seen</td>
                        <td className="py-2 pr-4">Remembers dismissal of the top announcement and tender update banners</td>
                        <td className="py-2 pr-4">kardanventure.com</td>
                        <td className="py-2">30 Days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Category C */}
              <div className="p-5 rounded-xl border border-[#E2E8F0] bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-[#102A43]">
                    C. Performance &amp; Analytics Cookies
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-slate-600 text-white rounded">
                    Telemetry
                  </span>
                </div>
                <p className="text-sm text-[#526174] mb-3">
                  These cookies help us understand how public sector visitors interact with our website by collecting aggregated, non-personally identifiable traffic metrics, page load speeds, and error occurrences.
                </p>
                {/* <!-- PLACEHOLDER: Verify with company: Confirm whether Google Analytics 4, Cloudflare Web Analytics, or a self-hosted telemetry engine is used --> */}
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#cbd7e6] text-[#102A43] font-semibold">
                        <th className="py-2 pr-4">Cookie / Key</th>
                        <th className="py-2 pr-4">Purpose</th>
                        <th className="py-2 pr-4">Provider</th>
                        <th className="py-2">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8F0] text-[#526174]">
                      <tr>
                        <td className="py-2 pr-4 font-mono font-medium text-[#102A43]">_cfuvid / __cf_bm</td>
                        <td className="py-2 pr-4">Cloudflare security token to manage inbound rate limits and bot traffic</td>
                        <td className="py-2 pr-4">Cloudflare / Edge CDN</td>
                        <td className="py-2">30 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                4. Managing &amp; Disabling Cookies
              </h2>
            </div>
            <p className="mb-4">
              You possess complete control over your browser&rsquo;s cookie settings. Most web browsers automatically accept cookies, but you can modify your configuration to decline cookies, receive prompt warnings, or purge existing stored files.
            </p>
            <p className="mb-4">
              To adjust settings for your specific web browser:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Third-Party Cookies.
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Settings &gt; Cookies and Site Permissions &gt; Manage and Delete Cookies.
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Enhanced Tracking Protection / Cookies.
              </li>
              <li>
                <strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Prevent Cross-Site Tracking / Block All Cookies.
              </li>
            </ul>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-sm text-amber-900">
              <strong className="font-semibold block mb-1">Impact of Disabling Cookies:</strong>
              Please note that disabling strictly necessary cookies or clearing local storage may cause the Tender RFQ portal, estimator calculations, and contact submission tokens to lose state or require manual re-entry.
            </div>
          </section>

          {/* Section 5 */}
          <section className="border-b border-[#E2E8F0] pb-10">
            <h2 className="text-2xl font-bold text-[#102A43] mb-4 tracking-tight">
              5. Updates to This Cookie Policy
            </h2>
            <p className="mb-4">
              We may revise this Cookie Policy as new digital tools, server-side caching mechanisms, or statutory directives are introduced. The effective revision date will always be designated at the top of this page.
            </p>
          </section>

          {/* Section 6: Contact */}
          <section className="bg-[#F4F7FA] p-6 sm:p-8 rounded-xl border border-[#E2E8F0]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#1D4ED8]">
                <Building2 className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] tracking-tight">
                6. Contact Regarding Cookies
              </h2>
            </div>
            <p className="mb-6 text-sm text-[#526174]">
              For technical inquiries or regulatory questions concerning our cookie handling and digital storage:
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
                  <strong className="block text-[#102A43] font-semibold">Electronic Support</strong>
                  <span className="text-[#526174] block">
                    Privacy Desk: <a href="mailto:privacy@kardanventure.com" className="text-[#1D4ED8] hover:underline">privacy@kardanventure.com</a>
                  </span>
                  <span className="text-[#526174] block">
                    Support: <a href="mailto:procurement@kardanventure.com" className="text-[#1D4ED8] hover:underline">procurement@kardanventure.com</a>
                  </span>
                  <span className="text-[#526174] block">
                    Phone: <a href="tel:+92518449211" className="text-[#1D4ED8] hover:underline">+92 (051) 844-9211</a>
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- PLACEHOLDER: Verify with company: Specific webmaster technical contact email --> */}
          </section>
        </div>
      </main>
    </div>
  );
}
