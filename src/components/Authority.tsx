import React from 'react';
import authorityContent from '../content/authority.json';
import { useContent } from '../content/useContent';

export const Authority: React.FC = () => {
  const t = useContent(authorityContent);

  return (
    <section id="autoridade" className="py-section overflow-hidden relative bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <span className="block text-label uppercase text-accent mb-6">
              {t.eyebrow}
            </span>
            <h2 className="text-h2 font-heading text-text mb-8">
              {t.titlePrefix}
              <span className="text-accent">{t.titleHighlight}</span>
            </h2>

            <div className="space-y-6 text-bodyText text-textMuted max-w-[62ch]">
              {t.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div>
            <div className="border border-grey/25 bg-black overflow-hidden mb-6">
              <img
                src="/images/container-bera-01.png"
                alt="Container verde da Bera Creative Studio com identidade visual aplicada"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              {t.highlight.map((line, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 bg-accent flex-shrink-0" />
                  <p className="text-lg font-heading font-medium text-text">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
