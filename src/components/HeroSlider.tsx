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

  // Check prefers-reduced-motion
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

  // Auto-rotation every 6 seconds, pauses on hover and reduced-motion
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion, nextSlide]);

  return (
    <section
      className="relative w-full h-[85vh] min-h-[85vh] overflow-hidden bg-[#102A43] flex items-center select-none"
      aria-label="Featured Highlights"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides with Crossfade */}
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
                : `transition-opacity duration-700 ease-in-out ${
                    isActive
                      ? 'opacity-100 z-10'
                      : 'opacity-0 z-0 pointer-events-none'
                  }`
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Multi-layer high-contrast scrim overlay */}
            {/* Primary gradient: rich dark navy on left where text sits, fading toward right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#051120]/95 via-[#08182c]/85 to-[#08182c]/60" />
            {/* Vertical vignette to frame top header and bottom controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#051120]/90 via-transparent to-black/40" />
            {/* Radial soft depth behind text */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_50%,rgba(5,17,32,0.8)_0%,transparent_75%)]" />

            {/* Slide Content */}
            <div className="relative z-10 w-full h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 sm:pt-0">
                <div className="max-w-3xl text-left space-y-6">
                  
                  {/* Institutional Authority Badge */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#C5A46D] shadow-sm animate-pulse" />
                    <span className="text-white/95">Government Contractor & Institutional Partner</span>
                  </div>

                  {/* High-visibility Headline with text shadow - explicitly white */}
                  <h1 
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold !text-white whitespace-pre-line tracking-tight leading-[1.14] hero-title-shadow"
                    style={{ color: '#ffffff' }}
                  >
                    {slide.headline}
                  </h1>

                  {/* High-contrast Description */}
                  <p 
                    className="text-lg sm:text-xl !text-slate-100 max-w-2xl leading-relaxed font-normal hero-subtitle-shadow"
                    style={{ color: '#f1f5f9' }}
                  >
                    {slide.description}
                  </p>

                  {/* Dual Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                    <Link
                      href={slide.ctaHref}
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white hover:bg-slate-100 text-[#102A43] font-bold text-sm rounded-lg shadow-xl shadow-black/30 transition-all hover:-translate-y-0.5 cursor-pointer"
                      tabIndex={isActive ? 0 : -1}
                    >
                      <span>{slide.cta}</span>
                      <ArrowRight className="w-4 h-4 text-[#1D4ED8]" />
                    </Link>

                    <Link
                      href="/contact-us"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-white/35 hover:border-white text-white text-sm font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all hover:-translate-y-0.5 cursor-pointer"
                      tabIndex={isActive ? 0 : -1}
                    >
                      <span>Inquire Directly</span>
                    </Link>
                  </div>

                  {/* Institutional Trust Indicators */}
                  <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-200 font-medium border-t border-white/15">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>PPRA Pre-Qualified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#C5A46D]" />
                      <span>PEC Category C-2 Licensed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      <span>Schedule-A Bank Guarantees</span>
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
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-[#051120]/70 hover:bg-[#051120] text-white backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-[#051120]/70 hover:bg-[#051120] text-white backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots at Bottom Center */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5"
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
              className={`rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                isActive
                  ? 'bg-white w-8 h-2.5'
                  : 'bg-white/40 hover:bg-white/70 w-2.5 h-2.5'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
