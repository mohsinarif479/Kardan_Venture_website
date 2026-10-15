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
  onSelectServiceForRfq: (serviceTitle?: string) => void;
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
    <section id="services" className="py-20 lg:py-24 bg-[#e6ecf4] text-[#0c1e38] relative border-b border-[#cbd7e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-flat-sm text-[#0c1e38] text-xs font-mono font-bold uppercase tracking-wider">
            <span>Corporate Operating Divisions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e38] tracking-tight font-sans">
            Specialized Infrastructure & Technology Divisions
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Kardan Ventures (Pvt.) Limited maintains four specialized corporate divisions managed by certified civil engineers, enterprise IT architects, and public procurement specialists.
          </p>
        </div>

        {/* Neumorphic Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'neu-btn-primary text-white'
                : 'neu-btn text-slate-700 hover:text-[#0c1e38]'
            }`}
          >
            All Divisions
          </button>
          <button
            onClick={() => setActiveTab('it-hardware-procurement')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'it-hardware-procurement'
                ? 'neu-btn-primary text-white'
                : 'neu-btn text-slate-700 hover:text-[#0c1e38]'
            }`}
          >
            ICT Hardware & Enterprise Systems
          </button>
          <button
            onClick={() => setActiveTab('civil-construction')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'civil-construction'
                ? 'neu-btn-primary text-white'
                : 'neu-btn text-slate-700 hover:text-[#0c1e38]'
            }`}
          >
            Civil Works (PEC C-2)
          </button>
          <button
            onClick={() => setActiveTab('government-tenders')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'government-tenders'
                ? 'neu-btn-primary text-white'
                : 'neu-btn text-slate-700 hover:text-[#0c1e38]'
            }`}
          >
            Public Tenders (PPRA)
          </button>
          <button
            onClick={() => setActiveTab('general-order-supply')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'general-order-supply'
                ? 'neu-btn-primary text-white'
                : 'neu-btn text-slate-700 hover:text-[#0c1e38]'
            }`}
          >
            General Order Supply
          </button>
        </div>

        {/* Services Grid with Neumorphic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="neu-card rounded-3xl overflow-hidden flex flex-col justify-between"
            >
              {/* Division Image Header */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900 m-2 rounded-2xl">
                <img
                  src={divisionImages[service.id]}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e38]/95 via-[#0c1e38]/40 to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0c1e38] text-amber-400 border border-slate-700 shadow-sm">
                    Division 0{index + 1}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
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
                <p className="text-xs font-bold text-amber-700 mb-2 uppercase tracking-wider">
                  {service.tagline}
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Scope Points: Sunken Well */}
                <div className="space-y-2 mb-6 neu-pressed p-5 rounded-2xl">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#0c1e38] font-bold block mb-1.5">
                    Statutory Deliverables & Contract Scope:
                  </span>
                  <ul className="space-y-2">
                    {service.detailedPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Capabilities Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.capabilities.map((cap, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-bold px-3 py-1 rounded-xl neu-pill text-slate-700"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Meta & Action */}
              <div className="p-6 pt-0 border-t border-[#cbd7e6]/60">
                <div className="grid grid-cols-2 gap-3.5 mb-4 pt-4">
                  {service.stats.map((stat, idx) => (
                    <div key={idx} className="p-3 neu-pressed-sm rounded-xl">
                      <div className="text-base font-extrabold text-[#0c1e38] font-mono">{stat.value}</div>
                      <div className="text-[11px] text-slate-500 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="text-[11px] text-slate-600 flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{service.complianceHighlight}</span>
                  </div>

                  <button
                    onClick={() => onSelectServiceForRfq(service.title)}
                    className="shrink-0 neu-btn px-4 py-2 rounded-xl inline-flex items-center gap-1.5 text-xs font-bold text-[#0c1e38] hover:text-amber-700 transition-colors uppercase tracking-wider cursor-pointer"
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

