'use client';

import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Quote, 
  Building2, 
  GraduationCap, 
  Server 
} from 'lucide-react';
import { FAQS_DATA } from '../data/companyData';

export default function TestimonialsFaq() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const testimonials = [
    {
      quote: "Kardan Ventures (Pvt.) Limited executed the nationwide deployment of 3,200 commercial desktop workstations and 450 laser projectors across higher education colleges ahead of schedule. Their PPRA compliance and OEM authorization forms were flawless, with zero audit queries.",
      author: "Engr. Tariq Mahmood",
      role: "Project Director (National Smart Campus Initiative)",
      agency: "Federal Directorate of Education",
      icon: GraduationCap
    },
    {
      quote: "During our regional government datacenter expansion, Kardan Ventures supplied 42 Dell PowerEdge 2U servers, fiber SAN switches, and 3-Phase online UPS systems without interrupting live government citizen services. Outstanding technical competence.",
      author: "Dr. Hamza Khurram",
      role: "Director of Infrastructure & Cloud Services",
      agency: "Provincial Information Technology Board",
      icon: Server
    },
    {
      quote: "Their civil engineering division executed our 4-storey administrative directorate under strict budget constraints. The structural finish, seismic compliance, and MEP installations exceeded the required PWD specifications.",
      author: "Col. (R) Javed Akhtar",
      role: "Chief Engineer (Infrastructure)",
      agency: "Public Works & Housing Directorate",
      icon: Building2
    }
  ];

  return (
    <section id="faqs" className="py-20 lg:py-24 bg-[#e6ecf4] text-[#0c1e38] relative border-b border-[#cbd7e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Testimonials Segment */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-flat-sm text-amber-700 text-xs font-mono font-bold uppercase tracking-wider">
              <Quote className="w-3.5 h-3.5 text-amber-700" />
              <span>Institutional Commendations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e38] tracking-tight font-sans">
              Feedback from Public Procurement Authorities
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Excerpts from completion certificates and milestone sign-offs issued by public sector project directors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => {
              const Icon = t.icon;
              return (
                <div
                  key={idx}
                  className="neu-card rounded-3xl p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#cbd7e6]/70">
                      <div className="w-11 h-11 rounded-2xl neu-pressed flex items-center justify-center text-amber-700">
                        <Icon className="w-5 h-5 text-amber-700" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full neu-pill text-slate-700">
                        Official Sign-off
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 italic mb-6 leading-relaxed font-normal">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#cbd7e6]/70">
                    <div className="text-xs font-bold text-[#0c1e38]">{t.author}</div>
                    <div className="text-[11px] text-amber-800 font-bold">{t.role}</div>
                    <div className="text-[10px] text-slate-500 font-mono font-medium mt-0.5">{t.agency}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQs Segment */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-flat-sm text-amber-700 text-xs font-mono font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
              <span>Procurement & Contracting FAQs</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0c1e38] font-sans">
              Frequently Asked Questions by Tender Committees
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Statutory guidance on our bidding framework, OEM Manufacturer Authorization Forms (MAF), and banking facilities.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="neu-flat rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-200/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full neu-pressed-sm text-slate-700 shrink-0">
                        {faq.category}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#0c1e38] font-sans">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-700' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-[#cbd7e6]/70 neu-pressed-sm font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
