import React from 'react';

export interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`flex flex-col ${
        isCenter ? 'items-center text-center' : 'items-start text-left'
      } ${className}`}
    >
      {label && (
        <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#1D4ED8] mb-2.5">
          {label}
        </span>
      )}

      {/* Gold bar accent line between label and title */}
      <div
        className={`gold-bar mb-3 ${isCenter ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />

      <h2 className="text-3xl md:text-4xl font-bold text-[#102A43] tracking-tight leading-tight">
        {title}
      </h2>

      {description && (
        <p
          className={`text-base md:text-lg text-[#526174] max-w-2xl mt-4 leading-relaxed ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
