'use client';

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Menu, 
  X, 
  FileText, 
  ChevronRight
} from 'lucide-react';
import { COMPANY_PROFILE } from '../data/companyData';

interface NavbarProps {
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

export default function Navbar({ onOpenRfq, onOpenProfile }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Operating Divisions', href: '#services' },
    { name: 'ICT Hardware Line', href: '#catalog' },
    { name: 'Project Track Record', href: '#projects' },
    { name: 'Tender Governance', href: '#process' },
    { name: 'Statutory Accreditations', href: '#compliance' },
    { name: 'Official Inquiries', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-200 ${
      isScrolled 
        ? 'bg-[#0a192f]/98 backdrop-blur-md shadow-lg border-b border-slate-700/80' 
        : 'bg-[#0a192f] border-b border-slate-700'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Corporate Brand Identity */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/40 flex items-center justify-center shadow-md">
              <Building2 className="w-6 h-6 text-amber-400" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white font-sans uppercase">
                  KARDAN <span className="text-amber-400">VENTURES</span>
                </span>
                <span className="text-[10px] font-mono uppercase bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700">
                  (Pvt.) Ltd.
                </span>
              </div>
              <span className="text-[11px] text-slate-300 font-medium tracking-wide">
                Civil Infrastructure • Enterprise ICT • Public Sector EPC
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-amber-300 transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenProfile}
              className="text-xs font-semibold text-slate-200 hover:text-white px-3 py-2 rounded-lg border border-slate-600 hover:border-slate-400 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Capability Dossier</span>
            </button>

            <button
              onClick={onOpenRfq}
              className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-4 py-2 rounded-lg text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <span>Submit Tender RFQ</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenRfq}
              className="bg-amber-600 text-white font-bold px-3 py-1.5 rounded text-xs"
            >
              Tender RFQ
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#071324] border-b border-slate-700 px-4 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 mb-2">
              <div className="text-xs text-amber-400 font-semibold mb-0.5">
                Kardan Ventures (Pvt.) Limited
              </div>
              <p className="text-[11px] text-slate-300">
                {COMPANY_PROFILE.complianceKeys.pecCategory} • {COMPANY_PROFILE.corporateId}
              </p>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-slate-200 hover:text-amber-300 py-2.5 border-b border-slate-800 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}

            <div className="flex flex-col gap-2 mt-4 pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenProfile();
                }}
                className="w-full text-center py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                Download Pre-Qualification Dossier
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenRfq();
                }}
                className="w-full text-center py-3 px-4 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-md"
              >
                Launch Official Tender RFQ Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
