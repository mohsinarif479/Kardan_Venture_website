import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { FOOTER_GROUPS, SITE_LEGAL, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#102A43] text-slate-300">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        {/* Top Section: 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14">
          {/* Column 1: Company Information & Gold Accent Bar */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div
                className="w-6 h-6 rounded bg-[#1D4ED8] flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <div className="w-2.5 h-2.5 bg-white rounded-[1px]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white leading-none">
                Kardan Ventures
              </span>
            </div>

            <p className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
              {SITE_LEGAL}
            </p>

            <div className="gold-bar" aria-hidden="true" />

            <p className="text-sm text-slate-300 leading-relaxed pt-1">
              Professional business operations, government tender participation,
              institutional procurement support, and dependable B2G partnerships.
            </p>
          </div>

          {/* Columns 2-4: FOOTER_GROUPS link lists */}
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-xs font-bold tracking-wider uppercase text-white">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 hover:text-white transition-colors duration-200 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Navigation Strip */}
        <div className="border-t border-[#1B3A5C] pt-6 pb-6">
          <nav
            aria-label="Footer Quick Navigation"
            className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400"
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                Quick Links:
              </span>
              {NAV_LINKS.map((item) => (
                <Link
                  key={`quick-${item.href}`}
                  href={item.href}
                  className="hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 rounded"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="text-[11px] text-slate-400">
              Authorized Institutional Partner
            </div>
          </nav>
        </div>

        {/* Bottom Section: Separator, Copyright, and Back to Top */}
        <div className="border-t border-[#1B3A5C] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; 2024 {SITE_LEGAL}. All rights reserved.
          </p>

          <Link
            href="#top"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors duration-200 py-1.5 px-3 rounded-md hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
