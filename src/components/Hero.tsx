import React from 'react';
import heroContent from '../content/hero.json';
import { useContent } from '../content/useContent';

export const Hero: React.FC = () => {
  const t = useContent(heroContent);

  return (
    <section className="relative overflow-hidden min-h-[92vh] flex flex-col justify-end">
      {/* Real hero background video (from the live site), dimmed for text legibility.
          z-0 (not a negative z-index) — a negative value here would push the
          video behind the page's own opaque body background instead of just
          behind the text, making it invisible despite decoding/playing fine. */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20">
        <div className="max-w-5xl animate-fade-up">
          <span className="block text-label uppercase text-white/60 mb-6">{t.kicker}</span>

          <h1 className="text-h1 font-heading text-white mb-8 tracking-tight">
            {t.title} <span className="text-accent">{t.titleMark}</span>
          </h1>

          <p className="text-bodyText text-white/80 mb-10 max-w-[56ch]">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contato"
              className="clip-corner inline-flex items-center justify-center gap-2 px-8 py-4 text-label uppercase text-black bg-accent hover:bg-primary hover:text-white transition-colors"
            >
              {t.ctaPrimary}
              <span aria-hidden="true">{t.ctaPrimaryIcon}</span>
            </a>
            <a
              href="#cases"
              className="link-underline inline-flex items-center justify-center gap-2 px-8 py-4 text-label uppercase text-white"
            >
              {t.ctaSecondary}
              <span aria-hidden="true">{t.ctaSecondaryIcon}</span>
            </a>
          </div>

          {/* Static (non-looping) discipline tags — same real words as the live
              site's ticker, presented quietly instead of an infinite-scroll
              animation competing for attention. */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-6">
            {t.marquee.map((tag, i) => (
              <span key={i} className="text-label uppercase text-white/50">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
