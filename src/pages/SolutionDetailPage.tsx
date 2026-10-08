import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SOLUTIONS_DATA } from '../data/solutions';
import { PageTransition } from '../components/common/PageTransition';
import { SEO } from '../components/common/SEO';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Workflow, 
  ShieldCheck, 
  AlertTriangle, 
  UserCheck, 
  RefreshCw,
  Cpu,
  Layers
} from 'lucide-react';
import { MagneticButton } from '../components/common/MagneticButton';

export const SolutionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = SOLUTIONS_DATA.find((s) => s.slug === slug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <PageTransition>
      <SEO
        title={`${solution.name} Technical Specs — NEWHEIGHT AI SYSTEMS`}
        description={solution.shortDescription}
      />

      <section className="w-full py-20 bg-[#0B0D0F] border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-[#5B7CFA] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Solutions</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold text-[#5B7CFA] px-3.5 py-1 rounded-full bg-[#5B7CFA]/10 border border-[#5B7CFA]/30">
              SOLUTION {solution.number}
            </span>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
              Enterprise System Specification
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl text-white tracking-tight max-w-4xl">
            {solution.name}
          </h1>

          <p className="mt-4 font-sans text-slate-300 text-lg max-w-3xl leading-relaxed">
            {solution.shortDescription}
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            <Link to="/book">
              <MagneticButton>
                <button className="px-8 py-3.5 rounded-full bg-[#5B7CFA] hover:bg-[#4a6be4] text-white font-sans font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-2">
                  Deploy This System
                  <ArrowRight className="w-4 h-4" />
                </button>
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-[#15191D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section 01 & 02: Business Problem & How It Works */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-8">
              {/* 01: Problem */}
              <div className="p-8 rounded-3xl bg-[#0B0D0F] border border-white/10 space-y-4">
                <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-wider block">
                  01 • The Problem
                </span>
                <h2 className="font-heading text-3xl text-white">
                  Why Businesses Struggle With This Process
                </h2>
                <p className="font-sans text-slate-300 text-base leading-relaxed">
                  {solution.fullDescription}
                </p>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#5B7CFA]">
                    Specific Friction Points Eliminated:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {solution.whatItSolves.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-[#15191D] border border-white/10 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#5B7CFA] shrink-0 mt-0.5" />
                        <span className="font-sans text-xs text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 02: Step-by-step Technical Workflow */}
              <div className="p-8 rounded-3xl bg-[#0B0D0F] border border-[#5B7CFA]/30 space-y-6">
                <span className="font-mono text-xs text-[#5B7CFA] font-bold uppercase tracking-wider block">
                  02 • How It Works
                </span>
                <h2 className="font-heading text-3xl text-white">
                  Step-by-Step Technical Workflow
                </h2>

                <div className="space-y-4">
                  {solution.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#15191D] border border-white/10 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-xl bg-[#5B7CFA]/15 border border-[#5B7CFA]/40 flex items-center justify-center font-mono text-xs text-[#5B7CFA] font-bold shrink-0">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="font-heading text-lg text-white">Execution Stage 0{idx + 1}</h4>
                        <p className="font-sans text-xs text-slate-300 leading-relaxed mt-1">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture Node Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-3xl p-6 bg-[#0B0D0F] border border-white/15 space-y-6">
                <div className="flex items-center gap-2 font-mono text-xs text-[#5B7CFA]">
                  <Workflow className="w-4 h-4" />
                  <span>ARCHITECTURE COMPONENTS</span>
                </div>

                <ul className="space-y-3 font-mono text-xs text-slate-300">
                  {solution.architectureComponents.map((comp, idx) => (
                    <li key={idx} className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                      <span className="truncate pr-2">{comp}</span>
                      <span className="text-[10px] text-[#5B7CFA] font-bold shrink-0">Node 0{idx+1}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-emerald-400 font-bold block mb-1">Target Business Outcome:</span>
                  <p className="font-sans text-xs text-slate-300 leading-relaxed">
                    {solution.targetBusinessImpact}
                  </p>
                </div>
              </div>

              {/* Use Cases Summary Box */}
              <div className="rounded-3xl p-6 bg-[#0B0D0F] border border-white/10 space-y-4">
                <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider block">
                  03 • Industry Use Cases
                </span>
                <p className="font-sans text-xs text-slate-300 leading-relaxed">
                  Tailored deployments operational across Freight Logistics, D2C E-commerce, B2B SaaS, Multi-clinic Healthcare, and Professional Services.
                </p>
              </div>
            </div>
          </div>

          {/* Section 04, 05, 06: Technical Guardrails Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 05: Error Handling & Anomaly Monitoring */}
            <div className="p-6 rounded-3xl bg-[#0B0D0F] border border-white/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider block">
                  05 • Error Handling
                </span>
                <h3 className="font-heading text-xl text-white">Anomaly Monitoring & Retries</h3>
                <p className="font-sans text-xs text-slate-300 leading-relaxed">
                  Exponential backoff API retry buffers, automated webhook payload validation, dead-letter message queuing, and instant team alerts via Slack/Teams.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 font-mono text-[11px] text-slate-400">
                Fallback SLA: &lt; 200ms failover
              </div>
            </div>

            {/* 06: Data Privacy & Security */}
            <div className="p-6 rounded-3xl bg-[#0B0D0F] border border-white/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider block">
                  06 • Data Privacy
                </span>
                <h3 className="font-heading text-xl text-white">Security & Encryption</h3>
                <p className="font-sans text-xs text-slate-300 leading-relaxed">
                  End-to-end TLS 1.3 data-in-transit and AES-256 data-at-rest encryption. SOC2/GDPR compliance posture with strict zero-training data policies on external models.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 font-mono text-[11px] text-slate-400">
                Compliance: GDPR / SOC2 Ready
              </div>
            </div>

            {/* 07: Human Oversight & Escalation */}
            <div className="p-6 rounded-3xl bg-[#0B0D0F] border border-white/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#5B7CFA]/10 border border-[#5B7CFA]/30 flex items-center justify-center text-[#5B7CFA]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-[#5B7CFA] font-bold uppercase tracking-wider block">
                  07 • Human Oversight
                </span>
                <h3 className="font-heading text-xl text-white">Human-in-the-Loop</h3>
                <p className="font-sans text-xs text-slate-300 leading-relaxed">
                  Automated confidence scoring triggers manual human review whenever intent confidence drops below 85% or high-value transaction thresholds are met.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 font-mono text-[11px] text-slate-400">
                Override: 1-click rep take-over
              </div>
            </div>

            {/* 08: Maintenance & Evolution */}
            <div className="p-6 rounded-3xl bg-[#0B0D0F] border border-white/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-purple-400 font-bold uppercase tracking-wider block">
                  08 • System Maintenance
                </span>
                <h3 className="font-heading text-xl text-white">Evolution & SLA</h3>
                <p className="font-sans text-xs text-slate-300 leading-relaxed">
                  Quarterly prompt tuning, regression testing on updated LLM model versions, continuous performance audits, and guaranteed 99.9% uptime SLAs.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 font-mono text-[11px] text-slate-400">
                Uptime SLA: 99.9% guaranteed
              </div>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="rounded-3xl p-8 sm:p-12 bg-[#0B0D0F] border border-white/15 text-center space-y-4">
            <h3 className="font-heading text-3xl sm:text-4xl text-white">
              Ready to implement {solution.name} for your organization?
            </h3>
            <p className="font-sans text-slate-300 text-sm max-w-xl mx-auto">
              Our engineering team will assess your current software stack and design a custom deployment architecture tailored to your workflows.
            </p>
            <div className="pt-2">
              <Link to="/book">
                <MagneticButton>
                  <button className="px-8 py-4 rounded-full bg-[#5B7CFA] hover:bg-[#4a6be4] text-white font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 mx-auto">
                    BOOK A CONSULTATION
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

