'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Server, 
  FileCheck2, 
  Truck, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Layers 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';

interface ServicesSectionProps {
  onSelectServiceForRfq: () => void;
}

export default function ServicesSection({ onSelectServiceForRfq }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const divisionImages: Record<string, string> = {
    'government-tenders': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    'civil-construction': 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?auto=format&fit=crop&w=800&q=80',
    'it-hardware-procurement': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    'general-order-supply': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  };

  const filteredServices = activeTab === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.id === activeTab);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck':
        return <FileCheck2 className="w-5 h-5 text-amber-600" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-emerald-600" />;
      case 'Server':
        return <Server className="w-5 h-5 text-blue-600" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-purple-600" />;
      default:
        return <Layers className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-24 bg-[#f8fafc] text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-200 text-slate-800 text-xs font-mono font-semibold uppercase tracking-wider">
            <span>Corporate Operating Divisions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-sans">
            Specialized Infrastructure & Technology Divisions
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Kardan Ventures (Pvt.) Limited maintains four specialized corporate divisions managed by certified civil engineers, enterprise IT architects, and public procurement specialists.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#0a192f] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
            }`}
          >
            All Divisions
          </button>
          <button
            onClick={() => setActiveTab('it-hardware-procurement')}
            className={`px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'it-hardware-procurement'
                ? 'bg-[#0a192f] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
            }`}
          >
            ICT Hardware & Enterprise Systems
          </button>
          <button
            onClick={() => setActiveTab('civil-construction')}
            className={`px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'civil-construction'
                ? 'bg-[#0a192f] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
            }`}
          >
            Civil Works (PEC Category C-2)
          </button>
          <button
            onClick={() => setActiveTab('government-tenders')}
            className={`px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'government-tenders'
                ? 'bg-[#0a192f] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
            }`}
          >
            Statutory Public Tenders (PPRA)
          </button>
          <button
            onClick={() => setActiveTab('general-order-supply')}
            className={`px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'general-order-supply'
                ? 'bg-[#0a192f] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
            }`}
          >
            General Order Supply
          </button>
        </div>

        {/* Services Grid with Real Corporate Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-300 overflow-hidden flex flex-col justify-between hover:border-slate-500 shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Division Image Header */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={divisionImages[service.id]}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#0a192f] text-amber-400 border border-slate-700">
                    Division 0{index + 1}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <h3 className="text-lg font-bold font-sans">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-xs font-semibold text-amber-800 mb-2 uppercase tracking-wide">
                  {service.tagline}
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Scope Points */}
                <div className="space-y-2 mb-6 bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-bold block mb-1">
                    Statutory Deliverables & Contract Scope:
                  </span>
                  <ul className="space-y-1.5">
                    {service.detailedPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Capabilities Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.capabilities.map((cap, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Meta & Action */}
              <div className="p-6 pt-0 border-t border-slate-100">
                <div className="grid grid-cols-2 gap-3 mb-4 pt-4">
                  {service.stats.map((stat, idx) => (
                    <div key={idx} className="p-2.5 bg-slate-50 rounded border border-slate-200">
                      <div className="text-base font-bold text-slate-900 font-mono">{stat.value}</div>
                      <div className="text-[11px] text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{service.complianceHighlight}</span>
                  </div>

                  <button
                    onClick={onSelectServiceForRfq}
                    className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-amber-700 transition-colors uppercase tracking-wider cursor-pointer"
                  >
                    <span>Request Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
