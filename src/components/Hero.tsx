import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-secondary-light/30 dark:bg-secondary-dark/30" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-light dark:bg-secondary-dark border border-contentMuted-light/20 dark:border-contentMuted-dark/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-light dark:bg-accent-dark animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-contentMuted-light dark:text-contentMuted-dark">
              Sistemas Criativos Integrados
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-content-light dark:text-content-dark mb-6 leading-[1.1]">
            Marcas fortes para <br className="hidden sm:block" />
            <span className="text-accent-light dark:text-accent-dark">setores complexos.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-contentMuted-light dark:text-contentMuted-dark mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Elevamos marcas ao próximo nível. Unimos estratégia, audiovisual, branding e performance numa execução contínua e evolutiva para que você domine a percepção do seu mercado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contato" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-dominant-light bg-content-light dark:bg-content-dark dark:text-dominant-dark rounded-full hover:bg-accent-light dark:hover:bg-accent-dark transition-all hover:-translate-y-1">
              Iniciar Projeto
              <ArrowRight size={16} />
            </a>
            <a href="#cases" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-content-light dark:text-content-dark bg-transparent border-2 border-secondary-light dark:border-secondary-dark rounded-full hover:border-content-light dark:hover:border-content-dark transition-colors">
              Ver Cases
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
