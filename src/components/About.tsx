import React from 'react';
import aboutContent from '../content/about.json';
import { useContent } from '../content/useContent';

export const About: React.FC = () => {
  const t = useContent(aboutContent);

  return (
    <section id="sobre" className="py-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="block text-label uppercase text-accent mb-4 text-center">
          {t.eyebrow}
        </span>
        <h2 className="text-h2 font-heading text-text mb-10 text-center">{t.title}</h2>

        <div className="space-y-6 text-bodyText text-textMuted">
          {t.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contato"
            className="clip-corner inline-flex items-center justify-center gap-2 px-8 py-4 text-label uppercase text-white bg-primary hover:bg-accent hover:text-black transition-all hover:-translate-y-1"
          >
            {t.cta}
            <span aria-hidden="true">{t.ctaIcon}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
