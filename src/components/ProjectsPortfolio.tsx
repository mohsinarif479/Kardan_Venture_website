'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Server, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Award 
} from 'lucide-react';
import { TENDER_PROJECTS } from '../data/companyData';

export default function ProjectsPortfolio() {
  const [filter, setFilter] = useState<string>('all');

  const projectImages: Record<string, string> = {
    'proj-001': 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    'proj-002': 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
    'proj-003': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    'proj-004': 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80',
    'proj-005': 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?auto=format&fit=crop&w=800&q=80',
    'proj-006': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
  };

  const filteredProjects = filter === 'all'
    ? TENDER_PROJECTS
    : TENDER_PROJECTS.filter((p) => p.sector === filter);

  const getSectorIcon = (sector: string) => {
    switch (sector) {
      case 'education':
        return <GraduationCap className="w-5 h-5 text-cyan-600" />;
      case 'construction':
        return <Building2 className="w-5 h-5 text-emerald-600" />;
      case 'it-infra':
        return <Server className="w-5 h-5 text-blue-600" />;
      case 'government':
        return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      default:
        return <Award className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-24 bg-[#f8fafc] text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
              <Award className="w-3.5 h-3.5" />
              <span>Public Sector Contract Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-sans">
              Executed Government Tenders & Major Deliveries
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Documented portfolio of major turnkey construction, datacenter computing, and enterprise ICT infrastructure deliveries across federal ministries, defense organizations, and public sector universities.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
            >
              All Works ({TENDER_PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'education'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
            >
              Higher Education
            </button>
            <button
              onClick={() => setFilter('construction')}
              className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'construction'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
            >
              Civil & Engineering
            </button>
            <button
              onClick={() => setFilter('it-infra')}
              className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'it-infra'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
            >
              Datacenter & Servers
            </button>
            <button
              onClick={() => setFilter('government')}
              className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'government'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
            >
              Public Sector Direct
            </button>
          </div>
        </div>

        {/* Projects Cards Grid with Real Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-300 overflow-hidden flex flex-col justify-between hover:border-slate-500 shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Project Image Header */}
              <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                <img
                  src={projectImages[project.id] || projectImages['proj-001']}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                    project.status === 'Completed'
                      ? 'bg-emerald-900/90 text-emerald-200 border-emerald-700'
                      : project.status === 'Delivered & Certified'
                      ? 'bg-blue-900/90 text-blue-200 border-blue-700'
                      : 'bg-amber-900/90 text-amber-200 border-amber-700'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div className="absolute top-3 right-3 w-7 h-7 rounded bg-slate-900/80 border border-slate-700 flex items-center justify-center text-white">
                  {getSectorIcon(project.sector)}
                </div>

                <div className="absolute bottom-2 left-3 right-3 text-white">
                  <div className="text-[11px] font-semibold text-amber-300 truncate">
                    {project.client}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-base font-bold text-slate-950 mb-2 font-sans">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {project.scopeSummary}
                </p>

                {/* Deliverables List */}
                <div className="space-y-1.5 p-3 rounded-lg bg-slate-50 border border-slate-200 mb-4 text-xs">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1">
                    Delivered Contract Assets:
                  </span>
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="p-6 pt-0 border-t border-slate-100 space-y-1.5 text-xs font-mono">
                <div className="flex items-center justify-between pt-3">
                  <span className="text-slate-500">Contract Value:</span>
                  <span className="text-slate-900 font-bold">{project.valueBand}</span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {project.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {project.location}
                  </span>
                </div>

                <div className="pt-1 text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{project.completionTime}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
