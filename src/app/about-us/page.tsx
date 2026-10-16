import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Target,
  Eye,
  Heart,
  Quote,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Award,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import CallToAction from '@/components/CallToAction';
import { SITE_LEGAL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Discover Kardan Ventures (Pvt.) Limited — an established corporate partner for government tender execution, institutional procurement, and enterprise turnkey infrastructure.',
};

export default function AboutUsPage() {
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
                  About Us
                </span>
              </li>
            </ol>
          </nav>

          {/* Title & Subtitle */}
          <div className="max-w-3xl">
            <div className="gold-bar mb-4" aria-hidden="true" />
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              About Kardan Ventures
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              A pre-qualified institutional contractor delivering reliable business operations, statutory tender governance, and enterprise-grade procurement solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. Company Overview ─── */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Split layout: Image Left */}
            <ScrollReveal className="w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E2E8F0] img-zoom aspect-[4/3] bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80"
                  alt="Kardan Ventures corporate headquarters and institutional management team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  unoptimized
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#102A43]/40 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-white/60 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1D4ED8] flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#102A43] uppercase tracking-wider">
                        {SITE_LEGAL}
                      </p>
                      <p className="text-xs text-[#526174]">
                        Corporate Contracting & Turnkey Institutional Solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Split layout: Content Right */}
            <ScrollReveal delay={150}>
              <div className="flex flex-col">
                <SectionHeading
                  label="Company Overview"
                  title="A Dedicated Corporate Partner for Institutional Growth"
                  align="left"
                  className="mb-6"
                />

                <div className="space-y-4 text-base md:text-lg text-[#526174] leading-relaxed">
                  <p>
                    {SITE_LEGAL} is an established corporate enterprise and institutional contractor specialized in fulfilling public sector tenders, complex engineering requirements, and mission-critical equipment procurement. We provide public bodies, ministries, and corporate institutions with a trustworthy, capable partner built upon transparent governance and flawless execution.
                  </p>

                  <p>
                    Rooted in adherence to the Pakistan Public Procurement Regulatory Authority (PPRA) and EPADS guidelines, our operations guarantee rigorous compliance at every stage of the contracting lifecycle. From initial pre-qualification dossiers and technical bidding to milestone bank guarantees and final audit verifications, we eliminate execution bottlenecks and ensure total compliance.
                  </p>

                  <p>
                    With extensive capabilities spanning PEC Category C-2 licensed civil infrastructure, enterprise datacenter computing rollouts, high-volume IT fleet deliveries, and general institutional supplies, Kardan Ventures coordinates multi-disciplinary resources with agility and technical precision.
                  </p>

                  <p>
                    We take pride in our impeccable operational record — maintaining milestone punctuality, full statutory transparency, and sustained institutional goodwill across every partnership we forge.
                  </p>

                  {/* HTML Comments for unverified company details as required */}
                  {/* <!-- placeholder: SECP Corporate Registration / CIN #0081294 verification dossier pending 2026 registry refresh --> */}
                  {/* <!-- placeholder: Regional hub facility lease agreements in Lahore and Karachi subject to annual verification --> */}
                  {/* <!-- placeholder: Sub-contractor consortium agreements pending formal board ratification --> */}
                </div>

                {/* Key Institutional Credentials */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#E2E8F0]">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#1D4ED8] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-bold text-[#102A43]">PPRA Pre-Qualified</p>
                      <p className="text-xs text-[#526174]">Compliant with statutory bidding rules</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#1D4ED8] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-bold text-[#102A43]">PEC Category C-2</p>
                      <p className="text-xs text-[#526174]">Civil, structural & MEP licensing</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 3. Mission, Vision, Values ─── */}
      <section className="py-20 md:py-28 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Corporate Pillars"
            title="Mission, Vision & Core Values"
            description="The governing principles that steer our operations, guide our partnerships, and drive sustainable value for institutional clients."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Mission */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white rounded-xl p-8 border-t-4 border-[#1D4ED8] shadow-sm card-hover flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center mb-6">
                    <Target className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#102A43] mb-4">
                    Our Mission
                  </h3>
                  <p className="text-base text-[#526174] leading-relaxed">
                    To deliver professional, compliant, and reliable business services that empower public sector and institutional organizations to achieve their operational objectives with precision, uncompromising governance, and total statutory compliance.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider">
                  <span>Purpose-Driven Contracting</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Vision */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white rounded-xl p-8 border-t-4 border-[#1D4ED8] shadow-sm card-hover flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#102A43] mb-4">
                    Our Vision
                  </h3>
                  <p className="text-base text-[#526174] leading-relaxed">
                    To be recognized as a trusted institutional partner and the benchmark of excellence in government contracting, procurement integrity, and strategic infrastructure delivery across Pakistan.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider">
                  <span>National Benchmark</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Values */}
            <ScrollReveal delay={300} className="h-full">
              <div className="bg-white rounded-xl p-8 border-t-4 border-[#1D4ED8] shadow-sm card-hover flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center mb-6">
                    <Heart className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#102A43] mb-4">
                    Our Core Values
                  </h3>
                  <ul className="space-y-3 text-sm text-[#526174]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong className="text-[#102A43] font-semibold">Integrity:</strong> Complete transparency, strict ethical codes, and statutory adherence in all business dealings.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong className="text-[#102A43] font-semibold">Accountability:</strong> Full ownership of project milestones, delivery timelines, and performance guarantees.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong className="text-[#102A43] font-semibold">Quality:</strong> Certified standards, authentic OEM products, and precision civil engineering works.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong className="text-[#102A43] font-semibold">Reliability:</strong> Steadfast delivery on every contractual commitment under all operational circumstances.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider">
                  <span>Guiding Standards</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 4. Business Philosophy ─── */}
      <section className="py-20 md:py-28 bg-[#F4F7FA] border-t border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative bg-white rounded-2xl p-8 md:p-14 shadow-md border border-[#E2E8F0] text-center flex flex-col items-center">
              {/* Large decorative quotation mark */}
              <div
                className="w-16 h-16 rounded-full bg-[#102A43]/5 flex items-center justify-center text-[#C5A46D] mb-6 shadow-inner"
                aria-hidden="true"
              >
                <Quote className="w-8 h-8" />
              </div>

              <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#1D4ED8] mb-4">
                Our Business Philosophy
              </span>

              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#102A43] leading-snug tracking-tight max-w-3xl">
                &ldquo;We believe in building lasting partnerships based on trust, transparency, and consistent performance.&rdquo;
              </blockquote>

              <div className="gold-bar my-6" aria-hidden="true" />

              <p className="text-base md:text-lg text-[#526174] max-w-2xl leading-relaxed">
                At Kardan Ventures, our corporate philosophy holds that business excellence is not measured solely by contracts executed, but by the enduring confidence institutional partners place in our capability to deliver with unwavering integrity and professionalism year after year.
              </p>

              <div className="mt-8 flex flex-col items-center">
                <span className="text-sm font-bold text-[#102A43]">
                  Executive Leadership & Governance Board
                </span>
                <span className="text-xs text-[#526174] mt-0.5">
                  {SITE_LEGAL}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 5. CTA ─── */}
      <CallToAction
        heading="Interested in Working Together?"
        description="Learn more about our services or get in touch with our team."
        buttonText="Contact Our Team"
        buttonHref="/contact-us"
      />
    </div>
  );
}
