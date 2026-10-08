import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: 'What is AI automation?',
    a: 'AI automation combines machine learning, Retrieval-Augmented Generation (RAG), and API webhooks to execute complex business tasks—such as lead triage, customer support, and CRM updates—without human intervention.'
  },
  {
    q: 'What types of businesses do you work with?',
    a: 'We work with direct-to-consumer e-commerce brands, real estate groups, healthcare clinics, B2B software companies, logistics providers, and growing SMEs across the UK, Nigeria, North America, and worldwide.'
  },
  {
    q: 'What can you automate?',
    a: 'We automate customer support tickets, inbound lead qualification, appointment bookings over phone/SMS, document data extraction from heavy PDFs, CRM pipeline updates, and multi-app internal workflows.'
  },
  {
    q: 'Can you integrate with our existing tools?',
    a: 'Yes. Our architectures connect directly with your existing software stack, including HubSpot, Salesforce, GoHighLevel, Shopify, Zendesk, Slack, Twilio, Google Workspace, and custom SQL databases.'
  },
  {
    q: 'Do you build custom AI agents?',
    a: 'Yes. When off-the-shelf software falls short, we engineer custom multi-agent workforces trained on your domain knowledge, strict compliance boundaries, and custom backend APIs.'
  },
  {
    q: 'How long does implementation take?',
    a: 'Standard workflow automations take 1 to 2 weeks to deploy. Complex enterprise multi-system architectures take 3 to 4 weeks with full staging testing.'
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Yes. We monitor telemetry 24/7, conduct prompt optimizations, update API endpoints, and ensure 99.9% uptime for all client automation pipelines.'
  },
  {
    q: 'Can you work with businesses internationally?',
    a: 'Yes. NEWHEIGHT AI SYSTEMS operates across UK and Nigeria hubs while serving enterprise clients in over 15 countries worldwide.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full py-24 bg-[#15191D] border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-tight">
            QUESTIONS & ANSWERS.
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0B0D0F] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-sans font-bold text-white text-base hover:text-[#5B7CFA] transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#5B7CFA] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs font-sans text-slate-300 leading-relaxed border-t border-white/10">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
