import React from 'react';
import introContent from '../content/intro.json';
import { useContent } from '../content/useContent';
import { Reveal } from './Reveal';

export const Intro: React.FC = () => {
  const t = useContent(introContent);

  return (
    <section className="py-24">
      <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-h3 font-heading text-text">{t.text}</p>
      </Reveal>
    </section>
  );
};
