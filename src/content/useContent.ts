import { useTranslation } from 'react-i18next';

type Locale = 'pt' | 'en';

/**
 * Reads bilingual section content (src/content/*.json) for the active
 * language. Files follow Decap CMS's i18n structure ({ pt: {...}, en: {...} }),
 * so Step 7's CMS can write directly into these files with no component changes.
 */
export function useContent<T>(content: Record<Locale, T>): T {
  const { i18n } = useTranslation();
  const locale: Locale = i18n.language?.startsWith('en') ? 'en' : 'pt';
  return content[locale] ?? content.pt;
}
