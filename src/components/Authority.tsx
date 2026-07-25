import React from 'react';
import authorityContent from '../content/authority.json';
import { useContent } from '../content/useContent';
import { Reveal } from './Reveal';

export const Authority: React.FC = () => {
  const t = useContent(authorityContent);

  return (
    <section id="autoridade" className="py-section relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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

          <Reveal>
            <div className="bg-black overflow-hidden mb-6">
              <img
                src="/images/container-bera-01.png"
                alt="Container verde da Bera Creative Studio com identidade visual aplicada"
                className="w-full h-auto"
              />
            </div>
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
