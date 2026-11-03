import React from "react";
import Link from "next/link";
import { 
  Landmark, 
  Package, 
  ShieldCheck, 
  Coffee, 
  ArrowRight,
  type LucideIcon 
} from "lucide-react";
import { CORE_CAPABILITIES } from "@/lib/constants";
import ScrollReveal from "@/components/ScrollReveal";

const ICON_MAP: Record<string, LucideIcon> = {
  Landmark,
  Package,
  ShieldCheck,
  Coffee,
};

export default function CoreCapabilities() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching mockup */}
        <ScrollReveal>
          <div className="max-w-3xl">
            {/* Kicker with teal horizontal bar */}
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#0D9488] rounded-full" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#0D9488]">
                OUR CORE BUSINESS & CAPABILITIES
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A3433] tracking-tight leading-tight">
              Government Procurement & Supply Solutions
            </h2>

            {/* Subheading */}
            <p className="mt-4 text-base sm:text-lg text-[#526174] leading-relaxed">
              From tender participation to contract fulfilment, we provide reliable solutions in IT equipment, supplies and related services.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Card Responsive Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {CORE_CAPABILITIES.map((card, index) => {
            const IconComponent = ICON_MAP[card.icon] ?? Package;
            return (
              <ScrollReveal key={card.title} delay={index * 90} className="h-full">
                <div className="group relative bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1">
                  
                  <div>
                    {/* Dark Teal Circular Icon Badge matching mockup */}
                    <div className="w-13 h-13 rounded-full bg-[#0A3837] group-hover:bg-[#0D9488] text-white flex items-center justify-center shrink-0 mb-6 transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>

                    {/* Badge if present (e.g. Future Ambition) */}
                    {card.badge && (
                      <div className="mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 tracking-wide">
                          {card.badge}
                        </span>
                      </div>
                    )}

                    {/* Card Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A2E2C] group-hover:text-[#0D9488] transition-colors leading-snug mb-3">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-sm text-[#526174] leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Right Circular Arrow Button matching mockup */}
                  <div className="pt-6 mt-4 flex items-center justify-end border-t border-slate-100">
                    <Link
                      href={card.href}
                      className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-[#0D9488] group-hover:bg-[#0D9488] text-slate-500 group-hover:text-white flex items-center justify-center transition-all duration-200"
                      aria-label={`Explore ${card.title}`}
                    >
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

