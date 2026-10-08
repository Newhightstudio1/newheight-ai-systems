import React from 'react';

const TICKER_ITEMS = [
  'AI AGENTS',
  'WORKFLOW AUTOMATION',
  'CRM AUTOMATION',
  'AI CUSTOMER SUPPORT',
  'LEAD QUALIFICATION',
  'LEAD ROUTING',
  'VOICE AI',
  'APPOINTMENT BOOKING',
  'SALES AUTOMATION',
  'BUSINESS PROCESS AUTOMATION',
  'AI INTEGRATIONS',
  'DOCUMENT PROCESSING',
  'E-COMMERCE AUTOMATION',
  'AUTOMATED FOLLOW-UPS',
  'CUSTOM AI SYSTEMS'
];

export const CapabilityTicker: React.FC = () => {
  return (
    <div className="w-full bg-[#12151E] border-y border-white/10 py-4 overflow-hidden relative group select-none">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {/* Triple the list for seamless infinite continuous looping */}
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 px-4 font-mono text-xs font-bold text-slate-300 tracking-widest whitespace-nowrap">
            <span>{item}</span>
            <span className="text-[#5B7CFA]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
