import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Globe, Mail } from 'lucide-react';
import { SOLUTIONS_DATA } from '../../data/solutions';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#080a0f] border-t border-white/[0.08] text-slate-400 text-sm relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Footer Banner */}
        <div className="rounded-3xl p-8 sm:p-12 mb-16 bg-[#12151e] border border-white/[0.1] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-400">
              INTELLIGENT SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight editorial-heading">
              Ready to build a smarter business?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Tell us what slows your business down. We'll help you identify where AI automation can make the biggest operational difference.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/solutions"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/40 border border-white/[0.1] text-slate-200 font-mono text-xs uppercase tracking-wider font-bold hover:text-white transition-all text-center"
            >
              Explore Solutions
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-white text-slate-950 font-mono font-extrabold flex items-center justify-center text-sm">
                NH
              </div>
              <div>
                <span className="font-extrabold text-lg text-white block tracking-tight">NEWHEIGHT</span>
                <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase font-semibold">AI SYSTEMS</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              AI Systems That Move Businesses Forward. Designing intelligent automation, AI agents, CRM workflows, and custom solutions for global enterprises.
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Global System Architecture Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Serving Clients Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>contact@newheight.ai</span>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs font-mono">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/work" className="hover:text-white transition-colors">Work / Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Specialist Team</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/book-consultation" className="text-blue-400 font-bold hover:underline">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Offers
            </h3>
            <ul className="space-y-2 text-xs font-mono">
              {SOLUTIONS_DATA.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <Link to={`/solutions/${item.slug}`} className="hover:text-white transition-colors line-clamp-1">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/solutions" className="text-blue-400 font-bold hover:underline">
                  View All 10 Offers →
                </Link>
              </li>
            </ul>
          </div>

          {/* Team */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
              Specialists
            </h3>
            <ul className="space-y-2 text-xs font-mono">
              <li><Link to="/team/oluwasegun-oladimeji" className="hover:text-white transition-colors">Oluwasegun Oladimeji</Link></li>
              <li><Link to="/team/elijah-taiwo" className="hover:text-white transition-colors">Elijah Taiwo</Link></li>
              <li><Link to="/team/isaniyi-kehinde" className="hover:text-white transition-colors">Isaniyi Kehinde</Link></li>
              <li><Link to="/team/olaniyi" className="hover:text-white transition-colors">Olaniyi</Link></li>
              <li><Link to="/team/ezekiel" className="hover:text-white transition-colors">Ezekiel</Link></li>
              <li><Link to="/team/omotola" className="hover:text-white transition-colors">Omotola</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} NEWHEIGHT AI SYSTEMS. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Global Operations</span>
            <span>4.9/5 Verified Rating</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
