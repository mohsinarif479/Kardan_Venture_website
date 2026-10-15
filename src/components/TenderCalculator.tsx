'use client';

import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Clock, 
  Building2, 
  Server, 
  Laptop, 
  Projector, 
  Trash2, 
  Copy, 
  Check,
  Building,
  Printer
} from 'lucide-react';
import { EquipmentItem } from '../types';
import { COMPANY_PROFILE } from '../data/companyData';

interface TenderCalculatorProps {
  basketItems: EquipmentItem[];
  onRemoveItem: (id: string) => void;
  onClearBasket: () => void;
}

export default function TenderCalculator({ basketItems, onRemoveItem, onClearBasket }: TenderCalculatorProps) {
  // Form State
  const [orgType, setOrgType] = useState<string>('Federal Ministry / Division');
  const [procurementCategory, setProcurementCategory] = useState<string>('Enterprise ICT Systems & Datacenter Computing');
  const [biddingProcedure, setBiddingProcedure] = useState<string>('Single-Stage Two-Envelope Procedure (PPRA Rule 36b)');
  const [timeline, setTimeline] = useState<string>('Standard Contractual Milestone (30 to 45 Days)');
  const [tenderRefNumber, setTenderRefNumber] = useState<string>('');
  
  // Quantities
  const [serverCount, setServerCount] = useState<number>(basketItems.some(i => i.category === 'servers') ? 10 : 0);
  const [laptopCount, setLaptopCount] = useState<number>(basketItems.some(i => i.category === 'laptops') ? 50 : 0);
  const [projectorCount, setProjectorCount] = useState<number>(basketItems.some(i => i.category === 'projectors') ? 15 : 0);
  const [desktopCount, setDesktopCount] = useState<number>(basketItems.some(i => i.category === 'desktops') ? 100 : 0);
  const [civilAreaSqFt, setCivilAreaSqFt] = useState<number>(0);

  // Officer Info
  const [officerName, setOfficerName] = useState<string>('');
  const [designation, setDesignation] = useState<string>('');
  const [officialEmail, setOfficialEmail] = useState<string>('');
  const [officialPhone, setOfficialPhone] = useState<string>('');
  const [deliveryLocation, setDeliveryLocation] = useState<string>('');
  const [additionalNotes, setAdditionalNotes] = useState<string>('');

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedReference, setSubmittedReference] = useState<string | null>(null);
  const [submissionTimestamp, setSubmissionTimestamp] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!officerName || !officialEmail || !officialPhone) {
      alert('Please fill out all mandatory contact fields (Officer Name, Official Email, Phone).');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `KV-TDR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedReference(generatedRef);
      setSubmissionTimestamp(new Date().toUTCString());
      setIsSubmitting(false);
    }, 800);
  };

  const copyToClipboard = () => {
    if (!submittedReference) return;
    navigator.clipboard.writeText(submittedReference);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <section id="calculator" className="py-20 lg:py-24 bg-[#e6ecf4] text-[#0c1e38] relative border-b border-[#cbd7e6] neu-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-flat-sm text-amber-700 text-xs font-mono font-bold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>Form RFP-KV01: Public Sector Procurement & Tender Scope Portal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e38] tracking-tight font-sans">
            Formal Tender Quotation & BoQ Submission
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Authorized Procurement Officers, Project Directors, and Tender Evaluation Committees may submit technical requirements and Bill of Quantities (BoQ) for formal proposal preparation.
          </p>
        </div>

        {/* Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Form or Official Receipt */}
          <div className="lg:col-span-8 neu-flat-lg rounded-3xl p-6 sm:p-9">
            
            {submittedReference ? (
              /* Formal Acknowledgment Receipt */
              <div className="space-y-6 text-left">
                
                {/* Official Stamp Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#cbd7e6] gap-4">
                  <div>
                    <div className="text-[10px] font-mono text-amber-700 uppercase tracking-widest font-extrabold">
                      Kardan Ventures (Pvt.) Limited — Tender Desk
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0c1e38] font-sans mt-0.5">
                      Official Acknowledgment of Tender Inquiry
                    </h3>
                    <div className="text-xs text-slate-500 mt-1 font-medium">
                      Registered Under Corporate Procurement Tracking Protocol
                    </div>
                  </div>

                  <div className="px-4 py-1.5 rounded-full neu-pill text-emerald-800 text-xs font-mono font-bold self-start sm:self-auto">
                    STATUS: ACKNOWLEDGED & QUEUED
                  </div>
                </div>

                {/* Audit Grid */}
                <div className="p-6 rounded-2xl neu-pressed space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#cbd7e6]/70">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">Official Tender Tracking Dossier:</span>
                      <div className="text-2xl font-black font-mono text-amber-700 mt-0.5">
                        {submittedReference}
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={copyToClipboard}
                        className="text-xs text-slate-700 hover:text-black flex items-center gap-1.5 neu-btn px-3.5 py-2 rounded-xl transition-all cursor-pointer font-bold"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Copied' : 'Copy Reference'}</span>
                      </button>
                      <button
                        onClick={handlePrintReceipt}
                        className="text-xs text-[#0c1e38] flex items-center gap-1.5 neu-btn px-3.5 py-2 rounded-xl transition-all cursor-pointer font-bold"
                      >
                        <Printer className="w-3.5 h-3.5 text-amber-600" />
                        <span>Print Receipt</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-mono">
                    <div>• <strong>Procuring Body:</strong> {orgType}</div>
                    <div>• <strong>Procurement Category:</strong> {procurementCategory}</div>
                    <div>• <strong>Authorized Officer:</strong> {officerName} {designation ? `(${designation})` : ''}</div>
                    <div>• <strong>Official Email:</strong> {officialEmail}</div>
                    <div>• <strong>Direct Phone:</strong> {officialPhone}</div>
                    <div>• <strong>Delivery Station:</strong> {deliveryLocation || 'Specified in Tender Dossier'}</div>
                    {tenderRefNumber && <div>• <strong>Gazette / Tender ID:</strong> {tenderRefNumber}</div>}
                    <div>• <strong>Recorded Timestamp:</strong> {submissionTimestamp}</div>
                  </div>
                </div>

                {/* Next Steps Protocol */}
                <div className="p-5 rounded-2xl neu-pressed-sm space-y-2 text-xs text-slate-700 font-medium">
                  <div className="font-bold text-[#0c1e38] uppercase font-mono tracking-wider">
                    Statutory Submission Workflow & Next Steps:
                  </div>
                  <p>
                    1. This technical BoQ has been allocated to our <strong>Senior Bid Coordinator</strong>.
                  </p>
                  <p>
                    2. A formal technical compliance matrix, unit pricing sheet, and certified copies of Manufacturer Authorization Forms (MAF) will be transmitted to <strong>{officialEmail}</strong> within <strong>4 business hours</strong>.
                  </p>
                  <p>
                    3. For emergency bid closures or urgent clarifications regarding bid security bank guarantees, contact our 24/7 Tender Cell at <strong>{COMPANY_PROFILE.contact.emergencyTenderCell}</strong>.
                  </p>
                </div>

                {/* Reset Action */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setSubmittedReference(null);
                      onClearBasket();
                    }}
                    className="neu-btn px-5 py-2.5 text-slate-700 text-xs font-bold rounded-xl uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Submit Another Tender Inquiry
                  </button>

                  <a
                    href={`tel:${COMPANY_PROFILE.contact.emergencyTenderCell}`}
                    className="text-xs text-amber-700 hover:underline font-mono font-bold"
                  >
                    Direct Tender Coordinator: {COMPANY_PROFILE.contact.emergencyTenderCell}
                  </a>
                </div>

              </div>
            ) : (
              /* Formal Input Form */
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Section 1: Statutory Entity & Procurement Category */}
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#cbd7e6]">
                    <span className="font-mono text-xs font-extrabold text-amber-700">PART I.</span>
                    <h3 className="text-sm font-extrabold text-[#0c1e38] uppercase tracking-wider">
                      Procuring Agency & Bidding Framework
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Procuring Organization Classification *
                      </label>
                      <select
                        value={orgType}
                        onChange={(e) => setOrgType(e.target.value)}
                        className="w-full neu-input rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm text-[#0c1e38] font-medium"
                      >
                        <option>Federal Ministry / Division</option>
                        <option>Provincial Government Department</option>
                        <option>Public Sector University / HEC Recognized Institute</option>
                        <option>Defense / Law Enforcement Procurement Wing</option>
                        <option>State-Owned Enterprise (SOE) / Autonomous Body</option>
                        <option>Public Healthcare Network / Tertiary Hospital</option>
                        <option>Municipal / Urban Development Authority</option>
                        <option>Commercial Contractor / Joint Venture Partner</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Tender Scope Vertical *
                      </label>
                      <select
                        value={procurementCategory}
                        onChange={(e) => setProcurementCategory(e.target.value)}
                        className="w-full neu-input rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm text-[#0c1e38] font-medium"
                      >
                        <option>Enterprise ICT Systems & Datacenter Computing</option>
                        <option>Civil Infrastructure & Engineering Works (PEC C-2)</option>
                        <option>Smart Campus / Smart Classroom Turnkey Infrastructure</option>
                        <option>General Order Supply & Biometric Security Fleets</option>
                        <option>Annual Maintenance Contract (AMC) & Hardware SLA</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Statutory Bidding Procedure *
                      </label>
                      <select
                        value={biddingProcedure}
                        onChange={(e) => setBiddingProcedure(e.target.value)}
                        className="w-full neu-input rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm text-[#0c1e38] font-mono font-medium"
                      >
                        <option>Single-Stage Two-Envelope Procedure (PPRA Rule 36b)</option>
                        <option>Single-Stage Single-Envelope Procedure (PPRA Rule 36a)</option>
                        <option>Two-Stage Bidding Procedure (PPRA Rule 36c)</option>
                        <option>Direct Contracting / Petty Purchase (PPRA Rule 42)</option>
                        <option>Emergency Procurement Framework</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 2: Bill of Quantities (BoQ) Parameters */}
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#cbd7e6]">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-extrabold text-amber-700">PART II.</span>
                      <h3 className="text-sm font-extrabold text-[#0c1e38] uppercase tracking-wider">
                        Hardware Quantities & Bill of Quantities (BoQ)
                      </h3>
                    </div>
                    {basketItems.length > 0 && (
                      <span className="text-[11px] font-mono text-amber-700 font-bold neu-pill px-3 py-0.5 rounded-full">
                        {basketItems.length} items linked from catalog
                      </span>
                    )}
                  </div>

                  {/* Pre-selected catalog items */}
                  {basketItems.length > 0 && (
                    <div className="mb-4 p-4 rounded-2xl neu-pressed space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#0c1e38]">Linked Catalog Models:</span>
                        <button
                          type="button"
                          onClick={onClearBasket}
                          className="text-[11px] text-red-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3" />
                          Clear BoQ
                        </button>
                      </div>
                      <div className="space-y-2">
                        {basketItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between p-2.5 rounded-xl neu-flat-sm text-xs"
                          >
                            <div>
                              <span className="font-bold text-[#0c1e38]">{item.name}</span>
                              <span className="text-slate-500 ml-2 font-mono">({item.brand})</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => onRemoveItem(item.id)}
                              className="text-slate-400 hover:text-red-600 p-1 cursor-pointer font-bold"
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quantity Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                    <div className="p-3.5 rounded-2xl neu-pressed">
                      <div className="text-xs font-mono text-slate-700 mb-1.5 flex items-center gap-1.5 font-bold">
                        <Server className="w-3.5 h-3.5 text-blue-600" />
                        Rack Servers
                      </div>
                      <input
                        type="number"
                        min="0"
                        value={serverCount}
                        onChange={(e) => setServerCount(parseInt(e.target.value) || 0)}
                        className="w-full neu-flat-sm rounded-xl px-2.5 py-1.5 text-xs sm:text-sm text-[#0c1e38] font-mono font-bold focus:outline-none"
                        placeholder="0"
                      />
                      <span className="text-[10px] text-slate-500 mt-1 block font-medium">Units</span>
                    </div>

                    <div className="p-3.5 rounded-2xl neu-pressed">
                      <div className="text-xs font-mono text-slate-700 mb-1.5 flex items-center gap-1.5 font-bold">
                        <Laptop className="w-3.5 h-3.5 text-purple-600" />
                        Fleet Laptops
                      </div>
                      <input
                        type="number"
                        min="0"
                        value={laptopCount}
                        onChange={(e) => setLaptopCount(parseInt(e.target.value) || 0)}
                        className="w-full neu-flat-sm rounded-xl px-2.5 py-1.5 text-xs sm:text-sm text-[#0c1e38] font-mono font-bold focus:outline-none"
                        placeholder="0"
                      />
                      <span className="text-[10px] text-slate-500 mt-1 block font-medium">Units</span>
                    </div>

                    <div className="p-3.5 rounded-2xl neu-pressed">
                      <div className="text-xs font-mono text-slate-700 mb-1.5 flex items-center gap-1.5 font-bold">
                        <Projector className="w-3.5 h-3.5 text-cyan-600" />
                        Laser Projectors
                      </div>
                      <input
                        type="number"
                        min="0"
                        value={projectorCount}
                        onChange={(e) => setProjectorCount(parseInt(e.target.value) || 0)}
                        className="w-full neu-flat-sm rounded-xl px-2.5 py-1.5 text-xs sm:text-sm text-[#0c1e38] font-mono font-bold focus:outline-none"
                        placeholder="0"
                      />
                      <span className="text-[10px] text-slate-500 mt-1 block font-medium">Units</span>
                    </div>

                    <div className="p-3.5 rounded-2xl neu-pressed">
                      <div className="text-xs font-mono text-slate-700 mb-1.5 flex items-center gap-1.5 font-bold">
                        <Building2 className="w-3.5 h-3.5 text-amber-600" />
                        Desktops / AIO
                      </div>
                      <input
                        type="number"
                        min="0"
                        value={desktopCount}
                        onChange={(e) => setDesktopCount(parseInt(e.target.value) || 0)}
                        className="w-full neu-flat-sm rounded-xl px-2.5 py-1.5 text-xs sm:text-sm text-[#0c1e38] font-mono font-bold focus:outline-none"
                        placeholder="0"
                      />
                      <span className="text-[10px] text-slate-500 mt-1 block font-medium">Units</span>
                    </div>
                  </div>

                  {/* Civil works optional area */}
                  <div className="mt-4 p-4 rounded-2xl neu-pressed flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="font-bold text-[#0c1e38]">Civil Works & Infrastructure Covered Area (Optional):</span>
                      <div className="text-slate-500 text-[11px]">Specify required construction area in square feet if applicable.</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        step="500"
                        value={civilAreaSqFt || ''}
                        onChange={(e) => setCivilAreaSqFt(parseInt(e.target.value) || 0)}
                        placeholder="e.g. 50000"
                        className="w-32 neu-flat-sm rounded-xl px-3 py-1.5 text-xs text-[#0c1e38] font-mono font-bold focus:outline-none"
                      />
                      <span className="font-mono text-slate-600 font-bold">Sq. Ft.</span>
                    </div>
                  </div>
                </div>

                {/* Section 3: Delivery Timeline & Gazette ID */}
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#cbd7e6]">
                    <span className="font-mono text-xs font-extrabold text-amber-700">PART III.</span>
                    <h3 className="text-sm font-extrabold text-[#0c1e38] uppercase tracking-wider">
                      Schedule, Location & Gazette Tracking
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Contractual Delivery SLA *
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full neu-input rounded-2xl px-3.5 py-2.5 text-xs text-[#0c1e38] font-medium"
                      >
                        <option>Standard Contractual Milestone (30 to 45 Days)</option>
                        <option>Immediate / Buffer Stock Mobilization (3 to 7 Days)</option>
                        <option>Phased Deliveries Across FY Quarters</option>
                        <option>Annual Rate Contract (ARC)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Published Tender / Inquiry ID
                      </label>
                      <input
                        type="text"
                        value={tenderRefNumber}
                        onChange={(e) => setTenderRefNumber(e.target.value)}
                        placeholder="e.g. PPRA-TS-58921/2026"
                        className="w-full neu-input rounded-2xl px-3.5 py-2.5 text-xs text-[#0c1e38] placeholder-slate-400 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Primary Delivery Station *
                      </label>
                      <input
                        type="text"
                        value={deliveryLocation}
                        onChange={(e) => setDeliveryLocation(e.target.value)}
                        placeholder="e.g. Islamabad / Provincial Warehouses"
                        className="w-full neu-input rounded-2xl px-3.5 py-2.5 text-xs text-[#0c1e38] placeholder-slate-400 font-medium"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 4: Authorized Procurement Officer Verification */}
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#cbd7e6]">
                    <span className="font-mono text-xs font-extrabold text-amber-700">PART IV.</span>
                    <h3 className="text-sm font-extrabold text-[#0c1e38] uppercase tracking-wider">
                      Authorized Officer Verification
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Officer Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={officerName}
                        onChange={(e) => setOfficerName(e.target.value)}
                        placeholder="Engr. Muhammad Asif"
                        className="w-full neu-input rounded-2xl px-3.5 py-2.5 text-xs text-[#0c1e38] font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Official Designation
                      </label>
                      <input
                        type="text"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        placeholder="Director (Procurement & IT)"
                        className="w-full neu-input rounded-2xl px-3.5 py-2.5 text-xs text-[#0c1e38] font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Official Government Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={officialEmail}
                        onChange={(e) => setOfficialEmail(e.target.value)}
                        placeholder="asif@ministry.gov.pk"
                        className="w-full neu-input rounded-2xl px-3.5 py-2.5 text-xs text-[#0c1e38] font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Direct Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        value={officialPhone}
                        onChange={(e) => setOfficialPhone(e.target.value)}
                        placeholder="+92 300 0000000"
                        className="w-full neu-input rounded-2xl px-3.5 py-2.5 text-xs text-[#0c1e38] font-mono font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Technical Criteria, BoQ Specifications & Tender Notes
                    </label>
                    <textarea
                      rows={3}
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      placeholder="Specify required processor generations, storage tiers, OEM constraints, milestone payment guidelines, or attach tender clauses..."
                      className="w-full neu-input rounded-2xl p-3.5 text-xs text-[#0c1e38] placeholder-slate-400 font-medium"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl neu-btn-gold text-white font-extrabold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Synthesizing Technical & Financial Dossier...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Formal Tender Request (Form RFP-KV01)</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-500 mt-3 flex items-center justify-center gap-2 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Transmitted securely to Kardan Ventures (Pvt.) Limited Directorate of Public Contracts.</span>
                  </p>
                </div>

              </form>
            )}

          </div>

          {/* Right Scope Summary Column */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="neu-flat rounded-3xl p-7 space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-[#cbd7e6]">
                <span className="text-xs font-mono uppercase text-amber-700 font-extrabold flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Live Procurement Scope
                </span>
                <span className="text-[10px] font-mono neu-pill text-[#0c1e38] px-2.5 py-0.5 rounded-full font-bold">
                  Form Review
                </span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div>
                  <div className="text-slate-500 font-mono text-[11px] font-semibold">Procuring Body:</div>
                  <div className="text-[#0c1e38] font-bold mt-0.5">{orgType}</div>
                </div>

                <div>
                  <div className="text-slate-500 font-mono text-[11px] font-semibold">Statutory Procedure:</div>
                  <div className="text-slate-700 mt-0.5 font-medium">{biddingProcedure}</div>
                </div>

                <div className="p-4 neu-pressed rounded-2xl space-y-2 font-mono">
                  <div className="text-amber-800 text-[11px] font-extrabold uppercase">BoQ Breakdown:</div>
                  <div className="grid grid-cols-2 gap-2 text-slate-700 text-xs font-semibold">
                    <div>• Servers: <strong className="text-[#0c1e38]">{serverCount} units</strong></div>
                    <div>• Laptops: <strong className="text-[#0c1e38]">{laptopCount} units</strong></div>
                    <div>• Projectors: <strong className="text-[#0c1e38]">{projectorCount} units</strong></div>
                    <div>• Desktops: <strong className="text-[#0c1e38]">{desktopCount} units</strong></div>
                  </div>
                  {civilAreaSqFt > 0 && (
                    <div className="text-emerald-700 pt-1.5 border-t border-[#cbd7e6]/70 text-[11px] font-bold">
                      • Civil Works: <strong>{civilAreaSqFt.toLocaleString()} Sq. Ft Covered Area</strong>
                    </div>
                  )}
                </div>

                <div>
                  <div className="text-slate-500 font-mono text-[11px] font-semibold">Delivery SLA:</div>
                  <div className="text-slate-700 mt-0.5 font-medium">{timeline}</div>
                </div>
              </div>

              <div className="pt-3.5 border-t border-[#cbd7e6] space-y-2 text-[11px] text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Includes OEM Manufacturer Authorization (MAF)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>3-to-5 Year Onsite Next Business Day (NBD) Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Schedule-A Bank Bid Guarantee Mobilization</span>
                </div>
              </div>
            </div>

            {/* Direct Coordinator Box */}
            <div className="neu-flat rounded-3xl p-6 space-y-2 text-xs">
              <div className="font-mono text-amber-700 font-extrabold uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                Active Bid Deadline within 48 Hours?
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed font-normal">
                If the tender closing gazette deadline is imminent, direct bypass to the Directorate of Public Contracts is available:
              </p>
              <div className="p-3.5 neu-pressed rounded-2xl mt-2">
                <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Emergency Tender Cell:</div>
                <div className="text-base font-extrabold text-[#0c1e38] font-mono mt-0.5">{COMPANY_PROFILE.contact.emergencyTenderCell}</div>
                <div className="text-[11px] text-slate-500 font-mono font-medium">{COMPANY_PROFILE.contact.email}</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
