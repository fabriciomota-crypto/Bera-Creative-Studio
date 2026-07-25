import React, { useState } from 'react';
import { Palette, Video, LayoutTemplate, ChevronDown } from 'lucide-react';
import servicesContent from '../content/services.json';
import { useContent } from '../content/useContent';

const ICONS: Record<string, React.ReactNode> = {
  palette: <Palette size={22} />,
  video: <Video size={22} />,
  layout: <LayoutTemplate size={22} />,
};

export const Services: React.FC = () => {
  const t = useContent(servicesContent);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="servicos" className="py-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-[60ch]">
          <span className="block text-label uppercase text-accent mb-4">
            {t.eyebrow}
          </span>
          <h2 className="text-h2 font-heading text-text mb-6">
            {t.titlePrefix}
            <span className="text-primary dark:text-accent">{t.titleHighlight}</span>
          </h2>
          <p className="text-bodyText text-textMuted">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="p-card bg-surface/50 border border-grey/25 hover:border-primary/50 dark:hover:border-accent/50 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-label text-textMuted/60">{service.number}</span>
                  <span className="text-primary dark:text-accent">{ICONS[service.icon]}</span>
                </div>
                <h3 className="text-h3 font-heading text-text mb-3">{service.title}</h3>
                <p className="text-textMuted leading-relaxed mb-4">{service.description}</p>

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex items-center gap-1.5 text-label uppercase text-primary dark:text-accent"
                >
                  {t.moreLabel}
                  <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-grey/20">
                    {service.tags.map((tag, j) => (
                      <span key={j} className="text-label uppercase px-2 py-1 bg-primary/10 text-primary dark:text-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
