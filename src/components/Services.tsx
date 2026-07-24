import React from 'react';
import { Palette, Video, LayoutTemplate, BarChart3 } from 'lucide-react';
import servicesContent from '../content/services.json';
import { useContent } from '../content/useContent';

const ICONS: Record<string, React.ReactNode> = {
  palette: <Palette size={22} />,
  video: <Video size={22} />,
  layout: <LayoutTemplate size={22} />,
  chart: <BarChart3 size={22} />,
};

export const Services: React.FC = () => {
  const t = useContent(servicesContent);

  return (
    <section id="servicos" className="py-section bg-surface/50">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((service, index) => (
            <div
              key={index}
              className="p-card bg-bg border border-grey/25 hover:border-primary/50 dark:hover:border-accent/50 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary dark:text-accent">{ICONS[service.icon]}</span>
                <h3 className="text-h3 font-heading text-text">{service.title}</h3>
              </div>
              <p className="text-textMuted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
