import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import authorityContent from '../content/authority.json';
import { useContent } from '../content/useContent';

export const Authority: React.FC = () => {
  const t = useContent(authorityContent);

  return (
    <section id="metodo" className="py-section overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 order-2 lg:order-1">
            <span className="block text-label uppercase text-accent mb-6">
              {t.eyebrow}
            </span>
            <h2 className="text-h2 font-heading text-text mb-8">
              {t.titlePrefix}
              <span className="text-primary dark:text-accent">{t.titleHighlight}</span>
            </h2>

            <div className="space-y-6 text-bodyText text-textMuted mb-10 max-w-[62ch]">
              {t.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="space-y-4">
              {t.points.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-text font-medium">
                  <CheckCircle2 className="text-primary dark:text-accent flex-shrink-0" size={22} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-3 bg-primary/10" aria-hidden="true" />
            <div className="relative aspect-[4/3] border border-grey/25 bg-surface flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto border-4 border-primary dark:border-accent rounded-full flex items-center justify-center mb-6">
                  <span className="text-4xl font-heading font-black text-text">{t.statNumber}</span>
                </div>
                <p className="text-xl font-heading font-bold text-text">{t.statLabel}</p>
                <p className="text-textMuted">{t.statSubLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
