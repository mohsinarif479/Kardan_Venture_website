import React from 'react';
import Link from 'next/link';

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
          : 'bg-[#102A43] bg-gradient-to-br from-[#102A43] via-[#1B3A5C] to-[#102A43]'
      } ${className}`}
      style={isImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {/* Dark overlay for image variant or subtle ambient glow for dark variant */}
      {isImage ? (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" aria-hidden="true" />
      ) : (
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,78,216,0.18),transparent_50%)] pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Content centered, max-w-3xl */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
          {heading}
        </h2>
        <p className="text-base md:text-lg text-white/80 mt-4 leading-relaxed max-w-2xl">
          {description}
        </p>
        <div className="mt-8">
          <Link href={buttonHref} className="btn-white">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
