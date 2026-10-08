import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const FRICTION_LIST = [
  { title: 'Manual Data Entry', detail: 'Re-keying information between disparate software applications and PDFs' },
  { title: 'Slow Lead Response', detail: 'High-value prospects waiting hours for initial sales contact' },
  { title: 'Repetitive Customer Questions', detail: 'Support desks overwhelmed answering the same 20 FAQs daily' },
  { title: 'Disconnected Systems', detail: 'Siloed tools requiring staff to act as manual human middleware' },
  { title: 'Manual CRM Updates', detail: 'Account executives spending billable hours manually logging deal notes' },
  { title: 'Appointment Coordination', detail: 'Friction-heavy back-and-forth scheduling emails and calendar drops' },
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="w-full py-24 bg-[#F4F1EB] text-[#0B0D0F] border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-4 mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-600">
            OPERATIONAL FRICTION AUDIT
          </span>

          <h2 className="font-heading text-4xl sm:text-6xl text-[#0B0D0F] tracking-tight leading-tight">
            YOUR BUSINESS SHOULD NOT BE HELD BACK BY REPETITIVE WORK.
          </h2>

          <p className="font-sans text-slate-700 text-lg sm:text-xl leading-relaxed max-w-3xl">
            Human talent is lost when key employees spend half their working hours fighting repetitive administrative friction instead of driving strategic growth.
          </p>
        </div>

        {/* Editorial Storytelling List */}
        <div className="space-y-4 mb-16">
          {FRICTION_LIST.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-white border border-slate-300 hover:border-[#5B7CFA] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm"
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-xs font-bold text-slate-400">0{idx + 1}</span>
                <h3 className="font-heading text-2xl text-[#0B0D0F] tracking-tight">{item.title}</h3>
              </div>
              <p className="font-sans text-xs font-mono text-slate-600 max-w-md">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Dark Contrast Solution Statement */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B0D0F] text-[#F4F1EB] border border-white/10 text-center max-w-4xl mx-auto space-y-4 shadow-2xl">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
            THE NEWHEIGHT ENGINE
          </span>

          <h3 className="font-heading text-3xl sm:text-5xl text-white tracking-tight">
            WE BUILD THE SYSTEMS THAT REMOVE THE FRICTION.
          </h3>

          <p className="font-sans text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            By orchestrating your lead channels, customer support desks, CRM data, and internal administrative workflows into connected AI pipelines, we reclaim lost team hours and accelerate revenue speed.
          </p>
        </div>
      </div>
    </section>
  );
};
