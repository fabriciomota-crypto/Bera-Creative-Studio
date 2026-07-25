import React, { useState } from 'react';
import { Play } from 'lucide-react';
import casesContent from '../content/cases.json';
import { useContent } from '../content/useContent';
import { Lightbox } from './Lightbox';
import { Reveal } from './Reveal';

// Fallback panel colors shown only if a case has no YouTube video and no
// uploaded photo yet. Green and dark neutrals only — see the secondary-color
// fix (blue is not a prominent color on the real site, teal/green is).
const PANEL_CLASSES: Record<string, string> = {
  primary: 'bg-accent',
  dark: 'bg-surface',
  accent: 'bg-black',
};

type CaseItem = {
  client: string;
  category: string;
  metric: string;
  subline: string;
  year: string;
  panel: string;
  youtubeId?: string;
  image?: string;
};

const CaseCard: React.FC<{
  c: CaseItem;
  watchLabel: string;
  clientLabel: string;
  onOpen: (id: string) => void;
  id?: string;
  aspect?: string;
  featured?: boolean;
}> = ({ c, watchLabel, clientLabel, onOpen, id, aspect = 'aspect-[4/5]', featured = false }) => {
  const thumbnail = c.image ?? (c.youtubeId ? `https://img.youtube.com/vi/${c.youtubeId}/maxresdefault.jpg` : null);
  return (
    <button
      type="button"
      id={id}
      onClick={() => c.youtubeId && onOpen(c.youtubeId)}
      aria-label={`${watchLabel}: ${c.client}`}
      className={`group relative clip-corner overflow-hidden w-full ${aspect} text-left`}
    >
      {thumbnail ? (
        <img
          src={thumbnail}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div className={`absolute inset-0 ${PANEL_CLASSES[c.panel] ?? 'bg-accent'}`} />
      )}

      {c.youtubeId && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center text-black">
            <Play className="ml-0.5" size={20} fill="currentColor" />
          </div>
        </div>
      )}

      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-20 bg-gradient-to-t from-black/75 via-black/15 to-transparent">
        <span className="text-label uppercase px-2 py-1 bg-accent text-black self-start mb-3">
          {c.category}
        </span>
        <p className="text-xs uppercase tracking-wider text-gray-300 mb-1">{clientLabel}</p>
        <h3 className={`font-heading font-bold text-white mb-2 ${featured ? 'text-3xl sm:text-4xl' : 'text-xl'}`}>
          {c.client}
        </h3>
        <div className="flex items-center gap-3 text-sm text-gray-300">
          <span className="font-bold text-white">{c.metric}</span>
          <span>{c.subline} · {c.year}</span>
        </div>
      </div>
    </button>
  );
};

export const Cases: React.FC = () => {
  const t = useContent(casesContent);
  const [openVideo, setOpenVideo] = useState<string | null>(null);
  const [lead, ...rest] = t.items;

  return (
    <section id="cases" className="py-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="block text-label uppercase text-accent mb-4">
              {t.eyebrow}
            </span>
            <h2 className="text-h2 font-heading text-text">
              {t.titlePrefix}
              <span className="text-accent">{t.titleHighlight}</span>
            </h2>
          </div>
          <a
            href="#"
            className="link-underline text-label uppercase text-text inline-flex items-center gap-2"
          >
            {t.viewAll} &rarr;
          </a>
        </Reveal>

        <div className="space-y-8">
          {/* Large lead case — the work speaks first */}
          <Reveal>
            <CaseCard
              c={lead}
              watchLabel={t.watchLabel}
              clientLabel={t.clientLabel}
              onOpen={setOpenVideo}
              id="case-innovare"
              aspect="aspect-[21/9]"
              featured
            />
          </Reveal>

          {/* Two supporting cases */}
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {rest.map((c, i) => (
                <CaseCard key={i} c={c} watchLabel={t.watchLabel} clientLabel={t.clientLabel} onOpen={setOpenVideo} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {openVideo && <Lightbox youtubeId={openVideo} onClose={() => setOpenVideo(null)} />}
    </section>
  );
};
