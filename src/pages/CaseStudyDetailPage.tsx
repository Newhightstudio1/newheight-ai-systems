import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CASE_STUDIES } from '../data/caseStudies';
import { PageTransition } from '../components/common/PageTransition';
import { SEO } from '../components/common/SEO';
import { ImagePlaceholder } from '../components/common/ImagePlaceholder';
import { ArrowLeft, ArrowRight, CheckCircle2, Workflow } from 'lucide-react';
import { MagneticButton } from '../components/common/MagneticButton';

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/work" replace />;
  }

  return (
    <PageTransition>
      <SEO
        title={`${caseStudy.title} Case Study — NEWHEIGHT AI SYSTEMS`}
        description={caseStudy.challenge}
      />

      <section className="w-full py-20 bg-[#0B0D0F] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-[#5B7CFA] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold text-[#5B7CFA] px-3.5 py-1 rounded-full bg-[#5B7CFA]/10 border border-[#5B7CFA]/30">
              {caseStudy.industry}
            </span>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
              System Architecture Case Record
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl text-white tracking-tight max-w-4xl">
            {caseStudy.title}
          </h1>

          <p className="mt-3 text-[#5B7CFA] font-mono text-sm">
            Client Sector: {caseStudy.clientType}
          </p>
        </div>
      </section>

      <section className="w-full py-24 bg-[#15191D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudy.image ? (
            <div className="rounded-3xl overflow-hidden border border-white/15 bg-[#0B0D0F] shadow-2xl">
              <div className="px-5 py-3.5 bg-[#15191D] border-b border-white/10 flex items-center justify-between font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-slate-300 text-xs hidden sm:inline">NEWHEIGHT Systems Engineering Spec — {caseStudy.title}</span>
                </div>
                <span className="text-emerald-400 text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                  Verified Active Pipeline
                </span>
              </div>
              <div className="relative w-full max-h-[600px] overflow-y-auto bg-black scrollbar-thin scrollbar-thumb-[#5B7CFA]/50">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.imageAlt || caseStudy.title}
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          ) : (
            <ImagePlaceholder
              label={`Architecture Diagram: ${caseStudy.title}`}
              sublabel="High-resolution system flow graphic"
              type="project"
              aspectRatio="aspect-[21/9]"
            />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-8">
              {/* 01: Business Problem */}
              <div className="space-y-3 p-8 rounded-3xl bg-[#0B0D0F] border border-white/10">
                <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-wider block">01 • Business Problem</span>
                <h2 className="font-heading text-3xl text-white">The Operational Bottleneck</h2>
                <p className="font-sans text-slate-300 text-sm leading-relaxed">{caseStudy.businessProblem || caseStudy.challenge}</p>
              </div>

              {/* 02: Previous Process */}
              <div className="space-y-3 p-8 rounded-3xl bg-[#0B0D0F] border border-white/10">
                <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider block">02 • Previous Manual Process</span>
                <h2 className="font-heading text-3xl text-white">Legacy Operations Before Automation</h2>
                <p className="font-sans text-slate-300 text-sm leading-relaxed">{caseStudy.previousProcess}</p>
              </div>

              {/* 03: System Built */}
              <div className="space-y-3 p-8 rounded-3xl bg-[#0B0D0F] border border-[#5B7CFA]/30 bg-gradient-to-b from-[#0B0D0F] to-[#15191D]">
                <span className="font-mono text-xs text-[#5B7CFA] font-bold uppercase tracking-wider block">03 • System Built</span>
                <h2 className="font-heading text-3xl text-white">The NEWHEIGHT Architecture Solution</h2>
                <p className="font-sans text-slate-200 text-sm leading-relaxed">{caseStudy.systemBuilt}</p>
              </div>

              {/* 04: Implementation Approach */}
              <div className="space-y-4 p-8 rounded-3xl bg-[#0B0D0F] border border-white/10">
                <span className="font-mono text-xs text-[#5B7CFA] font-bold uppercase tracking-wider block">04 • Implementation Approach</span>
                <h2 className="font-heading text-3xl text-white">Engineering Deployment Roadmap</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(caseStudy.implementationApproach || caseStudy.architectureDetails).map((step, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-start gap-3">
                      <Workflow className="w-4 h-4 text-[#5B7CFA] shrink-0 mt-0.5" />
                      <span className="font-sans text-xs text-slate-200">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              {/* 05: Evidence-backed Outcomes */}
              <div className="rounded-3xl p-6 bg-[#0B0D0F] border border-emerald-500/30 space-y-4 shadow-xl">
                <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider block">05 • Evidence-backed Outcomes</span>
                <h3 className="font-heading text-2xl text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Measurable Business Impact
                </h3>
                <ul className="space-y-2.5 font-sans text-xs text-slate-200">
                  {caseStudy.outcomeResults.map((outcome, idx) => (
                    <li key={idx} className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span className="leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 06: Tools & Integrations */}
              <div className="rounded-3xl p-6 bg-[#0B0D0F] border border-white/10 space-y-4">
                <span className="font-mono text-xs text-[#5B7CFA] font-bold uppercase tracking-wider block">06 • Tools & Integrations</span>
                <h3 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Connected Software & APIs
                </h3>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {caseStudy.toolsIntegrations.map((tool) => (
                    <span key={tool} className="px-3 py-1.5 rounded-lg bg-black/60 border border-[#5B7CFA]/30 text-[#5B7CFA]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 sm:p-12 bg-[#0B0D0F] border border-white/15 text-center space-y-4">
            <h3 className="font-heading text-3xl sm:text-4xl text-white">
              Want a similar system built for your business?
            </h3>
            <div className="pt-2">
              <Link to="/book-consultation">
                <MagneticButton>
                  <button className="px-8 py-4 rounded-full bg-[#5B7CFA] hover:bg-[#4a6be4] text-white font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 mx-auto">
                    Book a Consultation
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
