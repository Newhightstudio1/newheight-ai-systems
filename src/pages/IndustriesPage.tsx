import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/common/PageTransition';
import { SEO } from '../components/common/SEO';
import { INDUSTRIES_DATA } from '../data/industries';
import { Globe, ArrowRight, CheckCircle2, AlertTriangle, Cpu } from 'lucide-react';

export const IndustriesPage: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Industries Served — NEWHEIGHT AI SYSTEMS"
        description="Tailored AI automation system architecture for E-commerce, Real Estate, Healthcare, B2B, Professional Services, and growing SMEs."
      />

      <section className="w-full py-20 bg-[#0B0D0F] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
              CROSS-SECTOR OPERATIONAL FRAMEWORKS
            </span>
            <h1 className="font-heading text-5xl sm:text-7xl text-white tracking-tight">
              Industries We Serve
            </h1>
            <p className="font-sans text-slate-300 text-lg leading-relaxed">
              While our system engineering principles apply to any business with operational friction, we have mapped out specialized automation frameworks for high-impact sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-[#15191D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {INDUSTRIES_DATA.map((industry) => (
            <div
              key={industry.id}
              className="rounded-3xl p-8 sm:p-10 bg-[#0B0D0F] border border-white/10 hover:border-[#5B7CFA]/30 transition-all shadow-xl space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5B7CFA]/10 border border-[#5B7CFA]/30 flex items-center justify-center text-[#5B7CFA]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-heading text-3xl font-normal text-white">{industry.name}</h2>
                    <p className="font-mono text-xs text-[#5B7CFA] mt-0.5">{industry.description}</p>
                  </div>
                </div>

                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 font-sans text-xs font-bold uppercase tracking-wider text-slate-200 hover:bg-[#5B7CFA] hover:text-white transition-all"
                >
                  <span>Discuss System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-[#15191D] border border-red-500/20 space-y-2">
                  <span className="font-mono text-xs font-bold text-red-400 block">TYPICAL PROBLEM</span>
                  <p className="font-sans text-xs text-slate-300 leading-relaxed">
                    {industry.typicalProblem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#15191D] border border-[#5B7CFA]/30 space-y-2">
                  <span className="font-mono text-xs font-bold text-[#5B7CFA] block">AI OPPORTUNITY</span>
                  <p className="font-sans text-xs text-slate-300 leading-relaxed">
                    {industry.aiOpportunity}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#15191D] border border-white/10 space-y-2">
                  <span className="font-mono text-xs font-bold text-emerald-400 block">RECOMMENDED ARCHITECTURE</span>
                  <ul className="space-y-1.5 font-sans text-xs text-slate-300">
                    {industry.possibleSystems.map((sys, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{sys}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};
