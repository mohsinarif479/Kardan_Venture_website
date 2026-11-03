import React from "react";
import Link from "next/link";
import {
  Award,
  MessageSquare,
  BadgeCheck,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import CoreCapabilities from "@/components/CoreCapabilities";
import ValueRibbon from "@/components/ValueRibbon";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import CallToAction from "@/components/CallToAction";
import ScrollReveal from "@/components/ScrollReveal";
import EquipmentShowcase from "@/components/EquipmentShowcase";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import TenderEstimator from "@/components/TenderEstimator";
import ComplianceShowcase from "@/components/ComplianceShowcase";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICES_OVERVIEW, VALUE_PROPS } from "@/lib/constants";

// Icon mapping for VALUE_PROPS
const VALUE_PROP_ICONS: Record<string, LucideIcon> = {
  Award,
  MessageSquare,
  BadgeCheck,
  Users,
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. Hero Banner matching mockup with institutional backdrop and mint highlights */}
      <HeroSlider />

      {/* 2. Core Business & Capabilities 4-Card Grid matching mockup */}
      <CoreCapabilities />

      {/* 3. Dark Forest Teal Brand Value Ribbon matching mockup */}
      <ValueRibbon />

      {/* 4. Company Introduction (Split Layout) */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Corporate Architecture Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 img-zoom aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] w-full bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="Kardan Ventures Corporate Office"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062322]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0D9488] text-white mb-2 shadow-sm">
                    Institutional Heritage
                  </span>
                  <p className="text-sm font-semibold text-white/95">
                    15+ Years of Proven Public Sector Bidding & Contract Delivery
                  </p>
                </div>
              </div>

              {/* Right Column: Institutional Content */}
              <div className="flex flex-col items-start">
                <SectionHeading
                  label="About Kardan Ventures"
                  title="A Trusted Partner for Institutional Business & Contracting"
                  align="left"
                />

                <p className="mt-6 text-base md:text-lg text-[#526174] leading-relaxed">
                  Kardan Ventures (Private) Limited is a registered corporate contractor and technology supplier dedicated to delivering excellence in public sector tenders, structured procurement, and multi-sector supplies across Pakistan. We bridge institutional demands with reliable operational capability, strict statutory compliance, and transparent accountability at every milestone.
                </p>

                {/* Standing Highlights */}
                <div className="mt-8 flex flex-wrap gap-4 w-full sm:w-auto">
                  <div className="inline-flex items-center gap-3 bg-white px-5 py-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-[#0D9488] shrink-0">
                      <Clock className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="text-left">
                      <span className="block text-sm font-bold text-[#0A2E2C]">
                        15+ Years Industry Standing
                      </span>
                      <span className="block text-xs text-[#526174]">
                        Proven Public Sector Track Record
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-3 bg-white px-5 py-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-[#0D9488] shrink-0">
                      <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="text-left">
                      <span className="block text-sm font-bold text-[#0A2E2C]">
                        PPRA Pre-Qualified Supplier
                      </span>
                      <span className="block text-xs text-[#526174]">
                        PEC Category C-2 Licensed Contractor
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/about-us" className="btn-outline">
                    <span>Learn More About Us</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>

                  <Link href="/our-directors" className="btn-primary">
                    <span>Meet Our Directors</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Enterprise IT Equipment Showcase */}
      <EquipmentShowcase />

      {/* 6. Executed Government Projects Portfolio */}
      <ProjectsShowcase />

      {/* 7. Interactive Tender Scope & BoQ Estimator */}
      <TenderEstimator />

      {/* 8. Comprehensive Services Overview */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="Our Services"
              title="Comprehensive Procurement & Engineering Solutions"
              description="Professional services designed specifically for federal ministries, provincial authorities, and autonomous institutions."
            />
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_OVERVIEW.map((service, index) => (
              <ScrollReveal key={service.slug} delay={index * 70} className="h-full">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  iconName={service.icon}
                  index={index}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Why Choose Us (Value Pillars) */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="Why Choose Us"
              title="Built on Trust and Institutional Excellence"
              description="Our commitment to institutional standards, flawless documentation, and dependable execution."
            />
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUE_PROPS.map((prop, index) => {
              const IconComponent = VALUE_PROP_ICONS[prop.icon] ?? Award;
              return (
                <ScrollReveal key={prop.title} delay={index * 90} className="h-full">
                  <div className="bg-white rounded-2xl p-8 border border-slate-200 card-hover flex flex-col justify-start h-full">
                    <div
                      className="w-12 h-12 rounded-xl bg-[#0A3837] text-white flex items-center justify-center shrink-0 mb-6 shadow-xs"
                      aria-hidden="true"
                    >
                      <IconComponent className="w-6 h-6 text-[#2DD4BF]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A2E2C] mb-3">
                      {prop.title}
                    </h3>
                    <p className="text-base text-[#526174] leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Our Approach (Process Timeline) */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="Our Approach"
              title="A Structured Path to Reliable Contract Execution"
              description="A transparent 4-stage delivery methodology from tender requirements to milestone handover."
            />
          </ScrollReveal>

          <div className="mt-14">
            <ScrollReveal delay={120}>
              <ProcessTimeline />
            </ScrollReveal>
          </div>

          <div className="mt-12 text-center">
            <ScrollReveal delay={200}>
              <Link href="/our-approach" className="btn-outline inline-flex items-center gap-2">
                <span>Explore Full Methodology</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 11. Statutory Accreditations & Licenses Grid */}
      <ComplianceShowcase />

      {/* 12. Institutional Procurement FAQs */}
      <FaqAccordion />

      {/* 13. Full-width Call To Action Banner */}
      <CallToAction
        heading="Let's Build an Enduring Institutional Partnership"
        description="Connect with Kardan Ventures (Private) Limited to discuss tender opportunities, technical BoQs, and enterprise hardware supply contracts."
        buttonText="Contact Our Tender Desk"
        buttonHref="/contact-us"
      />

    </div>
  );
}
