import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const AgencyStoryTeaser: React.FC = () => {
  return (
    <section className="w-full py-24 bg-[#0B0D0F] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
              AGENCY FOUNDATION STORY
            </span>

            <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-tight leading-tight">
              FROM THREE PEOPLE TO A GLOBAL SIX-PERSON TEAM.
            </h2>

            <p className="font-sans text-lg font-bold text-slate-200">
              2022. Three people. One core belief: Businesses should not have to waste valuable time on work technology can handle.
            </p>

            <p className="font-sans text-slate-300 text-base leading-relaxed">
              We started in 2022 as a three-person automation team. Over time, we expanded into a six-person specialist agency with expertise across AI agents, CRM workflows, interactive websites, tender parsing engines, graphic design, video production, and business automation.
            </p>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-[#5B7CFA] hover:text-white transition-colors"
              >
                <span>Read Full Agency Timeline & Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-[#15191D] border border-white/10 space-y-6 shadow-2xl">
              <span className="font-mono text-xs font-bold text-[#5B7CFA] block">
                EVOLUTION TIMELINE
              </span>

              <div className="space-y-4 font-mono text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                  <span className="font-bold text-white">2022 — Founded</span>
                  <span className="text-slate-400">3-Person Team</span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                  <span className="font-bold text-white">2024 — Dual Hubs</span>
                  <span className="text-slate-400">UK & Nigeria</span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                  <span className="font-bold text-white">2026 — Today</span>
                  <span className="text-slate-400">6 Specialists • 50+ Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
