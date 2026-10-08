import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Cpu, Database, MailCheck, Calendar, Trophy, ArrowRight, Sparkles } from 'lucide-react';

const FLOW_STEPS = [
  { id: 'lead', label: 'INBOUND LEAD', sub: 'Multi-channel inquiry', icon: UserCheck, color: 'from-blue-500/20 to-cyan-500/20' },
  { id: 'agent', label: 'AI AGENT', sub: 'Sub-second BANT triage', icon: Cpu, color: 'from-cyan-400/30 to-emerald-400/20' },
  { id: 'crm', label: 'CRM SYSTEM', sub: 'Instant profile enrichment', icon: Database, color: 'from-indigo-500/20 to-blue-500/20' },
  { id: 'followup', label: 'FOLLOW-UP', sub: 'Adaptive 2-way messaging', icon: MailCheck, color: 'from-cyan-500/20 to-blue-600/20' },
  { id: 'booking', label: 'APPOINTMENT', sub: 'Confirmed calendar slot', icon: Calendar, color: 'from-emerald-500/20 to-cyan-400/20' },
  { id: 'sales', label: 'SALES TEAM', sub: 'High-intent demo call', icon: Trophy, color: 'from-amber-500/20 to-cyan-400/20' },
];

export const SignatureFlow: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % FLOW_STEPS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto my-8 p-6 sm:p-8 rounded-3xl bg-surface-dark/90 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_50px_rgba(0,240,255,0.08)] relative overflow-hidden">
      {/* Background line glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 pointer-events-none" />

      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
            THE NEWHEIGHT CONNECTED SYSTEM SIGNATURE
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>LIVE AUTOMATION PIPELINE ACTIVE</span>
        </div>
      </div>

      {/* Flow Cards Step Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
        {FLOW_STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isActive = idx === activeIdx;
          const isPassed = idx < activeIdx;

          return (
            <div
              key={step.id}
              onClick={() => setActiveIdx(idx)}
              className={`relative cursor-pointer rounded-2xl p-3.5 flex flex-col justify-between transition-all duration-300 border ${
                isActive
                  ? 'bg-gradient-to-b from-cyan-950/80 to-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)] scale-105 z-20'
                  : isPassed
                  ? 'bg-slate-900/60 border-cyan-500/30 text-slate-300'
                  : 'bg-slate-950/40 border-white/[0.06] text-slate-400 hover:border-white/[0.15]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-xl border ${isActive ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-white/[0.04] border-white/[0.08] text-slate-400'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-mono text-[10px] text-slate-500 font-bold">0{idx + 1}</span>
              </div>

              <div>
                <h4 className={`font-bold text-xs ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {step.label}
                </h4>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  {step.sub}
                </p>
              </div>

              {/* Connecting Pulse Line Arrow for desktop */}
              {idx < FLOW_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-30">
                  <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400 animate-pulse' : 'text-slate-700'}`} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
        <p className="font-mono text-[11px] text-slate-300">
          <span className="text-cyan-400 font-semibold">Outcome:</span> One connected operating system instead of disconnected manual work.
        </p>
        <span className="hidden md:inline font-mono text-[10px] text-slate-500">
          Click nodes to test step execution
        </span>
      </div>
    </div>
  );
};
