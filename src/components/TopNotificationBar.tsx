'use client';

import React from 'react';
import { Phone, ShieldCheck, Download, Building } from 'lucide-react';
import { COMPANY_PROFILE } from '../data/companyData';

interface Props {
  onOpenProfile: () => void;
  onOpenRfq: () => void;
}

export default function TopNotificationBar({ onOpenProfile, onOpenRfq }: Props) {
  return (
    <div className="bg-[#dce4ee] border-b border-[#cbd7e6] text-xs py-2 px-4 sm:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-2.5">
        
        {/* Statutory Registration Line */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-[11px]">
          <span className="font-bold text-[#0c1e38] flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg neu-pressed-sm">
            <Building className="w-3.5 h-3.5 text-amber-600" />
            {COMPANY_PROFILE.legalName}
          </span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-600 font-medium">{COMPANY_PROFILE.corporateId}</span>
          <span className="text-slate-400">|</span>
          <span className="text-emerald-800 font-semibold flex items-center gap-1 px-2 py-0.5 rounded-md neu-pressed-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            PEC Category C-2 (Lic. # 41829)
          </span>
          <span className="text-slate-400 hidden sm:inline">|</span>
          <span className="text-slate-600 font-mono hidden sm:inline">NTN: 7392014-9 (Active Taxpayer ATL)</span>
        </div>

        {/* Action Hotline & Dossier */}
        <div className="flex items-center gap-3 sm:gap-4 text-[11px]">
          <a
            href={`tel:${COMPANY_PROFILE.contact.emergencyTenderCell}`}
            className="flex items-center gap-1.5 text-slate-700 hover:text-amber-700 transition-colors font-medium px-2 py-1 rounded-lg neu-btn text-[11px]"
          >
            <Phone className="w-3 h-3 text-amber-600" />
            <span>Tender Desk: <strong>{COMPANY_PROFILE.contact.emergencyTenderCell}</strong></span>
          </a>

          <button
            onClick={onOpenProfile}
            className="text-slate-700 hover:text-[#0c1e38] flex items-center gap-1.5 px-2.5 py-1 rounded-lg neu-btn font-medium transition-colors cursor-pointer"
          >
            <Download className="w-3 h-3 text-blue-600" />
            <span>Pre-Qualification Dossier</span>
          </button>

          <button
            onClick={onOpenRfq}
            className="neu-btn-gold px-3.5 py-1 rounded-lg text-white font-bold text-[11px] uppercase tracking-wider transition-all cursor-pointer shadow-sm"
          >
            Official RFQ Portal
          </button>
        </div>

      </div>
    </div>
  );
}
