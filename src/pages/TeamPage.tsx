import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/common/PageTransition';
import { SEO } from '../components/common/SEO';
import { TEAM_MEMBERS } from '../data/team';
import { ImagePlaceholder } from '../components/common/ImagePlaceholder';
import { ArrowUpRight } from 'lucide-react';

export const TeamPage: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Our Specialist Team — NEWHEIGHT AI SYSTEMS"
        description="Meet the six specialists behind NEWHEIGHT AI SYSTEMS: Oluwasegun Oladimeji, Elijah Taiwo, Isaniyi Kehinde, Olaniyi, Ezekiel, and Omotola."
      />

      <section className="w-full py-20 bg-[#0B0D0F] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
              THE SIX SPECIALISTS
            </span>
            <h1 className="font-heading text-5xl sm:text-7xl text-white tracking-tight leading-tight">
              Six specialists. One mindset.
            </h1>
            <p className="font-sans text-slate-300 text-lg leading-relaxed">
              Our multidisciplinary team combines high-level system architecture, CRM pipeline engineering, tender automation, interface design, motion media, and database operations.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-[#15191D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Asymmetric Magazine Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {TEAM_MEMBERS.map((member, idx) => {
              const isLarge = idx === 0 || idx === 2 || idx === 4;
              const colSpan = isLarge ? 'md:col-span-7' : 'md:col-span-5';

              return (
                <Link
                  key={member.id}
                  to={`/team/${member.slug}`}
                  className={`${colSpan} group rounded-3xl p-8 bg-[#0B0D0F] border border-white/10 hover:border-[#5B7CFA]/50 transition-all flex flex-col justify-between`}
                >
                  <div>
                    {member.image ? (
                      <div className="relative mb-6 rounded-2xl overflow-hidden border border-white/15 bg-[#15191D] p-3 aspect-[4/5] flex items-center justify-center group-hover:border-[#5B7CFA]/40 transition-all shadow-xl">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute top-3 left-3 bg-[#0B0D0F]/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                          <span className="font-mono text-[10px] text-[#5B7CFA] font-bold uppercase">Co-Founder & Team Leader</span>
                        </div>
                      </div>
                    ) : (
                      <ImagePlaceholder
                        label={member.name}
                        sublabel={member.imagePlaceholderLabel}
                        type="team"
                        aspectRatio={isLarge ? 'aspect-[16/10]' : 'aspect-square'}
                        className="mb-6"
                      />
                    )}

                    <span className="font-mono text-xs text-[#5B7CFA] font-bold uppercase tracking-wider block mb-2">
                      {member.role}
                    </span>

                    <h2 className="font-heading text-3xl sm:text-4xl text-white group-hover:text-slate-200 transition-colors mb-3">
                      {member.name}
                    </h2>

                    <p className="font-sans text-slate-300 text-xs leading-relaxed line-clamp-3 mb-6">
                      {member.bio}
                    </p>

                    <div className="pt-4 border-t border-white/10 mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2 font-semibold">
                        Core Expertise:
                      </span>
                      <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                        {member.expertise.slice(0, 3).map((exp) => (
                          <span key={exp} className="px-2.5 py-1 rounded bg-black/50 border border-white/10 text-slate-300">
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold text-[#5B7CFA]">
                    <span>View Member Profile & Work</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
