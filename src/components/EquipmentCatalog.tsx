'use client';

import React, { useState, useMemo } from 'react';
import { 
  Server, 
  Laptop, 
  Projector, 
  Monitor, 
  Network, 
  Zap, 
  Search, 
  SlidersHorizontal, 
  Check, 
  Plus, 
  ShieldCheck, 
  Clock, 
  Info
} from 'lucide-react';
import { EQUIPMENT_CATALOG } from '../data/companyData';
import { EquipmentItem } from '../types';

interface EquipmentCatalogProps {
  onAddItemToRfq: (item: EquipmentItem) => void;
  selectedItemIds: string[];
}

export default function EquipmentCatalog({ onAddItemToRfq, selectedItemIds }: EquipmentCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inspectedItem, setInspectedItem] = useState<EquipmentItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Equipment Lines', icon: SlidersHorizontal },
    { id: 'servers', label: 'Enterprise Rack Servers', icon: Server },
    { id: 'laptops', label: 'Fleet Commercial Laptops', icon: Laptop },
    { id: 'projectors', label: 'Laser Projectors & 4K Panels', icon: Projector },
    { id: 'desktops', label: 'Commercial Desktops & AIO', icon: Monitor },
    { id: 'networking', label: 'Campus Core Networking', icon: Network },
    { id: 'power', label: 'Industrial Online UPS Systems', icon: Zap },
  ];

  const filteredItems = useMemo(() => {
    return EQUIPMENT_CATALOG.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.brand.toLowerCase().includes(query) ||
        item.model.toLowerCase().includes(query) ||
        item.keyFeature.toLowerCase().includes(query) ||
        item.specs.some(s => s.toLowerCase().includes(query));
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="catalog" className="py-20 lg:py-24 bg-[#e6ecf4] text-[#0c1e38] relative border-b border-[#cbd7e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#cbd7e6]">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neu-flat-sm text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
              <Server className="w-3.5 h-3.5" />
              <span>Enterprise ICT Hardware Procurement Desk</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e38] tracking-tight font-sans">
              Authorized Tier-1 Hardware Lines & Systems
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Kardan Ventures (Pvt.) Limited is an authorized direct supplier for public sector tenders. Every server, laptop fleet, laser projector, and workstation includes official Manufacturer Authorization Forms (MAF) and 3-to-5 year onsite SLA support.
            </p>
          </div>

          <div className="shrink-0 text-left md:text-right">
            <div className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Procurement Standard</div>
            <div className="text-sm font-bold text-[#0c1e38] font-mono">PPRA & EPADS Compliant Specs</div>
            <div className="text-[11px] text-emerald-700 font-bold">✓ Ex-Stock Warehousing Available</div>
          </div>
        </div>

        {/* Neumorphic Search & Filter Console */}
        <div className="neu-flat-lg rounded-3xl p-6 sm:p-7 mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            
            {/* Search Box: Neumorphic Inset */}
            <div className="relative flex-1 max-w-lg">
              <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search technical specs, processor, brand (e.g. 'Xeon', 'Dell', 'Laser', 'ThinkPad')..."
                className="w-full pl-11 pr-14 py-3.5 neu-input rounded-2xl text-xs sm:text-sm text-[#0c1e38] placeholder-slate-400 font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="text-xs font-mono text-slate-600 flex items-center gap-3">
              <span>Catalog Index: <strong className="text-[#0c1e38]">{filteredItems.length}</strong> Qualified Models</span>
              {selectedItemIds.length > 0 && (
                <span className="px-3 py-1 rounded-full neu-btn-primary text-white font-bold text-[11px]">
                  {selectedItemIds.length} in BoQ
                </span>
              )}
            </div>

          </div>

          {/* Categories Buttons */}
          <div className="flex flex-wrap gap-2.5 mt-5 pt-5 border-t border-[#cbd7e6]/70">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'neu-btn-primary text-white'
                      : 'neu-btn text-slate-700 hover:text-[#0c1e38]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => {
            const isSelected = selectedItemIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="neu-card rounded-3xl p-7 flex flex-col justify-between relative"
              >
                {/* Brand & Badge */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-[#cbd7e6]/70">
                    <div>
                      <span className="text-[11px] font-mono font-extrabold text-amber-700 uppercase tracking-wider">
                        {item.brand}
                      </span>
                      <div className="text-[11px] text-slate-500 font-medium">{item.categoryLabel}</div>
                    </div>
                    {item.badge && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full neu-pill text-[#0c1e38]">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Key Feature */}
                  <h3 className="text-base sm:text-lg font-bold text-[#0c1e38] mb-1.5 font-sans">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-600 mb-5 leading-relaxed font-normal">
                    {item.keyFeature}
                  </p>

                  {/* Technical Specs: Neumorphic Inset Well */}
                  <div className="space-y-2 p-4 rounded-2xl neu-pressed mb-5 text-xs">
                    <div className="text-[10px] font-mono uppercase text-[#0c1e38] font-bold tracking-wider mb-1.5 flex items-center justify-between">
                      <span>Technical Specification Matrix</span>
                      <span className="text-emerald-700">OEM Verifiable</span>
                    </div>
                    {item.specs.slice(0, 4).map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5"></span>
                        <span className="leading-snug">{spec}</span>
                      </div>
                    ))}
                    {item.specs.length > 4 && (
                      <button
                        onClick={() => setInspectedItem(item)}
                        className="text-[11px] text-blue-700 font-bold hover:underline pt-1 inline-block cursor-pointer"
                      >
                        + View {item.specs.length - 4} additional technical parameters
                      </button>
                    )}
                  </div>

                  {/* SLA & Lead Time Chips */}
                  <div className="grid grid-cols-2 gap-3 text-[11px] mb-5">
                    <div className="p-2.5 rounded-xl neu-pressed-sm text-slate-700 flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="truncate font-medium">{item.warranty}</span>
                    </div>
                    <div className="p-2.5 rounded-xl neu-pressed-sm text-slate-700 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate font-medium">{item.leadTime}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#cbd7e6]/70 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setInspectedItem(item)}
                    className="neu-btn text-xs font-bold text-slate-700 hover:text-[#0c1e38] px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-slate-500" />
                    <span>Datasheet</span>
                  </button>

                  <button
                    onClick={() => onAddItemToRfq(item)}
                    className={`text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'neu-btn-gold text-white'
                        : 'neu-btn-primary text-white'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Included in BoQ</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to BoQ</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Datasheet Modal */}
        {inspectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="neu-flat-lg rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto text-[#0c1e38]">
              
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#cbd7e6]">
                <div>
                  <span className="text-xs font-mono uppercase text-amber-700 font-extrabold">
                    {inspectedItem.brand} • {inspectedItem.categoryLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0c1e38] mt-1 font-sans">
                    {inspectedItem.name}
                  </h3>
                </div>
                <button
                  onClick={() => setInspectedItem(null)}
                  className="neu-btn w-8 h-8 rounded-full flex items-center justify-center font-bold text-slate-700 hover:text-black cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="py-5 space-y-5 text-xs sm:text-sm">
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-500 font-bold mb-1.5">Architecture & Deployment Application</h4>
                  <p className="text-slate-700 leading-relaxed font-normal">{inspectedItem.keyFeature}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-500 font-bold mb-2">Technical Specification Breakdown</h4>
                  <div className="space-y-2 neu-pressed p-5 rounded-2xl">
                    {inspectedItem.specs.map((s, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800">
                        <span className="text-emerald-700 font-bold">✓</span>
                        <span className="font-medium">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  <div className="p-3.5 rounded-2xl neu-pressed-sm">
                    <div className="text-slate-500 font-mono text-[11px] font-semibold">Recommended Government Target:</div>
                    <div className="font-bold text-[#0c1e38] mt-1">{inspectedItem.idealFor}</div>
                  </div>
                  <div className="p-3.5 rounded-2xl neu-pressed-sm">
                    <div className="text-slate-500 font-mono text-[11px] font-semibold">Compliance Clearance:</div>
                    <div className="font-bold text-emerald-700 mt-1">{inspectedItem.complianceRating}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#cbd7e6] flex items-center justify-end gap-3">
                <button
                  onClick={() => setInspectedItem(null)}
                  className="neu-btn px-5 py-2.5 rounded-xl text-slate-700 text-xs font-bold cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onAddItemToRfq(inspectedItem);
                    setInspectedItem(null);
                  }}
                  className="neu-btn-primary px-6 py-2.5 rounded-xl text-white text-xs font-extrabold uppercase tracking-wider cursor-pointer"
                >
                  Include in Tender BoQ
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
