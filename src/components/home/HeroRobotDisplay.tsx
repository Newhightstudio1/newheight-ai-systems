import React, { useState, useEffect } from 'react';
import { Cpu, Database, CheckCircle2, Zap, Activity } from 'lucide-react';

export const HeroRobotDisplay: React.FC = () => {
  const [tasksCount, setTasksCount] = useState(12);
  const [pulseActive, setPulseActive] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTasksCount((prev) => prev + 1);
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 800);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-3xl bg-[#15191D] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden group">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Top Interface Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${pulseActive ? 'bg-emerald-400 animate-ping' : 'bg-emerald-400'}`} />
          <span className="text-white font-bold tracking-wider">NEWHEIGHT CORE AGENT</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <Activity className="w-3.5 h-3.5 text-[#5B7CFA]" />
          <span>v2.4 ONLINE</span>
        </div>
      </div>

      {/* Main Character & Interface Display Grid */}
      <div className="my-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center relative z-10">
        {/* Left: Original 3D/Vector NEWHEIGHT Brand Robot Assistant */}
        <div className="sm:col-span-5 flex flex-col items-center justify-center p-4 rounded-2xl bg-black/40 border border-white/10 relative">
          <div className="relative w-28 h-28 flex items-center justify-center animate-bounce-slow">
            {/* Robot Head Outer Shell */}
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-950 border border-white/20 shadow-2xl flex flex-col items-center justify-center p-3 relative">
              {/* Visor Screen */}
              <div className="w-16 h-8 rounded-lg bg-black border border-[#5B7CFA]/40 flex items-center justify-center gap-2 overflow-hidden">
                <span className="w-2 h-2 rounded-full bg-[#5B7CFA] animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-[#5B7CFA] animate-pulse" />
              </div>

              {/* Status Indicator Notch */}
              <div className="w-6 h-1 rounded-full bg-[#5B7CFA]/60 mt-2" />
            </div>

            {/* Floating Halo Ring */}
            <div className="absolute -top-2 w-16 h-1.5 rounded-full bg-[#5B7CFA]/30 border border-[#5B7CFA]/60" />
          </div>

          <span className="font-mono text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-bold">
            SYSTEM AGENT 01
          </span>
        </div>

        {/* Right: Live Business Automation System Status */}
        <div className="sm:col-span-7 space-y-3 font-mono text-xs">
          <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-300">
              <Cpu className="w-4 h-4 text-[#5B7CFA]" />
              <span>AI AGENT</span>
            </div>
            <span className="text-emerald-400 font-bold text-[10px] px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30">
              ONLINE
            </span>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-300">
              <Zap className="w-4 h-4 text-[#5B7CFA]" />
              <span>QUALIFICATION</span>
            </div>
            <span className="text-[#5B7CFA] font-bold text-[10px]">RUNNING</span>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-300">
              <Database className="w-4 h-4 text-[#5B7CFA]" />
              <span>CRM SYNC</span>
            </div>
            <span className="text-white font-bold text-[10px]">CONNECTED</span>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>TASKS DONE</span>
            </div>
            <span className="text-white font-bold text-xs">{tasksCount} BATCHED</span>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400 relative z-10">
        <span className="text-slate-300">AVG RESPONSE LATENCY: <strong className="text-emerald-400">2.4s</strong></span>
        <span>NEWHEIGHT OS</span>
      </div>
    </div>
  );
};
