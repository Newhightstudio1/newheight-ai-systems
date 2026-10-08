import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = ['INTELLIGENT', 'AUTOMATED', 'CONNECTED', 'STREAMLINED', 'SCALABLE'];

export const RollingHeadline: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <span className="text-[#5B7CFA] underline decoration-[#5B7CFA]/40 underline-offset-8">
        SMARTER
      </span>
    );
  }

  return (
    <span className="inline-block relative overflow-hidden align-bottom h-[1.15em] min-w-[220px] sm:min-w-[340px] text-left font-serif">
      <span className="sr-only">BUILD SMARTER SYSTEMS THAT MOVE BUSINESSES FORWARD.</span>

      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1] // smooth cubic-bezier curve
          }}
          aria-hidden="true"
          className="absolute left-0 top-0 text-[#5B7CFA] font-heading underline decoration-[#5B7CFA]/40 underline-offset-8 whitespace-nowrap block"
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
