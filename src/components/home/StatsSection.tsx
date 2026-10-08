import React from 'react';
import { AGENCY_STATS } from '../../data/stats';

export const StatsSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-[#15191D] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between pb-8 mb-12 border-b border-white/10 gap-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
            AGENCY VERIFIED METRICS & SCALE
          </span>
          <span className="font-mono text-xs text-slate-400">
            ESTABLISHED 2022 • UK & NIGERIA HUBS
          </span>
        </div>

        {/* Editorial Typographic Stats Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {AGENCY_STATS.map((stat, idx) => (
            <div key={stat.label} className="space-y-2">
              <span className="font-mono text-xs text-slate-500 font-bold block">
                0{idx + 1} // METRIC
              </span>

              {/* Instrument Serif Number */}
              <div className="font-heading text-6xl sm:text-7xl font-normal text-white tracking-tight leading-none">
                {stat.value}
              </div>

              {/* Plus Jakarta Sans Label */}
              <div className="font-sans text-base font-bold text-slate-200 tracking-tight pt-2">
                {stat.label}
              </div>

              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
