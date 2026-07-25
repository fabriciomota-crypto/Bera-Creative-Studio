import React from 'react';
import introContent from '../content/intro.json';
import { useContent } from '../content/useContent';

export const Intro: React.FC = () => {
  const t = useContent(introContent);

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-h3 font-heading text-text">{t.text}</p>
      </div>
    </section>
  );
};
