'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  CheckCircle2 
} from 'lucide-react';
import { HERO_SLIDES } from '@/lib/constants';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const slideCount = HERO_SLIDES.length;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-rotation every 7 seconds, pauses on hover
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion, nextSlide]);

  return (
    <section
      className="relative w-full h-[88vh] min-h-[580px] max-h-[820px] overflow-hidden bg-[#062322] flex items-center select-none"
      aria-label="Corporate Hero Banner"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides with smooth crossfade */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${slideCount}`}
            aria-hidden={!isActive}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat ${
              prefersReducedMotion
                ? isActive
                  ? 'opacity-100 z-10'
                  : 'opacity-0 z-0 pointer-events-none'
                : `transition-opacity duration-1000 ease-in-out ${
                    isActive
                      ? 'opacity-100 z-10'
                      : 'opacity-0 z-0 pointer-events-none'
                  }`
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Multi-layered forest-teal scrim matching the mockup */}
            {/* Deep pine dark gradient on left where text is anchored */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#062322]/98 via-[#0A3433]/90 md:via-[#0A3433]/80 to-[#0A3433]/30" />
            
            {/* Bottom-to-top subtle dark gradient to anchor the ribbon transition */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#062322] via-transparent to-black/30" />

            {/* Slide Content Container */}
            <div className="relative z-10 w-full h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-0">
                <div className="max-w-3xl text-left space-y-6">
                  
                  {/* Mockup Kicker with Mint Accent Bar */}
                  <div className="inline-flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-[#2DD4BF] rounded-full" />
                    <span className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#2DD4BF]">
                      {slide.kicker}
                    </span>
                  </div>

                  {/* Main Headline matching mockup exactly:
                      Line 1: Kardan Ventures (Private) Limited
                      Line 2: Built on Trust. Driven by Expertise.
                      Line 3: Focused on Growth. (in vivid mint green) */}
                  <h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold !text-white tracking-tight leading-[1.14] hero-title-shadow"
                    style={{ color: '#ffffff' }}
                  >
                    <span className="block text-white">
                      {slide.headlinePrefix}
                    </span>
                    <span className="block text-white/95 mt-1 sm:mt-2">
                      {slide.headlineMain}
                    </span>
                    <span className="block text-[#34D399] mt-1 sm:mt-2">
                      {slide.headlineHighlight}
                    </span>
                  </h1>

                  {/* Subtitle Description */}
                  <p 
                    className="text-base sm:text-lg md:text-xl !text-slate-100 max-w-2xl leading-relaxed font-normal hero-subtitle-shadow"
                    style={{ color: '#f1f5f9' }}
                  >
                    {slide.description}
                  </p>

                  {/* Mockup Action Button: "Explore Our Business →" in vibrant emerald */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <Link
                      href={slide.ctaHref}
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-sm rounded-xl shadow-xl shadow-black/25 transition-all hover:translate-x-1 cursor-pointer"
                      tabIndex={isActive ? 0 : -1}
                    >
                      <span>{slide.cta}</span>
                      <ArrowRight className="w-4 h-4 text-emerald-200" />
                    </Link>

                    <Link
                      href="/contact-us"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/30 hover:border-white text-white text-sm font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all hover:-translate-y-0.5 cursor-pointer"
                      tabIndex={isActive ? 0 : -1}
                    >
                      <span>Inquire With Us</span>
                    </Link>
                  </div>

                  {/* Institutional Authority Badges */}
                  <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-emerald-100/90 font-medium border-t border-white/15">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                      <span>PPRA Pre-Qualified Supplier</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#2DD4BF]" />
                      <span>PEC Licensed Constructor</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                      <span>Institutional Hardware Partner</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Side Arrow Navigation Buttons */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-[#062322]/70 hover:bg-[#062322] text-white backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-[#062322]/70 hover:bg-[#062322] text-white backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Pagination Dots at Bottom Center */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5"
        role="tablist"
        aria-label="Slide selectors"
      >
        {HERO_SLIDES.map((_, index) => {
          const isActive = index === currentSlide;
          return (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF] ${
                isActive
                  ? 'bg-[#34D399] w-8 h-2.5'
                  : 'bg-white/40 hover:bg-white/70 w-2.5 h-2.5'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
