import React, { useState } from 'react';
import { Palette, Video, LayoutTemplate } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import servicesContent from '../content/services.json';
import { useContent } from '../content/useContent';
import { Reveal } from './Reveal';
import { Modal } from './Modal';

const ICONS: Record<string, React.ReactNode> = {
  palette: <Palette size={20} />,
  video: <Video size={20} />,
  layout: <LayoutTemplate size={20} />,
};

const ICONS_LARGE: Record<string, React.ReactNode> = {
  palette: <Palette size={40} />,
  video: <Video size={40} />,
  layout: <LayoutTemplate size={40} />,
};

export const Services: React.FC = () => {
  const t = useContent(servicesContent);
  const { t: tChrome } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openService = openIndex !== null ? t.items[openIndex] : null;

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
          {t.items.map((service, index) => (
            <Reveal key={index} className="border-t-2 border-grey/20 pt-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-5xl font-heading font-light text-textMuted/30">{service.number}</span>
                <span className="text-accent">{ICONS[service.icon]}</span>
              </div>
              <h3 className="text-h3 font-heading text-text mb-3">{service.title}</h3>
              <p className="text-textMuted leading-relaxed mb-4">{service.description}</p>

              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className="link-underline flex items-center gap-1.5 text-label uppercase text-accent w-fit"
              >
                {t.moreLabel}
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {openService && (
        <Modal onClose={() => setOpenIndex(null)}>
          <span className="text-accent mb-6 block">{ICONS_LARGE[openService.icon]}</span>
          <span className="text-label uppercase text-textMuted/60">{openService.number}</span>
          <h3 className="text-h2 font-heading text-text mt-3 mb-6">{openService.title}</h3>
          <p className="text-bodyText text-textMuted leading-relaxed mb-8">{openService.description}</p>
          <div className="flex flex-wrap gap-2 mb-10">
            {openService.tags.map((tag, j) => (
              <span key={j} className="text-label uppercase px-3 py-1.5 bg-accent/10 text-accent">
                {tag}
              </span>
            ))}
          </div>
          <a
            href="#contato"
            onClick={() => setOpenIndex(null)}
            className="clip-corner inline-flex items-center justify-center gap-2 px-8 py-4 text-label uppercase text-black bg-accent hover:bg-primary hover:text-white transition-colors"
          >
            {tChrome('nav.cta')}
          </a>
        </Modal>
      )}
    </section>
  );
};
