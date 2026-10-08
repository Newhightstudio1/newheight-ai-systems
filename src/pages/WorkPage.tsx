import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/common/PageTransition';
import { SEO } from '../components/common/SEO';
import { CASE_STUDIES } from '../data/caseStudies';
import { ImagePlaceholder } from '../components/common/ImagePlaceholder';
import { ArrowUpRight } from 'lucide-react';

export const WorkPage: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Featured Work & Case Studies — NEWHEIGHT AI SYSTEMS"
        description="Explore real system deployments engineered by NEWHEIGHT AI SYSTEMS across freight logistics, e-commerce, healthcare, and B2B SaaS."
      />

      <section className="w-full py-20 bg-[#F4F1EB] text-[#0B0D0F] border-b border-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-600">
              SYSTEM IMPLEMENTATION PORTFOLIO
            </span>
            <h1 className="font-heading text-5xl sm:text-7xl text-[#0B0D0F] tracking-tight">
              Our Work & Case Studies
            </h1>
            <p className="font-sans text-slate-700 text-lg leading-relaxed">
              Transparent breakdowns of operational challenges, custom system architectures, tool integrations, and concrete outcomes delivered for clients worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-[#0B0D0F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.id}
                to={`/work/${cs.slug}`}
                className="group rounded-3xl p-8 bg-[#15191D] border border-white/10 hover:border-[#5B7CFA]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  {cs.image ? (
                    <div className="relative mb-6 rounded-2xl overflow-hidden border border-white/15 bg-[#0B0D0F] shadow-2xl group-hover:border-[#5B7CFA]/60 transition-all">
                      <div className="px-4 py-2.5 bg-[#15191D] border-b border-white/10 flex items-center justify-between font-mono text-xs text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-slate-300 text-[11px] truncate max-w-[220px]">{cs.title}</span>
                        <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">Live System Spec</span>
                      </div>
                      <div className="aspect-video overflow-hidden bg-black relative">
                        <img
                          src={cs.image}
                          alt={cs.imageAlt || cs.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <span className="text-xs font-mono text-white bg-[#5B7CFA] px-3.5 py-1.5 rounded-full font-bold shadow-lg">
                            Inspect Case Architecture & Workflow Details →
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <ImagePlaceholder
                      label={`System Architecture: ${cs.title}`}
                      sublabel={`Client: ${cs.clientType}`}
                      type="project"
                      aspectRatio="aspect-video"
                      className="mb-6"
                    />
                  )}

                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-[#5B7CFA] font-bold">
                      {cs.industry}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      Verified Client Deployment
                    </span>
                  </div>

                  <h2 className="font-heading text-3xl font-normal text-white group-hover:text-[#5B7CFA] transition-colors mb-3">
                    {cs.title}
                  </h2>

                  <p className="font-sans text-xs font-mono text-slate-400 mb-4">
                    Client Sector: {cs.clientType}
                  </p>

                  <p className="font-sans text-slate-300 text-sm leading-relaxed line-clamp-3 mb-6">
                    {cs.challenge}
                  </p>

                  <div className="pt-4 border-t border-white/10 mb-6">
                    <span className="text-xs font-mono text-slate-400 font-bold block mb-2">Tools & Integrations:</span>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                      {cs.toolsIntegrations.map((tool) => (
                        <span key={tool} className="px-2.5 py-1 rounded bg-black/50 border border-white/10 text-slate-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold text-[#5B7CFA]">
                  <span>View Case Study Architecture Specification</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
