import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

/**
 * Video lightbox for case studies — matches the real site's behavior
 * (YouTube embeds opened in a dark modal overlay), with a discreet
 * fade+scale entrance instead of an instant hard cut.
 */
export const Lightbox: React.FC<{ youtubeId: string; onClose: () => void }> = ({ youtubeId, onClose }) => {
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
      className={`fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 sm:p-8 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors"
      >
        <X size={24} />
      </button>
      <div
        className={`w-full max-w-4xl aspect-video transition-all duration-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title="Case video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
