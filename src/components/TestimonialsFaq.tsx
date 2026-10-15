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
    <section id="faqs" className="py-20 lg:py-24 bg-[#f8fafc] text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Testimonials Segment */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-200 text-slate-800 text-xs font-mono font-semibold uppercase tracking-wider">
              <Quote className="w-3.5 h-3.5 text-amber-700" />
              <span>Institutional Commendations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-sans">
              Feedback from Public Procurement Authorities
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Excerpts from completion certificates and milestone sign-offs issued by public sector project directors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => {
              const Icon = t.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-300 p-6 flex flex-col justify-between hover:border-slate-500 shadow-sm transition-all relative"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                      <div className="w-10 h-10 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900">
                        <Icon className="w-5 h-5 text-amber-700" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        Official Sign-off
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 italic mb-6 leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200">
                    <div className="text-xs font-bold text-slate-950">{t.author}</div>
                    <div className="text-[11px] text-amber-800 font-semibold">{t.role}</div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">{t.agency}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQs Segment */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-200 text-slate-800 text-xs font-mono font-semibold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
              <span>Procurement & Contracting FAQs</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-sans">
              Frequently Asked Questions by Tender Committees
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Statutory guidance on our bidding framework, OEM Manufacturer Authorization Forms (MAF), and banking facilities.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-slate-300 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                        {faq.category}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 font-sans">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-slate-900' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50">
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
