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
    md: "text-lg md:text-xl tracking-wider",
    lg: "text-2xl tracking-wider",
  };

  const subSizes = {
    sm: "text-[9px] tracking-[0.22em]",
    md: "text-[10px] md:text-[11px] tracking-[0.24em]",
    lg: "text-xs tracking-[0.28em]",
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Architectural Skyscraper Bars Icon matching mockup */}
      <div className={`${iconSizes[size]} flex-shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Left building column with angled top */}
          <path
            d="M8 38V18L15 13V38H8Z"
            fill={isLight ? "#2DD4BF" : "#0A3B3A"}
          />
          {/* Middle tall skyscraper column with peak apex */}
          <path
            d="M17 38V7L25 4V38H17Z"
            fill={isLight ? "#FFFFFF" : "#0D4D4B"}
          />
          {/* Right building column with angled roof */}
          <path
            d="M27 38V14L34 19V38H27Z"
            fill={isLight ? "#14B8A6" : "#0A3837"}
          />
          {/* Base foundation line */}
          <rect
            x="6"
            y="39"
            width="30"
            height="2.5"
            rx="1"
            fill={isLight ? "#2DD4BF" : "#0A3B3A"}
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-black font-[family-name:var(--font-sans)] leading-none ${titleSizes[size]} ${
            isLight ? "text-white" : "text-[#0A2E2C]"
          }`}
        >
          KARDAN VENTURES
        </span>
        <span
          className={`font-semibold uppercase leading-tight mt-1 ${subSizes[size]} ${
            isLight ? "text-emerald-200/90" : "text-[#3D5A58]"
          }`}
        >
          (PRIVATE) LIMITED
        </span>
      </div>
    </div>
  );
}

