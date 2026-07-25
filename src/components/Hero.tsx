import React from 'react';
import heroContent from '../content/hero.json';
import { useContent } from '../content/useContent';

export const Hero: React.FC = () => {
  const t = useContent(heroContent);
  const marqueeItems = [...t.marquee, ...t.marquee];

  return (
    <section className="relative overflow-hidden">
      {/* Real hero background video (from the live site), dimmed for text legibility */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.m4v" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-44 lg:pb-24">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/25 mb-8">
            <span className="w-2 h-2 bg-accent" />
            <span className="text-label uppercase text-white/70">{t.kicker}</span>
          </div>

          <h1 className="text-h1 font-heading text-white mb-6">
            {t.title} <span className="text-accent">{t.titleMark}</span>
          </h1>

          <p className="text-bodyText text-white/75 mb-10 max-w-[62ch]">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="clip-corner inline-flex items-center justify-center gap-2 px-8 py-4 text-label uppercase text-black bg-accent hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
            >
              {t.ctaPrimary}
              <span aria-hidden="true">{t.ctaPrimaryIcon}</span>
            </a>
            <a
              href="#cases"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-label uppercase text-white border-2 border-white/30 hover:border-accent transition-colors"
            >
              {t.ctaSecondary}
              <span aria-hidden="true">{t.ctaSecondaryIcon}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scrolling tag marquee — mirrors the live site's ticker of service/discipline keywords */}
      <div className="relative border-t border-white/15 py-4 overflow-hidden bg-black/40" aria-hidden="true">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {marqueeItems.map((tag, i) => (
            <span key={i} className="text-label uppercase text-white/70 flex items-center gap-8">
              {tag}
              <span className="w-1.5 h-1.5 bg-accent inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
