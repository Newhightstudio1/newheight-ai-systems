import React, { useState } from 'react';
import { Play, CheckCircle2, Cpu, Database, Mail, MessageSquare, ArrowRight } from 'lucide-react';

export const LiveSimulationDemo: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(1);

    setTimeout(() => setActiveStep(2), 800);
    setTimeout(() => setActiveStep(3), 1600);
    setTimeout(() => setActiveStep(4), 2400);
    setTimeout(() => {
      setActiveStep(5);
      setIsRunning(false);
    }, 3200);
  };

  return (
    <section className="w-full py-24 bg-[#15191D] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
              INTERACTIVE DEMONSTRATION
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-tight mt-2">
              SEE THE SYSTEM IN ACTION.
            </h2>
          </div>

          <button
            onClick={runSimulation}
            disabled={isRunning}
            className="px-6 py-3.5 rounded-full bg-[#5B7CFA] hover:bg-[#4a6be4] text-white font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg disabled:opacity-50"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>{isRunning ? 'Executing Simulation...' : 'Trigger Sample Lead Flow'}</span>
          </button>
        </div>

        {/* Live Simulation Interface Box */}
        <div className="rounded-3xl p-8 bg-[#0B0D0F] border border-white/15 shadow-2xl space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-bold">SIMULATED LEAD PIPELINE</span>
            </div>
            <span className="text-slate-400">STATUS: {activeStep === 0 ? 'READY' : activeStep === 5 ? 'COMPLETED (2.4s)' : 'PROCESSING'}</span>
          </div>

          {/* Steps Horizontal Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'INBOUND LEAD', desc: 'Enterprise Inquiry', icon: MessageSquare },
              { num: '02', title: 'AI QUALIFY', desc: 'Score: HIGH Intent', icon: Cpu },
              { num: '03', title: 'CRM ENRICH', desc: 'HubSpot Contact Synced', icon: Database },
              { num: '04', title: 'NOTIFY TEAM', desc: 'Slack Alert Sent', icon: CheckCircle2 },
              { num: '05', title: 'FOLLOW-UP', desc: 'Calendar Booked', icon: Mail },
            ].map((step, idx) => {
              const stepNum = idx + 1;
              const isCurrent = activeStep === stepNum;
              const isDone = activeStep > stepNum;
              const Icon = step.icon;

              return (
                <div
                  key={step.num}
                  className={`p-5 rounded-2xl border transition-all duration-300 ${
                    isCurrent
                      ? 'bg-[#15191D] border-[#5B7CFA] text-white shadow-xl scale-105'
                      : isDone
                      ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-200'
                      : 'bg-black/40 border-white/10 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-slate-500">{step.num}</span>
                    <Icon className={`w-4 h-4 ${isCurrent ? 'text-[#5B7CFA]' : isDone ? 'text-emerald-400' : 'text-slate-600'}`} />
                  </div>

                  <h4 className="font-mono text-xs font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-[11px] font-sans text-slate-400">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-400">
            <span>Click button above to test live pipeline speed</span>
            <span className="text-[#5B7CFA]">NEWHEIGHT Demonstration Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
};
