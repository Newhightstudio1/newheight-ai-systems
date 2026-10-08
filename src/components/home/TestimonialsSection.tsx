import React from 'react';
import { TESTIMONIALS_DATA } from '../../data/testimonials';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-24 bg-[#15191D] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
              VERIFIED CLIENT OUTCOMES
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-tight mt-2">
              Client Testimonials & Impact
            </h2>
          </div>
          <span className="font-mono text-xs text-slate-400">
            4.9 / 5 AGENCY RATING
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-8 bg-[#0B0D0F] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#5B7CFA]/50 mb-6" />
                <p className="font-sans text-slate-200 text-base leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-white text-sm">{item.clientName}</h4>
                  <p className="text-xs font-mono text-[#5B7CFA] mt-0.5">{item.role} • {item.company}</p>
                </div>
                <span className="text-[10px] font-mono text-slate-500 bg-black/40 px-3 py-1 rounded border border-white/10">
                  Verified Record
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
