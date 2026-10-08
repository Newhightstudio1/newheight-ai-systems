import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="w-full bg-[#07080a] border-b border-white/10 text-xs py-2.5 px-4 text-slate-300 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 font-sans text-[11px]">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5B7CFA]" />
          <span className="font-bold text-white tracking-wider font-mono">NEWHEIGHT AI SYSTEMS</span>
          <span className="text-slate-600 hidden sm:inline">—</span>
          <span className="text-slate-400 hidden md:inline tracking-wider font-mono uppercase">
            AI AUTOMATION • CRM SYSTEMS • INTELLIGENT WORKFLOWS
          </span>
        </div>

        <Link
          to="/book-consultation"
          className="group inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-medium"
        >
          <span>Schedule System Consultation</span>
          <ArrowRight className="w-3 h-3 text-[#5B7CFA] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
