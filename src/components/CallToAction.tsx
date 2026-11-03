import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface CallToActionProps {
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant?: 'dark' | 'image';
  backgroundImage?: string;
  className?: string;
}

export default function CallToAction({
  heading,
  description,
  buttonText,
  buttonHref,
  variant = 'dark',
  backgroundImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
  className = '',
}: CallToActionProps) {
  const isImage = variant === 'image';

  return (
    <section
      className={`relative w-full overflow-hidden py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${
        isImage
          ? 'bg-cover bg-center bg-no-repeat'
          : 'bg-[#062322] bg-gradient-to-br from-[#062322] via-[#0A3433] to-[#082E2D]'
      } ${className}`}
      style={isImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {/* Decorative radial subtle emerald glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.18),transparent_50%)] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#2DD4BF_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />

      {/* Content centered, max-w-3xl */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-emerald-200 border border-white/20 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-xs">
          <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
          <span className="text-white/95">Government Contractor & Institutional Partner</span>
        </div>

        {/* Heading: Guaranteed 100% pure bright white with text-shadow */}
        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold !text-white tracking-tight leading-[1.18] hero-title-shadow"
          style={{ color: '#ffffff' }}
        >
          {heading}
        </h2>

        {/* Description: High contrast crisp white-tint text */}
        <p 
          className="text-base sm:text-lg !text-slate-100 mt-5 leading-relaxed max-w-2xl font-normal hero-subtitle-shadow"
          style={{ color: '#f1f5f9' }}
        >
          {description}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link 
            href={buttonHref} 
            className="btn-emerald inline-flex items-center gap-2 shadow-xl shadow-black/25 text-sm font-bold px-8 py-3.5 rounded-xl hover:translate-x-0.5 transition-all"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 text-emerald-100" />
          </Link>

          <Link 
            href="/about-us" 
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/30 hover:border-white text-white text-sm font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
          >
            <span>About Our Company</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
