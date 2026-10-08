import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { TEAM_MEMBERS } from '../data/team';
import { SOLUTIONS_DATA } from '../data/solutions';
import { PageTransition } from '../components/common/PageTransition';
import { SEO } from '../components/common/SEO';
import { ImagePlaceholder } from '../components/common/ImagePlaceholder';
import { ArrowLeft, ArrowRight, CheckCircle2, Briefcase } from 'lucide-react';
import { MagneticButton } from '../components/common/MagneticButton';

export const TeamMemberDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = TEAM_MEMBERS.find((m) => m.slug === slug);

  if (!member) {
    return <Navigate to="/team" replace />;
  }

  const relatedSolutions = SOLUTIONS_DATA.filter((s) =>
    member.relatedServicesSlugs.includes(s.slug)
  );

  return (
    <PageTransition>
      <SEO
        title={`${member.name} — ${member.role} | NEWHEIGHT AI SYSTEMS`}
        description={member.extendedBio}
      />

      <section className="w-full py-20 bg-[#0B0D0F] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-[#5B7CFA] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Team Profiles</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              {member.image ? (
                <div className="rounded-3xl overflow-hidden border border-white/15 bg-[#15191D] p-3 shadow-2xl relative aspect-[4/5] flex flex-col justify-between">
                  <div className="w-full flex-1 overflow-hidden rounded-2xl flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="mt-3 p-3 rounded-2xl bg-[#0B0D0F] border border-white/10 font-mono text-xs text-white">
                    <span className="text-[#5B7CFA] font-bold block">{member.name}</span>
                    <span className="text-slate-400 text-[10px]">{member.role}</span>
                  </div>
                </div>
              ) : (
                <ImagePlaceholder
                  label={member.name}
                  sublabel={member.role}
                  type="team"
                  aspectRatio="aspect-square"
                  className="w-full shadow-2xl"
                />
              )}
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="font-mono text-xs text-[#5B7CFA] font-bold uppercase tracking-wider block">
                {member.role}
              </span>

              <h1 className="font-heading text-5xl sm:text-7xl text-white tracking-tight">
                {member.name}
              </h1>

              <p className="font-sans text-slate-300 text-base leading-relaxed">
                {member.title}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 font-mono text-xs">
                {member.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded bg-white/10 border border-white/10 text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-[#15191D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-8">
              <div className="p-8 rounded-3xl bg-[#0B0D0F] border border-white/10 space-y-4">
                <h2 className="font-heading text-3xl text-white">Professional Background</h2>
                <p className="font-sans text-slate-300 text-sm leading-relaxed">{member.extendedBio}</p>
              </div>

              <div className="space-y-4">
                <h2 className="font-heading text-3xl text-white">Responsibilities at NEWHEIGHT</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {member.responsibilities.map((resp, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5B7CFA] shrink-0 mt-0.5" />
                      <span className="font-sans text-xs text-slate-200">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-heading text-3xl text-white">Selected Project Areas</h2>
                <div className="space-y-2 font-mono text-xs text-slate-300">
                  {member.keyProjects.map((proj) => (
                    <div key={proj} className="p-4 rounded-xl bg-[#0B0D0F] border border-white/10 flex items-center justify-between">
                      <span>{proj}</span>
                      <span className="text-[#5B7CFA] font-bold text-[10px]">NEWHEIGHT Build</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-3xl p-6 bg-[#0B0D0F] border border-white/15 space-y-4">
                <h3 className="font-mono text-xs font-bold text-[#5B7CFA] uppercase tracking-wider flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Related Services Handled
                </h3>

                <div className="space-y-3 font-sans text-xs">
                  {relatedSolutions.map((sol) => (
                    <Link
                      key={sol.id}
                      to={`/solutions/${sol.slug}`}
                      className="block p-4 rounded-xl bg-[#15191D] border border-white/10 hover:border-[#5B7CFA]/50 transition-all"
                    >
                      <span className="text-white font-bold block">{sol.name}</span>
                      <span className="text-slate-400 text-[11px] line-clamp-1 mt-0.5">{sol.shortDescription}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
