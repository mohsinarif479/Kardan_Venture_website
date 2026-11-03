import React from "react";

interface KardanLogoProps {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export default function KardanLogo({
  className = "",
  variant = "dark",
  size = "md",
}: KardanLogoProps) {
  const isLight = variant === "light";

  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const titleSizes = {
    sm: "text-base tracking-wide",
    md: "text-lg md:text-[20px] tracking-[0.06em]",
    lg: "text-2xl tracking-[0.06em]",
  };

  const subSizes = {
    sm: "text-[9px] tracking-[0.22em]",
    md: "text-[10px] md:text-[11px] tracking-[0.26em]",
    lg: "text-xs tracking-[0.28em]",
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Architectural Skyscraper Monogram matching reference mockup */}
      <div className={`${iconSizes[size]} flex-shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Left building column: slanted top */}
          <path
            d="M7 38V17L15 11V38H7Z"
            fill={isLight ? "#2DD4BF" : "#083332"}
          />
          {/* Middle tall skyscraper column: peak apex */}
          <path
            d="M17 38V6L24.5 3L25.5 3V38H17Z"
            fill={isLight ? "#FFFFFF" : "#0C4341"}
          />
          {/* Right building column: slanted top */}
          <path
            d="M27.5 38V12L35.5 18V38H27.5Z"
            fill={isLight ? "#14B8A6" : "#083332"}
          />
          {/* Base foundation line */}
          <rect
            x="5.5"
            y="39"
            width="31"
            height="2.5"
            rx="1"
            fill={isLight ? "#2DD4BF" : "#083332"}
          />
        </svg>
      </div>

      {/* Brand Typography matching reference mockup */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-black font-[family-name:var(--font-sans)] leading-none ${titleSizes[size]} ${
            isLight ? "text-white" : "text-[#0F2928]"
          }`}
        >
          KARDAN VENTURES
        </span>
        <span
          className={`font-semibold uppercase leading-tight mt-1.5 ${subSizes[size]} ${
            isLight ? "text-emerald-200/90" : "text-[#476664]"
          }`}
        >
          (PRIVATE) LIMITED
        </span>
      </div>
    </div>
  );
}
