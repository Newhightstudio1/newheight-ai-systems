import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  BrainCircuit, 
  Database, 
  Slack, 
  MailCheck, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';

interface WorkflowStage {
  id: string;
  stepNumber: string;
  title: string;
  shortDesc: string;
  icon: React.ElementType;
  tool: string;
  toolCategory: string;
  explanation: string;
  sampleInput: {
    label: string;
    data: Record<string, string | number | boolean>;
  };
  sampleOutput: {
    label: string;
    data: Record<string, string | number | boolean>;
  };
  integrations: string[];
  latency: string;
}

const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    id: 'enquiry',
    stepNumber: '01',
    title: 'Website Enquiry Captured',
    shortDesc: 'Inbound prospect fills out consultation form or triggers live web agent.',
    icon: Globe,
    tool: 'Inbound Webhook Listener',
    toolCategory: 'Web Entry Point',
    explanation: 'The moment a visitor submits an inquiry or interacts with the site assistant, an event payload is generated. Form fields, metadata, IP region, and landing page context are captured instantaneously.',
    sampleInput: {
      label: 'HTTP POST Event Payload',
      data: {
        event: 'form_submission',
        visitor_name: 'Marcus Vance',
        company: 'Vance Freight & Logistics',
        email: 'marcus@vancefreight.com',
        service_interest: 'Automated Dispatch & Tracking',
        message_excerpt: 'Looking to reduce manual tracking emails for 40+ daily freight shipments.'
      }
    },
    sampleOutput: {
      label: 'Validated Ingest Record',
      data: {
        ingest_id: 'ING-90821-VX',
        status: 'validated',
        timestamp: '18:34:12 UTC',
        raw_length_bytes: 542
      }
    },
    integrations: ['Vite Web Engine', 'PostgreSQL Audit Sink', 'REST Webhook Listener'],
    latency: '< 45ms'
  },
  {
    id: 'qualification',
    stepNumber: '02',
    title: 'AI Qualification & Data Enrichment',
    shortDesc: 'LLM intent scoring evaluates BANT parameters and firmographic data.',
    icon: BrainCircuit,
    tool: 'NEWHEIGHT AI Decision Engine',
    toolCategory: 'Cognitive Processing',
    explanation: 'The payload passes through our AI Decision Engine. It enriches the company domain, calculates firmographic headcount/industry indicators, scores BANT (Budget, Authority, Need, Timeline) intent, and decides priority routing.',
    sampleInput: {
      label: 'Enrichment Stream',
      data: {
        domain: 'vancefreight.com',
        enrichment_status: 'enriched',
        headcount_tier: '50-200 employees',
        industry: 'Logistics & Supply Chain'
      }
    },
    sampleOutput: {
      label: 'BANT Scoring Matrix Output',
      data: {
        intent_score: 94,
        bant_qualification: 'High Priority Tier 1',
        budget_range: '$10k - $25k',
        urgency: 'Immediate (1-2 weeks)',
        recommended_route: 'Senior AI Architect Calendar'
      }
    },
    integrations: ['OpenAI / Claude RAG', 'Clearbit / Apollo API', 'Node.js Microservices'],
    latency: '820ms'
  },
  {
    id: 'crm',
    stepNumber: '03',
    title: 'CRM Record & Deal Pipeline Sync',
    shortDesc: 'Contact record, enriched properties, and deal stage automatically updated.',
    icon: Database,
    tool: 'HubSpot / Salesforce Bridge',
    toolCategory: 'Pipeline Architecture',
    explanation: 'The system checks the CRM database for existing contacts. It either updates the prospect record or creates a new deal in the active sales pipeline, attaching all enriched data, intent scores, and interaction notes without rep copy-pasting.',
    sampleInput: {
      label: 'CRM Payload Ingestion',
      data: {
        target_crm: 'HubSpot Enterprise',
        contact_email: 'marcus@vancefreight.com',
        deal_stage: 'Qualified Inbound Discovery'
      }
    },
    sampleOutput: {
      label: 'CRM Synchronization Result',
      data: {
        contact_id: 'HS-887192',
        deal_id: 'DEAL-9901-VL',
        owner_assigned: 'Account Executive',
        properties_synced: 14
      }
    },
    integrations: ['HubSpot Enterprise API', 'Salesforce REST API', 'PostgreSQL Audit Log'],
    latency: '310ms'
  },
  {
    id: 'notification',
    stepNumber: '04',
    title: 'Team Notification & Alert Dispatch',
    shortDesc: 'Instant rich Slack / Teams alert sent to the assigned account manager.',
    icon: Slack,
    tool: 'Slack / Internal Alert Bot',
    toolCategory: 'Team Communication',
    explanation: 'High-value opportunities immediately trigger a formatted Slack alert in the sales room. The notification includes the company background, BANT score, key challenge excerpt, and a 1-click calendar confirmation button.',
    sampleInput: {
      label: 'Alert Event Message',
      data: {
        channel: '#inbound-tier1-deals',
        deal_name: 'Vance Freight Logistics',
        score_badge: '🔥 94/100 BANT Score'
      }
    },
    sampleOutput: {
      label: 'Slack Webhook Confirmation',
      data: {
        message_ts: '1728326052.000100',
        delivered_to_channel: '#inbound-tier1-deals',
        action_buttons: 'View CRM Deal | Join Calendar Discovery'
      }
    },
    integrations: ['Slack Webhooks API', 'Microsoft Teams Bot', 'Twilio SMS Alert'],
    latency: '140ms'
  },
  {
    id: 'followup',
    stepNumber: '05',
    title: 'Automated Personal Follow-Up',
    shortDesc: 'Tailored confirmation email and meeting booking link dispatched.',
    icon: MailCheck,
    tool: 'Omnichannel Nurture Router',
    toolCategory: 'Customer Touchpoint',
    explanation: 'The prospect receives a personalized confirmation email and SMS within 60 seconds. The message directly addresses their specific logistics friction, provides a booking calendar link for the assigned account manager, and logs the touchpoint in the CRM.',
    sampleInput: {
      label: 'Dispatch Template Config',
      data: {
        recipient: 'marcus@vancefreight.com',
        template: 'logistics_inbound_tier1',
        sender: 'Oluwasegun Oladimeji'
      }
    },
    sampleOutput: {
      label: 'Email & SMS Dispatch Log',
      data: {
        email_status: 'delivered',
        sms_status: 'sent',
        booking_link_active: true,
        crm_activity_logged: true
      }
    },
    integrations: ['SendGrid API', 'Twilio WhatsApp / SMS', 'Calendly API'],
    latency: '220ms'
  }
];

