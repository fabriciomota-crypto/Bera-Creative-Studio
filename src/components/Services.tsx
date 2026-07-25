import React, { useState } from 'react';
import { Palette, Video, LayoutTemplate, ChevronDown } from 'lucide-react';
import servicesContent from '../content/services.json';
import { useContent } from '../content/useContent';
import { Reveal } from './Reveal';

const ICONS: Record<string, React.ReactNode> = {
  palette: <Palette size={20} />,
  video: <Video size={20} />,
  layout: <LayoutTemplate size={20} />,
};

export const Services: React.FC = () => {
  const t = useContent(servicesContent);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="servicos" className="py-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-20 max-w-[60ch]">
          <span className="block text-label uppercase text-accent mb-4">
            {t.eyebrow}
          </span>
          <h2 className="text-h2 font-heading text-text mb-6">
            {t.titlePrefix}
            <span className="text-accent">{t.titleHighlight}</span>
          </h2>
          <p className="text-bodyText text-textMuted">{t.subtitle}</p>
        </Reveal>

        {/* No card boxes — a plain top-divider list lets typography carry the
            hierarchy instead of borders/shadows/hover-lift chrome. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {t.items.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} className="border-t-2 border-grey/20 pt-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-heading font-light text-textMuted/30">{service.number}</span>
                  <span className="text-accent">{ICONS[service.icon]}</span>
                </div>
                <h3 className="text-h3 font-heading text-text mb-3">{service.title}</h3>
                <p className="text-textMuted leading-relaxed mb-4">{service.description}</p>

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="link-underline flex items-center gap-1.5 text-label uppercase text-accent w-fit"
                >
                  {t.moreLabel}
                  <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-grey/20">
                    {service.tags.map((tag, j) => (
                      <span key={j} className="text-label uppercase px-2 py-1 bg-accent/10 text-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
