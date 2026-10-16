import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Eye,
  Target,
  FileSearch,
  Layers,
  Sparkles,
  Award,
  ChevronRight,
  Building2,
} from "lucide-react";
import { APPROACH_STEPS, SITE_NAME } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import ProcessTimeline from "@/components/ProcessTimeline";
import ScrollReveal from "@/components/ScrollReveal";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: `Our Approach | Structured Procurement Methodology | ${SITE_NAME}`,
  description:
    "Explore the rigorous 4-stage methodology Kardan Ventures employs to evaluate, structure, execute, and deliver turnkey institutional public sector contracts with audit-ready accountability.",
  openGraph: {
    title: `Our Approach — ${SITE_NAME}`,
    description:
      "A structured, multi-stage methodology designed for rigorous public sector compliance, transparent execution, and verifiable quality.",
  },
};

interface StepDeepDive {
  step: number;
  stepNumber: string;
  title: string;
  subtitle: string;
  summary: string;
  detailedParagraph: string;
  keyDeliverables: string[];
  complianceHighlight: string;
  icon: typeof FileSearch;
}

const DEEP_DIVE_STEPS: StepDeepDive[] = [
  {
    step: 1,
    stepNumber: "01",
    title: "Understand Requirements",
    subtitle: "BoQ Scrutiny, Technical Mapping & Statutory Alignment",
    summary:
      "Every institutional engagement begins with an exhaustive analysis of the tender scope, client objectives, and governing procurement rules.",
    detailedParagraph:
      "Our bid engineering desk conducts an item-by-item scrutiny of published tender notices, technical specifications, and Bills of Quantities (BoQs). We cross-reference every tender parameter against Public Procurement Regulatory Authority (PPRA) and Pakistan Engineering Council (PEC) guidelines. By conducting preliminary pre-bid site inspections, clarifying technical addenda, and verifying exact OEM compatibility, we ensure total conformance before drafting a single line of the proposal.",
    keyDeliverables: [
      "Item-by-item BoQ compliance matrix",
      "Statutory PPRA / EPADS eligibility verification",
      "Pre-bid site condition inspection & site assessment report",
      "Risk analysis and statutory exemption mapping",
    ],
    complianceHighlight: "Zero Ambiguity Specification Review",
    icon: FileSearch,
  },
  {
    step: 2,
    stepNumber: "02",
    title: "Review the Opportunity",
    subtitle: "Internal Due Diligence, Financial Structuring & OEM Alignment",
    summary:
      "A rigorous internal governance protocol validates feasibility, credit facilities, risk factors, and tier-1 vendor authorization.",
    detailedParagraph:
      "Before submitting technical or financial bids, our senior procurement committee convenes for an internal review gate. We evaluate commercial viabilities, establish price-performance equilibrium, and align official Manufacturer Authorization Forms (MAFs) with certified Tier-1 technology partners including Dell, HPE, Lenovo, and Cisco. Simultaneously, our treasury desk arranges Earnest Money and Bid Security bank guarantees through Schedule-A commercial banks to guarantee seamless bid standing.",
    keyDeliverables: [
      "Financial viability & price-performance modeling",
      "Schedule-A commercial bank bid security mobilization",
      "OEM Manufacturer Authorization Forms (MAF) securing",
      "Two-envelope technical and financial documentation packaging",
    ],
    complianceHighlight: "Schedule-A Commercial Bank Guarantee Backing",
    icon: Layers,
  },
  {
    step: 3,
    stepNumber: "03",
    title: "Coordinate & Execute",
    subtitle: "Milestone Accountability, Supply Chain Logistics & Site Handover",
    summary:
      "Execution proceeds under structured project management frameworks with transparent milestones and joint departmental inspections.",
    detailedParagraph:
      "Upon contract award, dedicated project coordinators oversee deployment according to predefined critical path methods. Whether managing the logistics of enterprise rack servers and commercial laptop fleets or executing PEC Category C-2 civil works, we maintain real-time supply chain tracking and rigorous quality control. Joint physical inspections (Factory/Site Acceptance Testing) are conducted alongside government inspection committees to ensure audit-proof delivery challans and milestone sign-offs.",
    keyDeliverables: [
      "Dedicated project coordination desk & critical path schedules",
      "Direct OEM channel customs clearance and serial-tracked delivery",
      "Joint Factory / Site Acceptance Testing (FAT/SAT) protocols",
      "Engineer-certified milestone delivery challans and audit documentation",
    ],
    complianceHighlight: "Audit-Ready Inspection Sign-Offs",
    icon: Building2,
  },
  {
    step: 4,
    stepNumber: "04",
    title: "Maintain Professional Communication",
    subtitle: "Post-Handover Support, Warranty Governance & SLA Enforcement",
    summary:
      "Our commitment extends beyond final delivery with ongoing client communication, statutory warranty tracking, and audit closure support.",
    detailedParagraph:
      "Following formal handover, Kardan Ventures upholds comprehensive after-sales service and statutory support. We administer manufacturer warranties ranging from 3 to 5 years, deploy resident technical engineers where required, and facilitate timely quarterly maintenance audits. Our contract closeout desk ensures all performance guarantees and retention moneys are systematically released in full compliance with public sector financial audit standards.",
    keyDeliverables: [
      "Official 3-to-5 year OEM warranty certificates & SLA contracts",
      "24/7 emergency escalation desk for mission-critical installations",
      "Final retention release and audit clearance documentation",
      "Enduring institutional liaison for subsequent framework agreements",
    ],
    complianceHighlight: "100% Performance Guarantee Release Record",
    icon: ShieldCheck,
  },
];

