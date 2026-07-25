import React, { useEffect, useRef, useState } from 'react';
import statsContent from '../content/stats.json';
import { useContent } from '../content/useContent';
import { Reveal } from './Reveal';

const CountUp: React.FC<{ target: number; prefix: string; suffix: string }> = ({ target, prefix, suffix }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setValue(target);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-h2 font-heading text-text">
      {prefix}
      {value}
      <span className="text-accent">{suffix}</span>
    </span>
  );
};

export const Stats: React.FC = () => {
  const t = useContent(statsContent);

  return (
    <section className="py-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-h3 font-heading text-textMuted mb-16 text-center">
            {t.titleLine} <span className="text-accent">{t.titleHighlight}</span>
          </h2>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {t.items.map((item, i) => (
              <div key={i}>
                <CountUp target={item.value} prefix={item.prefix} suffix={item.suffix} />
                <p className="text-textMuted mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
