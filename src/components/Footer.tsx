import React from 'react';
import { useTranslation } from 'react-i18next';
import footerContent from '../content/footer.json';
import { useContent } from '../content/useContent';
import { Logo } from './Logo';

// Real, live social URLs — matched by label since footer.json's link labels
// (Instagram, LinkedIn, YouTube, WhatsApp) are identical in PT and EN.
const SOCIAL_URLS: Record<string, string> = {
  Instagram: 'https://www.instagram.com/beracreativestudio/',
  YouTube: 'https://www.youtube.com/@bera.digital',
  LinkedIn: 'https://www.linkedin.com/company/beracreativestudio/posts/?feedView=all',
  WhatsApp: 'https://wa.me/5511968643192',
};

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
    <footer className="pt-24 pb-8 border-t border-grey/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div>
            <Logo className="mb-5" />
            <p className="text-textMuted max-w-[36ch]">{t.availability}</p>
            <div className="inline-flex items-center gap-2 mt-4 text-sm text-textMuted">
              <span className="w-2 h-2 rounded-full bg-accent" />
              {t.availabilityBadge}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            {t.columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-label uppercase text-textMuted/60 mb-5">{col.title}</h3>
                <ul className="space-y-3">
                  {col.links.map((link) => {
                    const url = SOCIAL_URLS[link];
                    return (
                      <li key={link}>
                        <a
                          href={url ?? '#'}
                          target={url ? '_blank' : undefined}
                          rel={url ? 'noreferrer' : undefined}
                          className="link-underline text-text"
                        >
                          {link}
                        </a>
                      </li>
                    );
                  })}
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
