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
    <section id="about" className="py-20 lg:py-24 bg-[#e6ecf4] text-[#0c1e38] border-b border-[#cbd7e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-flat-sm text-[#0c1e38] text-xs font-mono font-bold uppercase tracking-wider">
              <span>Corporate Profile & Governance</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e38] font-sans tracking-tight">
              A Trusted Partner for National Infrastructure & Enterprise Technology
            </h2>

            <p className="text-slate-700 text-base leading-relaxed">
              Established in 2012, <strong className="text-[#0c1e38]">Kardan Ventures (Pvt.) Limited</strong> is an institutional contractor and turnkey solutions provider. We bridge the gap between complex government tender requirements and flawless physical execution.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Our multidisciplinary engineering cadre manages heavy civil works under <strong className="text-[#0c1e38]">PEC Category C-2</strong> licensing, while our dedicated <strong className="text-[#0c1e38]">ICT Procurement Division</strong> delivers mission-critical datacenter server clusters, nationwide fleet laptop deployments, and smart presentation systems across Pakistan.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenProfile}
                className="neu-btn-primary px-6 py-3 rounded-2xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer"
              >
                Inspect Corporate Dossier
              </button>
              <a
                href="#contact"
                className="neu-btn px-6 py-3 rounded-2xl text-[#0c1e38] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Connect with Tender Desk
              </a>
            </div>
          </div>

          {/* Right Image / Corporate Highlight */}
          <div className="lg:col-span-5">
            <div className="neu-flat-lg p-3 rounded-3xl">
              <div className="relative rounded-2xl overflow-hidden shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Kardan Ventures Corporate Headquarters"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e38]/90 via-[#0c1e38]/30 to-transparent p-6 flex flex-col justify-end text-white">
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
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl neu-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl neu-pressed flex items-center justify-center text-amber-700 mb-5">
                    <Icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="text-base font-bold text-[#0c1e38] mb-2.5 font-sans">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
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

