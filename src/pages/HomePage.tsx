import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/common/PageTransition';
import { SEO } from '../components/common/SEO';

import { RollingHeadline } from '../components/home/RollingHeadline';
import { HeroRobotDisplay } from '../components/home/HeroRobotDisplay';
import { CapabilityTicker } from '../components/home/CapabilityTicker';
import { StatsSection } from '../components/home/StatsSection';
import { ProblemSection } from '../components/home/ProblemSection';
import { InteractiveWorkflowDemo } from '../components/home/InteractiveWorkflowDemo';
import { CustomerReviews } from '../components/home/CustomerReviews';
import { SystemsCapabilitiesAutoScroll } from '../components/home/SystemsCapabilitiesAutoScroll';

import { TEAM_MEMBERS } from '../data/team';
import { CASE_STUDIES } from '../data/caseStudies';
import { ImagePlaceholder } from '../components/common/ImagePlaceholder';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '../components/common/MagneticButton';

export const HomePage: React.FC = () => {
  // Take 3 case studies for preview on Home
  const selectedCaseStudies = CASE_STUDIES.slice(0, 3);

  // Take 3 team members for preview on Home
  const selectedTeamMembers = TEAM_MEMBERS.slice(0, 3);

  return (
    <PageTransition>
      <SEO
        title="NEWHEIGHT AI SYSTEMS — Build Systems That Move Businesses Forward"
        description="NEWHEIGHT AI SYSTEMS designs and implements intelligent AI agents, automated workflows, and connected business systems for companies worldwide."
      />

      {/* ===================================================
          01 — HERO (VIDEO BACKGROUND + ROLLING HEADLINE)
         =================================================== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0B0D0F] border-b border-white/10">
        {/* Cinematic Business & Technology Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/assets/newheight-hero-bg.jpg"
            className="w-full h-full object-cover filter brightness-90 contrast-105"
          >
            <source src="/assets/newheight_hero_3s.mp4" type="video/mp4" />
            <source src="https://cdn.coverr.co/videos/coverr-business-meeting-in-an-office-5264/1080p.mp4" type="video/mp4" />
          </video>
          {/* Subtle Dark Overlay for Legible Typography */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0F] via-[#0B0D0F]/90 to-[#0B0D0F]/75 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Editorial Headline & Messaging */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#5B7CFA] animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">
                  GLOBAL AI AUTOMATION & SYSTEMS AGENCY
                </span>
              </div>

              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.05]">
                We Turn Complex Business Processes Into <RollingHeadline /> Systems.
              </h1>

              <p className="font-sans text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
                We design and implement AI-powered workflows that help businesses manage enquiries, connect their tools, streamline operations, and reduce repetitive manual work.
              </p>

              {/* Action Buttons - Visually Priority Above Fold */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link to="/book">
                  <MagneticButton>
                    <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#5B7CFA] hover:bg-[#4a6be4] text-white font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-2xl transition-all">
                      <span>BOOK A CONSULTATION</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </MagneticButton>
                </Link>

                <Link
                  to="/work"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#15191D]/80 border border-white/20 text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all text-center backdrop-blur-md"
                >
                  EXPLORE OUR WORK
                </Link>
              </div>
            </div>

            {/* Right: AI System Visual Layer */}
            <div className="lg:col-span-5">
              <HeroRobotDisplay />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          02 — CREDIBILITY / MOVING CAPABILITY BAR (Auto-scrolls continuously)
         =================================================== */}
      <CapabilityTicker />
      <StatsSection />

      {/* ===================================================
          03 — BUSINESS PROBLEM
         =================================================== */}
      <ProblemSection />
      <div className="w-full py-6 bg-[#0B0D0F] border-b border-white/10 text-center">
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-[#5B7CFA] hover:text-white transition-colors"
        >
          <span>SEE WHAT WE AUTOMATE →</span>
        </Link>
      </div>

      {/* ===================================================
          04 — HOW NEWHEIGHT AUTOMATES IT (WORKFLOW PREVIEW)
         =================================================== */}
      <InteractiveWorkflowDemo />
      <div className="w-full py-6 bg-[#15191D] border-b border-white/10 text-center">
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
        >
          <span>SEE HOW IT WORKS IN DETAIL →</span>
        </Link>
      </div>

      {/* ===================================================
          05 — SYSTEMS BUILT AROUND YOUR BUSINESS (AUTO-SCROLLING CAPABILITIES)
         =================================================== */}
      <SystemsCapabilitiesAutoScroll />

      {/* ===================================================
          06 — CUSTOMER REVIEWS (12 FEEDBACK ENTRIES AUTO-SCROLLING CAROUSEL)
         =================================================== */}
      <CustomerReviews />
      <div className="w-full py-6 bg-[#0B0D0F] border-b border-white/10 text-center">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-[#5B7CFA] hover:text-white transition-colors"
        >
          <span>VIEW MORE CLIENT STORIES →</span>
        </Link>
      </div>

      {/* ===================================================
          07 — SELECTED WORK PREVIEW (2-3 Real Projects)
         =================================================== */}
      <section className="w-full py-24 bg-[#F4F1EB] text-[#0B0D0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-600">
                PROVEN SYSTEM IMPLEMENTATIONS
              </span>
              <h2 className="font-heading text-4xl sm:text-6xl text-[#0B0D0F] tracking-tight mt-2">
                Work That Does The Talking.
              </h2>
            </div>
            <Link
              to="/work"
              className="font-sans text-xs font-bold uppercase tracking-wider text-[#0B0D0F] hover:text-[#5B7CFA] flex items-center gap-2"
            >
              <span>VIEW ALL PROJECTS →</span>
              <ArrowUpRight className="w-4 h-4 text-[#5B7CFA]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedCaseStudies.map((cs) => (
              <Link
                key={cs.id}
                to={`/work/${cs.slug}`}
                className="group rounded-2xl p-6 bg-white border border-slate-300 hover:border-[#5B7CFA] transition-all flex flex-col justify-between shadow-sm overflow-hidden"
              >
                <div>
                  {cs.image ? (
                    <div className="relative mb-6 rounded-xl overflow-hidden border border-slate-200 bg-[#0B0D0F] shadow-md group-hover:shadow-xl transition-all">
                      <div className="px-3 py-2 bg-[#15191D] border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-red-500/80" />
                          <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                          <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-slate-400 text-[10px] truncate max-w-[140px]">{cs.title}</span>
                      </div>
                      <div className="aspect-video overflow-hidden bg-black/90 relative">
                        <img
                          src={cs.image}
                          alt={cs.imageAlt || cs.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  ) : (
                    <ImagePlaceholder
                      label={`Case Study: ${cs.title}`}
                      sublabel={`Sector: ${cs.industry}`}
                      type="project"
                      aspectRatio="aspect-video"
                      className="mb-6"
                    />
                  )}

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-600 mb-2">
                    <span className="font-bold text-[#0B0D0F]">{cs.industry}</span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-normal text-[#0B0D0F] group-hover:text-[#5B7CFA] transition-colors mb-3">
                    {cs.title}
                  </h3>

                  <p className="font-sans text-slate-700 text-xs line-clamp-2 leading-relaxed mb-6">
                    {cs.systemBuilt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono font-bold text-[#0B0D0F]">
                  <span>Outcome: {cs.outcomeResults[0]}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#5B7CFA] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0B0D0F] text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#5B7CFA] transition-all shadow-lg"
            >
              <span>VIEW ALL PROJECTS →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================
          08 — ABOUT NEWHEIGHT PREVIEW
         =================================================== */}
      <section className="w-full py-24 bg-[#15191D] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
                Built To Remove Operational Friction
              </span>

              <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-tight">
                About Newheight AI Systems
              </h2>

              <p className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed">
                NEWHEIGHT began as a three-person team focused on eliminating manual operational waste. Today, our six-person specialist agency engineers practical AI-powered systems for growing companies worldwide, connecting existing software tools and helping teams focus on high-value strategic growth.
              </p>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#5B7CFA] hover:bg-[#4a6be4] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <span>ABOUT NEWHEIGHT →</span>
                </Link>
              </div>
            </div>

            {/* Un-cropped Co-Founder Portrait Container */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-white/15 bg-[#0B0D0F] shadow-2xl p-4 flex flex-col items-center">
                <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl bg-[#15191D] border border-white/10 flex items-center justify-center p-2">
                  <img
                    src="/assets/oluwasegun-oladimeji.jpg"
                    alt="Oluwasegun Oladimeji — Co-Founder & Team Leader"
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="w-full mt-3 p-3.5 rounded-2xl bg-[#15191D] border border-white/10 font-sans text-left">
                  <span className="font-mono text-[10px] text-[#5B7CFA] font-bold uppercase tracking-widest block mb-1">Co-Founder & Team Leader</span>
                  <h4 className="font-heading text-xl text-white">Oluwasegun Oladimeji</h4>
                  <p className="font-sans text-xs text-slate-300 mt-0.5 leading-relaxed">
                    Leading strategic growth and enterprise multi-agent system architecture for client deployments worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          09 — TEAM PREVIEW
         =================================================== */}
      <section className="w-full py-24 bg-[#0B0D0F] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
                SPECIALIST TEAM PREVIEW
              </span>
              <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-tight mt-2">
                The People Behind The Systems.
              </h2>
            </div>
            <Link
              to="/team"
              className="font-sans text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white flex items-center gap-2"
            >
              <span>MEET THE FULL TEAM →</span>
              <ArrowUpRight className="w-4 h-4 text-[#5B7CFA]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedTeamMembers.map((member) => (
              <Link
                key={member.id}
                to={`/team/${member.slug}`}
                className="group rounded-3xl p-6 bg-[#15191D] border border-white/10 hover:border-[#5B7CFA]/50 transition-all flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {member.image ? (
                    <div className="relative mb-6 rounded-2xl overflow-hidden border border-white/10 bg-[#0B0D0F] p-2 aspect-square flex items-center justify-center group-hover:border-[#5B7CFA]/40 transition-all shadow-xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder
                      label={member.name}
                      sublabel={member.role}
                      type="team"
                      aspectRatio="aspect-square"
                      className="mb-6"
                    />
                  )}

                  <span className="font-mono text-xs text-[#5B7CFA] font-bold uppercase tracking-wider block mb-2">
                    {member.role}
                  </span>

                  <h3 className="font-heading text-2xl font-normal text-white group-hover:text-slate-200 transition-colors mb-2">
                    {member.name}
                  </h3>

                  <p className="font-sans text-slate-300 text-xs leading-relaxed line-clamp-2 mb-6">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold text-[#5B7CFA]">
                  <span>View Member Profile</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#15191D] border border-white/20 text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              <span>MEET THE FULL TEAM →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================
          10 — FINAL CTA
         =================================================== */}
      <section className="w-full py-28 relative overflow-hidden bg-[#15191D] border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
            EXECUTIVE ADVISORY & SYSTEM DISCOVERY
          </span>

          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-tight">
            Ready to Build Systems That Move Your Business Forward?
          </h2>

          <p className="font-sans text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Tell us where your team is losing time. We'll help identify what can be automated and what the system architecture should look like.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book">
              <MagneticButton>
                <button className="px-8 py-4 rounded-full bg-[#5B7CFA] hover:bg-[#4a6be4] text-white font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl">
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </MagneticButton>
            </Link>

            <Link
              to="/solutions"
              className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-sans font-bold text-xs uppercase tracking-wider font-bold hover:bg-white/20 transition-all"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
