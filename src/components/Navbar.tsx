import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dominant-light/80 dark:bg-dominant-dark/80 backdrop-blur-md border-b border-secondary-light/50 dark:border-secondary-dark/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tighter text-content-light dark:text-content-dark">
                BERA<span className="text-accent-light dark:text-accent-dark">.</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#servicos" className="text-sm font-medium text-contentMuted-light hover:text-content-light dark:text-contentMuted-dark dark:hover:text-content-dark transition-colors">Serviços</a>
              <a href="#cases" className="text-sm font-medium text-contentMuted-light hover:text-content-light dark:text-contentMuted-dark dark:hover:text-content-dark transition-colors">Cases</a>
              <a href="#metodo" className="text-sm font-medium text-contentMuted-light hover:text-content-light dark:text-contentMuted-dark dark:hover:text-content-dark transition-colors">Método</a>
              <ThemeToggle />
              <a href="#contato" className="px-5 py-2.5 text-sm font-bold text-dominant-light bg-accent-light hover:bg-opacity-90 dark:text-dominant-dark dark:bg-accent-dark rounded-full transition-all hover:-translate-y-0.5">
                Contato
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-content-light dark:text-content-dark p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dominant-light dark:bg-dominant-dark border-b border-secondary-light dark:border-secondary-dark">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col gap-4">
            <a href="#servicos" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-content-light dark:text-content-dark py-2 border-b border-secondary-light/50 dark:border-secondary-dark/50">Serviços</a>
            <a href="#cases" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-content-light dark:text-content-dark py-2 border-b border-secondary-light/50 dark:border-secondary-dark/50">Cases</a>
            <a href="#metodo" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-content-light dark:text-content-dark py-2 border-b border-secondary-light/50 dark:border-secondary-dark/50">Método</a>
            <a href="#contato" onClick={() => setIsOpen(false)} className="inline-block mt-4 text-center px-5 py-3 text-sm font-bold text-dominant-light bg-accent-light dark:text-dominant-dark dark:bg-accent-dark rounded-full">
              Falar com especialista
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
