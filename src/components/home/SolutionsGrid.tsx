import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SOLUTIONS_DATA } from '../../data/solutions';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const SolutionsGrid: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = SOLUTIONS_DATA[activeIdx];

  return (
    <section className="w-full py-24 bg-[#15191D] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
              10 CORE SYSTEM OFFERS
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-tight mt-2">
              SYSTEMS BUILT AROUND YOUR BUSINESS.
            </h2>
          </div>

          <Link
            to="/solutions"
            className="font-sans text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors flex items-center gap-2"
          >
            <span>View All Detailed Specifications</span>
            <ArrowRight className="w-4 h-4 text-[#5B7CFA]" />
          </Link>
        </div>

        {/* Interactive Editorial Services Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Numbered Editorial List */}
          <div className="lg:col-span-7 space-y-3">
            {SOLUTIONS_DATA.map((service, idx) => {
              const isActive = idx === activeIdx;

              return (
                <Link
                  key={service.id}
                  to={`/solutions/${service.slug}`}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`group p-6 rounded-xl border transition-all duration-300 flex items-center justify-between block ${
                    isActive
                      ? 'bg-[#0B0D0F] border-white/20 text-white shadow-xl'
                      : 'bg-transparent border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#5B7CFA]' : 'text-slate-500'}`}>
                      {service.number}
                    </span>
                    <h3 className="font-heading text-2xl tracking-tight text-white">
                      {service.name}
                    </h3>
                  </div>

                  <ArrowRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isActive ? 'text-[#5B7CFA] translate-x-1' : 'text-slate-600 group-hover:translate-x-1'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right: Dynamic Visual Preview Panel */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-2xl p-8 bg-[#0B0D0F] border border-white/15 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-mono text-xs font-bold text-[#5B7CFA]">
                  SPECIFICATION PREVIEW
                </span>
                <span className="font-mono text-xs text-slate-500 font-bold">
                  OFFER {activeService.number}
                </span>
              </div>

              <div>
                <h3 className="font-heading text-3xl font-normal text-white mb-3">
                  {activeService.name}
                </h3>
                <p className="font-sans text-slate-300 text-sm leading-relaxed mb-6">
                  {activeService.fullDescription}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider block">
                  Primary Friction Solved:
                </span>
                {activeService.whatItSolves.map((solve, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2 text-xs font-sans text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{solve}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to={`/solutions/${activeService.slug}`}
                  className="w-full py-3.5 px-6 rounded-full bg-[#5B7CFA] hover:bg-[#4a6be4] text-white font-sans text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>Open Service Specification Route</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
