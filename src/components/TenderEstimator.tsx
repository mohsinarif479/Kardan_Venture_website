'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  Send, 
  ShieldCheck, 
  FileText, 
  Building2, 
  Server, 
  Sparkles
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

export default function TenderEstimator() {
  const [vertical, setVertical] = useState<'it' | 'civil' | 'turnkey' | 'general'>('it');
  const [serverCount, setServerCount] = useState<number>(4);
  const [laptopCount, setLaptopCount] = useState<number>(50);
  const [projectorCount, setProjectorCount] = useState<number>(10);
  const [civilAreaSqFt, setCivilAreaSqFt] = useState<number>(25000);
  const [urgencyWeeks, setUrgencyWeeks] = useState<number>(6);
  const [referenceId] = useState<string>(() => `KV-RFQ-2026-${Math.floor(1000 + Math.random() * 9000)}`);

  // Quick estimation logic
  const calculateEstimatedTotal = () => {
    if (vertical === 'it') {
      const serverTotal = serverCount * 3200000;
      const laptopTotal = laptopCount * 420000;
      const projectorTotal = projectorCount * 850000;
      return (serverTotal + laptopTotal + projectorTotal);
    } else if (vertical === 'civil') {
      return civilAreaSqFt * 5500;
    } else if (vertical === 'turnkey') {
      return (serverCount * 3200000 + laptopCount * 420000 + civilAreaSqFt * 4500);
    } else {
      return 15000000;
    }
  };

  const estimatedPKR = calculateEstimatedTotal();

  const formatPKR = (amount: number) => {
    if (amount >= 10000000) {
      return `PKR ${(amount / 10000000).toFixed(2)} Crore`;
    }
    if (amount >= 100000) {
      return `PKR ${(amount / 100000).toFixed(2)} Lakh`;
    }
    return `PKR ${amount.toLocaleString()}`;
  };

  return (
    <section id="estimator" className="py-20 md:py-28 bg-[#F4F7FA] border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <ScrollReveal>
          <SectionHeading
            label="Procurement Planning Tool"
            title="Official Tender Scope & BoQ Estimator"
            description="Configure your project parameters, calculate estimated budgetary allocation, and generate a reference code for departmental submission."
          />
        </ScrollReveal>

        {/* Main Estimator Card */}
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
          
          {/* Card Header */}
          <div className="bg-[#102A43] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#C5A46D]" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
                  Form RFP-KV26 / Scope Calculator
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Preliminary Tender Budgeting Framework
              </h3>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-[#C5A46D]">
              Ref: {referenceId}
            </div>
          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-10 space-y-8">
            
            {/* Step 1: Select Vertical */}
            <div>
              <label className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-3">
                1. Select Procurement Vertical:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'it', label: 'Enterprise IT Hardware', icon: Server },
                  { id: 'civil', label: 'Civil Infrastructure', icon: Building2 },
                  { id: 'turnkey', label: 'Turnkey EPC Combined', icon: Sparkles },
                  { id: 'general', label: 'General Supplies', icon: Calculator },
                ].map((cat) => {
                  const isSelected = vertical === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setVertical(cat.id as 'it' | 'civil' | 'turnkey' | 'general')}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                        isSelected
                          ? 'bg-blue-50 border-[#1D4ED8] text-[#1D4ED8] ring-2 ring-blue-500/20'
                          : 'bg-white border-[#E2E8F0] text-[#526174] hover:border-slate-300'
                      }`}
                    >
                      <cat.icon className="w-5 h-5" />
                      <span className="text-xs font-bold leading-tight">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Dynamic Inputs based on Vertical */}
            <div className="p-6 bg-[#F4F7FA] rounded-xl border border-[#E2E8F0] space-y-6">
              
              {(vertical === 'it' || vertical === 'turnkey') && (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-[#102A43] uppercase tracking-wider">
                    IT Hardware Scope Allocation:
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#526174] mb-1.5">
                        Rack Servers (Dell/HPE)
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={serverCount}
                        onChange={(e) => setServerCount(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-sm font-bold text-[#102A43] focus:ring-2 focus:ring-[#1D4ED8] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#526174] mb-1.5">
                        Fleet Laptops (ThinkPad/Latitude)
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="5000"
                        value={laptopCount}
                        onChange={(e) => setLaptopCount(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-sm font-bold text-[#102A43] focus:ring-2 focus:ring-[#1D4ED8] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#526174] mb-1.5">
                        Laser Projectors / IFP 75&quot;
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="200"
                        value={projectorCount}
                        onChange={(e) => setProjectorCount(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-sm font-bold text-[#102A43] focus:ring-2 focus:ring-[#1D4ED8] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {(vertical === 'civil' || vertical === 'turnkey') && (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-[#102A43] uppercase tracking-wider">
                    Civil Construction Parameters:
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-[#526174] mb-1.5 font-medium">
                      <span>Covered Built-up Area</span>
                      <span className="font-bold text-[#102A43]">{civilAreaSqFt.toLocaleString()} sq. ft.</span>
                    </div>
                    <input
                      type="range"
                      min="5000"
                      max="150000"
                      step="5000"
                      value={civilAreaSqFt}
                      onChange={(e) => setCivilAreaSqFt(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1D4ED8]"
                    />
                  </div>
                </div>
              )}

              {/* Delivery Urgency */}
              <div>
                <label className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-2">
                  Delivery Timeline Requirement:
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  {[4, 6, 12, 24].map((weeks) => (
                    <button
                      key={weeks}
                      type="button"
                      onClick={() => setUrgencyWeeks(weeks)}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer border transition-colors ${
                        urgencyWeeks === weeks
                          ? 'bg-[#102A43] text-white border-[#102A43]'
                          : 'bg-white text-[#526174] border-[#E2E8F0] hover:border-slate-300'
                      }`}
                    >
                      {weeks} Weeks {weeks <= 4 ? '(Emergency Fast-Track)' : ''}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Estimation Summary & Output Box */}
            <div className="p-6 sm:p-8 bg-[#102A43] text-white rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mb-1">
                  Estimated Budgetary Allocation:
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#C5A46D] font-mono">
                  {formatPKR(estimatedPKR)}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Subject to statutory PPRA evaluation & detailed BoQ specifications</span>
                </div>
              </div>

              <Link
                href={`/contact-us?subject=Tender+Estimate+Ref+${referenceId}+(${formatPKR(estimatedPKR)})`}
                className="btn-primary shrink-0 py-3.5 px-6"
              >
                <span>Submit RFP with This Scope</span>
                <Send className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

