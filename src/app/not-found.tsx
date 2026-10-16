import React from "react";
import Link from "next/link";
import {
  Home,
  Search,
  FileCheck2,
  Building2,
  Mail,
  ChevronRight,
} from "lucide-react";
import { SITE_LEGAL } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] bg-[#F4F7FA] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-2xl w-full text-center">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-[#E2E8F0] p-8 sm:p-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#102A43]/5 text-[#102A43] border border-[#102A43]/10 mb-6">
            Error Code 404 • Resource Not Located
          </div>

          {/* Large 404 Number */}
          <div className="relative mb-2">
            <span className="text-7xl sm:text-9xl font-black text-[#102A43] tracking-tighter select-none font-[family-name:var(--font-sans)]">
              4<span className="text-[#1D4ED8]">0</span>4
            </span>
          </div>

          {/* Gold Accent Bar */}
          <div className="gold-bar mx-auto mb-6" />

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight mb-4">
            Page Not Found
          </h1>

          {/* Friendly Message */}
          <p className="text-base text-[#526174] max-w-lg mx-auto leading-relaxed mb-8">
            We could not locate the institutional page, tender resource, or procurement dossier you were looking for. The link may be outdated, moved, or mistyped.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
            <Link
              href="/"
              className="btn-primary w-full sm:w-auto justify-center shadow-lg shadow-blue-700/20"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              href="/contact-us"
              className="btn-outline w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Procurement Desk</span>
            </Link>
          </div>

          {/* Quick Helpful Directory Links */}
          <div className="border-t border-[#E2E8F0] pt-8 text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-4 text-center sm:text-left">
              Recommended Institutional Portals
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <Link
                href="/services"
                className="flex items-center justify-between p-3 rounded-lg border border-[#E2E8F0] bg-[#F4F7FA] hover:bg-white hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <FileCheck2 className="w-4 h-4 text-[#1D4ED8]" />
                  <span className="font-semibold text-[#102A43] group-hover:text-[#1D4ED8]">
                    Tender Contracting Services
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/about-us"
                className="flex items-center justify-between p-3 rounded-lg border border-[#E2E8F0] bg-[#F4F7FA] hover:bg-white hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-[#1D4ED8]" />
                  <span className="font-semibold text-[#102A43] group-hover:text-[#1D4ED8]">
                    Company Overview &amp; PEC
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/our-approach"
                className="flex items-center justify-between p-3 rounded-lg border border-[#E2E8F0] bg-[#F4F7FA] hover:bg-white hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <Search className="w-4 h-4 text-[#1D4ED8]" />
                  <span className="font-semibold text-[#102A43] group-hover:text-[#1D4ED8]">
                    Procurement Methodology
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/company-profile"
                className="flex items-center justify-between p-3 rounded-lg border border-[#E2E8F0] bg-[#F4F7FA] hover:bg-white hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <FileCheck2 className="w-4 h-4 text-[#1D4ED8]" />
                  <span className="font-semibold text-[#102A43] group-hover:text-[#1D4ED8]">
                    Institutional Profile Dossier
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-xs text-[#526174]">
          {SITE_LEGAL} • Official Corporate Portal
        </p>
      </div>
    </div>
  );
}
