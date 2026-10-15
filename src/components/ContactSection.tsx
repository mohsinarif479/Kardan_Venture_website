'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';
import { COMPANY_PROFILE } from '../data/companyData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    email: '',
    phone: '',
    category: 'Enterprise ICT Systems & Hardware',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#e6ecf4] text-[#0c1e38] relative border-b border-[#cbd7e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-flat-sm text-amber-700 text-xs font-mono font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-amber-700" />
            <span>Directorate of Public Sector Contracts & Headquarters</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e38] tracking-tight font-sans">
            Official Tender Inquiries & Departmental Liaison
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            For urgent tender bidding inquiries, technical specification reviews, consortium agreements, or single-source departmental procurement inquiries.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Headquarters & Emergency Tender Hotline (5 Cols) */}
          <div className="lg:col-span-5 space-y-7">
            
            {/* Urgent Bid Hotline Box */}
            <div className="p-7 rounded-3xl neu-flat-lg space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-700 font-extrabold">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-pulse"></span>
                <span>Active Tender Hotline (24/7 Dedicated Cell)</span>
              </div>

              <div className="p-4 rounded-2xl neu-pressed space-y-1">
                <div className="text-xs text-slate-500 font-mono font-semibold">Emergency Bid Closure Line:</div>
                <a
                  href={`tel:${COMPANY_PROFILE.contact.emergencyTenderCell}`}
                  className="text-2xl font-black text-[#0c1e38] hover:text-amber-700 transition-colors font-mono tracking-tight block"
                >
                  {COMPANY_PROFILE.contact.emergencyTenderCell}
                </a>
              </div>

              <div className="pt-2 text-xs text-slate-600 space-y-1.5 font-medium">
                <p>• Monitored continuously during active federal & provincial tender bid closures.</p>
                <p>• Technical response dispatched within 2 hours for active gazette deadlines.</p>
              </div>
            </div>

            {/* Corporate Offices */}
            <div className="p-7 rounded-3xl neu-flat space-y-4">
              <h3 className="text-xs font-mono uppercase text-[#0c1e38] font-extrabold tracking-wider">
                Corporate Headquarters & Regional Hubs
              </h3>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg neu-pressed flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#0c1e38]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c1e38]">Head Office:</div>
                    <div className="font-medium">{COMPANY_PROFILE.contact.address}</div>
                    <div className="text-slate-500 mt-0.5">{COMPANY_PROFILE.contact.city}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg neu-pressed flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#0c1e38]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c1e38]">Tender Desk Telephone:</div>
                    <div className="font-mono font-bold text-[#0c1e38]">{COMPANY_PROFILE.contact.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg neu-pressed flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#0c1e38]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c1e38]">Official Procurement Communications:</div>
                    <div className="font-mono text-[#0c1e38] font-medium">{COMPANY_PROFILE.contact.email}</div>
                    <div className="font-mono text-slate-500">{COMPANY_PROFILE.contact.supportEmail}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg neu-pressed flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#0c1e38]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c1e38]">Official Operating Hours:</div>
                    <div className="font-medium">{COMPANY_PROFILE.contact.operatingHours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Statutory Registrations Badge */}
            <div className="p-5 rounded-2xl neu-pressed text-[11px] text-slate-700 space-y-1.5 font-mono">
              <div>• <strong>Corporate Entity:</strong> {COMPANY_PROFILE.legalName}</div>
              <div>• <strong>Universal Corporate ID:</strong> {COMPANY_PROFILE.corporateId}</div>
              <div>• <strong>Tax Identifier:</strong> {COMPANY_PROFILE.complianceKeys.ntn}</div>
              <div>• <strong>PEC License:</strong> {COMPANY_PROFILE.complianceKeys.pecCategory}</div>
            </div>

          </div>

          {/* Right Column: Formal RFP / Tender Query Form (7 Cols) */}
          <div className="lg:col-span-7 neu-flat-lg rounded-3xl p-7 sm:p-9">
            
            <div className="mb-6 pb-4 border-b border-[#cbd7e6]">
              <h3 className="text-xl font-extrabold text-[#0c1e38] font-sans">
                Official Departmental Communication Form
              </h3>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Government procurement officers may submit inquiries, RFP notices, or request direct meetings with our engineering directors.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full neu-flat flex items-center justify-center mx-auto text-emerald-700">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-extrabold text-[#0c1e38] font-sans">Official Inquiry Logged</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
                  Thank you, <strong>{formData.name}</strong>. Your communication has been registered in the Directorate of Public Sector Contracts. Our coordinator will contact you at <strong>{formData.email}</strong> within 4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="neu-btn px-6 py-2.5 text-[#0c1e38] text-xs font-bold rounded-xl uppercase tracking-wider transition-all cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1.5">
                      Officer Full Name & Designation *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Javed, Assistant Director"
                      className="w-full neu-input rounded-2xl px-3.5 py-2.5 text-[#0c1e38] font-medium"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1.5">
                      Procuring Organization / Ministry *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      placeholder="e.g. Higher Education Commission"
                      className="w-full neu-input rounded-2xl px-3.5 py-2.5 text-[#0c1e38] font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1.5">
                      Official Government Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tariq@department.gov.pk"
                      className="w-full neu-input rounded-2xl px-3.5 py-2.5 text-[#0c1e38] font-medium"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1.5">
                      Direct Telephone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 0000000"
                      className="w-full neu-input rounded-2xl px-3.5 py-2.5 text-[#0c1e38] font-mono font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">
                    Procurement Division of Interest
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full neu-input rounded-2xl px-3.5 py-2.5 text-[#0c1e38] font-medium"
                  >
                    <option>Enterprise ICT Systems & Hardware (Servers, Laptops, Desktops, Projectors)</option>
                    <option>Civil Construction & Institutional Infrastructure (PEC C-2)</option>
                    <option>Published Tender Participation / Bid Bond Partner</option>
                    <option>General Order Supply & Biometrics</option>
                    <option>Joint Venture (JV) Consortium Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">
                    Tender Reference ID & Scope Summary *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide tender title, required quantities, target submission deadline, and statutory terms..."
                    className="w-full neu-input rounded-2xl p-3.5 text-[#0c1e38] placeholder-slate-400 font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-2xl neu-btn-primary text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Routing to Tender Coordinator...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Official Communication</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-2 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>All tender documentation handled under strict non-disclosure and statutory governance.</span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
