import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/common/PageTransition';
import { SEO } from '../components/common/SEO';
import { SOLUTIONS_DATA } from '../data/solutions';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const SolutionsPage: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="AI Automation Solutions — NEWHEIGHT AI SYSTEMS"
        description="Explore 10 core AI solutions engineered for modern enterprises: Customer Support, Lead Qualification, AI Voice Receptionist, Document Processing, and Custom AI Systems."
      />

      <section className="w-full py-20 bg-[#0B0D0F] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
              ENTERPRISE SYSTEM SPECIFICATIONS
            </span>
            <h1 className="font-heading text-5xl sm:text-7xl font-normal text-white tracking-tight">
              Intelligent AI Solutions
            </h1>
            <p className="font-sans text-slate-300 text-lg leading-relaxed">
              We design, build, and deploy production-grade AI automation architectures tailored to eliminate operational friction and accelerate business performance.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Index */}
      <section className="w-full py-24 bg-[#15191D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SOLUTIONS_DATA.map((solution) => (
            <div
              key={solution.id}
              className="rounded-3xl p-8 sm:p-12 bg-[#0B0D0F] border border-white/10 hover:border-[#5B7CFA]/40 transition-all shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#5B7CFA] px-3 py-1 rounded-full bg-[#5B7CFA]/10 border border-[#5B7CFA]/30">
                    SOLUTION {solution.number}
                  </span>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                    Production Architecture
                  </span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl text-white">
                  {solution.name}
                </h2>

                <p className="font-sans text-slate-300 text-base leading-relaxed">
                  {solution.fullDescription}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#15191D] border border-white/10">
                    <span className="text-xs font-mono text-[#5B7CFA] font-bold block mb-1">What It Solves:</span>
                    <ul className="space-y-1 text-xs font-sans text-slate-300">
                      {solution.whatItSolves.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#5B7CFA]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-[#15191D] border border-white/10">
                    <span className="text-xs font-mono text-emerald-400 font-bold block mb-1">Target Impact:</span>
                    <p className="text-xs font-sans text-slate-300 leading-normal">
                      {solution.targetBusinessImpact}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center space-y-4 lg:border-l lg:border-white/10 lg:pl-8">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 space-y-2">
                  <span className="text-[#5B7CFA] font-bold block">Key Capabilities:</span>
                  {solution.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7CFA] shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/solutions/${solution.slug}`}
                  className="w-full py-4 px-6 rounded-full bg-[#5B7CFA] hover:bg-[#4a6be4] text-white font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>View Full Specification</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};
