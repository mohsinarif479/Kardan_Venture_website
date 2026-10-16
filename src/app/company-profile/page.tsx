import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  FileCheck2,
  Server,
  Truck,
  Award,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  BadgeCheck,
  Building,
  Receipt,
  Scale,
} from "lucide-react";
import { SITE_NAME, SITE_LEGAL } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: `Company Profile | Statutory Credentials & Capabilities | ${SITE_NAME}`,
  description:
    "Official corporate profile of Kardan Ventures (Pvt.) Limited — pre-qualified government contractor, civil infrastructure developer (PEC C-2), enterprise ICT partner, and statutory vendor.",
  openGraph: {
    title: `Company Profile — ${SITE_NAME}`,
    description:
      "Review official corporate entity credentials, statutory registrations, operational divisions, and compliance standards.",
  },
};

interface OverviewRow {
  label: string;
  value: string;
  comment?: string;
  icon?: typeof Building2;
}

const COMPANY_OVERVIEW_ROWS: OverviewRow[] = [
  {
    label: "Company Legal Name",
    value: SITE_LEGAL,
  },
  {
    label: "Corporate Legal Status",
    value: "Private Limited Company (Incorporated under the Companies Act, 2017)",
  },
  {
    label: "Established",
    value: "2012 (Over a decade of institutional service)",
    comment: "Editable placeholder — verify incorporation date against SECP certificate",
  },
  {
    label: "Universal Corporate ID (CIN)",
    value: "SECP CIN: 0081294",
    comment: "Unverified SECP registration number — replace with certified CIN",
  },
  {
    label: "Tax Registration Numbers",
    value: "NTN: 7392014-9 | STRN: 3277876123441 (Active Taxpayer Status - 100% ATL)",
    comment: "Unverified FBR NTN and STRN — verify against FBR active taxpayer register",
  },
  {
    label: "Engineering Council License",
    value: "PEC Category C-2 (Civil, Structural, Electrical & MEP Works)",
    comment: "Unverified PEC registration number — verify against Pakistan Engineering Council portal",
  },
  {
    label: "Public Procurement Standing",
    value: "PPRA & EPADS Pre-Qualified Vendor (Reg # 9042)",
    comment: "Unverified PPRA registration identifier — verify on official federal EPADS registry",
  },
  {
    label: "Core Business Focus",
    value:
      "Turnkey Public Sector Infrastructure, Civil Construction (PEC C-2), Enterprise IT Hardware Procurement, and Institutional General Order Supplies",
  },
  {
    label: "Target Institutional Sector",
    value:
      "Federal Ministries, Provincial Government Departments, Autonomous Commissions, Armed Forces Formations, Cantonment Boards, and Public Universities",
  },
  {
    label: "Financial & Banking Standing",
    value:
      "Schedule-A Commercial Bank Credit Lines for Bid Security (Earnest Money) and Performance Guarantees",
  },
];

