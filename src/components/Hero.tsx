import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroContent from '../content/hero.json';
import { useContent } from '../content/useContent';
import images from '../design/images.json';

export const Hero: React.FC = () => {
  const t = useContent(heroContent);
  const heroVisual = (images as Record<string, string>).heroVisual;

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 mb-8">
              <span className="w-2 h-2 bg-accent" />
              <span className="text-label uppercase text-textMuted">
                {t.eyebrow}
              </span>
            </div>

            <h1 className="text-h1 font-heading text-text mb-6">
              {t.titleLine} <br className="hidden sm:block" />
              <span className="text-primary dark:text-accent">{t.titleHighlight}</span>
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
                <ArrowRight size={16} />
              </a>
              <a
                href="#cases"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-label uppercase text-text border-2 border-grey/40 hover:border-primary dark:hover:border-accent transition-colors"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Flat layered geometric panel composition — replaces blurred gradient blobs. Echoes the bear mark's angularity abstractly. Swaps for a real photo once uploaded via the dev design panel (Step 5). */}
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
    </section>
  );
};
