'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { EXECUTED_PROJECTS } from '@/lib/constants';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

export default function ProjectsShowcase() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <ScrollReveal>
          <SectionHeading
            label="Delivered Contracts"
            title="Executed Government Projects Portfolio"
            description="A track record of turnkey public sector lots delivered with zero liquidated damages, verified by engineer completion certificates and institutional sign-offs."
          />
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {EXECUTED_PROJECTS.map((proj, idx) => (
            <ScrollReveal key={proj.id} delay={idx * 100}>
              <div className="bg-[#F4F7FA] rounded-2xl border border-[#E2E8F0] overflow-hidden flex flex-col h-full card-hover shadow-sm">
                
                {/* Image Section with Overlay */}
                <div className="relative h-64 w-full bg-[#102A43] overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b2f] via-transparent to-transparent opacity-85" />

                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#102A43]/85 text-white backdrop-blur-md border border-white/20">
                    {proj.category}
                  </span>

                  {/* Certified Status */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{proj.status}</span>
                  </span>

                  {/* Bottom Stats on Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-300 font-medium">Contract Value</div>
                      <div className="text-xl font-extrabold text-[#C5A46D]">{proj.value}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] uppercase tracking-wider text-slate-300 font-medium">Delivered Year</div>
                      <div className="text-base font-bold text-white">{proj.year}</div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#1D4ED8] mb-2 uppercase tracking-wider">
                      <Building2 className="w-4 h-4" />
                      <span>{proj.client}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#102A43] mb-3 leading-snug">
                      {proj.title}
                    </h3>

                    <p className="text-sm text-[#526174] leading-relaxed mb-6">
                      {proj.summary}
                    </p>

                    {/* Key Deliverables */}
                    <div className="space-y-2 mb-6">
                      <div className="text-xs font-bold text-[#102A43] uppercase tracking-wider">
                        Key Contract Deliverables:
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#526174]">
                        {proj.deliverables.map((deliv, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-5 border-t border-[#E2E8F0] flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      PPRA Statutory Handover
                    </span>
                    <Link
                      href="/company-profile"
                      className="text-xs font-bold text-[#1D4ED8] hover:text-[#102A43] inline-flex items-center gap-1 transition-colors uppercase tracking-wider"
                    >
                      <span>View Company Credentials</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