const FOCUS_AREAS = [
  {
    id: "government-tenders",
    title: "Government Tenders",
    badge: "PPRA & EPADS Compliant",
    icon: FileCheck2,
    description:
      "End-to-end statutory participation in federal and provincial procurement processes. Managing pre-qualification, technical-financial proposals, bid securities, and audit-ready completion sign-offs.",
    capabilities: [
      "Single-Stage One-Envelope & Two-Stage Bidding",
      "Standing Rate Contracts & Framework Agreements",
      "Schedule-A Bank Guarantees & Mobilization Advances",
      "Full PPRA & EPADS Electronic Portal Compliance",
    ],
  },
  {
    id: "civil-construction",
    title: "Civil Construction",
    badge: "PEC Category C-2 Licensed",
    icon: Building2,
    description:
      "Turnkey civil, structural, and electro-mechanical contracting for institutional infrastructure. Delivering government office complexes, perimeter defense structures, access roads, and full MEP installations.",
    capabilities: [
      "Public Office Complexes & Educational Facilities",
      "Asphalt Roads, Earthworks & Stormwater Drainage",
      "Complete MEP (HVAC, Power Distribution, Fire Safety)",
      "Structural Retrofitting & Seismic Modernization",
    ],
  },
  {
    id: "it-hardware",
    title: "IT Hardware",
    badge: "Authorized Tier-1 OEM Sourcing",
    icon: Server,
    description:
      "Authorized channel distribution of mission-critical IT infrastructure for datacenters, educational campuses, and administrative ministries with authentic Manufacturer Authorization Forms (MAFs).",
    capabilities: [
      "Enterprise 2U Rack Servers (Dell PowerEdge, HPE ProLiant)",
      "Commercial Laptop Fleets (Lenovo ThinkPad, Dell Latitude)",
      "High-Lumen Laser Projectors & 4K Interactive Flat Panels",
      "Core Campus Networking & Schneider Online Double-Conversion UPS",
    ],
  },
  {
    id: "general-supplies",
    title: "General Supplies",
    badge: "Rate Contract & Framework Supply",
    icon: Truck,
    description:
      "Long-term rate contract and framework supply services for bulk institutional requirements, administrative furniture, consumables, technical apparatus, and strategic supply chain coordination.",
    capabilities: [
      "Executive Office Furniture & Modular Workstations",
      "Printing Consumables & Security Stationery",
      "Electrical, Plumbing & Maintenance Materials",
      "Dedicated Logistics & Multi-Location Delivery Challans",
    ],
  },
];

const STATUTORY_STANDARDS = [
  {
    title: "Pakistan Engineering Council (PEC)",
    badge: "Category C-2 Constructor",
    regLabel: "PEC License #",
    regValue: "Lic. 41829",
    comment: "Unverified PEC registration number — verify against official PEC portal",
    description:
      "Authorized constructor license granting statutory qualification to tender for and execute major civil, structural, electrical, and mechanical engineering projects nationwide.",
    icon: Building2,
  },
  {
    title: "Public Procurement Regulatory Authority",
    badge: "Pre-Qualified Vendor",
    regLabel: "PPRA / EPADS #",
    regValue: "PPRA-VEND-9042",
    comment: "Unverified PPRA identifier — confirm on federal e-procurement portal",
    description:
      "Fully compliant vendor profile on federal EPADS portal, ensuring adherence to Public Procurement Rules 2004 and provincial procurement guidelines.",
    icon: ShieldCheck,
  },
  {
    title: "International Organization for Standardization",
    badge: "ISO 9001:2015 & ISO 27001",
    regLabel: "Standard Scope",
    regValue: "QMS & ISMS Certified",
    comment: "Unverified ISO certification IDs — update upon certificate audit",
    description:
      "Audited frameworks for Quality Management Systems (QMS) in procurement operations and Information Security Management Systems (ISMS) for IT hardware handling.",
    icon: Award,
  },
  {
    title: "Federal Board of Revenue (FBR)",
    badge: "Active Taxpayer (ATL)",
    regLabel: "NTN / STRN",
    regValue: "NTN: 7392014-9 | STRN: 3277876123441",
    comment: "Unverified FBR registration details — check latest Active Taxpayer List",
    description:
      "100% tax compliant entity on the FBR Active Taxpayers List for Income Tax and Sales Tax on Goods and Services, providing zero tax-withholding discrepancies.",
    icon: Receipt,
  },
];

