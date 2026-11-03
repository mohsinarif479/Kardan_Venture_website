'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import KardanLogo from '@/components/KardanLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(80);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [isScrolled]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <header
      id="top"
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out bg-white ${
        isScrolled
          ? 'shadow-sm py-3.5 border-b border-slate-200/80'
          : 'py-4 md:py-5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Architectural Monogram */}
        <Link
          href="/"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] rounded-md transition-opacity hover:opacity-95"
          aria-label="Kardan Ventures (Private) Limited Homepage"
        >
          <KardanLogo size="md" variant="dark" />
        </Link>

        {/* Desktop Navigation Links matching mockup */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 xl:gap-8"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <div key={link.href} className="flex flex-col items-center">
                <Link
                  href={link.href}
                  className={`py-1 text-sm font-semibold tracking-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] rounded ${
                    active
                      ? 'text-[#0A3433] font-bold'
                      : 'text-[#475569] hover:text-[#0D9488]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
                {/* Active Underline Pill Indicator matching mockup */}
                {active ? (
                  <span
                    className="w-6 h-[2.5px] bg-[#0D9488] rounded-full mt-0.5"
                    aria-hidden="true"
                  />
                ) : (
                  <span className="w-6 h-[2.5px] bg-transparent rounded-full mt-0.5" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA Button matching mockup: dark teal pill with Contact Us → */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#083232] hover:bg-[#0c4040] text-white text-sm font-semibold shadow-xs transition-all hover:translate-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center p-2 rounded-lg text-[#0A3433] hover:text-[#0D9488] hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Full-Height Overlay */}
      <div
        id="mobile-navigation-menu"
        aria-hidden={!isMobileMenuOpen}
        style={{
          top: `${headerHeight}px`,
          height: `calc(100vh - ${headerHeight}px)`,
        }}
        className={`lg:hidden fixed inset-x-0 bg-white/98 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out flex flex-col justify-between overflow-y-auto ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto visible'
            : 'opacity-0 -translate-y-4 pointer-events-none invisible'
        }`}
      >
        <nav
          aria-label="Mobile Navigation"
          className="px-6 py-6 space-y-2"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-semibold transition-all ${
                  active
                    ? 'bg-emerald-50 text-[#0A3433] font-bold border-l-4 border-[#0D9488]'
                    : 'text-[#475569] hover:bg-slate-50 hover:text-[#0D9488]'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                <span>{link.label}</span>
                {active && (
                  <span
                    className="w-2 h-2 rounded-full bg-[#0D9488]"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Footer CTA */}
        <div className="p-6 border-t border-slate-200 bg-slate-50/70">
          <Link
            href="/contact-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#083232] text-white font-semibold text-sm shadow-md"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
          <p className="text-center text-xs text-[#526174] font-medium mt-4">
            Kardan Ventures (Private) Limited • Punjab, Pakistan
          </p>
        </div>
      </div>
    </header>
  );
}
