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
    <div className="bg-[#0b1b33] text-slate-200 border-b border-slate-700/80 text-xs py-2 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-2">
        
        {/* Statutory Registration Line */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 text-[11px]">
          <span className="font-semibold text-amber-300 flex items-center gap-1">
            <Building className="w-3.5 h-3.5 text-amber-400" />
            {COMPANY_PROFILE.legalName}
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">{COMPANY_PROFILE.corporateId}</span>
          <span className="text-slate-500">|</span>
          <span className="text-emerald-300 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            PEC Category C-2 (Lic. # 41829)
          </span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-slate-300 hidden sm:inline">NTN: 7392014-9 (Active Taxpayer ATL)</span>
        </div>

        {/* Action Hotline & Dossier */}
        <div className="flex items-center gap-4 text-[11px]">
          <a
            href={`tel:${COMPANY_PROFILE.contact.emergencyTenderCell}`}
            className="flex items-center gap-1.5 text-slate-200 hover:text-amber-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Tender Desk: <strong>{COMPANY_PROFILE.contact.emergencyTenderCell}</strong></span>
          </a>

          <span className="text-slate-600 hidden sm:inline">|</span>

          <button
            onClick={onOpenProfile}
            className="text-slate-200 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Download className="w-3 h-3 text-sky-400" />
            <span className="underline decoration-slate-500 underline-offset-2">Pre-Qualification Dossier</span>
          </button>

          <button
            onClick={onOpenRfq}
            className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-3 py-1 rounded text-[11px] transition-colors cursor-pointer"
          >
            Official RFQ Portal
          </button>
        </div>

      </div>
    </div>
  );
}
