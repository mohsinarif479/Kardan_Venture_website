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
    <section id="projects" className="py-20 lg:py-24 bg-[#e6ecf4] text-[#0c1e38] relative border-b border-[#cbd7e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#cbd7e6]">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neu-flat-sm text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
              <Award className="w-3.5 h-3.5" />
              <span>Public Sector Contract Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e38] tracking-tight font-sans">
              Executed Government Tenders & Major Deliveries
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Documented portfolio of major turnkey construction, datacenter computing, and enterprise ICT infrastructure deliveries across federal ministries, defense organizations, and public sector universities.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'all'
                  ? 'neu-btn-primary text-white'
                  : 'neu-btn text-slate-700 hover:text-[#0c1e38]'
              }`}
            >
              All Works ({TENDER_PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'education'
                  ? 'neu-btn-primary text-white'
                  : 'neu-btn text-slate-700 hover:text-[#0c1e38]'
              }`}
            >
              Higher Education
            </button>
            <button
              onClick={() => setFilter('construction')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'construction'
                  ? 'neu-btn-primary text-white'
                  : 'neu-btn text-slate-700 hover:text-[#0c1e38]'
              }`}
            >
              Civil & Engineering
            </button>
            <button
              onClick={() => setFilter('it-infra')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'it-infra'
                  ? 'neu-btn-primary text-white'
                  : 'neu-btn text-slate-700 hover:text-[#0c1e38]'
              }`}
            >
              Datacenter & Servers
            </button>
            <button
              onClick={() => setFilter('government')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'government'
                  ? 'neu-btn-primary text-white'
                  : 'neu-btn text-slate-700 hover:text-[#0c1e38]'
              }`}
            >
              Public Sector Direct
            </button>
          </div>
        </div>

        {/* Projects Cards Grid with Real Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="neu-card rounded-3xl overflow-hidden flex flex-col justify-between"
            >
              {/* Project Image Header */}
              <div className="relative h-48 w-full bg-slate-900 overflow-hidden m-2 rounded-2xl">
                <img
                  src={projectImages[project.id] || projectImages['proj-001']}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e38]/95 via-[#0c1e38]/30 to-transparent"></div>

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${
                    project.status === 'Completed'
                      ? 'bg-emerald-800 text-emerald-100'
                      : project.status === 'Delivered & Certified'
                      ? 'bg-blue-800 text-blue-100'
                      : 'bg-amber-800 text-amber-100'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full neu-flat flex items-center justify-center text-[#0c1e38]">
                  {getSectorIcon(project.sector)}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] font-bold text-amber-300 truncate">
                    {project.client}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-base font-bold text-[#0c1e38] mb-2 font-sans">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                  {project.scopeSummary}
                </p>

                {/* Deliverables List: Inset Well */}
                <div className="space-y-1.5 p-4 rounded-2xl neu-pressed mb-4 text-xs">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#0c1e38] font-bold block mb-1">
                    Delivered Contract Assets:
                  </span>
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="p-6 pt-0 border-t border-[#cbd7e6]/70 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between pt-3">
                  <span className="text-slate-500 font-semibold">Contract Value:</span>
                  <span className="text-amber-800 font-bold">{project.valueBand}</span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-600 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {project.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {project.location}
                  </span>
                </div>

                <div className="pt-1 text-[11px] text-emerald-700 font-bold flex items-center gap-1">
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
