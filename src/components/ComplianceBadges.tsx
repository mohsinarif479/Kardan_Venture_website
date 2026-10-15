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
    <section id="compliance" className="py-20 lg:py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono font-semibold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5 text-amber-700" />
            <span>Statutory Governance & Regulatory Standing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-sans">
            Accreditations, Tax Standing & Engineering Licenses
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Kardan Ventures (Pvt.) Limited operates in full statutory compliance with statutory regulatory bodies, national tax registers, engineering statutory boards, and international standards.
          </p>
        </div>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {COMPLIANCE_LIST.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-50 rounded-xl border border-slate-300 p-6 flex flex-col justify-between hover:border-slate-500 shadow-sm transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-200">
                  <div className="w-9 h-9 rounded bg-white border border-slate-300 flex items-center justify-center text-slate-900">
                    <ShieldCheck className="w-5 h-5 text-amber-700" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-1 font-sans">
                  {cert.title}
                </h3>

                <div className="text-xs text-slate-500 mb-3">
                  Authority: <span className="text-slate-800 font-semibold">{cert.issuer}</span>
                </div>

                <div className="p-2.5 rounded bg-white border border-slate-200 mb-3 font-mono">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Statutory Identifier:</div>
                  <div className="text-xs font-bold text-slate-900 mt-0.5">{cert.code}</div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Active Gazette Standing
                </span>
                <span>Audited 2026</span>
              </div>
            </div>
          ))}
        </div>

        {/* Audit Assurance Bar */}
        <div className="p-6 sm:p-7 rounded-xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white flex items-center gap-2 font-sans">
              <FileCheck2 className="w-5 h-5 text-amber-400" />
              Pre-Qualification Dossier for Tender Evaluation Committees
            </h4>
            <p className="text-xs text-slate-300 max-w-2xl">
              Inspect our comprehensive pre-qualification dossier including certified incorporation instruments, FBR active taxpayer certificates, PEC Category C-2 registration, ISO audits, and bank rating certificates.
            </p>
          </div>

          <button
            onClick={onOpenProfile}
            className="shrink-0 px-5 py-2.5 rounded bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Open Pre-Qualification Dossier</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
