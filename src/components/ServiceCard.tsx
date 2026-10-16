import React from "react";
import Link from "next/link";
import {
  FileCheck2,
  ShieldCheck,
  Truck,
  ClipboardList,
  Handshake,
  Building2,
  Server,
  Award,
  MessageSquare,
  BadgeCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  FileCheck2,
  ShieldCheck,
  Truck,
  ClipboardList,
  Handshake,
  Building2,
  Server,
  Award,
  MessageSquare,
  BadgeCheck,
  Users,
};

export interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  iconName,
  index,
}: ServiceCardProps) {
  const IconComponent = ICON_MAP[iconName] ?? FileCheck2;

  return (
    <article
      className="card-hover flex flex-col justify-between h-full bg-white rounded-xl border border-[#E2E8F0] p-8 transition-all duration-300"
      style={typeof index === "number" ? { animationDelay: `${index * 80}ms` } : undefined}
    >
      <div>
        {/* Top: Icon rendered in a 56x56px rounded-lg box with light blue background (bg-blue-50), blue icon color */}
        <div className="w-[56px] h-[56px] rounded-lg bg-blue-50 flex items-center justify-center text-[#1D4ED8] shrink-0">
          <IconComponent className="w-7 h-7" aria-hidden="true" />
        </div>

        {/* Title: text-xl font-bold text-[#102A43] mt-5 */}
        <h3 className="text-xl font-bold text-[#102A43] mt-5 leading-snug">
          {title}
        </h3>

        {/* Description: text-[#526174] mt-3 leading-relaxed */}
        <p className="text-[#526174] mt-3 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      </div>

      {/* Bottom: Small 'Learn more →' text link in blue that links to /services */}
      <div className="mt-6 pt-2">
        <Link
          href="/services"
          className="inline-flex items-center text-sm font-semibold text-[#1D4ED8] hover:text-blue-800 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
        >
          <span>Learn more</span>
          <span
            className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
