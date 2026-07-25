import React from 'react';
import taglineContent from '../content/tagline.json';
import { useContent } from '../content/useContent';

export const Tagline: React.FC = () => {
  const t = useContent(taglineContent);

  return (
    <section className="py-24 bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-h3 font-heading text-white">{t.text}</p>
      </div>
    </section>
  );
};