export const InteractiveWorkflowDemo: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('qualification');
  const activeStage = WORKFLOW_STAGES.find((s) => s.id === activeStageId) || WORKFLOW_STAGES[1];

  return (
    <section className="w-full py-24 bg-[#15191D] border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B7CFA]/10 border border-[#5B7CFA]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#5B7CFA]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
                INTERACTIVE ARCHITECTURE SIMULATION
              </span>
            </div>

            <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-tight">
              Inside an Automated Inbound Pipeline.
            </h2>

            <p className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore how a typical NEWHEIGHT automation system processes an inbound inquiry—from web submission and AI intent scoring to CRM sync and automated team dispatch.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-slate-400 shrink-0">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>Interactive Architecture Simulation</span>
          </div>
        </div>

        {/* Pipeline Step Navigator Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-12">
          {WORKFLOW_STAGES.map((stage) => {
            const Icon = stage.icon;
            const isActive = stage.id === activeStageId;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${
                  isActive
                    ? 'bg-[#0B0D0F] border-[#5B7CFA] text-white shadow-xl ring-1 ring-[#5B7CFA]/50'
                    : 'bg-[#0B0D0F]/60 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#5B7CFA]" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#5B7CFA]' : 'text-slate-500'}`}>
                    STAGE {stage.stepNumber}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#5B7CFA]' : 'text-slate-500'}`} />
                </div>

                <h4 className="font-heading text-lg font-normal text-white leading-snug line-clamp-2">
                  {stage.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Inspector Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="rounded-3xl p-8 sm:p-10 bg-[#0B0D0F] border border-white/15 shadow-2xl space-y-8"
          >
            {/* Top Stage Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#5B7CFA]/15 border border-[#5B7CFA]/40 flex items-center justify-center text-[#5B7CFA] shrink-0">
                  {React.createElement(activeStage.icon, { className: 'w-7 h-7' })}
                </div>
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#5B7CFA] font-bold uppercase tracking-wider">
                    <span>Stage {activeStage.stepNumber}</span>
                    <span>•</span>
                    <span>{activeStage.toolCategory}</span>
                  </div>
                  <h3 className="font-heading text-3xl sm:text-4xl text-white mt-0.5">
                    {activeStage.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
                <span className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10">
                  Module: <strong className="text-white">{activeStage.tool}</strong>
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                  Latency: {activeStage.latency}
                </span>
              </div>
            </div>

            {/* Explanation & Architecture Notes */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <h4 className="font-heading text-2xl text-white">How This Stage Operates</h4>
                <p className="font-sans text-slate-300 text-sm leading-relaxed">
                  {activeStage.explanation}
                </p>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider font-bold block">
                    Connected Stage Integrations:
                  </span>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {activeStage.integrations.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-lg bg-[#15191D] border border-white/10 text-slate-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Simulated JSON Data Inspector */}
              <div className="lg:col-span-6 space-y-4">
                <div className="rounded-2xl p-5 bg-[#15191D] border border-white/10 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-[#5B7CFA] font-bold flex items-center gap-2">
                      <Code2 className="w-4 h-4" />
                      {activeStage.sampleInput.label}
                    </span>
                    <span className="text-[10px] text-slate-400">JSON Data View</span>
                  </div>

                  <pre className="text-slate-300 text-[11px] leading-relaxed overflow-x-auto bg-black/60 p-3.5 rounded-xl border border-white/10">
                    {JSON.stringify(activeStage.sampleInput.data, null, 2)}
                  </pre>
                </div>

                <div className="rounded-2xl p-5 bg-[#15191D] border border-emerald-500/20 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-emerald-400 font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      {activeStage.sampleOutput.label}
                    </span>
                    <span className="text-[10px] text-emerald-400">Stage Result</span>
                  </div>

                  <pre className="text-slate-300 text-[11px] leading-relaxed overflow-x-auto bg-black/60 p-3.5 rounded-xl border border-white/10">
                    {JSON.stringify(activeStage.sampleOutput.data, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
