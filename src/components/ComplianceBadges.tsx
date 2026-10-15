'use client';

import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  FileCheck2, 
  ExternalLink, 
  Scale 
} from 'lucide-react';
import { COMPLIANCE_LIST } from '../data/companyData';

interface Props {
  onOpenProfile: () => void;
}

export default function ComplianceBadges({ onOpenProfile }: Props) {
  return (
    <section id="compliance" className="py-20 lg:py-24 bg-[#e6ecf4] text-[#0c1e38] relative border-b border-[#cbd7e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-flat-sm text-amber-700 text-xs font-mono font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5 text-amber-700" />
            <span>Statutory Governance & Regulatory Standing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e38] tracking-tight font-sans">
            Accreditations, Tax Standing & Engineering Licenses
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Kardan Ventures (Pvt.) Limited operates in full statutory compliance with statutory regulatory bodies, national tax registers, engineering statutory boards, and international standards.
          </p>
        </div>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {COMPLIANCE_LIST.map((cert) => (
            <div
              key={cert.id}
              className="neu-card rounded-3xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#cbd7e6]/70">
                  <div className="w-10 h-10 rounded-xl neu-pressed flex items-center justify-center text-amber-700">
                    <ShieldCheck className="w-5 h-5 text-amber-700" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full neu-pill text-emerald-800">
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#0c1e38] mb-1 font-sans">
                  {cert.title}
                </h3>

                <div className="text-xs text-slate-500 mb-3 font-medium">
                  Authority: <span className="text-[#0c1e38] font-bold">{cert.issuer}</span>
                </div>

                <div className="p-3.5 rounded-2xl neu-pressed mb-3.5 font-mono">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Statutory Identifier:</div>
                  <div className="text-xs font-black text-[#0c1e38] mt-0.5">{cert.code}</div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[#cbd7e6]/70 flex items-center justify-between text-[11px] text-slate-500 font-mono font-medium">
                <span className="flex items-center gap-1 text-emerald-700 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Active Gazette Standing
                </span>
                <span>Audited 2026</span>
              </div>
            </div>
          ))}
        </div>

        {/* Audit Assurance Bar */}
        <div className="p-7 sm:p-8 rounded-3xl neu-flat-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h4 className="text-base font-bold text-[#0c1e38] flex items-center gap-2 font-sans">
              <FileCheck2 className="w-5 h-5 text-amber-700" />
              Pre-Qualification Dossier for Tender Evaluation Committees
            </h4>
            <p className="text-xs text-slate-600 max-w-2xl font-normal">
              Inspect our comprehensive pre-qualification dossier including certified incorporation instruments, FBR active taxpayer certificates, PEC Category C-2 registration, ISO audits, and bank rating certificates.
            </p>
          </div>

          <button
            onClick={onOpenProfile}
            className="shrink-0 neu-btn-gold px-6 py-3.5 rounded-2xl text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Open Pre-Qualification Dossier</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
