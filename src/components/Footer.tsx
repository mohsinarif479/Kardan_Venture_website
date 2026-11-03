import React from 'react';
import Link from 'next/link';
import { ArrowUp, ShieldCheck, MapPin } from 'lucide-react';
import { FOOTER_GROUPS, SITE_LEGAL, NAV_LINKS } from '@/lib/constants';
import KardanLogo from '@/components/KardanLogo';

export default function Footer() {
  return (
    <footer className="bg-[#062322] text-slate-300 border-t border-[#0D3837]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Section: 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14">
          
          {/* Column 1: Company Information & Architectural Logo */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <KardanLogo variant="light" size="md" />
            </Link>

            <div className="w-12 h-[2px] bg-[#2DD4BF] rounded-full" aria-hidden="true" />

            <p className="text-sm text-emerald-100/80 leading-relaxed pt-1">
              A trusted government contractor and IT supply partner, delivering quality products, professional services and long-term business relationships across Pakistan.
            </p>

            <div className="flex items-start gap-2 text-xs text-slate-400 pt-2">
              <MapPin className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
              <span>2nd Floor, Corporate Avenue, Punjab, Pakistan</span>
            </div>
          </div>

          {/* Columns 2-4: FOOTER_GROUPS link lists */}
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-xs font-bold tracking-wider uppercase text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                <span>{group.title}</span>
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 hover:text-[#2DD4BF] transition-colors duration-200 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF] rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Statutory Accreditations Strip */}
        <div className="border-t border-[#0D3837] pt-6 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-emerald-100/70">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="font-semibold text-white uppercase tracking-wider text-[11px]">
                Statutory Status:
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
                PEC Category C-2 Lic. # 41829
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
                PPRA Pre-Qualified Vendor
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
                SECP CIN: 0081294
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
                FBR Active Taxpayer (NTN 7392014-9)
              </span>
            </div>
            
            <div className="text-[11px] font-bold tracking-widest text-[#2DD4BF] uppercase">
              TO THE LAST CHIP
            </div>
          </div>
        </div>

        {/* Quick Navigation Strip */}
        <div className="border-t border-[#0D3837] pt-6 pb-6">
          <nav
            aria-label="Footer Quick Navigation"
            className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400"
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="text-slate-300 font-semibold uppercase tracking-wider text-[11px]">
                Quick Links:
              </span>
              {NAV_LINKS.map((item) => (
                <Link
                  key={`quick-${item.href}`}
                  href={item.href}
                  className="hover:text-[#2DD4BF] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2DD4BF] rounded"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="text-[11px] text-emerald-200/90 font-medium">
              Institutional Business Partner • Pakistan & Beyond
            </div>
          </nav>
        </div>

        {/* Bottom Section: Separator, Copyright, and Back to Top */}
        <div className="border-t border-[#0D3837] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {SITE_LEGAL}. All rights reserved.
          </p>

          <Link
            href="#top"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors duration-200 py-1.5 px-3 rounded-md hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#2DD4BF]" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
