import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const links = [
    { href: '#servicos', label: t('nav.services') },
    { href: '#cases', label: t('nav.cases') },
    { href: '#metodo', label: t('nav.method') },
    { href: '#faq', label: t('nav.faq') },
  ];

  return (
    <nav className="fixed w-full z-50 bg-bg/85 backdrop-blur-md border-b border-primary/15 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-label uppercase text-textMuted hover:text-primary dark:hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="#contato"
              className="clip-corner-sm px-5 py-2.5 text-label uppercase text-white bg-primary hover:bg-accent hover:text-black transition-all hover:-translate-y-0.5"
            >
              {t('nav.cta')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text p-2"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bg border-b border-primary/15">
          <div className="px-4 pt-2 pb-6 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-heading font-medium text-text py-3 border-b border-grey/20"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="clip-corner-sm mt-4 text-center px-5 py-3 text-label uppercase text-white bg-primary"
            >
              {t('nav.cta')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
