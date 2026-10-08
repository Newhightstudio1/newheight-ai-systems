import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Cpu, MessageSquareText, Filter, CalendarCheck, PhoneCall, Repeat, Workflow, Kanban, FileText, ShoppingCart, Activity, ShieldCheck } from 'lucide-react';

const DETAILED_CAPABILITIES = [
  {
    title: 'Conversational AI',
    icon: MessageSquareText,
    desc: 'Sub-second natural language engines for web, WhatsApp, and email interactions.'
  },
  {
    title: 'AI Customer Support',
    icon: ShieldCheck,
    desc: '24/7 ticket triage, knowledge RAG search, and automated order status lookups.'
  },
  {
    title: 'Lead Management & Intent Scoring',
    icon: Filter,
    desc: 'Sub-second firmographic data enrichment, BANT intent scoring, and rep matching.'
  },
  {
    title: 'CRM & Sales Pipeline Automation',
    icon: Kanban,
    desc: 'Trigger-based deal progression, auto-generated rep tasks, and pipeline hygiene.'
  },
  {
    title: 'Appointment Scheduling',
    icon: CalendarCheck,
    desc: 'Conversational multi-channel booking synced directly to rep Google & Outlook calendars.'
  },
  {
    title: 'Voice Reception & Telephony',
    icon: PhoneCall,
    desc: '24/7 human-sounding phone agents handling intake triage and call transfers.'
  },
  {
    title: 'Internal Workflows',
    icon: Workflow,
    desc: 'Multi-app synchronization connecting ERP, project management, and Slack.'
  },
  {
    title: 'Document & Data Processing',
    icon: FileText,
    desc: 'Vision OCR extraction for invoices, contracts, receipts, and tender packages.'
  },
  {
    title: 'E-commerce Automation',
    icon: ShoppingCart,
    desc: 'WISMO tracking responses, return processing, and WhatsApp cart recovery.'
  },
  {
    title: 'API Integrations & Webhooks',
    icon: Activity,
    desc: 'Robust microservice bridges connecting disparate databases and cloud tools.'
  },
  {
    title: 'Reporting & Analytics',
    icon: Repeat,
    desc: 'Executive daily Slack digest updates, pipeline velocity alerts, and dashboards.'
  },
  {
    title: 'Custom AI Agents',
    icon: Cpu,
    desc: 'Tailor-made multi-agent workforces built for unique enterprise business logic.'
  }
];

export const SystemsCapabilitiesAutoScroll: React.FC = () => {
  return (
    <section className="w-full py-24 bg-[#0B0D0F] border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
            TAILORED AUTOMATION INFRASTRUCTURE
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-tight">
            Systems Built Around Your Business
          </h2>
          <p className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed">
            Every business operates differently. Rather than forcing your team into rigid SaaS templates, we audit your exact operational flow and engineer practical AI systems tailored directly to your processes, existing software, and growth targets.
          </p>
        </div>
      </div>

      {/* Auto-scrolling Horizontal Capability Cards */}
      <div className="w-full relative group select-none overflow-hidden mb-16">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] space-x-6 px-4">
          {[...DETAILED_CAPABILITIES, ...DETAILED_CAPABILITIES].map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={`${cap.title}-${idx}`}
                className="w-[280px] sm:w-[340px] rounded-3xl p-6 bg-[#15191D] border border-white/10 flex flex-col justify-between shrink-0 hover:border-[#5B7CFA]/50 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#5B7CFA]/10 border border-[#5B7CFA]/30 flex items-center justify-center text-[#5B7CFA] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-2xl text-white mb-2">{cap.title}</h3>
                  <p className="font-sans text-xs text-slate-300 leading-relaxed">{cap.desc}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 font-mono text-[10px] text-[#5B7CFA] font-bold">
                  <span>Custom Architecture Module</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Process Tailoring Explanation Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-10 bg-[#15191D] border border-white/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              INTEGRATES WITH YOUR EXISTING TECH STACK
            </span>
            <h3 className="font-heading text-3xl text-white">
              Built to fit your workflow, not rewrite it.
            </h3>
            <p className="font-sans text-slate-300 text-sm leading-relaxed">
              We connect directly into your CRM, database, telephony, and communications stack via secure webhooks and custom API microservices, giving your team immediate leverage without software churn.
            </p>
          </div>

          <Link
            to="/solutions"
            className="px-8 py-4 rounded-full bg-[#5B7CFA] hover:bg-[#4a6be4] text-white font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 transition-all shadow-lg"
          >
            <span>EXPLORE DETAILED SOLUTIONS →</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
