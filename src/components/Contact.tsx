import React from 'react';
import { useTranslation } from 'react-i18next';
import contactContent from '../content/contact.json';
import { useContent } from '../content/useContent';

export const Contact: React.FC = () => {
  const t = useContent(contactContent);
  const { t: tChrome } = useTranslation();
  const form = tChrome('contactForm', { returnObjects: true }) as {
    name: string; namePlaceholder: string; company: string; companyPlaceholder: string;
    email: string; emailPlaceholder: string; phone: string; phonePlaceholder: string;
    interest: string;
    interestOptions: { identity: string; performance: string; web: string; audiovisual: string; full: string };
    submit: string;
  };

  const fieldClasses =
    'w-full bg-transparent border-b border-grey/40 py-3 px-1 text-text placeholder:text-textMuted/40 focus:outline-none focus:border-primary dark:focus:border-accent transition-colors';

  return (
    <footer id="contato" className="bg-surface/40 pt-section pb-12 border-t border-grey/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <span className="block text-label uppercase text-accent mb-4">
              {t.eyebrow}
            </span>
            <h2 className="text-h2 font-heading text-text mb-6">
              {t.titleLine} <br /> <span className="text-primary dark:text-accent">{t.titleHighlight}</span>
            </h2>
            <p className="text-bodyText text-textMuted mb-8 max-w-[58ch]">
              {t.subtitle}
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-label uppercase text-textMuted/60 mb-1">{t.emailLabel}</p>
                <a
                  href={`mailto:${t.email}`}
                  className="text-xl font-heading font-bold text-text hover:text-primary dark:hover:text-accent transition-colors"
                >
                  {t.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-textMuted pt-4">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {t.availability}
              </div>
            </div>
          </div>

          <div className="bg-bg p-8 sm:p-10 border border-grey/25">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-label uppercase text-textMuted">{form.name}</label>
                  <input type="text" id="name" className={fieldClasses} placeholder={form.namePlaceholder} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-label uppercase text-textMuted">{form.company}</label>
                  <input type="text" id="company" className={fieldClasses} placeholder={form.companyPlaceholder} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-label uppercase text-textMuted">{form.email}</label>
                  <input type="email" id="email" className={fieldClasses} placeholder={form.emailPlaceholder} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-label uppercase text-textMuted">{form.phone}</label>
                  <input type="tel" id="phone" className={fieldClasses} placeholder={form.phonePlaceholder} />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="text-label uppercase text-textMuted">{form.interest}</label>
                <select id="interest" className={`${fieldClasses} appearance-none`}>
                  <option value="identidade" className="bg-bg text-text">{form.interestOptions.identity}</option>
                  <option value="performance" className="bg-bg text-text">{form.interestOptions.performance}</option>
                  <option value="web" className="bg-bg text-text">{form.interestOptions.web}</option>
                  <option value="audiovisual" className="bg-bg text-text">{form.interestOptions.audiovisual}</option>
                  <option value="completo" className="bg-bg text-text">{form.interestOptions.full}</option>
                </select>
              </div>

              <button
                type="button"
                className="clip-corner w-full py-4 mt-4 bg-primary hover:bg-accent hover:text-black text-white text-label uppercase transition-all hover:-translate-y-0.5"
              >
                {form.submit}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-grey/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-textMuted">
            © {new Date().getFullYear()} Bera Creative Studio. {tChrome('footer.rights')}
          </div>
          <div className="flex items-center gap-6 text-sm text-textMuted">
            {t.socials.map((s) => (
              <a key={s} href="#" className="hover:text-text transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
