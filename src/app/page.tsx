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
      
      {/* 1. Hero Slider with High Contrast & Dual CTAs */}
      <HeroSlider />

      {/* 2. Company Introduction (split layout) */}
      <section className="py-20 md:py-28 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Tall image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E2E8F0] img-zoom aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="Professional corporate office environment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Right Column: Content */}
              <div className="flex flex-col items-start">
                <SectionHeading
                  label="About Kardan Ventures"
                  title="A Professional Partner for Institutional Business"
                  align="left"
                />

                <p className="mt-6 text-base md:text-lg text-[#526174] leading-relaxed">
                  Kardan Ventures Private Limited is an institutional contractor and corporate partner dedicated to delivering excellence in public sector tenders, structured procurement, and multi-sector supplies. We bridge institutional demands with reliable operational capability, strict statutory compliance, and transparent accountability at every milestone.
                </p>

                {/* Corporate Standing Highlights */}
                <div className="mt-8 flex flex-wrap gap-4 w-full sm:w-auto">
                  <div className="inline-flex items-center gap-3 bg-white px-5 py-3.5 rounded-xl border border-[#E2E8F0] shadow-xs">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1D4ED8] shrink-0">
                      <Clock className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="text-left">
                      <span className="block text-sm font-bold text-[#102A43]">
                        15+ Years of Industry Standing
                      </span>
                      <span className="block text-xs text-[#526174]">
                        Proven Public Sector Track Record
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-3 bg-white px-5 py-3.5 rounded-xl border border-[#E2E8F0] shadow-xs">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1D4ED8] shrink-0">
                      <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="text-left">
                      <span className="block text-sm font-bold text-[#102A43]">
                        PPRA Pre-Qualified Vendor
                      </span>
                      <span className="block text-xs text-[#526174]">
                        PEC Category C-2 Licensed Constructor
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/about-us" className="btn-outline">
                    <span>Learn More About Us</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Services Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              label="Our Services"
              title="Comprehensive Business Solutions"
              description="Professional services designed for institutional and government sector requirements."
            />
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_OVERVIEW.map((service, index) => (
              <ScrollReveal key={service.slug} delay={index * 80} className="h-full">
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

      {/* 4. Tier-1 Enterprise IT Equipment Showcase */}
      <EquipmentShowcase />

      {/* 5. Executed Government Projects Portfolio */}
      <ProjectsShowcase />

      {/* 6. Interactive Tender Scope & BoQ Estimator */}
      <TenderEstimator />

      {/* 7. Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              label="Why Choose Us"
              title="Built on Trust and Professional Excellence"
              description="Our commitment to institutional standards and dependable execution."
            />
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUE_PROPS.map((prop, index) => {
              const IconComponent = VALUE_PROP_ICONS[prop.icon] ?? Award;
              return (
                <ScrollReveal key={prop.title} delay={index * 100} className="h-full">
                  <div className="bg-[#F4F7FA] rounded-xl p-8 border border-[#E2E8F0] card-hover flex flex-col justify-start h-full">
                    <div
                      className="w-12 h-12 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center shrink-0 mb-6 shadow-xs"
                      aria-hidden="true"
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#102A43] mb-3">
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

      {/* 8. Our Approach Preview */}
      <section className="py-20 md:py-28 bg-[#F4F7FA] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              label="Our Approach"
              title="A Structured Path to Reliable Results"
              description="A transparent 4-stage delivery methodology from tender requirements to milestone handover."
            />
          </ScrollReveal>

          <div className="mt-14">
            <ScrollReveal delay={150}>
              <ProcessTimeline />
            </ScrollReveal>
          </div>

          <div className="mt-12 text-center">
            <ScrollReveal delay={250}>
              <Link href="/our-approach" className="btn-outline inline-flex items-center gap-2">
                <span>Explore Full Methodology</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 9. Statutory Accreditations & Compliance Grid */}
      <ComplianceShowcase />

      {/* 10. Institutional Procurement FAQs */}
      <FaqAccordion />

      {/* 11. Full-width Call To Action Banner */}
      <CallToAction
        heading="Let's Build a Strong Business Relationship"
        description="Connect with Kardan Ventures Private Limited to discuss your institutional, civil, or IT hardware requirements."
        buttonText="Contact Our Tender Desk"
        buttonHref="/contact-us"
      />

    </div>
  );
}
