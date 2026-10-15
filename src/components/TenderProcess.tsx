'use client';

import React from 'react';
import { 
  FileSearch, 
  Banknote, 
  Boxes, 
  CheckCheck, 
  ShieldCheck, 
  Lock, 
  Award 
} from 'lucide-react';

export default function TenderProcess() {
  const steps = [
    {
      step: '01',
      title: 'Tender Scrutiny & BoQ Conformance',
      subtitle: 'Technical Compliance Mapping',
      description: 'Our senior bid engineering desk scrutinizes published tender specifications (PPRA / EPADS), conducts pre-bid site visits, and matches exact technical parameters without ambiguity.',
      icon: FileSearch,
      highlight: 'Zero Spec Deviations'
    },
    {
      step: '02',
      title: 'Bid Security & Envelope Packaging',
      subtitle: 'Single & Two-Stage Formal Bidding',
      description: 'We structure compliant Technical & Financial proposals. Verified Earnest Money / Bid Security Bank Guarantees are mobilized through top-tier Schedule-A commercial banks.',
      icon: Banknote,
      highlight: 'Bank Guarantee Ready'
    },
    {
      step: '03',
      title: 'Direct Tier-1 OEM Sourcing',
      subtitle: 'Authentic MAF & Customs Clearance',
      description: 'Upon tender award, hardware is secured directly through authorized manufacturer channels (Dell, HPE, Lenovo, Cisco) complete with serial tracking and official MAF backing.',
      icon: Boxes,
      highlight: '100% Genuine OEM Chain'
    },
    {
      step: '04',
      title: 'FAT/SAT Joint Inspection',
      subtitle: 'Inspection Committee Sign-Offs',
      description: 'Delivery to client warehouses or project sites. Joint physical inspections with government inspection committees, verification of barcodes, testing and commissioning.',
      icon: CheckCheck,
      highlight: 'Audit-Proof Delivery Challans'
    },
    {
      step: '05',
      title: 'Onsite SLA & Warranty Handover',
      subtitle: '3-to-5 Year Onsite Maintenance',
      description: 'Handover of comprehensive warranty certificates, deployment of resident engineers for critical datacenters, and automated quarterly health audits.',
      icon: ShieldCheck,
      highlight: '24/7 Emergency Support SLA'
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-24 bg-[#0a192f] text-slate-100 relative border-b border-slate-700 bg-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-700 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>Procurement Governance & Delivery Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            5-Stage Statutory Tender Execution Framework
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Engineered for complete statutory transparency, zero contractual disputes, and strict compliance with public procurement rules from initial bidding to final audit discharge.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#0d213b] rounded-xl border border-slate-700 p-5 flex flex-col justify-between hover:border-slate-500 transition-all duration-200 relative shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-700">
                    <span className="font-mono text-xl font-black text-amber-400">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded bg-slate-900 border border-slate-700 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1 font-sans">
                    {item.title}
                  </h3>
                  <div className="text-[10px] font-mono text-amber-300/80 mb-2 font-semibold">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-700">
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950 text-emerald-400 border border-slate-800">
                    ✓ {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Assurance Box */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900 border border-slate-700 flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-sans">
                Zero Contract Default & 100% Performance Guarantee Retention Release Record
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Over 12 years of public contracting, Kardan Ventures (Pvt.) Limited has maintained an unblemished record with zero liquidated damages (LDs) or performance encashments.
              </div>
            </div>
          </div>

          <a
            href="#calculator"
            className="shrink-0 px-5 py-2.5 rounded bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
          >
            Submit Tender Requirement Now
          </a>
        </div>

      </div>
    </section>
  );
}
