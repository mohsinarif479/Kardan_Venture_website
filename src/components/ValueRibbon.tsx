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
      {/* Dark Forest Teal Ribbon matching mockup */}
      <section 
        className="w-full bg-[#062423] text-white py-8 border-t border-b border-[#0D3837] relative overflow-hidden"
        aria-label="Core Brand Values"
      >
        {/* Subtle decorative geometric overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#2DD4BF_1px,transparent_1px)] [background-size:16px_16px]" 
          aria-hidden="true" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center divide-y sm:divide-y-0 sm:divide-x divide-[#0D3837]/80">
            {BRAND_VALUES.map((item, idx) => {
              const IconComp = VALUE_ICONS[item.icon] ?? ShieldCheck;
              return (
                <div 
                  key={item.title} 
                  className={`flex items-center gap-4 ${idx !== 0 ? 'sm:pl-6' : ''} ${idx !== 0 ? 'pt-4 sm:pt-0' : ''}`}
                >
                  {/* Clean outline icon in mint accent */}
                  <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#2DD4BF]">
                    <IconComp className="w-6 h-6" aria-hidden="true" />
                  </div>
                  
                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#526174]">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#0D9488] shrink-0" aria-hidden="true" />
            <span className="font-medium">
              Registered Office: 2nd Floor, Corporate Avenue, Punjab, Pakistan
            </span>
          </div>

          <div className="flex items-center gap-2 tracking-[0.2em] uppercase font-bold text-[11px] text-[#0A3433]">
            <span className="w-6 h-[1.5px] bg-[#0D9488]" />
            <span>TO THE LAST CHIP</span>
          </div>
        </div>
      </div>
    </div>
  );
}

