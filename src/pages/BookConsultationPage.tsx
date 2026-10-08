import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { SEO } from '../components/common/SEO';
import { ConsultationForm } from '../components/booking/ConsultationForm';

export const BookConsultationPage: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Book a Consultation — NEWHEIGHT AI SYSTEMS"
        description="Schedule an executive consultation with NEWHEIGHT AI Systems architects to identify automation opportunities and design custom AI workflows."
      />

      <section className="w-full py-20 bg-[#0B0D0F] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
            EXECUTIVE ADVISORY & SYSTEM DISCOVERY
          </span>
          <h1 className="font-heading text-5xl sm:text-7xl text-white tracking-tight">
            Book a System Consultation
          </h1>
          <p className="font-sans text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Discover how connected AI agents and automated workflows can remove friction from your business.
          </p>
        </div>
      </section>

      <section className="w-full py-24 bg-[#15191D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ConsultationForm />
        </div>
      </section>
    </PageTransition>
  );
};
