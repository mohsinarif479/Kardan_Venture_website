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
        <div className={`inline-flex items-center gap-2.5 mb-2.5 ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-6 h-[2px] bg-[#0D9488] rounded-full" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0D9488]">
            {label}
          </span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0A3433] tracking-tight leading-tight">
        {title}
      </h2>

      {description && (
        <p
          className={`text-base sm:text-lg text-[#526174] max-w-2xl mt-4 leading-relaxed ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
