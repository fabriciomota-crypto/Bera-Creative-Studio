import React, { useEffect } from 'react';
import { X } from 'lucide-react';

/**
 * Video lightbox for case studies — matches the real site's behavior
 * (YouTube embeds opened in a dark modal overlay).
 */
export const Lightbox: React.FC<{ youtubeId: string; onClose: () => void }> = ({ youtubeId, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 text-white hover:text-accent transition-colors"
      >
        <X size={28} />
      </button>
      <div
        className="w-full max-w-4xl aspect-video"
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
