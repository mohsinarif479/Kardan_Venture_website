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
    <section id="process" className="py-20 lg:py-24 bg-[#e6ecf4] text-[#0c1e38] relative border-b border-[#cbd7e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-flat-sm text-amber-700 text-xs font-mono font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>Procurement Governance & Delivery Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e38] tracking-tight font-sans">
            5-Stage Statutory Tender Execution Framework
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Engineered for complete statutory transparency, zero contractual disputes, and strict compliance with public procurement rules from initial bidding to final audit discharge.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="neu-card rounded-3xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#cbd7e6]/70">
                    <span className="font-mono text-2xl font-black text-amber-700">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl neu-pressed flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#0c1e38]" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-[#0c1e38] mb-1 font-sans">
                    {item.title}
                  </h3>
                  <div className="text-[10px] font-mono text-amber-800 mb-2.5 font-bold">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#cbd7e6]/70">
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full neu-pressed-sm text-emerald-800">
                    ✓ {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Assurance Box */}
        <div className="mt-14 p-7 rounded-3xl neu-flat-lg flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl neu-pressed flex items-center justify-center text-emerald-700 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0c1e38] font-sans">
                Zero Contract Default & 100% Performance Guarantee Retention Release Record
              </div>
              <div className="text-xs text-slate-600 mt-1">
                Over 12 years of public contracting, Kardan Ventures (Pvt.) Limited has maintained an unblemished record with zero liquidated damages (LDs) or performance encashments.
              </div>
            </div>
          </div>

          <a
            href="#calculator"
            className="shrink-0 neu-btn-gold px-6 py-3.5 rounded-2xl text-white font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Submit Tender Requirement Now
          </a>
        </div>

      </div>
    </section>
  );
}
