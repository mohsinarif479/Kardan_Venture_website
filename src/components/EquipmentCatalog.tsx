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

  const categoryImages: Record<string, string> = {
    servers: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80',
    laptops: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80',
    projectors: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=600&q=80',
    desktops: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=600&q=80',
    networking: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
    power: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
  };

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
    <section id="catalog" className="py-20 lg:py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
              <Server className="w-3.5 h-3.5" />
              <span>Enterprise ICT Hardware Procurement Division</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-sans">
              Authorized Tier-1 Hardware Systems & Equipment
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Kardan Ventures (Pvt.) Limited supplies original manufacturer equipment for government tenders. Every server, laptop fleet, laser projector, and workstation includes official Manufacturer Authorization Forms (MAF) and 3-to-5 year onsite SLA support.
            </p>
          </div>

          <div className="shrink-0 text-left md:text-right">
            <div className="text-[11px] font-mono text-slate-500 uppercase">Procurement Standard</div>
            <div className="text-sm font-bold text-slate-900 font-mono">PPRA & EPADS Compliant Specs</div>
            <div className="text-[11px] text-emerald-700 font-medium">✓ Ex-Stock Buffer Warehoused</div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-4 sm:p-5 mb-10 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            
            {/* Search Box */}
            <div className="relative flex-1 max-w-lg">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search technical specs, processor, brand (e.g. 'Xeon', 'Dell', 'Laser', 'ThinkPad')..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="text-xs font-mono text-slate-600 flex items-center gap-2">
              <span>Catalog Index: <strong>{filteredItems.length}</strong> Qualified Enterprise Models</span>
              {selectedItemIds.length > 0 && (
                <span className="px-2 py-0.5 rounded bg-slate-900 text-white font-semibold">
                  {selectedItemIds.length} added to BoQ
                </span>
              )}
            </div>

          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-200">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Equipment Cards Grid with Clean Product Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => {
            const isSelected = selectedItemIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-300 overflow-hidden flex flex-col justify-between hover:border-slate-500 shadow-sm hover:shadow-md transition-all duration-200"
              >
                {/* Product Image Header with Brand Badge */}
                <div className="relative h-44 w-full bg-slate-100 overflow-hidden border-b border-slate-200">
                  <img
                    src={categoryImages[item.category] || categoryImages.servers}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/95 text-slate-900 shadow-sm border border-slate-200">
                      {item.brand}
                    </span>
                  </div>

                  {item.badge && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-600 text-white shadow-sm">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-2 left-3 text-white">
                    <div className="text-[11px] font-mono text-slate-200">{item.categoryLabel}</div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-1.5 font-sans">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {item.keyFeature}
                  </p>

                  {/* Specs Box */}
                  <div className="space-y-1.5 p-3 rounded-lg bg-slate-50 border border-slate-200 mb-4 text-xs">
                    <div className="text-[10px] font-mono uppercase text-slate-500 font-bold tracking-wider mb-1 flex items-center justify-between">
                      <span>Technical Specification Matrix</span>
                      <span className="text-emerald-700">OEM Verifiable</span>
                    </div>
                    {item.specs.slice(0, 4).map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0 mt-1.5"></span>
                        <span className="leading-snug">{spec}</span>
                      </div>
                    ))}
                    {item.specs.length > 4 && (
                      <button
                        onClick={() => setInspectedItem(item)}
                        className="text-[11px] text-slate-900 font-semibold hover:underline pt-1 inline-block"
                      >
                        + View {item.specs.length - 4} additional technical parameters
                      </button>
                    )}
                  </div>

                  {/* SLA & Lead Time */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] mb-4">
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 text-slate-700 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="truncate">{item.warranty}</span>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 text-slate-700 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{item.leadTime}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setInspectedItem(item)}
                    className="text-xs font-semibold text-slate-700 hover:text-slate-950 px-3 py-1.5 rounded border border-slate-300 hover:border-slate-500 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-slate-500" />
                    <span>Technical Datasheet</span>
                  </button>

                  <button
                    onClick={() => onAddItemToRfq(item)}
                    className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-700 text-white'
                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Included in Tender BoQ</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Tender BoQ</span>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="bg-white border border-slate-300 rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-slate-900">
              
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-mono uppercase text-amber-700 font-bold">
                    {inspectedItem.brand} • {inspectedItem.categoryLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mt-1 font-sans">
                    {inspectedItem.name}
                  </h3>
                </div>
                <button
                  onClick={() => setInspectedItem(null)}
                  className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                >
                  ✕
                </button>
              </div>

              <div className="py-5 space-y-4 text-xs sm:text-sm">
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-500 font-bold mb-1">Architecture & Deployment Application</h4>
                  <p className="text-slate-700 leading-relaxed">{inspectedItem.keyFeature}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-500 font-bold mb-2">Technical Specification Breakdown</h4>
                  <div className="space-y-2 bg-slate-50 p-4 rounded-lg border border-slate-200">
                    {inspectedItem.specs.map((s, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800">
                        <span className="text-slate-900 font-bold">✓</span>
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded bg-slate-50 border border-slate-200">
                    <div className="text-slate-500 font-mono">Recommended Government Target:</div>
                    <div className="font-semibold text-slate-900 mt-0.5">{inspectedItem.idealFor}</div>
                  </div>
                  <div className="p-3 rounded bg-slate-50 border border-slate-200">
                    <div className="text-slate-500 font-mono">Compliance Clearance:</div>
                    <div className="font-semibold text-emerald-700 mt-0.5">{inspectedItem.complianceRating}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  onClick={() => setInspectedItem(null)}
                  className="px-4 py-2 rounded bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onAddItemToRfq(inspectedItem);
                    setInspectedItem(null);
                  }}
                  className="px-5 py-2 rounded bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
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
