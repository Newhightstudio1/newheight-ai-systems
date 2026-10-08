import React, { useState } from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { SEO } from '../components/common/SEO';
import { Mail, MapPin, Globe, CheckCircle2, Send } from 'lucide-react';
import { sendEmailNotification } from '../services/emailService';

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    website: '',
    automationNeed: '',
    currentTools: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    await sendEmailNotification({
      type: 'CONTACT_FORM',
      name: form.name,
      email: form.email,
      company: form.business,
      phone: form.phone,
      message: form.message,
      details: {
        website: form.website,
        automationNeed: form.automationNeed,
        currentTools: form.currentTools
      }
    });

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <SEO
        title="Contact — NEWHEIGHT AI SYSTEMS"
        description="Connect with NEWHEIGHT AI SYSTEMS engineering team for direct system inquiries."
      />

      <section className="w-full py-20 bg-[#0B0D0F] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5B7CFA]">
              DIRECT AGENCY COMMUNICATIONS
            </span>
            <h1 className="font-heading text-5xl sm:text-7xl text-white tracking-tight">
              Contact NEWHEIGHT
            </h1>
            <p className="font-sans text-slate-300 text-lg leading-relaxed">
              Have a technical question or need a direct project quote? Start a conversation with our engineering leaders.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-[#15191D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div className="rounded-3xl p-8 bg-[#0B0D0F] border border-white/15 space-y-6 shadow-2xl">
                <h3 className="font-heading text-3xl text-white">Global Operations</h3>

                <div className="space-y-4 font-mono text-xs text-slate-300">
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                    <div className="flex items-center gap-2 text-[#5B7CFA] font-bold">
                      <Globe className="w-4 h-4" />
                      <span>Systems Architecture Hub</span>
                    </div>
                    <p className="text-slate-400">Strategic Advisory & AI Automation Architecture</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                    <div className="flex items-center gap-2 text-[#5B7CFA] font-bold">
                      <Globe className="w-4 h-4" />
                      <span>Engineering & Integration Delivery</span>
                    </div>
                    <p className="text-slate-400">Technical Microservices & API Engineering</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                    <div className="flex items-center gap-2 text-[#5B7CFA] font-bold">
                      <Globe className="w-4 h-4" />
                      <span>Worldwide Reach</span>
                    </div>
                    <p className="text-slate-400">24/7 Operations across Europe, Africa, & Americas</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold">
                      <Mail className="w-4 h-4" />
                      <span>Direct Email</span>
                    </div>
                    <p className="text-slate-200">contact@newheight.ai</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl p-8 sm:p-10 bg-[#0B0D0F] border border-white/15 shadow-2xl font-sans">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#5B7CFA] mx-auto" />
                    <h3 className="font-heading text-3xl text-white">Conversation Started</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto">
                      Thank you <span className="text-[#5B7CFA] font-bold">{form.name}</span>. We've received your inquiry and will respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-full bg-white/10 text-xs font-sans text-slate-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-heading text-3xl text-white mb-2">Start a Conversation</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-[#5B7CFA]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                          Company *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Company Name"
                          value={form.business}
                          onChange={(e) => setForm({ ...form, business: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-[#5B7CFA]"
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
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-[#5B7CFA]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                          Phone (Optional)
                        </label>
                        <input
                          type="tel"
                          placeholder="+44 20 7946 0912"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-[#5B7CFA]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                        Message / Project Details
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your team's workflow and goals..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-[#5B7CFA] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-full bg-[#5B7CFA] hover:bg-[#4a6be4] text-white font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      {submitting ? 'Sending...' : 'Start a Conversation'}
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
