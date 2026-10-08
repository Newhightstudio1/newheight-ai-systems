import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Operational Friction Mapping',
    desc: 'We conduct a thorough audit of your software stack, communication channels, manual data points, and customer response latency to map where automation delivers highest financial leverage.',
    nodes: ['Inbound Channel Audit', 'Software Stack Mapping', 'Friction Point Quantification']
  },
  {
    step: '02',
    title: 'DESIGN',
    subtitle: 'System & Data Schema Mapping',
    desc: 'We architect connected data flows, fine-tune model parameters, configure API webhooks, and specify security boundaries before writing code.',
    nodes: ['Webhook Endpoint Map', 'Vector Index Design', 'Security & Role Controls']
  },
  {
    step: '03',
    title: 'BUILD',
    subtitle: 'Integration & AI Agent Engineering',
    desc: 'Our engineers build custom microservices, configure multi-channel triggers, train domain-specific agents, and connect your software ecosystem (HubSpot, Shopify, Slack, Twilio).',
    nodes: ['Custom Microservice Build', 'Multi-Channel Integration', 'Live Production Tests']
  },
  {
    step: '04',
    title: 'OPTIMIZE',
    subtitle: 'Telemetry & Scaled Deployment',
    desc: 'We continuously monitor execution logs, refine prompt performance, expand integration coverage, and scale your automated workforce as your business grows.',
    nodes: ['99.9% Telemetry Monitor', 'Prompt Output Refinement', 'Scale Architecture']
  }
];

export const HowWeWork: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentStep = STEPS[activeIdx];

  return (
    <section className="w-full py-24 bg-[#0B0D0F] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
            ENGINEERING METHODOLOGY
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-tight">
            HOW WE WORK.
          </h2>
          <p className="font-sans text-slate-300 text-base leading-relaxed">
            A rigorous 4-step framework engineered for zero-downtime deployment and verifiable business leverage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Step Selector List */}
          <div className="lg:col-span-6 space-y-4">
            {STEPS.map((item, idx) => {
              const isActive = idx === activeIdx;

              return (
                <div
                  key={item.step}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#15191D] border-white/20 text-white shadow-xl'
                      : 'bg-transparent border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#5B7CFA]' : 'text-slate-500'}`}>
                        {item.step}
                      </span>
                      <h3 className="font-heading text-2xl tracking-tight text-white">
                        {item.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-slate-400">{item.subtitle}</span>
                  </div>

                  {isActive && (
                    <p className="font-sans text-xs text-slate-300 mt-4 leading-relaxed pt-4 border-t border-white/10">
                      {item.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Interactive State Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl p-8 bg-[#15191D] border border-white/15 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-mono text-xs font-bold text-[#5B7CFA]">
                  METHODOLOGY STAGE 0{activeIdx + 1}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {currentStep.title} PHASE
                </span>
              </div>

              <div>
                <h4 className="font-heading text-2xl font-normal text-white mb-2">
                  {currentStep.subtitle}
                </h4>
                <p className="font-sans text-xs text-slate-300 leading-relaxed">
                  {currentStep.desc}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                  Stage Deliverables:
                </span>
                {currentStep.nodes.map((node, i) => (
                  <div key={i} className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-slate-200 flex items-center justify-between">
                    <span>{node}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
