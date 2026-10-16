'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { PROCUREMENT_FAQS } from '@/lib/constants';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#F4F7FA] border-t border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <ScrollReveal>
          <SectionHeading
            label="Procurement Guidance"
            title="Frequently Asked Questions"
            description="Clear answers regarding our tender eligibility, statutory bank guarantees, Tier-1 OEM authorization, and milestone delivery SLA."
          />
        </ScrollReveal>

        {/* Accordions */}
        <div className="space-y-4 mt-12">
          {PROCUREMENT_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} delay={idx * 60}>
                <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden transition-all duration-200 shadow-sm">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#1D4ED8] flex items-center justify-center font-bold text-xs shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="text-base font-bold text-[#102A43]">
                        {faq.question}
                      </span>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-100 text-[#1D4ED8]' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#526174] leading-relaxed border-t border-slate-100 bg-white">
                      <p>{faq.answer}</p>
                      <div className="mt-3 pt-3 flex items-center justify-between border-t border-slate-100 text-xs">
                        <span className="font-mono text-slate-400 uppercase tracking-wider text-[11px]">
                          Category: {faq.category}
                        </span>
                        <Link
                          href="/contact-us"
                          className="font-semibold text-[#1D4ED8] hover:underline inline-flex items-center gap-1"
                        >
                          <span>Ask a specific question</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

