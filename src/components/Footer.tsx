import React from 'react';
import { useTranslation } from 'react-i18next';
import footerContent from '../content/footer.json';
import { useContent } from '../content/useContent';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const t = useContent(footerContent);
  const { t: tChrome } = useTranslation();

  const bottomLinks = [
    { href: '#sobre', label: tChrome('nav.about') },
    { href: '#servicos', label: tChrome('nav.services') },
    { href: '#cases', label: tChrome('nav.cases') },
    { href: '#equipe', label: tChrome('nav.team') },
    { href: '#contato', label: tChrome('nav.contact') },
  ];

  return (
    <footer className="pt-16 pb-8 border-t border-grey/20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
          <div>
            <Logo className="mb-4" />
            <p className="text-textMuted max-w-[36ch]">{t.availability}</p>
            <div className="inline-flex items-center gap-2 mt-4 text-sm text-textMuted">
              <span className="w-2 h-2 rounded-full bg-accent" />
              {t.availabilityBadge}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {t.columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-label uppercase text-textMuted/60 mb-4">{col.title}</h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-text hover:text-primary dark:hover:text-accent transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-grey/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-textMuted">
            © {new Date().getFullYear()} {t.legal}
          </div>
          <div className="flex items-center gap-6 text-sm text-textMuted">
            {t.legalLinks.map((link) => (
              <a key={link} href="#" className="hover:text-text transition-colors">{link}</a>
            ))}
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center mt-8 pt-8 border-t border-grey/10">
          {bottomLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-wider text-textMuted/50 hover:text-textMuted transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
