'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Server, 
  Laptop, 
  Projector, 
  Monitor, 
  Network, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { EQUIPMENT_CATALOG } from '@/lib/constants';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

export default function EquipmentShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Equipment' },
    { id: 'servers', label: 'Enterprise Servers', icon: Server },
    { id: 'laptops', label: 'Fleet Laptops', icon: Laptop },
    { id: 'projectors', label: 'Laser Projectors & IFP', icon: Projector },
    { id: 'desktops', label: 'Workstations', icon: Monitor },
    { id: 'networking', label: 'Campus Networking', icon: Network },
  ];

  const filteredItems = activeCategory === 'all'
    ? EQUIPMENT_CATALOG
    : EQUIPMENT_CATALOG.filter((item) => item.category === activeCategory);

  return (
    <section id="equipment" className="py-20 md:py-28 bg-[#F4F7FA] border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <ScrollReveal>
          <SectionHeading
            label="Tier-1 Enterprise Hardware"
            title="Authorized IT Equipment Procurement"
            description="Genuine enterprise computing hardware supplied directly with OEM Manufacturer Authorization Forms (MAF), official 3-to-5 year onsite SLAs, and full PPRA statutory compliance."
          />
        </ScrollReveal>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 my-10">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#1D4ED8] text-white shadow-md shadow-blue-900/20'
                    : 'bg-white text-[#334E68] border border-[#E2E8F0] hover:border-[#1D4ED8] hover:text-[#1D4ED8]'
                }`}
              >
                {cat.icon && <cat.icon className="w-3.5 h-3.5" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 80}>
              <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden flex flex-col h-full card-hover shadow-sm group">
                
                {/* Visual Image Header */}
                <div className="relative h-56 w-full bg-[#102A43] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill on Image */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#102A43]/80 backdrop-blur-md text-white border border-white/20">
                    {item.categoryLabel}
                  </span>

                  {/* Brand Tag */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-bold bg-[#C5A46D] text-white">
                    {item.brand}
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#102A43] group-hover:text-[#1D4ED8] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#526174] font-medium mt-1 mb-4 italic">
                      Model: {item.model}
                    </p>

                    <div className="p-3 bg-[#F4F7FA] rounded-lg border border-[#E2E8F0] mb-5">
                      <p className="text-xs text-[#334E68] font-medium leading-relaxed">
                        <Sparkles className="w-3.5 h-3.5 text-[#C5A46D] inline mr-1.5" />
                        {item.keyFeature}
                      </p>
                    </div>

                    {/* Specifications List */}
                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-bold text-[#102A43] uppercase tracking-wider">
                        Technical Specifications:
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#526174]">
                        {item.specs.map((spec, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0 mt-0.5" />
                            <span className="leading-tight">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom Metadata & CTA */}
                  <div className="pt-5 border-t border-[#E2E8F0] space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#526174]">
                      <span className="flex items-center gap-1 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        {item.warranty}
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-500 font-mono">
                      {item.complianceRating}
                    </div>

                    <Link
                      href={`/contact-us?subject=Tender+Inquiry+for+${encodeURIComponent(item.name)}`}
                      className="w-full py-2.5 px-4 rounded-lg bg-[#102A43] hover:bg-[#1D4ED8] text-white font-semibold text-xs uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2 text-center"
                    >
                      <span>Request Tender BoQ</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Assurance Strip */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-[#102A43]">
              Need a Custom IT Bill of Quantities (BoQ) for a Bidding Lot?
            </h4>
            <p className="text-xs text-[#526174]">
              We supply custom configured servers, memory upgrades, encrypted laptops, and enterprise networking compliant with government tender tender sheets.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="btn-primary shrink-0"
          >
            <span>Consult Our IT Desk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

