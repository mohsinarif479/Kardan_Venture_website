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
      className="card-hover flex flex-col justify-between h-full bg-white rounded-2xl border border-slate-200/90 p-8 transition-all duration-300"
      style={typeof index === "number" ? { animationDelay: `${index * 80}ms` } : undefined}
    >
      <div>
        {/* Dark Teal circle / rounded box */}
        <div className="w-14 h-14 rounded-xl bg-emerald-50 text-[#0D9488] flex items-center justify-center shrink-0">
          <IconComponent className="w-7 h-7" aria-hidden="true" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#0A2E2C] mt-5 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#526174] mt-3 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      </div>

      {/* Bottom: Learn more link */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <Link
          href="/services"
          className="inline-flex items-center text-sm font-semibold text-[#0D9488] hover:text-[#0F766E] transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] rounded-sm"
        >
          <span>Explore Service</span>
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
