import React from "react";
import { APPROACH_STEPS, type ApproachStep } from "@/lib/constants";

export interface ProcessTimelineProps {
  steps?: ApproachStep[];
  className?: string;
}

export default function ProcessTimeline({
  steps = APPROACH_STEPS,
  className = "",
}: ProcessTimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* 4-step process timeline: vertical stack on mobile, horizontal 4 columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
        {steps.map((item, index) => {
          const stepNumber = String(item.step).padStart(2, "0");

          return (
            <div
              key={item.step}
              className="relative flex flex-col group"
            >
              {/* Step indicator header with circle and desktop connection */}
              <div className="relative flex items-center mb-6">
                {/* Step number shown in a circle with blue border */}
                <div className="w-12 h-12 rounded-full border-2 border-[#1D4ED8] bg-white flex items-center justify-center font-bold text-sm text-[#1D4ED8] shadow-sm relative z-10 shrink-0 transition-transform duration-300 group-hover:scale-105">
                  {stepNumber}
                </div>

                {/* Connected with a line/dots between steps on desktop (border-top via Tailwind classes) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute left-12 right-[-2rem] top-1/2 -translate-y-1/2 h-[2px] border-t-2 border-dashed border-blue-200 z-0"
                    aria-hidden="true"
                  >
                    <span className="absolute -top-[5px] right-2 w-2 h-2 rounded-full bg-[#1D4ED8]" />
                  </div>
                )}
              </div>

              {/* Step card */}
              <div className="relative bg-white rounded-xl border border-[#E2E8F0] p-6 lg:p-7 card-hover flex-1 flex flex-col overflow-hidden">
                {/* Large step number (01-04) in light blue / 10% opacity background as decorative */}
                <span
                  className="absolute -top-3 right-3 text-7xl font-extrabold text-[#1D4ED8]/10 select-none pointer-events-none font-sans"
                  aria-hidden="true"
                >
                  {stepNumber}
                </span>

                {/* Step title bold */}
                <h3 className="text-lg font-bold text-[#102A43] mb-2.5 relative z-10 leading-snug">
                  {item.title}
                </h3>

                {/* Description in slate */}
                <p className="text-sm text-[#526174] leading-relaxed relative z-10 flex-1">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
