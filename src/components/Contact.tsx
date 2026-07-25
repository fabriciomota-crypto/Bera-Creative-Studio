import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import contactContent from '../content/contact.json';
import { useContent } from '../content/useContent';

export const Contact: React.FC = () => {
  const t = useContent(contactContent);
  const { t: tChrome } = useTranslation();
  const form = tChrome('contactForm', { returnObjects: true }) as {
    name: string; namePlaceholder: string;
    email: string; emailPlaceholder: string;
    projectType: string; projectTypePlaceholder: string;
    projectTypeOptions: { identity: string; audiovisual: string; web: string; full: string; other: string };
    budget: string; budgetPlaceholder: string;
    budgetOptions: { tier1: string; tier2: string; tier3: string; tier4: string; tier5: string };
    message: string; messagePlaceholder: string;
    submit: string;
  };
  const [sent, setSent] = useState(false);

  const fieldClasses =
    'w-full bg-transparent border-b border-grey/40 py-3 px-1 text-text placeholder:text-textMuted/40 focus:outline-none focus:border-primary dark:focus:border-accent transition-colors';

  return (
    <section id="contato" className="py-section border-t border-grey/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-h2 font-heading text-text mb-6">{t.title}</h2>
            <p className="text-bodyText text-textMuted mb-10 max-w-[58ch]">{t.subtitle}</p>

            <div className="space-y-6">
              <div>
                <p className="text-label uppercase text-textMuted/60 mb-1">{t.addressLabel}</p>
                <p className="text-text max-w-[40ch]">{t.address}</p>
              </div>
              <div>
                <p className="text-label uppercase text-textMuted/60 mb-1">{t.emailLabel}</p>
                <a
                  href={`mailto:${t.email}`}
                  className="text-xl font-heading font-bold text-text hover:text-primary dark:hover:text-accent transition-colors"
                >
                  {t.email}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-surface/50 p-8 sm:p-10 border border-grey/25">
            {sent ? (
              <div className="flex items-center justify-center h-full min-h-[20rem] text-center">
                <p className="text-h3 font-heading text-primary dark:text-accent">{t.successMessage}</p>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-label uppercase text-textMuted">{form.name} *</label>
                    <input required type="text" id="name" className={fieldClasses} placeholder={form.namePlaceholder} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-label uppercase text-textMuted">{form.email} *</label>
                    <input required type="email" id="email" className={fieldClasses} placeholder={form.emailPlaceholder} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-label uppercase text-textMuted">{form.projectType}</label>
                  <select id="projectType" defaultValue="" className={`${fieldClasses} appearance-none`}>
                    <option value="" disabled className="bg-bg text-textMuted">{form.projectTypePlaceholder}</option>
                    <option value="identity" className="bg-bg text-text">{form.projectTypeOptions.identity}</option>
                    <option value="audiovisual" className="bg-bg text-text">{form.projectTypeOptions.audiovisual}</option>
                    <option value="web" className="bg-bg text-text">{form.projectTypeOptions.web}</option>
                    <option value="full" className="bg-bg text-text">{form.projectTypeOptions.full}</option>
                    <option value="other" className="bg-bg text-text">{form.projectTypeOptions.other}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="text-label uppercase text-textMuted">{form.budget}</label>
                  <select id="budget" defaultValue="" className={`${fieldClasses} appearance-none`}>
                    <option value="" disabled className="bg-bg text-textMuted">{form.budgetPlaceholder}</option>
                    <option value="tier1" className="bg-bg text-text">{form.budgetOptions.tier1}</option>
                    <option value="tier2" className="bg-bg text-text">{form.budgetOptions.tier2}</option>
                    <option value="tier3" className="bg-bg text-text">{form.budgetOptions.tier3}</option>
                    <option value="tier4" className="bg-bg text-text">{form.budgetOptions.tier4}</option>
                    <option value="tier5" className="bg-bg text-text">{form.budgetOptions.tier5}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-label uppercase text-textMuted">{form.message}</label>
                  <textarea
                    id="message"
                    rows={4}
                    className={fieldClasses}
                    placeholder={form.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="clip-corner w-full py-4 mt-2 bg-primary hover:bg-accent hover:text-black text-white text-label uppercase transition-all hover:-translate-y-0.5"
                >
                  {form.submit} &rarr;
                </button>

                <p className="text-xs text-textMuted/60 text-center">{t.formNote}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
