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
  FileCheck2, 
  Award,
  Building,
  FileText
} from 'lucide-react';

interface HeroProps {
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

export default function Hero({ onOpenRfq, onOpenProfile }: HeroProps) {
  return (
    <section className="relative bg-[#e6ecf4] text-[#0c1e38] pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-[#cbd7e6] overflow-hidden">
      
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 neu-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Top Corporate Status Ribbon */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl neu-flat-sm text-xs font-mono mb-8 text-[#0c1e38]">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm animate-pulse"></span>
          <span className="font-bold text-amber-700 tracking-wide">STATUTORY GOVERNMENT CONTRACTOR</span>
          <span className="text-slate-400">•</span>
          <span className="font-medium text-slate-700">PEC Category C-2 (Lic. # 41829)</span>
          <span className="text-slate-400 hidden sm:inline">•</span>
          <span className="hidden sm:inline font-medium text-slate-700">PPRA / EPADS Pre-Qualified</span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Serious Corporate Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-[#0c1e38] leading-[1.15]">
              Turnkey Civil Infrastructure, <br />
              <span className="text-amber-700">
                Enterprise ICT Hardware
              </span> <br />
              & Public Sector Tenders.
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl">
              <strong className="text-[#0c1e38] font-bold">Kardan Ventures (Pvt.) Limited</strong> is a pre-qualified institutional contractor executing major public tenders nationwide. We deliver heavy civil infrastructure under Pakistan Engineering Council standards alongside Tier-1 enterprise technology procurement — supplying <strong>datacenter rack servers</strong>, <strong>commercial laptop fleets</strong>, <strong>high-lumen laser projectors</strong>, and desktop workstations with 100% PPRA compliance.
            </p>

            {/* Core Competencies Box (Neumorphic tactile cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl neu-flat-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0c1e38]">
                  <FileCheck2 className="w-4 h-4 text-amber-600" />
                  <span>Public Sector EPC</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-1 font-medium">Single & Two-Stage Bidding</div>
              </div>

              <div className="p-3.5 rounded-xl neu-flat-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0c1e38]">
                  <Building2 className="w-4 h-4 text-emerald-600" />
                  <span>Civil Infrastructure</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-1 font-medium">PEC Category C-2 Licensed</div>
              </div>

              <div className="p-3.5 rounded-xl neu-flat-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0c1e38]">
                  <Server className="w-4 h-4 text-blue-600" />
                  <span>Enterprise Servers</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-1 font-medium">Dell PowerEdge & HPE Gen11</div>
              </div>

              <div className="p-3.5 rounded-xl neu-flat-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0c1e38]">
                  <Laptop className="w-4 h-4 text-indigo-600" />
                  <span>Fleet Laptops & PCs</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-1 font-medium">Lenovo ThinkPad & Latitude</div>
              </div>

              <div className="p-3.5 rounded-xl neu-flat-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0c1e38]">
                  <Projector className="w-4 h-4 text-cyan-700" />
                  <span>Laser Projectors</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-1 font-medium">Epson 7,000L & 4K IFP Panels</div>
              </div>

              <div className="p-3.5 rounded-xl neu-flat-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0c1e38]">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Statutory Warranties</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-1 font-medium">3-to-5 Year Onsite SLA</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                onClick={onOpenRfq}
                className="neu-btn-gold px-7 py-3.5 rounded-xl text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Submit Tender RFQ / BoQ</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenProfile}
                className="neu-btn px-6 py-3.5 rounded-xl text-[#0c1e38] hover:text-amber-700 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Pre-Qualification Dossier</span>
              </button>
            </div>

            {/* Verification Guarantee */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Schedule-A Bank Guarantees (Bid Security & Performance Bonds)
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Verified OEM Direct Chain (MAF Certified)
              </span>
            </div>

          </div>

          {/* Right Column: Executive Corporate Dossier Card (Neumorphic Raised) */}
          <div className="lg:col-span-5">
            <div className="neu-flat-lg rounded-2xl p-6 sm:p-7 space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#cbd7e6]">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl neu-pressed-sm flex items-center justify-center">
                    <Building className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#0c1e38] font-bold">
                      Corporate Standing Record
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">Kardan Ventures (Pvt.) Limited</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono neu-pressed-sm text-emerald-800 px-3 py-1 rounded-md font-bold">
                  100% ATL ACTIVE
                </span>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3.5 neu-pressed-sm rounded-xl">
                  <div className="text-xs font-mono text-slate-500 uppercase font-semibold">Tenders Executed</div>
                  <div className="text-2xl font-black text-amber-700 font-mono mt-0.5">450+</div>
                  <div className="text-[10px] text-slate-500 font-medium">Federal & Provincial Lots</div>
                </div>

                <div className="p-3.5 neu-pressed-sm rounded-xl">
                  <div className="text-xs font-mono text-slate-500 uppercase font-semibold">Cumulative Volume</div>
                  <div className="text-2xl font-black text-emerald-700 font-mono mt-0.5">PKR 14.8B+</div>
                  <div className="text-[10px] text-slate-500 font-medium">Civil & IT Contracts</div>
                </div>

                <div className="p-3.5 neu-pressed-sm rounded-xl">
                  <div className="text-xs font-mono text-slate-500 uppercase font-semibold">IT Fleet Supplied</div>
                  <div className="text-2xl font-black text-blue-700 font-mono mt-0.5">68,000+</div>
                  <div className="text-[10px] text-slate-500 font-medium">Servers, Laptops & Desktops</div>
                </div>

                <div className="p-3.5 neu-pressed-sm rounded-xl">
                  <div className="text-xs font-mono text-slate-500 uppercase font-semibold">On-Time SLA</div>
                  <div className="text-2xl font-black text-indigo-700 font-mono mt-0.5">99.6%</div>
                  <div className="text-[10px] text-slate-500 font-medium">Zero Contract Default</div>
                </div>
              </div>

              {/* Official Statutory Codes Table */}
              <div className="p-4 neu-pressed rounded-xl space-y-2 font-mono text-xs">
                <div className="text-[11px] text-slate-600 uppercase font-bold tracking-wider mb-1">
                  Statutory Registrations:
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>SECP CIN:</span>
                  <span className="text-[#0c1e38] font-bold">0081294</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>PEC License:</span>
                  <span className="text-amber-800 font-bold">Lic. 41829 (Category C-2)</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>FBR NTN:</span>
                  <span className="text-emerald-800 font-bold">7392014-9</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>PPRA Reg.:</span>
                  <span className="text-[#0c1e38] font-bold">PPRA-VEND-9042</span>
                </div>
              </div>

              {/* Footer Note */}
              <div className="pt-1 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-semibold text-[#0c1e38]">
                  <Award className="w-4 h-4 text-amber-700" />
                  <span>ISO 9001:2015 & ISO 27001</span>
                </span>
                <span className="font-mono text-slate-500 text-[11px]">FY 2025-2026 Audit Certified</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
