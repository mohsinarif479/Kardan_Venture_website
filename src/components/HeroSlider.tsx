'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSlider() {
  return (
    <section
      className="relative w-full min-h-[580px] lg:min-h-[640px] xl:min-h-[680px] overflow-hidden bg-[#062423] flex items-center select-none"
      aria-label="Government Contractor & Institutional Partner Banner"
    >
      {/* Background Photography of Pakistan Government Secretariat Building with Flag */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-right sm:bg-center lg:bg-[right_center] bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-pakistan-government.jpg')`,
        }}
      >
        {/* Left Dark Forest Pine Gradient Overlay matching mockup */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#062423] via-[#062423]/95 sm:via-[#062423]/90 md:via-[#062423]/80 lg:via-[#062423]/70 via-50% to-transparent" />
        
        {/* Subtle top/bottom framing */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#062423]/60 via-transparent to-black/20" />
      </div>

      {/* Decorative Modern Geometric Translucent Accent (Bottom Right) matching mockup */}
      <div 
        className="hidden lg:block absolute bottom-0 right-0 w-80 h-48 bg-gradient-to-tl from-[#14B8A6]/25 via-[#0D9488]/15 to-transparent pointer-events-none transform -skew-x-12 translate-x-10 translate-y-6" 
        aria-hidden="true" 
      />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl text-left space-y-6">
          
          {/* Kicker with Mint Accent Bar matching mockup: "— TRUST / INNOVATION / GROWTH" */}
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#2DD4BF] rounded-full" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#2DD4BF]">
              TRUST / INNOVATION / GROWTH
            </span>
          </div>

          {/* Three-part Headline matching mockup exactly:
              Line 1: Kardan Ventures (Private) Limited (White)
              Line 2: Built on Trust. Driven by Expertise. (White)
              Line 3: Focused on Growth. (Mint Green) */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold !text-white tracking-tight leading-[1.14] hero-title-shadow"
            style={{ color: '#ffffff' }}
          >
            <span className="block text-white">
              Kardan Ventures (Private) Limited
            </span>
            <span className="block text-white/95 mt-1 sm:mt-2">
              Built on Trust. Driven by Expertise.
            </span>
            <span className="block text-[#34D399] mt-1 sm:mt-2">
              Focused on Growth.
            </span>
          </h1>

          {/* Subtitle Description matching mockup */}
          <p 
            className="text-base sm:text-lg md:text-xl !text-slate-100 max-w-2xl leading-relaxed font-normal hero-subtitle-shadow"
            style={{ color: '#f1f5f9' }}
          >
            A trusted government contractor and IT supply partner, delivering quality products, professional services and long-term business relationships across Pakistan.
          </p>

          {/* Action Button matching mockup: "Explore Our Business →" in vibrant emerald pill */}
          <div className="pt-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#0D7A72] to-[#14B8A6] hover:from-[#0F8A81] hover:to-[#2DD4BF] text-white font-bold text-sm rounded-xl shadow-xl shadow-black/25 transition-all hover:translate-x-1 cursor-pointer"
            >
              <span>Explore Our Business</span>
              <ArrowRight className="w-4 h-4 text-emerald-100" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