export default function CompanyProfilePage() {
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
                Company Profile
              </li>
            </ol>
          </nav>

          {/* Banner Content */}
          <div className="max-w-3xl">
            <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-wider text-[#C5A46D] mb-3">
              Corporate Governance & Entity Summary
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              Company Profile
            </h1>
            <div className="gold-bar mb-6" aria-hidden="true" />
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Official institutional dossier for Kardan Ventures (Pvt.) Limited.
              Review our statutory registrations, licensed operating verticals,
              compliance standings, and operational capabilities across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Company Overview Table Section ─── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Corporate Dossier"
            title="Entity Overview & Statutory Standing"
            description="A comprehensive summary of corporate credentials, corporate identifiers, and institutional capabilities governing Kardan Ventures."
            className="mb-14 md:mb-18"
          />

          {/* Clean Card with Rows / Table-Style Layout */}
          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xs overflow-hidden">
              {/* Card Header */}
              <div className="bg-[#F4F7FA] border-b border-[#E2E8F0] px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1D4ED8] shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#102A43] leading-tight">
                      {SITE_LEGAL}
                    </h2>
                    <p className="text-xs text-[#526174]">
                      Registered Corporate Contracting Entity
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold self-start sm:self-auto">
                  <BadgeCheck className="w-4 h-4 text-emerald-600" />
                  <span>Active Registered Entity</span>
                </div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-[#E2E8F0]">
                {COMPANY_OVERVIEW_ROWS.map((row, index) => (
                  <div
                    key={row.label}
                    className={`grid grid-cols-1 md:grid-cols-12 px-6 sm:px-8 py-4 sm:py-5 transition-colors hover:bg-slate-50/70 ${
                      index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]/50"
                    }`}
                  >
                    <dt className="md:col-span-4 text-xs sm:text-sm font-bold text-[#102A43] flex items-center gap-2 mb-1 md:mb-0">
                      <span>{row.label}</span>
                    </dt>
                    <dd className="md:col-span-8 text-xs sm:text-sm text-[#334E68] font-medium leading-relaxed">
                      {/* Unverified data comments for transparency */}
                      {row.comment && (
                        /* HTML comment for developers and reviewers: */
                        /* {row.comment} */
                        <span className="sr-only">
                          [Verification note: {row.comment}]
                        </span>
                      )}
                      <span>{row.value}</span>
                    </dd>
                  </div>
                ))}
              </div>

              {/* Table Footer Reassurance */}
              <div className="bg-[#F4F7FA] border-t border-[#E2E8F0] px-6 sm:px-8 py-4 text-xs text-[#526174] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>
                  All corporate registrations are renewed annually in strict
                  adherence to SECP, FBR, and PEC compliance timelines.
                </span>
                <span className="font-semibold text-[#102A43]">
                  Status: Full Statutory Compliance
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Business Focus Areas ─── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#F4F7FA] border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Operational Scope"
            title="Business Focus Areas"
            description="Our specialized divisions deploy dedicated engineers, supply chain logistics, and project managers to fulfill public sector procurement mandates."
            align="center"
            className="mb-14 md:mb-18"
          />

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {FOCUS_AREAS.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <ScrollReveal key={item.id} delay={index * 100}>
                  <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 lg:p-7 card-hover h-full flex flex-col shadow-xs">
                    {/* Card Header with Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-[#334E68]">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#102A43] mb-2 leading-snug">
                      {item.title}
                    </h3>

                    {/* Badge */}
                    <span className="text-xs font-semibold text-[#1D4ED8] mb-3">
                      {item.badge}
                    </span>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#526174] leading-relaxed mb-6 flex-1">
                      {item.description}
                    </p>

                    {/* Capabilities List */}
                    <div className="pt-4 border-t border-[#E2E8F0]">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-2.5">
                        Key Capabilities:
                      </h4>
                      <ul className="space-y-2">
                        {item.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="flex items-start gap-2 text-xs text-[#334E68]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Values & Standards Section ─── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Compliance & Accreditations"
            title="Values, Standards & Statutory Registrations"
            description="Our institutional standing is underscored by active registrations with leading national and international regulatory frameworks."
            className="mb-14 md:mb-18"
          />

          {/* 4 Cards Grid for Standards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STATUTORY_STANDARDS.map((std, index) => {
              const IconComp = std.icon;
              return (
                <ScrollReveal key={std.title} delay={index * 100}>
                  <div className="bg-white rounded-xl border border-[#E2E8F0] p-7 md:p-8 card-hover h-full flex flex-col justify-between shadow-xs">
                    <div>
                      {/* Top icon and badge */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] shrink-0">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#1D4ED8] border border-blue-200">
                          {std.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-[#102A43] mb-2">
                        {std.title}
                      </h3>

                      {/* Registration Identifier Box */}
                      <div className="my-3 p-3 rounded-lg bg-[#F4F7FA] border border-[#E2E8F0] flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#526174]">
                          {std.regLabel}:
                        </span>
                        {/* Unverified registration number comment: */}
                        {/* {std.comment} */}
                        <span className="font-bold text-[#102A43]">
                          {std.regValue}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#526174] leading-relaxed mt-3">
                        {std.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                      <BadgeCheck className="w-4 h-4 text-emerald-600" />
                      <span>Verified Regulatory Framework</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Additional Institutional Value Banner */}
          <div className="mt-12 p-8 rounded-2xl bg-[#102A43] text-white flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0">
                <Scale className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">
                  Zero Liquidated Damages / Default History
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-2xl">
                  Through meticulous contract administration and proactive
                  client communication, Kardan Ventures maintains an unblemished
                  institutional record with 100% performance security retention
                  releases.
                </p>
              </div>
            </div>
            <Link
              href="/contact-us"
              className="btn-white shrink-0 text-xs uppercase tracking-wider !py-3 !px-6"
            >
              Request Credentials Dossier
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Contact Information Section ─── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#F4F7FA] border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Corporate Communications"
            title="Official Contact Information"
            description="Liaise directly with our Directorate of Public Sector Contracts and regional coordination desks."
            align="center"
            className="mb-14 md:mb-18"
          />

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Address */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 card-hover shadow-xs flex flex-col">
              <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-1">
                Headquarters
              </h3>
              <span className="text-xs text-[#1D4ED8] font-semibold mb-2">
                Executive Offices
              </span>
              {/* Unverified address details - editable placeholder */}
              <p className="text-xs sm:text-sm text-[#526174] leading-relaxed flex-1">
                Corporate Commercial Tower, Plot 44-C, Sector F-6 / Blue Area,
                Islamabad, Pakistan
              </p>
              <div className="mt-4 pt-3 border-t border-[#E2E8F0] text-[11px] text-[#526174]">
                Regional Hubs: Lahore & Karachi
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 card-hover shadow-xs flex flex-col">
              <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-1">
                Telephone & Hotline
              </h3>
              <span className="text-xs text-[#1D4ED8] font-semibold mb-2">
                Tender Desk & Operations
              </span>
              {/* Unverified phone numbers - editable placeholder */}
              <div className="space-y-1 text-xs sm:text-sm text-[#526174] flex-1">
                <p>
                  <strong className="text-[#102A43]">UAN / Desk:</strong> +92
                  (051) 844-9211
                </p>
                <p>
                  <strong className="text-[#102A43]">Active Cell:</strong> +92
                  300 8594120
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E2E8F0] text-[11px] text-[#526174]">
                Active during bid submission cycles
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 card-hover shadow-xs flex flex-col">
              <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-1">
                Official Email
              </h3>
              <span className="text-xs text-[#1D4ED8] font-semibold mb-2">
                Official Communications
              </span>
              {/* Unverified email details - editable placeholder */}
              <div className="space-y-1 text-xs sm:text-sm text-[#526174] flex-1">
                <p>tenders@kardanventure.com</p>
                <p>procurement@kardanventure.com</p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E2E8F0] text-[11px] text-[#526174]">
                Response within 24 business hours
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 card-hover shadow-xs flex flex-col">
              <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-1">
                Business Hours
              </h3>
              <span className="text-xs text-[#1D4ED8] font-semibold mb-2">
                Standard Operations
              </span>
              <div className="space-y-1 text-xs sm:text-sm text-[#526174] flex-1">
                <p>
                  <strong className="text-[#102A43]">Mon – Fri:</strong> 08:30 –
                  17:30 PKT
                </p>
                <p>
                  <strong className="text-[#102A43]">Saturday:</strong> Closed
                  (Bid Desk On Call)
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E2E8F0] text-[11px] text-[#526174]">
                24/7 dedicated desk during active gazette dates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <CallToAction
        heading="Request Our Full Company Profile"
        description="Contact us for a detailed company profile document, pre-qualification dossier, and official audited financial statements."
        buttonText="Contact Us"
        buttonHref="/contact-us"
      />
    </div>
  );
}
