import React from 'react';
import authorityContent from '../content/authority.json';
import { useContent } from '../content/useContent';
import { Reveal } from './Reveal';
import { useParallax } from '../hooks/useParallax';

export const Authority: React.FC = () => {
  const t = useContent(authorityContent);
  // Direction A (anchored parallax container) — chosen over a Human
  // Academy-style logo carousel because Bera has no real client-logo
  // assets to put in one; fabricating placeholder logos would violate the
  // "real assets only" rule already established for this site. The
  // container photo we do have works well full-bleed.
  const { ref: imgRef, offset } = useParallax<HTMLDivElement>(32);

  return (
    <section id="autoridade" className="py-section relative overflow-hidden">
      {/* Full-bleed, anchored image band — crops top/bottom, no rounded
          floating card, subtle parallax as the page scrolls past it. */}
      <div className="relative h-[55vh] sm:h-[65vh] overflow-hidden mb-16 sm:mb-20 bg-black">
        <div
          ref={imgRef}
          style={{ transform: `translateY(${offset}px) scale(1.15)` }}
          className="absolute inset-0"
        >
          <img
            src="/images/container-bera-01.png"
            alt="Container verde da Bera Creative Studio com identidade visual aplicada"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal>
            {/* Eyebrow de-emphasized from an uppercase "tag" to a quiet
                sentence-case lead-in — it's a full descriptive phrase, not a
                short label, so all-caps hurt readability at this length. */}
            <p className="text-lg text-accent mb-4">{t.eyebrow}</p>
            <h2 className="text-h2 font-heading text-text mb-8">
              {t.titlePrefix}
              <span className="text-accent">{t.titleHighlight}</span>
            </h2>

            <div className="space-y-6 text-bodyText text-textMuted max-w-[62ch]">
              {t.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:pt-4">
            <div className="space-y-4">
              {t.highlight.map((line, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <p className="text-textMuted">{line}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
