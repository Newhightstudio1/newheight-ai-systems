import React from 'react';
import { Camera, Layers, ArrowUpRight } from 'lucide-react';

interface ImagePlaceholderProps {
  label: string;
  sublabel?: string;
  type?: 'team' | 'project' | 'editorial';
  aspectRatio?: string;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  sublabel = 'Photography asset ready for swap',
  type = 'team',
  aspectRatio = 'aspect-square',
  className = ''
}) => {
  return (
    <div
      className={`relative w-full ${aspectRatio} rounded-2xl bg-[#141722] border border-white/[0.08] flex flex-col justify-between p-6 group overflow-hidden transition-all duration-300 hover:border-blue-500/40 ${className}`}
    >
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Top Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-semibold px-2.5 py-1 rounded bg-black/40 border border-white/[0.06]">
          {type === 'team' ? 'TEAM PORTRAIT ARCHIVE' : 'SYSTEM ARCHITECTURE GRAPHIC'}
        </span>
        <Camera className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
      </div>

      {/* Center Label */}
      <div className="relative z-10 my-auto py-4">
        <h4 className="font-bold text-white text-base sm:text-lg tracking-tight group-hover:text-blue-300 transition-colors">
          {label}
        </h4>
        <p className="font-mono text-[11px] text-slate-400 mt-1 uppercase tracking-wider">
          {sublabel}
        </p>
      </div>

      {/* Bottom status bar */}
      <div className="relative z-10 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>NEWHEIGHT Asset Frame</span>
        <span className="text-blue-400 group-hover:translate-x-0.5 transition-transform">Swap Ready →</span>
      </div>
    </div>
  );
};
