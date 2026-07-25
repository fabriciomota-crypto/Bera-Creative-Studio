import React from 'react';
import heroContent from '../content/hero.json';
import { useContent } from '../content/useContent';
import images from '../design/images.json';

export const Hero: React.FC = () => {
  const t = useContent(heroContent);
  const heroVisual = (images as Record<string, string>).heroVisual;
  const marqueeItems = [...t.marquee, ...t.marquee];

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 mb-8">
              <span className="w-2 h-2 bg-accent" />
              <span className="text-label uppercase text-textMuted">{t.kicker}</span>
            </div>

            <h1 className="text-h1 font-heading text-text mb-6">
              {t.title} <span className="text-primary dark:text-accent">{t.titleMark}</span>
            </h1>

            <p className="text-bodyText text-textMuted mb-10 max-w-[62ch]">
              {t.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="clip-corner inline-flex items-center justify-center gap-2 px-8 py-4 text-label uppercase text-white bg-primary hover:bg-accent hover:text-black transition-all hover:-translate-y-1"
              >
                {t.ctaPrimary}
                <span aria-hidden="true">{t.ctaPrimaryIcon}</span>
              </a>
              <a
                href="#cases"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-label uppercase text-text border-2 border-grey/40 hover:border-primary dark:hover:border-accent transition-colors"
              >
                {t.ctaSecondary}
                <span aria-hidden="true">{t.ctaSecondaryIcon}</span>
              </a>
            </div>
          </div>

          {/* Flat layered geometric panel composition — placeholder for the real background video/photo, not yet supplied. Echoes the bear mark's angularity abstractly. */}
          <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-[28rem] hidden sm:block" aria-hidden="true">
            {heroVisual ? (
              <img src={heroVisual} alt="" className="w-full h-full object-cover clip-corner" />
            ) : (
              <>
                <div className="absolute inset-0 bg-primary clip-corner" />
                <div className="absolute top-6 -right-4 w-2/3 h-1/2 bg-accent clip-corner-sm" />
                <div className="absolute bottom-8 left-4 w-1/2 h-1/3 bg-surface border border-grey/30" />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Scrolling tag marquee — mirrors the live site's ticker of service/discipline keywords */}
      <div className="mt-16 border-y border-grey/20 py-4 overflow-hidden" aria-hidden="true">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {marqueeItems.map((tag, i) => (
            <span key={i} className="text-label uppercase text-textMuted flex items-center gap-8">
              {tag}
              <span className="w-1.5 h-1.5 bg-accent inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
