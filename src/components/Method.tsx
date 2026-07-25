import React from 'react';
import methodContent from '../content/method.json';
import { useContent } from '../content/useContent';

export const Method: React.FC = () => {
  const t = useContent(methodContent);

  return (
    <section className="py-section bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-h2 font-heading text-text mb-16 max-w-[30ch]">{t.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.steps.map((step) => (
            <div key={step.number} className="border-t-2 border-accent pt-6">
              <span className="text-label text-textMuted/60">{step.number}</span>
              <h3 className="text-h3 font-heading text-text mt-2 mb-3">{step.title}</h3>
              <p className="text-textMuted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
