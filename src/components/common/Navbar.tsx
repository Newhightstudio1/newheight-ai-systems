import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Industries', path: '/industries' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0D0F]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#5B7CFA] text-white font-mono font-extrabold flex items-center justify-center text-xs tracking-tighter group-hover:bg-white group-hover:text-[#0B0D0F] transition-colors">
            NH
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-extrabold text-base tracking-tight text-white group-hover:text-slate-200 transition-colors">
              NEWHEIGHT
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#5B7CFA] uppercase font-semibold">
              AI SYSTEMS
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-sans font-semibold uppercase tracking-wider transition-colors py-1 relative ${
                  active
                    ? 'text-white font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#5B7CFA]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link to="/book-consultation">
            <MagneticButton>
              <button className="px-6 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider text-white bg-[#5B7CFA] hover:bg-[#4a6be4] transition-all shadow-md flex items-center gap-2">
                <span>Book a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </MagneticButton>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/10 text-slate-200 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[85px] z-50 bg-[#0B0D0F]/98 backdrop-blur-2xl border-t border-white/10 flex flex-col p-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-xl text-sm font-sans uppercase tracking-wider flex items-center justify-between ${
                  isActive(link.path)
                    ? 'bg-white/10 text-white font-bold border border-white/10'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10">
            <Link
              to="/book-consultation"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-sans text-xs uppercase tracking-wider bg-[#5B7CFA] text-white font-bold shadow-lg"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
