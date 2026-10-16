import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  FileCheck2,
  ShieldCheck,
  Truck,
  ClipboardList,
  Handshake,
  Building2,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  LucideIcon,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import CallToAction from '@/components/CallToAction';
import { SERVICES_OVERVIEW } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive corporate and institutional services: government tenders, PPRA-compliant procurement, IT hardware supply, civil infrastructure, and B2G collaboration.',
};

/**
 * Mapping of Lucide icons matching the icon keys in SERVICES_OVERVIEW
 */
const ICON_MAP: Record<string, LucideIcon> = {
  FileCheck2,
  ShieldCheck,
  Truck,
  ClipboardList,
  Handshake,
  Building2,
};

/**
 * Enhanced service metadata containing professional Unsplash photography,
 * detailed capability points, and institutional classification tags.
 */
interface ServiceDetail {
  slug: string;
  badge: string;
  image: string;
  imageAlt: string;
  detailedParagraph: string;
  capabilities: string[];
}

const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'government-tenders': {
    slug: 'government-tenders',
    badge: 'Statutory Tender Procurement',
    image:
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Legal and technical review of government tender bids and procurement documentation',
    detailedParagraph:
      'We provide complete, end-to-end management for public sector procurement and government tenders. From preliminary pre-qualification dossiers and technical-financial bid structuring to mobilization bank guarantees and audit-ready final deliveries, our seasoned team ensures strict compliance with PPRA/EPADS guidelines and public sector standards.',
    capabilities: [
      'Single-stage, two-stage, and EPADS electronic bidding document preparation',
      'Statutory bid bond structuring, mobilization guarantees, and institutional bank lines',
      'Pre-qualification dossiers aligned with PPRA rules and client criteria',
      'Audit-ready delivery verification, milestone compliance, and completion certification',
    ],
  },
  'institutional-procurement': {
    slug: 'institutional-procurement',
    badge: 'PPRA & EPADS Compliant',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Institutional corporate headquarters and public sector procurement administration',
    detailedParagraph:
      'Designed specifically for public sector organizations, ministries, and corporate institutions, our procurement support services streamline large-scale acquisitions while maintaining total statutory integrity. We assist departments with price benchmarking, transparent tender scoping, and compliant vendor execution.',
    capabilities: [
      'Comprehensive PPRA and provincial procurement regulatory compliance assurance',
      'Annual rate contracting and multi-department framework agreements',
      'Rigorous vendor validation, quality vetting, and price benchmarking',
      'Transparent tax documentation, verified NTN/STRN invoicing, and audit records',
    ],
  },
  'supply-delivery': {
    slug: 'supply-delivery',
    badge: 'Tier-1 OEM Partnerships',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Enterprise IT hardware logistics and nationwide delivery operations',
    detailedParagraph:
      'We manage resilient, high-volume supply chain operations delivering enterprise IT hardware, specialized technical equipment, and corporate consumables. Through direct alliances with Tier-1 original equipment manufacturers, we guarantee authentic, certified products backed by official warranties and rapid dispatch.',
    capabilities: [
      'Enterprise datacenter servers, fleet laptops, laser projectors & IFPs',
      'Authorized Tier-1 OEM channel partnerships with Manufacturer Authorization (MAF)',
      'Multi-destination nationwide logistics with insured, secure transit',
      'Acceptance Test Procedure (ATP) sign-offs and 3-5 year onsite warranty support',
    ],
  },
  'project-coordination': {
    slug: 'project-coordination',
    badge: 'Milestone Accountability',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Project and contract coordination team overseeing milestone delivery',
    detailedParagraph:
      'Successful multi-stakeholder initiatives require relentless coordination and rigorous milestone governance. Our project management office oversees every facet of contract delivery, aligning engineering workflows, regulatory approvals, and financial disbursements to ensure on-time, budget-conscious completion.',
    capabilities: [
      'Critical path scheduling, milestone tracking, and dynamic risk mitigation',
      'On-site supervisory engineers and certified project directors',
      'Multi-stakeholder executive reporting dashboards and progress documentation',
      'ISO 9001:2015 quality assurance and occupational health & safety governance',
    ],
  },
  'b2g-collaboration': {
    slug: 'b2g-collaboration',
    badge: 'Strategic B2G Engagement',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Business-to-government collaboration and institutional partnership meeting',
    detailedParagraph:
      'We bridge the gap between private enterprise capabilities and public sector objectives through structured B2G engagement models. By understanding public sector operational workflows and procurement regulations, we facilitate transparent joint initiatives, consortiums, and long-term institutional agreements.',
    capabilities: [
      'Public-private engagement frameworks designed for public institutions',
      'Institutional needs assessment, technical scoping, and feasibility analysis',
      'Multi-firm consortium structuring and joint venture governance',
      'Long-term institutional service level agreements and policy compliance advisory',
    ],
  },
  'corporate-services': {
    slug: 'corporate-services',
    badge: 'PEC Category C-2 Licensed',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Corporate infrastructure, civil contracting, and facility modernization',
    detailedParagraph:
      'Our corporate and institutional services vertical covers civil infrastructure works, facility refurbishments, electrical and mechanical installations, and general order supplies. Licensed under PEC Category C-2, we provide turnkey physical and operational upgrades for government offices and commercial headquarters.',
    capabilities: [
      'PEC Category C-2 licensed civil, structural, and public facility construction',
      'Turnkey office refurbishment, modern interior fit-outs, and MEP installations',
      'Bulk general order institutional supplies and recurring consumable replenishment',
      'Preventive facility maintenance agreements and post-handover operational support',
    ],
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* ─── 1. Hero Banner ─── */}
      <section className="bg-[#102A43] py-20 md:py-28 relative overflow-hidden">
        {/* Subtle ambient lighting effect */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.18),transparent_60%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-white/70">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded px-1"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4 text-white/40" />
              </li>
              <li>
                <span className="text-white font-medium px-1" aria-current="page">
                  Our Services
                </span>
              </li>
            </ol>
          </nav>

          {/* Title & Subtitle */}
          <div className="max-w-3xl">
            <div className="gold-bar mb-4" aria-hidden="true" />
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Our Services
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              Specialized corporate capabilities spanning statutory government tender execution, institutional procurement management, enterprise hardware delivery, and turnkey infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. Services Grid (Alternating Sections) ─── */}
      <div>
        {SERVICES_OVERVIEW.map((service, index) => {
          const detail = SERVICE_DETAILS[service.slug] || {
            slug: service.slug,
            badge: 'Institutional Service',
            image:
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
            imageAlt: service.title,
            detailedParagraph: service.description,
            capabilities: [
              'Dedicated institutional account management and milestone oversight',
              'Strict adherence to statutory procurement and audit criteria',
              'Comprehensive quality verification and warranty support',
              'Timely progress reports and transparent documentation',
            ],
          };

          const IconComponent = ICON_MAP[service.icon] || Building2;
          const isEven = index % 2 === 0;
          const bgClass = isEven ? 'bg-white' : 'bg-[#F4F7FA]';

          return (
            <section
              key={service.slug}
              id={service.slug}
              className={`py-20 md:py-28 ${bgClass} border-b border-[#E2E8F0] last:border-b-0 overflow-hidden`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  
                  {/* Image Column: Alternates left on even indices, right on odd */}
                  <div className={`w-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <ScrollReveal>
                      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E2E8F0] img-zoom aspect-[4/3] bg-slate-100">
                        <Image
                          src={detail.image}
                          alt={detail.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          unoptimized
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-[#102A43]/50 via-transparent to-transparent pointer-events-none"
                          aria-hidden="true"
                        />
                        
                        {/* Overlay Badge */}
                        <div className="absolute top-4 left-4 bg-[#102A43]/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 shadow-md">
                          <span className="text-xs font-semibold text-white tracking-wide">
                            {detail.badge}
                          </span>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Content Column: Alternates right on even indices, left on odd */}
                  <div className={`flex flex-col ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <ScrollReveal delay={150}>
                      {/* Icon & Category Tag */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center flex-shrink-0 shadow-xs">
                          <IconComponent className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                          Capability Vertical 0{index + 1}
                        </span>
                      </div>

                      {/* Gold Accent Bar */}
                      <div className="gold-bar mb-4" aria-hidden="true" />

                      {/* Title */}
                      <h2 className="text-2xl md:text-3xl font-bold text-[#102A43] tracking-tight leading-tight">
                        {service.title}
                      </h2>

                      {/* Detailed Description */}
                      <p className="mt-4 text-base md:text-lg text-[#526174] leading-relaxed">
                        {detail.detailedParagraph}
                      </p>

                      {/* Capabilities Bullet List */}
                      <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#334E68] mb-4">
                          Core Capabilities & Deliverables
                        </h3>
                        <ul className="space-y-3">
                          {detail.capabilities.map((cap, capIdx) => (
                            <li key={capIdx} className="flex items-start gap-3">
                              <CheckCircle2
                                className="w-5 h-5 text-[#1D4ED8] flex-shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span className="text-sm md:text-base text-[#334E68] font-medium leading-normal">
                                {cap}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Inquire Button */}
                      <div className="mt-8 pt-4">
                        <Link
                          href="/contact-us"
                          className="btn-primary"
                        >
                          <span>Request Proposal for this Service</span>
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </ScrollReveal>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ─── 3. CTA Banner ─── */}
      <CallToAction
        heading="Ready to Discuss Your Requirements?"
        description="Our team is ready to understand your needs and propose the right solution."
        buttonText="Get in Touch"
        buttonHref="/contact-us"
      />
    </div>
  );
}
