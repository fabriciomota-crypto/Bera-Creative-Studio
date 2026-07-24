import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Authority: React.FC = () => {
  return (
    <section id="metodo" className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative z-10 order-2 lg:order-1">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-light dark:text-accent-dark mb-6 display-block">
              Sete anos de mercado
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-content-light dark:text-content-dark mb-8 leading-tight tracking-tight">
              Construímos marcas fortes para <span className="text-accent-light dark:text-accent-dark">setores complexos.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-contentMuted-light dark:text-contentMuted-dark mb-10 leading-relaxed">
              <p>
                Há 7 anos, a Bera Creative Studio ajuda empresas desses setores a transformar operações complexas em marcas fortes, relevantes e reconhecidas no mercado.
              </p>
              <p>
                Mais do que produzir conteúdo, criamos posicionamento para empresas que crescem com consistência e relevância.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Design que converte e gera valor percebido',
                'Engenharia de funil e mídia paga otimizada',
                'Estratégia sólida baseada em dados reais'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-content-light dark:text-content-dark font-medium">
                  <CheckCircle2 className="text-accent-light dark:text-accent-dark flex-shrink-0" size={24} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-light/20 to-transparent dark:from-accent-dark/20 blur-2xl rounded-full" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-secondary-light dark:border-secondary-dark bg-secondary-light/20 dark:bg-secondary-dark/20 flex items-center justify-center">
              {/* This would be an actual image from the Bera site in a real scenario */}
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto border-4 border-accent-light dark:border-accent-dark rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(71,184,109,0.3)]">
                  <span className="text-4xl font-black text-content-light dark:text-content-dark">7</span>
                </div>
                <p className="text-xl font-bold text-content-light dark:text-content-dark">Anos de experiência</p>
                <p className="text-contentMuted-light dark:text-contentMuted-dark">Centenas de marcas transformadas</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
