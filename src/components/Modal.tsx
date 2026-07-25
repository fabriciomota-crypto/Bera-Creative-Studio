import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

/**
 * Reusable floating panel — the Human Academy-style modal pattern adapted
 * to Bera's system: angular (no rounded corners), no drop shadow, high
 * contrast, generous internal spacing. Slides in from the right on
 * desktop; full-screen takeover on mobile (a real bottom-sheet/full-screen
 * pattern, never a small centered box). Closes via X, backdrop click, or
 * Escape.
 */
export const Modal: React.FC<{ onClose: () => void; children: React.ReactNode }> = ({ onClose, children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-[200] bg-black/70 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`absolute inset-y-0 right-0 w-full sm:w-[32rem] max-w-full bg-bg border-l border-grey/20 overflow-y-auto transition-transform duration-300 ease-out ${visible ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-6 right-6 sm:right-8 text-textMuted hover:text-text transition-colors z-10"
        >
          <X size={24} />
        </button>
        <div className="p-8 sm:p-12 pt-20">{children}</div>
      </div>
    </div>
  );
};
