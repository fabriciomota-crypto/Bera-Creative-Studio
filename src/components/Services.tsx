import React from 'react';
import { Palette, Video, LayoutTemplate, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: <Palette size={32} className="text-accent-light dark:text-accent-dark" />,
    title: 'Identidade Visual',
    description: 'Sistemas visuais completos construídos para serem inconfundíveis. Marca, logo, cores, tipografia e aplicações.',
  },
  {
    icon: <Video size={32} className="text-accent-light dark:text-accent-dark" />,
    title: 'Audiovisual & Motion',
    description: 'Produção de vídeos, animações e campanhas publicitárias que engajam e transmitem a essência do seu negócio.',
  },
  {
    icon: <LayoutTemplate size={32} className="text-accent-light dark:text-accent-dark" />,
    title: 'Digital & Web',
    description: 'Desenvolvimento de sites, landing pages e e-commerces com foco em performance, CRO e Core Web Vitals.',
  },
  {
    icon: <BarChart3 size={32} className="text-accent-light dark:text-accent-dark" />,
    title: 'Performance & Tráfego',
    description: 'Gestão de mídia paga, funil de vendas e otimização contínua baseada em dados para maximizar seu ROAS.',
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-secondary-light/30 dark:bg-secondary-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-bold tracking-widest uppercase text-accent-light dark:text-accent-dark mb-4 display-block">
            Sistemas Integrados
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-content-light dark:text-content-dark mb-6 tracking-tight">
            O que a Bera <span className="text-accent-light dark:text-accent-dark">entrega.</span>
          </h2>
          <p className="text-lg text-contentMuted-light dark:text-contentMuted-dark">
            Soluções criativas integradas, do conceito à execução - cada projeto construído para durar e performar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-dominant-light dark:bg-dominant-dark border border-secondary-light dark:border-secondary-dark hover:border-accent-light/50 dark:hover:border-accent-dark/50 transition-all hover:-translate-y-2 group"
            >
              <div className="mb-6 p-4 rounded-xl bg-secondary-light/50 dark:bg-secondary-dark/50 inline-block group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-content-light dark:text-content-dark mb-3">
                {service.title}
              </h3>
              <p className="text-contentMuted-light dark:text-contentMuted-dark leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
