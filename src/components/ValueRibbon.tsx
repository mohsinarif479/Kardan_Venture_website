import React from "react";
import { 
  Handshake, 
  ShieldCheck, 
  Users, 
  Sprout, 
  MapPin,
  type LucideIcon 
} from "lucide-react";
import { BRAND_VALUES } from "@/lib/constants";

const VALUE_ICONS: Record<string, LucideIcon> = {
  Handshake,
  ShieldCheck,
  Users,
  Sprout,
};

export default function ValueRibbon() {
  return (
    <div className="w-full">
      {/* Dark Forest Pine Ribbon matching mockup with geometric diagonal edge cuts */}
      <section 
        className="w-full bg-[#062423] text-white py-6 md:py-7 relative overflow-hidden"
        aria-label="Core Brand Values"
      >
        {/* Left diagonal corner accent */}
        <div 
          className="hidden xl:block absolute -left-12 -top-12 w-28 h-28 bg-[#0D4D4B]/40 transform rotate-45 pointer-events-none" 
          aria-hidden="true" 
        />
        
        {/* Right diagonal corner accent matching mockup */}
        <div 
          className="hidden xl:block absolute -right-12 -bottom-12 w-36 h-36 bg-gradient-to-tl from-[#14B8A6]/25 to-transparent transform rotate-45 pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 items-center">
            {BRAND_VALUES.map((item, idx) => {
              const IconComp = VALUE_ICONS[item.icon] ?? ShieldCheck;
              const isLast = idx === BRAND_VALUES.length - 1;
              return (
                <div 
                  key={item.title} 
                  className={`flex items-center gap-4 ${
                    idx !== 0 ? 'lg:pl-8 lg:border-l lg:border-white/15' : ''
                  } ${!isLast ? 'lg:pr-6' : ''}`}
                >
                  {/* Clean outline icon in crisp white/mint */}
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center shrink-0 text-[#2DD4BF]">
                    <IconComp className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  
                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-emerald-100/75 mt-0.5">
                      {item.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sub-strip with Registered Office & Corporate Motto matching mockup */}
      <div className="w-full bg-white border-b border-slate-200 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#526174]">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#0D9488] shrink-0" aria-hidden="true" />
            <span className="font-medium text-[#475569]">
              Registered Office: (Your Registered Address), Punjab, Pakistan
            </span>
          </div>

          <div className="flex items-center gap-2 tracking-[0.25em] uppercase font-bold text-[11px] text-[#0A3433]">
            <span className="w-8 h-[1.5px] bg-[#0A3433]" />
            <span>TO THE LAST CHIP</span>
          </div>
        </div>
      </div>
    </div>
  );
}
