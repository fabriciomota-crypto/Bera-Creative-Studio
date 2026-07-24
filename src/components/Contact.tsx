import React from 'react';

export const Contact: React.FC = () => {
  return (
    <footer id="contato" className="bg-secondary-light/20 dark:bg-secondary-dark/20 pt-24 pb-12 border-t border-secondary-light/50 dark:border-secondary-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-accent-light dark:text-accent-dark mb-4 display-block">
              Vamos conversar?
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-content-light dark:text-content-dark mb-6 tracking-tight">
              A sua marca precisa <br /> dominar a <span className="text-accent-light dark:text-accent-dark">percepção.</span>
            </h2>
            <p className="text-lg text-contentMuted-light dark:text-contentMuted-dark mb-8 max-w-md leading-relaxed">
              Deixe seus dados e nosso time de especialistas entrará em contato para agendar um diagnóstico de performance e posicionamento.
            </p>
            
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-contentMuted-light/50 dark:text-contentMuted-dark/50 mb-1">E-mail</p>
                <a href="mailto:hello@bera.digital" className="text-xl font-bold text-content-light dark:text-content-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                  hello@bera.digital
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-contentMuted-light dark:text-contentMuted-dark pt-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-light dark:bg-accent-dark opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-light dark:bg-accent-dark"></span>
                </span>
                Atendimento ativo (Seg-Sex, 9h-18h)
              </div>
            </div>
          </div>

          <div className="bg-dominant-light dark:bg-dominant-dark p-8 sm:p-10 rounded-3xl border border-secondary-light dark:border-secondary-dark shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-medium text-contentMuted-light dark:text-contentMuted-dark uppercase tracking-wider">Nome</label>
                  <input type="text" id="name" className="w-full bg-transparent border-b border-secondary-light dark:border-secondary-dark py-3 px-0 text-content-light dark:text-content-dark placeholder:text-contentMuted-light/30 dark:placeholder:text-contentMuted-dark/30 focus:outline-none focus:border-accent-light dark:focus:border-accent-dark transition-colors" placeholder="João Silva" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-medium text-contentMuted-light dark:text-contentMuted-dark uppercase tracking-wider">Empresa</label>
                  <input type="text" id="company" className="w-full bg-transparent border-b border-secondary-light dark:border-secondary-dark py-3 px-0 text-content-light dark:text-content-dark placeholder:text-contentMuted-light/30 dark:placeholder:text-contentMuted-dark/30 focus:outline-none focus:border-accent-light dark:focus:border-accent-dark transition-colors" placeholder="Minha Empresa" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-medium text-contentMuted-light dark:text-contentMuted-dark uppercase tracking-wider">E-mail Corporativo</label>
                  <input type="email" id="email" className="w-full bg-transparent border-b border-secondary-light dark:border-secondary-dark py-3 px-0 text-content-light dark:text-content-dark placeholder:text-contentMuted-light/30 dark:placeholder:text-contentMuted-dark/30 focus:outline-none focus:border-accent-light dark:focus:border-accent-dark transition-colors" placeholder="joao@empresa.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-medium text-contentMuted-light dark:text-contentMuted-dark uppercase tracking-wider">WhatsApp</label>
                  <input type="tel" id="phone" className="w-full bg-transparent border-b border-secondary-light dark:border-secondary-dark py-3 px-0 text-content-light dark:text-content-dark placeholder:text-contentMuted-light/30 dark:placeholder:text-contentMuted-dark/30 focus:outline-none focus:border-accent-light dark:focus:border-accent-dark transition-colors" placeholder="(11) 99999-9999" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="text-xs font-medium text-contentMuted-light dark:text-contentMuted-dark uppercase tracking-wider">Desafio Principal</label>
                <select id="interest" className="w-full bg-transparent border-b border-secondary-light dark:border-secondary-dark py-3 px-0 text-content-light dark:text-content-dark focus:outline-none focus:border-accent-light dark:focus:border-accent-dark transition-colors appearance-none">
                  <option value="identidade" className="bg-dominant-light dark:bg-dominant-dark text-content-light dark:text-content-dark">Identidade Visual</option>
                  <option value="performance" className="bg-dominant-light dark:bg-dominant-dark text-content-light dark:text-content-dark">Performance e Tráfego</option>
                  <option value="web" className="bg-dominant-light dark:bg-dominant-dark text-content-light dark:text-content-dark">Web Design / E-commerce</option>
                  <option value="audiovisual" className="bg-dominant-light dark:bg-dominant-dark text-content-light dark:text-content-dark">Audiovisual e Motion</option>
                  <option value="completo" className="bg-dominant-light dark:bg-dominant-dark text-content-light dark:text-content-dark">Sistema Criativo Completo</option>
                </select>
              </div>

              <button type="button" className="w-full py-4 mt-4 bg-accent-light dark:bg-accent-dark text-dominant-light dark:text-dominant-dark font-bold rounded-full hover:opacity-90 transition-opacity hover:-translate-y-0.5 transform">
                Solicitar Diagnóstico Gratuito
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-secondary-light/50 dark:border-secondary-dark/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-contentMuted-light dark:text-contentMuted-dark">
            © {new Date().getFullYear()} Bera Creative Studio. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6 text-sm text-contentMuted-light dark:text-contentMuted-dark">
            <a href="#" className="hover:text-content-light dark:hover:text-content-dark transition-colors">Instagram</a>
            <a href="#" className="hover:text-content-light dark:hover:text-content-dark transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-content-light dark:hover:text-content-dark transition-colors">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
