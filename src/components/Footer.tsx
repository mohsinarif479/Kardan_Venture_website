'use client';

import React from 'react';
import { 
  Building2, 
  ArrowUp, 
  FileText, 
  Award,
  Building
} from 'lucide-react';
import { COMPANY_PROFILE } from '../data/companyData';

interface FooterProps {
  onOpenProfile: () => void;
  onOpenRfq: () => void;
}

export default function Footer({ onOpenProfile, onOpenRfq }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071324] text-slate-300 border-t border-slate-700/80 text-xs">
      
      {/* Top Banner inside Footer */}
      <div className="bg-[#0b1b33] border-b border-slate-700/80 py-7 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-slate-800 border border-slate-600 flex items-center justify-center text-amber-400">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-sans">
                {COMPANY_PROFILE.legalName}
              </div>
              <div className="text-slate-400 text-xs font-mono">
                {COMPANY_PROFILE.corporateType} • {COMPANY_PROFILE.complianceKeys.pecCategory}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenProfile}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer border border-slate-600"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Pre-Qualification Dossier</span>
            </button>
            <button
              onClick={onOpenRfq}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
            >
              Tender RFQ Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Corporate Profile Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-amber-400" />
              </div>
              <span className="font-extrabold text-base text-white font-sans tracking-tight uppercase">
                KARDAN <span className="text-amber-400">VENTURES</span> (Pvt.) Ltd.
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Pre-qualified government contractor delivering turnkey public sector infrastructure, PEC Category C-2 civil works, and authorized Tier-1 ICT hardware procurement including enterprise rack servers, commercial laptop fleets, laser projectors, and datacenter hardware.
            </p>

            <div className="p-3 bg-slate-900 rounded border border-slate-800 space-y-1 font-mono text-[11px] text-slate-400">
              <div className="text-amber-400 font-bold uppercase">Statutory Registrations:</div>
              <div>• {COMPANY_PROFILE.corporateId}</div>
              <div>• {COMPANY_PROFILE.complianceKeys.ntn}</div>
              <div>• {COMPANY_PROFILE.complianceKeys.strn}</div>
              <div>• {COMPANY_PROFILE.complianceKeys.pecCategory}</div>
              <div>• {COMPANY_PROFILE.complianceKeys.ppraStatus}</div>
            </div>
          </div>

          {/* Operating Divisions (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-white tracking-wider">
              Operating Divisions
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Public Sector Tender Contracting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Civil Construction & Infrastructure (PEC C-2)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Enterprise ICT Systems & Rack Servers
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Commercial Fleet Laptops & Desktops
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Laser Projectors & Interactive 4K Panels
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  General Order Supply & Strategic Logistics
                </a>
              </li>
            </ul>
          </div>

          {/* ICT Hardware Lines (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-white tracking-wider">
              Hardware Lines
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><a href="#catalog" className="hover:text-amber-400">Dell PowerEdge 2U</a></li>
              <li><a href="#catalog" className="hover:text-amber-400">HPE ProLiant Gen11</a></li>
              <li><a href="#catalog" className="hover:text-amber-400">Lenovo ThinkPads</a></li>
              <li><a href="#catalog" className="hover:text-amber-400">Dell Latitude Series</a></li>
              <li><a href="#catalog" className="hover:text-amber-400">Epson Laser Projectors</a></li>
              <li><a href="#catalog" className="hover:text-amber-400">ViewSonic 75&quot; Panels</a></li>
              <li><a href="#catalog" className="hover:text-amber-400">Cisco Catalyst 9300</a></li>
              <li><a href="#catalog" className="hover:text-amber-400">Schneider Online UPS</a></li>
            </ul>
          </div>

          {/* Tender Desk Hotline (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-white tracking-wider">
              Tender Desk Hotline
            </h4>
            
            <div className="space-y-2 text-xs text-slate-300">
              <div className="font-mono text-amber-400 font-bold text-sm">
                {COMPANY_PROFILE.contact.emergencyTenderCell}
              </div>
              <div className="font-mono">{COMPANY_PROFILE.contact.phone}</div>
              <div className="text-slate-400 font-mono">{COMPANY_PROFILE.contact.email}</div>
              <div className="text-slate-400">{COMPANY_PROFILE.contact.address}</div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-[11px] text-slate-400 space-y-2.5">
          <p className="leading-relaxed">
            <strong className="text-slate-300">Statutory Notice:</strong> Kardan Ventures (Pvt.) Limited operates in strict accordance with the Public Procurement Regulatory Authority (PPRA) Ordinance, provincial procurement authority rules, and the Pakistan Engineering Council (PEC) Code of Conduct. All product specifications and OEM trademarks (Dell, HPE, Lenovo, Cisco, ViewSonic, Epson, Schneider Electric) belong to their respective proprietors and are referenced under authorized procurement and reseller agreements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-slate-400 font-mono text-[11px]">
            <div>
              © {new Date().getFullYear()} Kardan Ventures (Pvt.) Limited. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Optimized for High-Reliability Vercel Enterprise Deployment</span>
              <span>•</span>
              <a href="#compliance" className="hover:text-amber-400">Statutory Credentials</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
