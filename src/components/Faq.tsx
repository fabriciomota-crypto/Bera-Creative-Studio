import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import faqContent from '../content/faq.json';
import { useContent } from '../content/useContent';
import { Reveal } from './Reveal';

export const Faq: React.FC = () => {
  const t = useContent(faqContent);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-section bg-surface/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 max-w-[60ch]">
          <span className="block text-label uppercase text-accent mb-4">
            {t.eyebrow}
          </span>
          <h2 className="text-h2 font-heading text-text mb-6">
            {t.titlePrefix}
            <span className="text-accent">{t.titleHighlight}</span>
          </h2>
          <p className="text-bodyText text-textMuted">{t.subtitle}</p>
        </Reveal>

        <div className="divide-y divide-grey/20 border-y border-grey/20">
          {t.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-h3 font-heading text-text">{item.question}</span>
                  <span className="flex-shrink-0 text-accent">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                {isOpen && (
                  <p
                    id={`faq-answer-${i}`}
                    className="text-bodyText text-textMuted pb-6 max-w-[68ch]"
                  >
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
