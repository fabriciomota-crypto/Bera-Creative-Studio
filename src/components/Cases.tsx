import React from 'react';
import { Play } from 'lucide-react';
import casesContent from '../content/cases.json';
import { useContent } from '../content/useContent';

const PANEL_CLASSES: Record<string, string> = {
  primary: 'bg-primary',
  dark: 'bg-surface',
  accent: 'bg-primaryDeep',
};

export const Cases: React.FC = () => {
  const t = useContent(casesContent);

  return (
    <section id="cases" className="py-section border-t border-grey/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="block text-label uppercase text-accent mb-4">
              {t.eyebrow}
            </span>
            <h2 className="text-h2 font-heading text-text">
              {t.titlePrefix}
              <span className="text-primary dark:text-accent">{t.titleHighlight}</span>
            </h2>
          </div>
          <a
            href="#"
            className="text-label uppercase text-text hover:text-primary dark:hover:text-accent transition-colors inline-flex items-center gap-2"
          >
            {t.viewAll} &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((c, i) => (
            <div
              key={i}
              id={i === 0 ? 'case-innovare' : undefined}
              className="group relative clip-corner overflow-hidden border border-grey/25 aspect-[4/5] hover:-translate-y-2 transition-transform duration-300"
            >
              {c.image ? (
                <img src={c.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <div className={`absolute inset-0 ${PANEL_CLASSES[c.panel] ?? 'bg-primary'}`} />
              )}

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black/20">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white" aria-label={t.watchLabel}>
                  <Play className="ml-1" size={24} fill="currentColor" />
                </div>
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
                <span className="text-label uppercase px-2 py-1 bg-accent/90 text-black self-start mb-3">
                  {c.category}
                </span>
                <p className="text-xs uppercase tracking-wider text-gray-300 mb-1">{t.clientLabel}</p>
                <h3 className="text-xl font-heading font-bold text-white mb-2">{c.client}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="font-bold text-white">{c.metric}</span>
                  <span>{c.subline} · {c.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
