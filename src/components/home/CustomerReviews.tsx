import React from 'react';
import { TESTIMONIALS_DATA } from '../../data/testimonials';
import { Star, Quote } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="w-full py-24 bg-[#0B0D0F] border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
              VERIFIED CLIENT FEEDBACK
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-tight">
              What Clients Say.
            </h2>
          </div>

          {/* Warm Yellow Star Rating Badge */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#15191D] border border-white/10 shrink-0">
            <div className="flex items-center gap-1 text-[#F2C94C]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#F2C94C] text-[#F2C94C]" />
              ))}
            </div>
            <div className="font-mono text-xs font-bold text-white border-l border-white/10 pl-3">
              <span>4.9 / 5.0 VERIFIED RATING</span>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-scrolling Horizontal Text Carousel Container */}
      <div className="w-full relative group select-none overflow-hidden">
        <div className="flex w-max animate-marquee-slow group-hover:[animation-play-state:paused] space-x-6 px-4">
          {/* Duplicate 12 items for seamless infinite horizontal loop */}
          {[...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[340px] sm:w-[420px] rounded-3xl p-8 bg-[#15191D] border border-white/10 flex flex-col justify-between shrink-0 hover:border-[#5B7CFA]/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Warm Yellow 5-Star Rating */}
                  <div className="flex items-center gap-1 text-[#F2C94C]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F2C94C] text-[#F2C94C]" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#5B7CFA]/30" />
                </div>

                <p className="font-sans text-slate-200 text-sm leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Initials-based avatar badge */}
                  <div className="w-10 h-10 rounded-full bg-[#5B7CFA]/20 border border-[#5B7CFA]/40 text-[#5B7CFA] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {item.clientName}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-white text-xs">{item.role}</h4>
                    <p className="text-[11px] font-mono text-slate-400 mt-0.5">{item.company}</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 shrink-0">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
