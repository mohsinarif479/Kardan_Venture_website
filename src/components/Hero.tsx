'use client';

import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Server, 
  Building2, 
  Laptop, 
  Projector, 
  CheckCircle2, 
  Award,
  Building,
  FileText
} from 'lucide-react';
import { COMPANY_PROFILE } from '../data/companyData';

interface HeroProps {
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

export default function Hero({ onOpenRfq, onOpenProfile }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Corporate Image with Deep Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Corporate Architecture"
          className="w-full h-full object-cover object-center opacity-25 filter grayscale"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/95 to-[#0a192f]/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 relative z-10">
        
        {/* Top Statutory Ribbon */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-slate-900/90 border border-slate-700 text-slate-200 text-xs font-mono mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-semibold text-amber-300">PRE-QUALIFIED GOVERNMENT CONTRACTOR</span>
          <span className="text-slate-500">•</span>
          <span>PEC Category C-2 (Lic. # 41829)</span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="hidden sm:inline">PPRA / EPADS Enrolled</span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Corporate Statement */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
              Engineering Public Works. <br />
              <span className="text-amber-400">
                Powering Enterprise IT.
              </span> <br />
              Executing at Scale.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              <strong>Kardan Ventures (Pvt.) Limited</strong> is a premier multi-disciplinary contractor delivering turnkey government tenders, heavy civil construction, and authorized Tier-1 IT infrastructure — including <strong>enterprise rack servers</strong>, <strong>commercial laptop fleets</strong>, <strong>laser projectors</strong>, and public workstations with complete PPRA statutory adherence.
            </p>

            {/* Core Capability Tags */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <span>Civil Construction</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">PEC Category C-2 Licensed</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <Server className="w-4 h-4 text-blue-400" />
                  <span>Enterprise Servers</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">Dell PowerEdge & HPE Gen11</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <Laptop className="w-4 h-4 text-purple-400" />
                  <span>Fleet Laptops & PCs</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">Lenovo ThinkPad & Dell</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <Projector className="w-4 h-4 text-cyan-400" />
                  <span>Laser Projectors & 4K</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">Epson 7,000L & ViewSonic IFP</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>PPRA & Tender EPC</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">Single & Two-Stage Bidding</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Schedule-A Guarantees</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">Bid Bonds & Performance</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenRfq}
                className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-950/40 cursor-pointer"
              >
                <span>Submit Tender RFQ / BoQ</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenProfile}
                className="px-6 py-3.5 rounded-lg border border-slate-600 hover:border-slate-400 bg-slate-900/70 hover:bg-slate-800 text-slate-200 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Pre-Qualification Dossier</span>
              </button>
            </div>

            {/* Verification Guarantee */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Schedule-A Bank Bid Guarantees Ready
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Certified OEM Manufacturer Authorization (MAF)
              </span>
            </div>

          </div>

          {/* Right Column: Executive Corporate Standing Cockpit */}
          <div className="lg:col-span-5">
            <div className="bg-[#0f2444]/95 border-2 border-slate-700/80 rounded-xl p-6 sm:p-7 shadow-2xl backdrop-blur-md space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold">
                      Corporate Standing Record
                    </div>
                    <div className="text-[11px] text-slate-400">{COMPANY_PROFILE.legalName}</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded border border-emerald-500/30 font-semibold">
                  100% ATL ACTIVE
                </span>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase">Tenders Executed</div>
                  <div className="text-2xl font-black text-amber-400 font-mono mt-0.5">450+</div>
                  <div className="text-[10px] text-slate-400">Federal & Provincial Lots</div>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase">Delivered Value</div>
                  <div className="text-2xl font-black text-emerald-400 font-mono mt-0.5">PKR 14.8B+</div>
                  <div className="text-[10px] text-slate-400">Civil & IT Contracts</div>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase">IT Fleet Supplied</div>
                  <div className="text-2xl font-black text-blue-400 font-mono mt-0.5">68,000+</div>
                  <div className="text-[10px] text-slate-400">Servers, Laptops & Desktops</div>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase">On-Time SLA</div>
                  <div className="text-2xl font-black text-purple-400 font-mono mt-0.5">99.6%</div>
                  <div className="text-[10px] text-slate-400">Zero Contract Default</div>
                </div>
              </div>

              {/* Statutory Registrations Box */}
              <div className="p-3.5 bg-slate-950/80 rounded-lg border border-slate-800 space-y-1.5 font-mono text-xs">
                <div className="text-[11px] text-slate-400 uppercase font-bold tracking-wider mb-1">
                  Statutory Registrations:
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>SECP CIN:</span>
                  <span className="text-white font-bold">{COMPANY_PROFILE.corporateId.replace('SECP CIN: ', '')}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>PEC License:</span>
                  <span className="text-amber-400 font-bold">Category C-2 (Lic. # 41829)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>FBR NTN:</span>
                  <span className="text-emerald-400 font-bold">7392014-9</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>PPRA Reg.:</span>
                  <span className="text-white font-bold">PPRA-VEND-9042</span>
                </div>
              </div>

              {/* Certifications footer */}
              <div className="pt-1 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>ISO 9001:2015 & ISO 27001 Certified</span>
                </span>
                <span className="font-mono text-slate-500">Audited 2026</span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Corporate Clients Ribbon */}
      <div className="border-t border-slate-800 bg-[#071324]/80 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
            Institutional Client Sectors:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-300 font-semibold">
            <span>Federal Ministries & Divisions</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span>Provincial IT & Revenue Boards</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span>Public Sector Universities</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span>Public Works & Housing (PWD)</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span>Healthcare Directorates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
