import React from 'react';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

const BEFORE_STEPS = [
  '01 Inbound lead arrives',
  '02 Staff manually copies data',
  '03 CRM manually updated',
  '04 Manual follow-up email written',
  '05 Manager chases rep for update',
  '06 Manual CSV report generated'
];

const AFTER_STEPS = [
  '01 Lead captured instantly',
  '02 AI evaluates BANT intent in 2s',
  '03 CRM auto-enriched & updated',
  '04 Adaptive 2-way follow-up sent',
  '05 Rep notified with full summary',
  '06 Executive dashboard auto-updated'
];

export const BeforeAfterSection: React.FC = () => {
  return (
    <section className="w-full py-24 bg-[#0B0D0F] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
            OPERATIONAL TRANSFORMATION COMPARISON
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-tight">
            BEFORE & AFTER AUTOMATION.
          </h2>
          <p className="font-sans text-slate-300 text-base leading-relaxed">
            See the concrete difference between manual friction and a NEWHEIGHT connected system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Before NEWHEIGHT */}
          <div className="p-8 rounded-3xl bg-[#15191D] border border-red-500/20 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-mono text-xs font-bold text-red-400">
                BEFORE NEWHEIGHT
              </span>
              <span className="font-mono text-xs text-slate-500">Manual Process (6 Hours Avg)</span>
            </div>

            <div className="space-y-3 font-sans text-xs text-slate-300">
              {BEFORE_STEPS.map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-red-500/10 flex items-center justify-between">
                  <span>{step}</span>
                  <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* After NEWHEIGHT */}
          <div className="p-8 rounded-3xl bg-[#15191D] border border-[#5B7CFA]/40 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-mono text-xs font-bold text-[#5B7CFA]">
                AFTER NEWHEIGHT
              </span>
              <span className="font-mono text-xs text-emerald-400 font-bold">Autonomous System (2.4s)</span>
            </div>

            <div className="space-y-3 font-sans text-xs text-slate-100">
              {AFTER_STEPS.map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#0B0D0F] border border-[#5B7CFA]/20 flex items-center justify-between">
                  <span className="font-medium">{step}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
