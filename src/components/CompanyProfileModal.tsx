'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Printer, 
  X, 
  Server, 
  Building 
} from 'lucide-react';
import { COMPANY_PROFILE } from '../data/companyData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpenRfq: () => void;
}

export default function CompanyProfileModal({ isOpen, onClose, onOpenRfq }: Props) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="bg-white text-slate-900 border border-slate-300 rounded-xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden font-sans">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-[#0a192f] text-white flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-slate-800 border border-slate-600 flex items-center justify-center text-amber-400">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-sans uppercase">
                Kardan Ventures (Pvt.) Limited
              </h3>
              <p className="text-[11px] text-slate-300 font-mono">
                Official Corporate Capability Statement & Pre-Qualification Dossier (Doc Ref: KV-PQD-2026)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-600"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>Print Dossier (PDF)</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Letterhead Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm bg-[#fafafa] print:bg-white print:p-0">
          
          {/* Executive Overview Box */}
          <div className="p-6 rounded-lg bg-white border border-slate-300 space-y-3 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div>
                <span className="text-[11px] font-mono text-amber-800 uppercase font-bold">Corporate Identity:</span>
                <h4 className="text-xl font-extrabold text-slate-950 font-sans">{COMPANY_PROFILE.legalName}</h4>
                <div className="text-xs text-slate-500 font-mono">{COMPANY_PROFILE.corporateType} • {COMPANY_PROFILE.corporateId}</div>
              </div>
              <div className="text-left sm:text-right">
                <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 font-mono text-xs font-bold border border-emerald-300">
                  100% Active Taxpayer (ATL) • Verified
                </span>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
              {COMPANY_PROFILE.legalName} is a multi-disciplinary institutional engineering and technology contracting enterprise. We operate under Pakistan Engineering Council (PEC) Category C-2 regulations and provide full-lifecycle public sector tender execution under federal and provincial Public Procurement Regulatory Authority (PPRA) frameworks.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono">
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase">Tenders Delivered:</div>
                <div className="text-base font-extrabold text-slate-900">450+ Certified</div>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase">Delivered Volume:</div>
                <div className="text-base font-extrabold text-emerald-800">PKR 14.8B+</div>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase">IT Units Delivered:</div>
                <div className="text-base font-extrabold text-blue-900">68,000+ Units</div>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase">PEC Constructor:</div>
                <div className="text-base font-extrabold text-amber-800">Category C-2</div>
              </div>
            </div>
          </div>

          {/* Table of Statutory Accreditations */}
          <div className="space-y-2">
            <h5 className="font-bold text-slate-900 text-xs sm:text-sm uppercase font-mono tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-slate-900" />
              1. Statutory Registrations & Tax Accreditations
            </h5>

            <div className="border border-slate-300 rounded-lg overflow-hidden bg-white shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 font-mono border-b border-slate-300">
                  <tr>
                    <th className="p-3">Statutory Regulatory Body</th>
                    <th className="p-3">Certificate / Registration Reference</th>
                    <th className="p-3">Legal Standing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3 font-semibold text-slate-950">Securities & Exchange Commission of Pakistan (SECP)</td>
                    <td className="p-3 font-mono text-slate-900">CIN: 0081294 (Companies Act)</td>
                    <td className="p-3 text-emerald-800 font-medium">Incorporated Private Limited Company</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-950">Pakistan Engineering Council (PEC)</td>
                    <td className="p-3 font-mono text-slate-900">Lic. 41829 / Category C-2 (Civil, MEP, Structural)</td>
                    <td className="p-3 text-emerald-800 font-medium">Active Licensed Constructor</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-950">Federal Board of Revenue (FBR)</td>
                    <td className="p-3 font-mono text-slate-900">NTN: 7392014-9 / STRN: 3277876123441</td>
                    <td className="p-3 text-emerald-800 font-medium">Active Taxpayer List (100% ATL)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-950">Public Procurement Regulatory Authority (PPRA)</td>
                    <td className="p-3 font-mono text-slate-900">PPRA-VEND-9042 / EPADS Federal Portal</td>
                    <td className="p-3 text-emerald-800 font-medium">Pre-Qualified Government Supplier</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-950">Quality & Information Security Certifications</td>
                    <td className="p-3 font-mono text-slate-900">ISO 9001:2015 QMS & ISO 27001 ISMS</td>
                    <td className="p-3 text-emerald-800 font-medium">Audited & Certified 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Division Capabilities Breakdown */}
          <div className="space-y-2">
            <h5 className="font-bold text-slate-900 text-xs sm:text-sm uppercase font-mono tracking-wider flex items-center gap-2">
              <Server className="w-4 h-4 text-blue-700" />
              2. Core Hardware Lines & Direct OEM Authorization
            </h5>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded bg-white border border-slate-300">
                <div className="font-bold text-slate-900 mb-1">Enterprise Servers & Datacenter Storage</div>
                <p className="text-slate-600">
                  Authorized direct supply of Dell PowerEdge 2U/4U rack servers, HPE ProLiant Gen11, high-throughput SAN arrays, and clustered datacenter computing nodes.
                </p>
              </div>

              <div className="p-3.5 rounded bg-white border border-slate-300">
                <div className="font-bold text-slate-900 mb-1">Commercial Fleet Laptops & Workstations</div>
                <p className="text-slate-600">
                  High-volume deployments of Lenovo ThinkPad MIL-STD fleets, Dell Latitude business series, and HP Pro towers with hardware TPM 2.0 security.
                </p>
              </div>

              <div className="p-3.5 rounded bg-white border border-slate-300">
                <div className="font-bold text-slate-900 mb-1">Laser Projectors & Interactive 4K Panels</div>
                <p className="text-slate-600">
                  Epson high-lumen laser projectors (6000-8000 lumens) and ViewSonic 75&quot;/86&quot; 4K interactive flat touch panels for executive presentation rooms and smart classrooms.
                </p>
              </div>

              <div className="p-3.5 rounded bg-white border border-slate-300">
                <div className="font-bold text-slate-900 mb-1">Campus Networking & Datacenter Power</div>
                <p className="text-slate-600">
                  Cisco Catalyst 9300 PoE+ switching, optical fiber backbones, 42U server rack enclosures, and Schneider Electric 3-Phase Online UPS systems.
                </p>
              </div>
            </div>
          </div>

          {/* Banking Facilities & Bid Guarantee Mobilization */}
          <div className="p-4 rounded bg-slate-100 border border-slate-300 text-xs space-y-2 font-sans">
            <div className="font-bold text-slate-900 font-mono uppercase">
              Financial Standing & Bid Security Mobilization
            </div>
            <p className="text-slate-700 leading-relaxed">
              Kardan Ventures (Pvt.) Limited maintains active credit lines and guarantee facilities with top-tier Schedule-A commercial banks (including Habib Bank Limited, Meezan Bank, and National Bank of Pakistan). We issue Bid Security / Earnest Money Bank Guarantees and Performance Bonds within 24 to 48 hours for immediate submission.
            </p>
          </div>

          {/* Corporate Offices Address */}
          <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600 font-mono">
            <div>
              <div className="font-bold text-slate-900">{COMPANY_PROFILE.contact.address}</div>
              <div>{COMPANY_PROFILE.contact.city} • Tel: {COMPANY_PROFILE.contact.phone}</div>
            </div>
            <div className="text-slate-900 font-bold">
              Emergency Tender Desk: {COMPANY_PROFILE.contact.emergencyTenderCell}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-100 border-t border-slate-300 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded border border-slate-300 cursor-pointer"
          >
            Close Dossier
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenRfq();
            }}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer"
          >
            Launch Tender RFQ Portal
          </button>
        </div>

      </div>

    </div>
  );
}
