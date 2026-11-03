import React from "react";
import type { Metadata } from "next";
import { 
  ShieldCheck, 
  Building2, 
  Scale 
} from "lucide-react";
import { DIRECTORS } from "@/lib/constants";
import ScrollReveal from "@/components/ScrollReveal";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Our Directors | Executive Board & Governance",
  description:
    "Meet the Board of Directors of Kardan Ventures (Private) Limited. Seasoned leadership driving institutional procurement, public sector contracting, and fiduciary excellence across Pakistan.",
  alternates: {
    canonical: "/our-directors",
  },
};

export default function OurDirectorsPage() {
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
                EXECUTIVE LEADERSHIP & FIDUCIARY GOVERNANCE
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Our Directors
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-emerald-100/90 leading-relaxed font-normal">
              Meet the executive leadership guiding Kardan Ventures (Private) Limited with unwavering institutional integrity, extensive public procurement experience, and long-term strategic vision.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Governance Statement */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#0A3837] text-white flex items-center justify-center shrink-0">
                <Scale className="w-6 h-6 text-[#2DD4BF]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0A2E2C]">Fiduciary Responsibility</h3>
                <p className="text-sm text-[#526174] mt-1">
                  Adherence to SECP corporate disclosure regulations and ethical commercial standards.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#0A3837] text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#2DD4BF]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0A2E2C]">Public Procurement Law</h3>
                <p className="text-sm text-[#526174] mt-1">
                  Strict compliance with PPRA 2004/2014 statutory frameworks and responsive bidding rules.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#0A3837] text-white flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-[#2DD4BF]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0A2E2C]">Engineering Standing</h3>
                <p className="text-sm text-[#526174] mt-1">
                  Technical leadership licensed under Pakistan Engineering Council (PEC) Category C-2.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directors Profiles Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A3433] tracking-tight">
              Board of Directors
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#526174]">
              Decades of collective leadership in government contracting, Tier-1 enterprise hardware distribution, and corporate infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {DIRECTORS.map((director, idx) => (
              <ScrollReveal key={director.name} delay={idx * 100} className="h-full">
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
                  
                  {/* Photo with Institutional Overlay */}
                  <div className="relative aspect-[4/3] w-full bg-slate-800 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062322] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0D9488] text-white shadow-sm">
                        Executive Board
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#0A2E2C]">
                        {director.name}
                      </h3>
                      <p className="text-sm font-semibold text-[#0D9488] mt-1">
                        {director.role}
                      </p>
                      <p className="text-xs text-[#526174] font-medium mt-0.5">
                        {director.credentials}
                      </p>

                      <div className="w-8 h-[2px] bg-[#0D9488] my-4 rounded-full" />

                      <p className="text-sm text-[#475569] leading-relaxed">
                        {director.bio}
                      </p>
                    </div>

                    {/* Key Strategic Focus Areas */}
                    <div className="mt-6 pt-5 border-t border-slate-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#0A3433] mb-2">
                        Core Responsibilities:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {director.focus.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center text-xs px-2.5 py-1 rounded-md bg-slate-100 text-[#0A3433] font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        heading="Discuss an Institutional Partnership With Our Leadership"
        description="Connect with our executive office to explore formal tender collaborations, consortium agreements, or institutional supply contracts."
        buttonText="Schedule a Discussion"
        buttonHref="/contact-us"
      />

    </div>
  );
}
