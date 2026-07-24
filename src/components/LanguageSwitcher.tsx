import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const isEn = i18n.language?.startsWith('en');

  const setLang = (lng: 'pt' | 'en') => i18n.changeLanguage(lng);

  return (
    <div
      className="inline-flex items-center rounded-full border border-grey/40 dark:border-textMuted/30 p-0.5 text-label uppercase"
      role="group"
      aria-label={t('lang.toggle')}
    >
      <button
        type="button"
        onClick={() => setLang('pt')}
        aria-pressed={!isEn}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          !isEn ? 'bg-primary text-white' : 'text-textMuted'
        }`}
      >
        {t('lang.pt')}
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={isEn}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          isEn ? 'bg-primary text-white' : 'text-textMuted'
        }`}
      >
        {t('lang.en')}
      </button>
    </div>
  );
};
