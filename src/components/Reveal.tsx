import React, { useEffect, useRef, useState } from 'react';

/**
 * Wraps a section heading (or any block) in a single, discreet fade+drift-in
 * triggered once when it scrolls into view. This is the site's one motion
 * device, applied consistently instead of many different animations per
 * section — see DESIGN.md "extremely discreet motion" principle.
 */
export const Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Defensive: if IntersectionObserver isn't available for any reason,
    // fail open (visible) rather than leaving content permanently hidden.
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Generous rootMargin so content reveals comfortably before it's
      // fully in view (never a "just missed it" flash during fast scroll).
      { threshold: 0.01, rootMargin: '0px 0px -5% 0px' }
    );
    observer.observe(el);

    // Fail-safe: never let a section stay invisible indefinitely (covers
    // crawlers/tools that render without simulating scroll, and any
    // observer edge case) — reveal anyway after a short delay.
    const failSafe = setTimeout(() => setVisible(true), 2000);

    return () => {
      observer.disconnect();
      clearTimeout(failSafe);
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
};
