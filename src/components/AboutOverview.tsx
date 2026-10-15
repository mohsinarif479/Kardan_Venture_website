'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  Briefcase 
} from 'lucide-react';

interface Props {
  onOpenProfile: () => void;
}

export default function AboutOverview({ onOpenProfile }: Props) {
  const values = [
    {
      title: 'Statutory Compliance',
      description: '100% adherence to Public Procurement Regulatory Authority (PPRA) and Pakistan Engineering Council (PEC) rules with zero audit deviations.',
      icon: ShieldCheck
    },
    {
      title: 'Tier-1 OEM Partnerships',
      description: 'Direct manufacturer alliances with Dell, HPE, Lenovo, ViewSonic, Epson, and Cisco ensuring authentic hardware with official warranties.',
      icon: Award
    },
    {
      title: 'Flawless Milestone SLA',
      description: 'Demonstrated history of delivering complex civil projects and high-volume IT rollouts ahead of contractual deadlines.',
      icon: Clock
    },
    {
      title: 'Financial Mobilization',
      description: 'Robust credit facilities with Schedule-A commercial banks for rapid issuance of Bid Bonds and Performance Guarantees.',
      icon: Briefcase
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono font-semibold uppercase tracking-wider">
              <span>Corporate Profile & Governance</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-sans tracking-tight">
              A Trusted Partner for National Infrastructure & Enterprise Technology
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Established in 2012, <strong>Kardan Ventures (Pvt.) Limited</strong> is an institutional contractor and turnkey solutions provider. We bridge the gap between complex government tender requirements and flawless physical execution.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Our multidisciplinary engineering cadre manages heavy civil works under <strong>PEC Category C-2</strong> licensing, while our dedicated <strong>ICT Procurement Division</strong> delivers mission-critical datacenter server clusters, nationwide fleet laptop deployments, and smart classroom presentation systems across Pakistan.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenProfile}
                className="px-5 py-2.5 rounded bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                Inspect Corporate Dossier
              </button>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider transition-colors border border-slate-300 cursor-pointer"
              >
                Connect with Tender Desk
              </a>
            </div>
          </div>

          {/* Right Image / Corporate Highlight */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Kardan Ventures Corporate Headquarters"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                  Corporate Governance
                </span>
                <h4 className="text-lg font-bold font-sans mt-0.5">
                  Kardan Ventures (Pvt.) Limited
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  SECP Corporate Incorporation No. 0081294 • Islamabad • Lahore • Karachi
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-400 transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-2xs">
                    <Icon className="w-5 h-5 text-amber-700" />
                  </div>
                  <h3 className="text-base font-bold text-slate-950 mb-2 font-sans">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

