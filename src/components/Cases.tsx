import React from 'react';
import { Play } from 'lucide-react';

const cases = [
  {
    title: 'Lumna Fitness',
    category: 'E-commerce & Identidade',
    tags: ['Branding', 'SEO/GEO', 'Performance'],
    bgClass: 'bg-gradient-to-br from-blue-900 to-black',
  },
  {
    title: 'MMS Arquitetura',
    category: 'Posicionamento B2B',
    tags: ['Web Design', 'Audiovisual'],
    bgClass: 'bg-gradient-to-br from-stone-800 to-black',
  },
  {
    title: 'EquipproVix',
    category: 'Indústria & Vendas',
    tags: ['Performance', 'CRO'],
    bgClass: 'bg-gradient-to-br from-indigo-900 to-black',
  }
];

export const Cases: React.FC = () => {
  return (
    <section id="cases" className="py-24 bg-dominant-light dark:bg-dominant-dark border-t border-secondary-light/50 dark:border-secondary-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-accent-light dark:text-accent-dark mb-4 display-block">
              Nosso Portfólio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-content-light dark:text-content-dark tracking-tight">
              Projetos que <span className="text-accent-light dark:text-accent-dark">transformam.</span>
            </h2>
          </div>
          <a href="#" className="text-sm font-bold text-content-light dark:text-content-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors inline-flex items-center gap-2">
            Ver todos os cases &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden border border-secondary-light dark:border-secondary-dark aspect-[4/5] sm:aspect-square lg:aspect-[4/5] hover:-translate-y-2 transition-transform duration-300">
              <div className={`absolute inset-0 ${c.bgClass} opacity-90`} />
              
              {/* Play Button Overlay (simulating video case) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black/20">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Play className="ml-1" size={24} fill="currentColor" />
                </div>
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded bg-accent-light/90 dark:bg-accent-dark/90 text-dominant-light dark:text-dominant-dark">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{c.title}</h3>
                <p className="text-sm text-gray-300">{c.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