export default function OurApproachPage() {
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
                Our Approach
              </li>
            </ol>
          </nav>

          {/* Banner Content */}
          <div className="max-w-3xl">
            <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-wider text-[#C5A46D] mb-3">
              Institutional Methodology
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              Our Approach
            </h1>
            <div className="gold-bar mb-6" aria-hidden="true" />
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              A structured, multi-stage methodology designed for rigorous public
              sector compliance, transparent milestone execution, and verifiable
              quality across government tenders, civil infrastructure, and
              enterprise ICT deployments.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Detailed Process Section ─── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Process Timeline Section Header */}
          <SectionHeading
            label="Structured Workflow"
            title="The 4-Stage Execution Methodology"
            description="Our disciplined process guarantees compliance with statutory procurement rules, eliminates contractual ambiguity, and ensures predictable milestone delivery."
            className="mb-16 md:mb-20"
          />

          {/* 4-Step Process Timeline Component */}
          <div className="mb-24 md:mb-32">
            <ProcessTimeline steps={APPROACH_STEPS} />
          </div>

          {/* ─── Expanded Descriptions for Each Step (Alternating Layout) ─── */}
          <div className="space-y-20 md:space-y-28 pt-8 border-t border-[#E2E8F0]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                Deep Dive Methodology
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#102A43] mt-2">
                Operational Breakdown by Milestone
              </h2>
              <div className="gold-bar mx-auto mt-3" aria-hidden="true" />
            </div>

            {DEEP_DIVE_STEPS.map((item, index) => {
              const isEven = index % 2 === 1;
              const IconComponent = item.icon;

              return (
                <ScrollReveal key={item.step}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Visual / Highlight Box (5 cols) */}
                    <div
                      className={`lg:col-span-5 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="relative bg-[#F4F7FA] rounded-2xl border border-[#E2E8F0] p-7 md:p-9 shadow-xs overflow-hidden">
                        {/* Giant background step number */}
                        <span
                          className="absolute -top-4 -right-3 text-8xl font-black text-[#1D4ED8]/10 select-none pointer-events-none"
                          aria-hidden="true"
                        >
                          {item.stepNumber}
                        </span>

                        <div className="relative z-10">
                          {/* Step Badge */}
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1D4ED8] text-xs font-bold uppercase tracking-wider mb-5">
                            <IconComponent className="w-4 h-4 text-[#1D4ED8]" />
                            <span>Stage {item.stepNumber} Focus</span>
                          </div>

                          <h3 className="text-xl md:text-2xl font-bold text-[#102A43] mb-3">
                            {item.title}
                          </h3>

                          <p className="text-sm text-[#526174] leading-relaxed mb-6">
                            {item.summary}
                          </p>

                          {/* Compliance Highlight Pill */}
                          <div className="pt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-semibold text-[#102A43]">
                            <Sparkles className="w-4 h-4 text-[#C5A46D] shrink-0" />
                            <span>{item.complianceHighlight}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Column (7 cols) */}
                    <div
                      className={`lg:col-span-7 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="space-y-5">
                        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                          <span className="w-6 h-[2px] bg-[#1D4ED8]" />
                          <span>Detailed Methodology</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-[#102A43] tracking-tight">
                          {item.subtitle}
                        </h3>

                        <p className="text-base text-[#526174] leading-relaxed">
                          {item.detailedParagraph}
                        </p>

                        {/* Deliverables Checklist */}
                        <div className="pt-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-3">
                            Key Activities & Deliverables:
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {item.keyDeliverables.map((deliverable) => (
                              <li
                                key={deliverable}
                                className="flex items-start gap-2.5 text-xs md:text-sm text-[#334E68]"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Commitment Section ─── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#F4F7FA] border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <SectionHeading
            label="Our Core Principles"
            title="Our Commitment to Excellence"
            description="Every institutional collaboration is anchored in foundational values that safeguard public resources, ensure regulatory compliance, and uphold professional integrity."
            align="center"
            className="mb-14 md:mb-18"
          />

          {/* 3 Commitment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Transparency */}
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 card-hover h-full flex flex-col text-center items-center shadow-xs">
                <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] mb-6 shadow-xs">
                  <Eye className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#102A43] mb-3">
                  Transparency
                </h3>
                <p className="text-sm text-[#526174] leading-relaxed">
                  Open-book adherence to statutory PPRA rules, clear billing
                  schedules, authentic OEM paperwork, and upfront communication
                  at every stage of the procurement cycle.
                </p>
                <div className="mt-6 pt-4 border-t border-[#E2E8F0] w-full text-xs font-semibold text-[#1D4ED8]">
                  Statutory Rule Compliance
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Accountability */}
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 card-hover h-full flex flex-col text-center items-center shadow-xs">
                <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] mb-6 shadow-xs">
                  <ShieldCheck className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#102A43] mb-3">
                  Accountability
                </h3>
                <p className="text-sm text-[#526174] leading-relaxed">
                  Uncompromising ownership from technical bid submission to final
                  audit clearance. Backed by Schedule-A commercial bank
                  guarantees and a flawless performance history.
                </p>
                <div className="mt-6 pt-4 border-t border-[#E2E8F0] w-full text-xs font-semibold text-[#1D4ED8]">
                  Zero-Default Record
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Consistency */}
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 card-hover h-full flex flex-col text-center items-center shadow-xs">
                <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] mb-6 shadow-xs">
                  <Target className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#102A43] mb-3">
                  Consistency
                </h3>
                <p className="text-sm text-[#526174] leading-relaxed">
                  Rigid quality management across civil works, enterprise IT
                  deployments, and general supplies. We deliver the identical
                  high standard regardless of contract complexity.
                </p>
                <div className="mt-6 pt-4 border-t border-[#E2E8F0] w-full text-xs font-semibold text-[#1D4ED8]">
                  ISO 9001:2015 Standards
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Institutional Trust Note */}
          <div className="mt-14 p-6 md:p-8 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#C5A46D] shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#102A43]">
                  Recognized Institutional Track Record
                </h4>
                <p className="text-xs sm:text-sm text-[#526174] mt-0.5">
                  Over a decade of public sector project delivery across federal
                  ministries, autonomous authorities, and military engineering
                  formations.
                </p>
              </div>
            </div>
            <Link
              href="/company-profile"
              className="btn-outline shrink-0 text-xs uppercase tracking-wider !py-2.5 !px-5"
            >
              View Company Profile
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Call to Action ─── */}
      <CallToAction
        heading="Let Us Understand Your Requirements"
        description="Every project begins with a conversation. Reach out to our engineering and procurement desk to discuss your upcoming institutional specifications or published tender opportunities."
        buttonText="Start a Conversation"
        buttonHref="/contact-us"
      />
    </div>
  );
}
