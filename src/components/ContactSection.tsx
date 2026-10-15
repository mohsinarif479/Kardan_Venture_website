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
    <section id="contact" className="py-20 lg:py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-amber-700" />
            <span>Directorate of Public Sector Contracts & Headquarters</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-sans">
            Official Tender Inquiries & Departmental Liaison
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            For urgent tender bidding inquiries, technical specification reviews, consortium agreements, or single-source departmental procurement inquiries.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Headquarters & Emergency Tender Hotline (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Urgent Bid Hotline Box */}
            <div className="p-6 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>Active Tender Hotline (24/7 Dedicated Cell)</span>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-slate-400 font-mono">Emergency Bid Closure Line:</div>
                <a
                  href={`tel:${COMPANY_PROFILE.contact.emergencyTenderCell}`}
                  className="text-2xl font-black text-white hover:text-amber-300 transition-colors font-mono tracking-tight block"
                >
                  {COMPANY_PROFILE.contact.emergencyTenderCell}
                </a>
              </div>

              <div className="pt-2 text-xs text-slate-300 space-y-1 border-t border-slate-800">
                <p>• Monitored continuously during active federal & provincial tender bid closures.</p>
                <p>• Technical response dispatched within 2 hours for active gazette deadlines.</p>
              </div>
            </div>

            {/* Corporate Offices */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-300 space-y-4">
              <h3 className="text-xs font-mono uppercase text-slate-800 font-bold tracking-wider">
                Corporate Headquarters & Regional Hubs
              </h3>

              <div className="space-y-3.5 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Head Office:</div>
                    <div>{COMPANY_PROFILE.contact.address}</div>
                    <div className="text-slate-500 mt-0.5">{COMPANY_PROFILE.contact.city}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Tender Desk Telephone:</div>
                    <div className="font-mono text-slate-800">{COMPANY_PROFILE.contact.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Official Procurement Communications:</div>
                    <div className="font-mono text-slate-800">{COMPANY_PROFILE.contact.email}</div>
                    <div className="font-mono text-slate-500">{COMPANY_PROFILE.contact.supportEmail}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Official Operating Hours:</div>
                    <div>{COMPANY_PROFILE.contact.operatingHours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Statutory Registrations Badge */}
            <div className="p-4 rounded-lg bg-slate-100 border border-slate-300 text-[11px] text-slate-700 space-y-1 font-mono">
              <div>• <strong>Corporate Entity:</strong> {COMPANY_PROFILE.legalName}</div>
              <div>• <strong>Universal Corporate ID:</strong> {COMPANY_PROFILE.corporateId}</div>
              <div>• <strong>Tax Identifier:</strong> {COMPANY_PROFILE.complianceKeys.ntn}</div>
              <div>• <strong>PEC License:</strong> {COMPANY_PROFILE.complianceKeys.pecCategory}</div>
            </div>

          </div>

          {/* Right Column: Formal RFP / Tender Query Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-300 p-6 sm:p-8 shadow-sm">
            
            <div className="mb-6 pb-4 border-b border-slate-200">
              <h3 className="text-lg font-bold text-slate-950 font-sans">
                Official Departmental Communication Form
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Government procurement officers may submit inquiries, RFP notices, or request direct meetings with our engineering directors.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-950 font-sans">Official Inquiry Logged</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your communication has been registered in the Directorate of Public Sector Contracts. Our coordinator will contact you at <strong>{formData.email}</strong> within 4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">
                      Officer Full Name & Designation *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Javed, Assistant Director"
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:border-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">
                      Procuring Organization / Ministry *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      placeholder="e.g. Higher Education Commission"
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:border-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">
                      Official Government Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tariq@department.gov.pk"
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:border-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">
                      Direct Telephone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 0000000"
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-900 font-mono focus:outline-none focus:border-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Procurement Division of Interest
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:border-slate-800"
                  >
                    <option>Enterprise ICT Systems & Hardware (Servers, Laptops, Desktops, Projectors)</option>
                    <option>Civil Construction & Institutional Infrastructure (PEC C-2)</option>
                    <option>Published Tender Participation / Bid Bond Partner</option>
                    <option>General Order Supply & Biometrics</option>
                    <option>Joint Venture (JV) Consortium Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Tender Reference ID & Scope Summary *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide tender title, required quantities, target submission deadline, and statutory terms..."
                    className="w-full bg-white border border-slate-300 rounded p-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
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
