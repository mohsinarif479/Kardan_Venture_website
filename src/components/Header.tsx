'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(76);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Scroll detection to update background and shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Measure header height for precise mobile menu positioning
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [isScrolled]);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape key and prevent background body scrolling
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

  // Check if a link is active
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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3.5 border-b border-[#E2E8F0]'
          : 'bg-white md:bg-white/90 backdrop-blur-xs py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-md py-1 pr-2 transition-opacity hover:opacity-95"
          aria-label="Kardan Ventures Homepage"
        >
          <div
            className="w-7 h-7 rounded-md bg-[#1D4ED8] flex items-center justify-center flex-shrink-0 shadow-xs transition-transform duration-200 group-hover:scale-105"
            aria-hidden="true"
          >
            <div className="w-2.5 h-2.5 bg-white rounded-[1px]" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold tracking-tight text-[#102A43] leading-none transition-colors group-hover:text-[#1D4ED8]">
              Kardan Ventures
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-[#526174] mt-1 leading-none">
              Private Limited
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-8"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-semibold tracking-normal py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded ${
                  active ? 'active text-[#1D4ED8]' : 'text-[#334E68] hover:text-[#1D4ED8]'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact-us"
            className="btn-primary text-xs uppercase tracking-wider !py-2.5 !px-5"
          >
            <span>Contact Our Team</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center p-2 rounded-lg text-[#102A43] hover:text-[#1D4ED8] hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
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
        className={`md:hidden fixed inset-x-0 bg-white/98 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out flex flex-col justify-between overflow-y-auto ${
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
                className={`flex items-center justify-between py-3.5 px-4 rounded-lg text-base font-semibold transition-all ${
                  active
                    ? 'bg-blue-50 text-[#1D4ED8] font-bold'
                    : 'text-[#102A43] hover:bg-slate-50 hover:text-[#1D4ED8]'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                <span>{link.label}</span>
                {active && (
                  <span
                    className="w-2 h-2 rounded-full bg-[#1D4ED8]"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Footer CTA */}
        <div className="p-6 border-t border-[#E2E8F0] bg-slate-50/70">
          <Link
            href="/contact-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary w-full justify-center text-center shadow-md py-3.5 text-sm uppercase tracking-wider"
          >
            Contact Our Team
          </Link>
          <p className="text-center text-xs text-[#526174] font-medium mt-4">
            Kardan Ventures (Pvt.) Limited
          </p>
        </div>
      </div>
    </header>
  );
}
