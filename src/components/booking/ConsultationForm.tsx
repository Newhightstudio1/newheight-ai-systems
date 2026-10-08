import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ConsultationFormData } from '../../types';
import { SOLUTIONS_DATA } from '../../data/solutions';
import { sendEmailNotification } from '../../services/emailService';

export const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    serviceInterest: 'custom-ai-systems',
    currentTools: '',
    mainChallenge: '',
    desiredOutcome: '',
    estimatedTimeline: '1-2-weeks'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await sendEmailNotification({
      type: 'CONSULTATION_BOOKING',
      name: formData.name,
      email: formData.email,
      company: formData.businessName,
      phone: formData.phone,
      message: formData.mainChallenge,
      details: {
        website: formData.website,
        serviceInterest: formData.serviceInterest,
        currentTools: formData.currentTools,
        desiredOutcome: formData.desiredOutcome,
        estimatedTimeline: formData.estimatedTimeline
      }
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-[#15191D] border border-white/15 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
      {isSubmitted ? (
        <div className="text-center py-16 space-y-6">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
          <h3 className="font-heading text-4xl font-normal text-white">
            Consultation Request Received
          </h3>

          <p className="font-sans text-slate-300 max-w-lg mx-auto text-base leading-relaxed">
            Thank you <span className="text-[#5B7CFA] font-bold">{formData.name}</span>. A NEWHEIGHT AI Systems Architect will review your challenge ({formData.businessName || 'your business'}) and email you shortly to confirm your consultation time slot.
          </p>

          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-slate-300 text-xs font-sans font-semibold"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
              EXECUTIVE CONSULTATION DISCOVERY
            </span>

            <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-tight mt-2 leading-tight">
              LET’S TALK ABOUT WHAT YOUR BUSINESS COULD AUTOMATE.
            </h2>

            <p className="font-sans text-slate-300 text-base leading-relaxed mt-3">
              This consultation is an opportunity to review your current software workflows, identify manual bottlenecks, and determine if NEWHEIGHT is a suitable fit for your engineering goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-slate-100 placeholder-slate-500 font-sans text-sm focus:outline-none focus:border-[#5B7CFA]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                Company / Business Name *
              </label>
              <input
                type="text"
                required
                placeholder="Company Name"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-slate-100 placeholder-slate-500 font-sans text-sm focus:outline-none focus:border-[#5B7CFA]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="email@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-slate-100 placeholder-slate-500 font-sans text-sm focus:outline-none focus:border-[#5B7CFA]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                placeholder="+44 20 7946 0912"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-slate-100 placeholder-slate-500 font-sans text-sm focus:outline-none focus:border-[#5B7CFA]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold">
              Primary System Focus
            </label>
            <select
              value={formData.serviceInterest}
              onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-slate-100 font-sans text-sm focus:outline-none focus:border-[#5B7CFA]"
            >
              {SOLUTIONS_DATA.map((sol) => (
                <option key={sol.slug} value={sol.slug} className="bg-[#0B0D0F] text-slate-100">
                  {sol.number} — {sol.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold">
              What slows your business down right now?
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Sales follow-up is delayed, manual data entry from invoices takes hours..."
              value={formData.mainChallenge}
              onChange={(e) => setFormData({ ...formData, mainChallenge: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-slate-100 placeholder-slate-500 font-sans text-sm focus:outline-none focus:border-[#5B7CFA] resize-none"
            />
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-400">
              Direct review by senior AI system architect
            </span>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#5B7CFA] hover:bg-[#4a6be4] text-white font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
            >
              {isSubmitting ? 'Submitting...' : 'Confirm Consultation Booking'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
