import React from "react";
import type { Metadata } from "next";
import { 
  CheckCircle2, 
} from "lucide-react";
import { TEAM_MEMBERS } from "@/lib/constants";
import ScrollReveal from "@/components/ScrollReveal";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Our Team | Operational & Technical Specialists",
  description:
    "Meet the experienced professionals behind Kardan Ventures (Private) Limited. Specialists in tender bid management, technical BoQ formulation, ISO quality assurance, and nationwide logistics.",
  alternates: {
    canonical: "/our-team",
  },
};

export default function OurTeamPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Page Header Banner */}
      <section className="relative bg-[#062322] text-white py-20 lg:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#2DD4BF_1px,transparent_1px)] [background-size:20px_20px]" 
          aria-hidden="true" 
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#2DD4BF] rounded-full" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#2DD4BF]">
                OPERATIONAL EXCELLENCE & EXPERTISE
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Our Professional Team
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-emerald-100/90 leading-relaxed font-normal">
              A disciplined multidisciplinary team of engineers, procurement officers, legal analysts, and logistics specialists committed to fulfilling public sector tenders with zero deviation.
            </p>
          </div>
        </div>
      </section>

      {/* Team Capability Highlights */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#0A3433] block">100%</span>
              <span className="text-xs sm:text-sm text-[#526174] font-medium mt-1 block">
                PPRA Bid Compliance Rate
              </span>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#0D9488] block">25+</span>
              <span className="text-xs sm:text-sm text-[#526174] font-medium mt-1 block">
                Full-Time Specialists
              </span>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#0A3433] block">PKR 1.2B+</span>
              <span className="text-xs sm:text-sm text-[#526174] font-medium mt-1 block">
                Executed Supply Contracts
              </span>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#0D9488] block">ISO 9001</span>
              <span className="text-xs sm:text-sm text-[#526174] font-medium mt-1 block">
                Certified Quality Protocol
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Profiles Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A3433] tracking-tight">
              Operational Department Leads
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#526174]">
              Dedicated specialists orchestrating every phase of tender analysis, equipment sourcing, factory testing, and nationwide field handover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {TEAM_MEMBERS.map((member, idx) => (
              <ScrollReveal key={member.name} delay={idx * 80} className="h-full">
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
                  
                  {/* Photo with Overlay */}
                  <div className="relative aspect-[4/5] w-full bg-slate-800 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062322] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#0A3837]/90 text-[#2DD4BF] backdrop-blur-xs border border-[#2DD4BF]/30">
                        {member.department}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg font-bold text-[#0A2E2C]">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#0D9488] mt-1">
                        {member.title}
                      </p>
                      <p className="text-[11px] text-[#526174] font-medium mt-0.5">
                        {member.experience}
                      </p>

                      <div className="w-6 h-[2px] bg-[#0D9488] my-3 rounded-full" />

                      <p className="text-xs text-[#475569] leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#0A3433] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />
                      <span>Verified Operations Lead</span>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Engagement */}
      <CallToAction
        heading="Connect With Our Procurement & Tender Desk"
        description="Our technical leads are ready to review your requests for proposals, technical specifications, and delivery schedules."
        buttonText="Contact Our Specialists"
        buttonHref="/contact-us"
      />

    </div>
  );
}
