import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { SEO } from '../components/common/SEO';
import { Globe, CheckCircle2, Cpu, Workflow, Layers } from 'lucide-react';

const AGENCY_MILESTONES = [
  {
    phase: 'Phase 01',
    title: 'Founding & Automation Vision',
    desc: 'NEWHEIGHT AI SYSTEMS started as a three-person team focused on helping growing businesses eliminate repetitive operational tasks and manual data bottlenecks through custom automation scripts.'
  },
  {
    phase: 'Phase 02',
    title: 'CRM & Pipeline Engineering Expansion',
    desc: 'Expanded technical offerings into enterprise CRM pipeline automation (HubSpot, Salesforce, GoHighLevel) and automated customer response triggers across web, email, and messaging platforms.'
  },
  {
    phase: 'Phase 03',
    title: 'Six-Person Specialist Team Integration',
    desc: 'Integrated a multidisciplinary six-person team combining AI system architects, CRM specialists, web designers, tender document experts, graphics designers, and media engineers.'
  },
  {
    phase: 'Phase 04',
    title: 'Global Systems Agency',
    desc: 'Delivering tailored AI automation systems for businesses worldwide, focusing on practical workflow integrations that let teams focus on high-value strategic growth.'
  }
];

export const AboutPage: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="About Newheight AI Systems — Built To Remove Operational Friction"
        description="Learn how NEWHEIGHT AI SYSTEMS grew from a three-person team into a six-person specialist agency engineering practical AI automation, CRM pipelines, and custom business systems."
      />

      {/* Header Section */}
      <section className="w-full py-20 bg-[#0B0D0F] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
              BUILT TO REMOVE OPERATIONAL FRICTION
            </span>

            <h1 className="font-heading text-5xl sm:text-7xl text-white tracking-tight leading-tight">
              About Newheight AI Systems
            </h1>

            <p className="font-sans text-slate-300 text-xl font-bold">
              Businesses should spend less time fighting repetitive work and more time moving forward.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Story Section */}
      <section className="w-full py-24 bg-[#15191D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 font-sans text-slate-300 text-base leading-relaxed">
              <h2 className="font-heading text-3xl sm:text-4xl text-white">
                Our Growth & Agency Philosophy
              </h2>

              <p>
                NEWHEIGHT AI SYSTEMS started as a focused three-person team dedicated to solving operational friction. We recognized early on that ambitious businesses were losing countless hours every week to manual data entry, delayed lead follow-ups, fragmented customer support, and disconnected software systems.
              </p>

              <p>
                As demand grew for reliable, practical business automation, we expanded into a multidisciplinary six-person specialist team. Today, our collective expertise spans high-level AI system architecture, CRM pipeline engineering, custom API webhooks, document data extraction, web interfaces, graphic identity, and video media production.
              </p>

              <p>
                We do not believe in gimmicky AI or replacing existing software unnecessarily. Instead, we study each client’s operational flow, understand their unique processes, and engineer practical automation systems that seamlessly connect their existing tools. By taking care of routine, repetitive tasks automatically, our systems enable client teams to dedicate their full focus to strategic decision-making and meaningful business growth.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-[#0B0D0F] border border-[#5B7CFA]/30">
                  <Workflow className="w-4 h-4 text-[#5B7CFA] mb-2" />
                  <span className="font-bold text-white block">Connected Workflows</span>
                  <span className="text-slate-400">Integrating your existing software seamlessly</span>
                </div>
                <div className="p-4 rounded-xl bg-[#0B0D0F] border border-[#5B7CFA]/30">
                  <Globe className="w-4 h-4 text-[#5B7CFA] mb-2" />
                  <span className="font-bold text-white block">Global System Delivery</span>
                  <span className="text-slate-400">Serving ambitious businesses worldwide</span>
                </div>
              </div>
            </div>

            {/* Co-Founder Portrait Section (Un-cropped object-contain container) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl overflow-hidden border border-white/15 bg-[#0B0D0F] shadow-2xl p-4 sm:p-6 flex flex-col items-center">
                <div className="w-full max-w-md aspect-[4/5] overflow-hidden rounded-2xl bg-[#15191D] border border-white/10 flex items-center justify-center p-2">
                  <img
                    src="/assets/oluwasegun-oladimeji.jpg"
                    alt="Oluwasegun Oladimeji — Co-Founder & Team Leader"
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="w-full mt-4 p-4 rounded-2xl bg-[#15191D] border border-white/10 font-sans text-left">
                  <span className="font-mono text-[10px] text-[#5B7CFA] font-bold uppercase tracking-widest block mb-1">Co-Founder & Team Leader</span>
                  <h4 className="font-heading text-2xl text-white">Oluwasegun Oladimeji</h4>
                  <p className="font-sans text-xs text-slate-300 mt-1 leading-relaxed">
                    Leading strategic growth, enterprise multi-agent architecture, and client automation deployments across international markets.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl p-8 bg-[#0B0D0F] border border-white/10 space-y-6 shadow-2xl">
                <h3 className="font-heading text-2xl text-white">
                  Agency Operational Pillars
                </h3>

                <ul className="space-y-4 text-xs font-mono text-slate-300">
                  <li className="p-4 rounded-xl bg-[#15191D] border border-white/10 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#5B7CFA] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Tailored Business Engineering</span>
                      <span className="text-slate-400 text-[11px]">Designing custom system architectures specific to your team's processes.</span>
                    </div>
                  </li>

                  <li className="p-4 rounded-xl bg-[#15191D] border border-white/10 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#5B7CFA] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Six-Person Specialist Team</span>
                      <span className="text-slate-400 text-[11px]">Combining AI architects, CRM specialists, web designers, and media engineers.</span>
                    </div>
                  </li>

                  <li className="p-4 rounded-xl bg-[#15191D] border border-white/10 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#5B7CFA] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Practical AI Automation</span>
                      <span className="text-slate-400 text-[11px]">Focusing on measurable outcomes: faster response, reduced manual work, revenue velocity.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Development & Capability Evolution Timeline */}
          <div className="space-y-10">
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-[#5B7CFA] font-bold uppercase tracking-widest">
                AGENCY EVOLUTION
              </span>
              <h2 className="font-heading text-4xl text-white tracking-tight mt-2">
                Milestones & Growth
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {AGENCY_MILESTONES.map((item) => (
                <div key={item.phase} className="rounded-2xl p-6 bg-[#0B0D0F] border border-white/10 space-y-3">
                  <span className="font-mono text-xs text-[#5B7CFA] font-bold block">{item.phase}</span>
                  <h3 className="font-heading text-2xl text-white">{item.title}</h3>
                  <p className="font-sans text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
