'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  ShieldCheck, 
  Building, 
  FileText, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  type LucideIcon 
} from 'lucide-react';
import { STATUTORY_ACCREDITATIONS } from '@/lib/constants';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

export default function ComplianceShowcase() {
  const iconMap: Record<string, LucideIcon> = {
    pec: Building2,
    ppra: ShieldCheck,
    secp: Building,
    'fbr-atl': FileText,
    iso: Award,
  };

  return (
    <section id="compliance" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <ScrollReveal>
          <SectionHeading
            label="Statutory Accreditations"
            title="Pre-Qualified Regulatory & Legal Standing"
            description="100% statutory transparency. Registered with all federal, engineering, and tax regulatory authorities for lawful execution of public contracts."
          />
        </ScrollReveal>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {STATUTORY_ACCREDITATIONS.map((acc, idx) => {
            const IconComponent = iconMap[acc.id] || ShieldCheck;
            return (
              <ScrollReveal key={acc.id} delay={idx * 80}>
                <div className="p-7 bg-[#F4F7FA] rounded-2xl border border-[#E2E8F0] h-full flex flex-col justify-between card-hover shadow-sm">
                  <div>
                    {/* Top Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-[#102A43] text-white">
                        {acc.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#102A43] mb-1">
                      {acc.name}
                    </h3>
                    <div className="text-xs font-mono font-bold text-[#C5A46D] mb-3">
                      {acc.licenseNumber}
                    </div>

                    <p className="text-xs text-[#526174] leading-relaxed mb-4">
                      {acc.description}
                    </p>
                  </div>

                  {/* Status Indicator */}
                  <div className="pt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{acc.status}</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}

          {/* Quick Pre-Qualification Download Card */}
          <ScrollReveal delay={400}>
            <div className="p-7 bg-[#102A43] text-white rounded-2xl h-full flex flex-col justify-between shadow-md">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-slate-200 border border-white/20 mb-4">
                  Procurement Officer Pack
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Request Pre-Qualification Dossier
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Certified copies of SECP Form-29, PEC Category C-2 constructor certificate, FBR ATL verification, bank credit comfort letter, and audited financial statements.
                </p>
              </div>

              <Link
                href="/company-profile"
                className="w-full py-3 px-4 rounded-lg bg-[#1D4ED8] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 text-center"
              >
                <span>View Full Profile Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

