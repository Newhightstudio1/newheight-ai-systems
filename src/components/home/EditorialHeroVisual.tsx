import React from 'react';
import { ArrowRight, CheckCircle2, Workflow, Database, MailCheck, Calendar, Trophy, UserCheck, Cpu } from 'lucide-react';

export const EditorialHeroVisual: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto my-12 rounded-3xl bg-[#12151e] border border-white/[0.1] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Editorial Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">
            NEWHEIGHT CONNECTED WORKFLOW DIAGRAM
          </span>
        </div>
        <span className="font-mono text-xs text-slate-400">
          OPERATIONAL ARCHITECTURE • REF 2026.01
        </span>
      </div>

      {/* Workflow Information Graphic (Human Designed) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {[
          { label: '01 INBOUND LEAD', icon: UserCheck, desc: 'Multi-channel inquiry' },
          { label: '02 AI TRIAGE', icon: Cpu, desc: 'Instant BANT evaluation' },
          { label: '03 CRM SYNC', icon: Database, desc: 'Firmographic enrichment' },
          { label: '04 FOLLOW-UP', icon: MailCheck, desc: 'Adaptive 2-way dispatch' },
          { label: '05 APPOINTMENT', icon: Calendar, desc: 'Calendar confirmation' },
          { label: '06 SALES TEAM', icon: Trophy, desc: 'High-intent discovery' },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="p-4 rounded-xl bg-black/40 border border-white/[0.08] flex flex-col justify-between space-y-3 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <Icon className="w-4 h-4 text-blue-400" />
                <span className="font-mono text-[10px] text-slate-500 font-bold">NODE</span>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-white tracking-tight">
                  {item.label}
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Editorial Caption */}
      <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span className="text-slate-200">System Result:</span> Replaces disconnected manual work with one unified operating pipeline.
        </div>
        <span className="text-slate-500">NEWHEIGHT Enterprise Systems Standard</span>
      </div>
    </div>
  );
};
