import React, { useEffect, useState } from 'react';
import { Palette, Type, Ruler, X, Settings2 } from 'lucide-react';

/**
 * Dev-only visual control panel (Step 5). Never ships to production — see
 * the `import.meta.env.DEV` guard in App.tsx, which drops this whole module
 * from the production bundle via dead-code elimination.
 *
 * Edits CSS custom properties in src/design/tokens.css live (instant
 * preview via document.documentElement.style.setProperty) and persists them
 * to disk through the /__design-tokens dev-server middleware in
 * vite.config.js, so changes survive reload and show up in `git diff`.
 */

const rgbToHex = (rgb: string) => {
  const [r, g, b] = rgb.trim().split(/\s+/).map(Number);
  return '#' + [r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('');
};

const hexToRgb = (hex: string) => {
  const n = parseInt(hex.slice(1), 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
};

type TokenState = {
  colorPrimary: string;
  colorAccent: string;
  colorGrey: string;
  fontHeading: string;
  fontBody: string;
  h1Size: number;
  h2Size: number;
  h3Size: number;
  bodySize: number;
  sectionSpace: number;
};

function readCurrentTokens(): TokenState {
  const root = getComputedStyle(document.documentElement);
  const rem = (v: string) => parseFloat(v) || 1;
  return {
    colorPrimary: rgbToHex(root.getPropertyValue('--color-primary') || '48 62 152'),
    colorAccent: rgbToHex(root.getPropertyValue('--color-accent') || '71 184 109'),
    colorGrey: rgbToHex(root.getPropertyValue('--color-grey') || '206 206 206'),
    fontHeading: (root.getPropertyValue('--font-heading') || 'Archivo').split(',')[0].trim().replace(/^['"]|['"]$/g, ''),
    fontBody: (root.getPropertyValue('--font-body') || 'Archivo').split(',')[0].trim().replace(/^['"]|['"]$/g, ''),
    h1Size: rem(root.getPropertyValue('--text-h1-size-px') || '80'),
    h2Size: rem(root.getPropertyValue('--text-h2-size-px') || '48'),
    h3Size: rem(root.getPropertyValue('--text-h3-size-px') || '24'),
    bodySize: rem(root.getPropertyValue('--text-body-size-px') || '17'),
    sectionSpace: rem(root.getPropertyValue('--space-section-px') || '96'),
  };
}

function buildTokensCss(t: TokenState): string {
  return `/*
  Design tokens — single source of truth for both Tailwind (tailwind.config.js
  reads these as CSS vars) and the dev-only visual control panel (Step 5),
  which rewrites this file on disk so changes persist and show up in git.

  Brand values sourced from DESIGN.md / Base/Brand Guidelines BERA FIGMA.pdf.
  Parabolica font files are not yet supplied — --font-heading/--font-body
  point at Archivo (self-hosted) as a structural placeholder; swap the
  @fontsource/archivo imports in src/main.jsx for real Parabolica files
  later without touching this file's variable names.

  Last written by the dev-only design panel (src/dev/DesignPanel.tsx).
*/

:root {
  /* Brand colors — constant across light/dark themes (RGB channels, no # or rgb() wrapper, so Tailwind can apply opacity modifiers) */
  --color-primary: ${hexToRgb(t.colorPrimary)};
  --color-primary-deep: 35 45 112;
  --color-accent: ${hexToRgb(t.colorAccent)};
  --color-grey: ${hexToRgb(t.colorGrey)};

  /* Theme-dependent surfaces (light mode defaults) */
  --color-bg: 245 246 250;
  --color-surface: 255 255 255;
  --color-text: 8 8 16;
  --color-text-muted: 71 74 92;

  /* Typography */
  --font-heading: '${t.fontHeading}', ui-sans-serif, system-ui, sans-serif;
  --font-body: '${t.fontBody}', ui-sans-serif, system-ui, sans-serif;

  --text-h1-size-px: ${t.h1Size}px;
  --text-h1-size: clamp(2.75rem, 6vw, ${t.h1Size / 16}rem);
  --text-h1-weight: 900;
  --text-h1-leading: 1.05;

  --text-h2-size-px: ${t.h2Size}px;
  --text-h2-size: clamp(2rem, 4vw, ${t.h2Size / 16}rem);
  --text-h2-weight: 700;
  --text-h2-leading: 1.15;

  --text-h3-size-px: ${t.h3Size}px;
  --text-h3-size: clamp(1.25rem, 2vw, ${t.h3Size / 16}rem);
  --text-h3-weight: 700;
  --text-h3-leading: 1.3;

  --text-body-size-px: ${t.bodySize}px;
  --text-body-size: ${t.bodySize / 16}rem;
  --text-body-weight: 400;
  --text-body-leading: 1.6;

  --text-label-size: 0.75rem;
  --text-label-weight: 700;
  --text-label-tracking: 0.12em;

  /* Spacing rhythm */
  --space-section-px: ${t.sectionSpace}px;
  --space-section: ${t.sectionSpace / 16}rem;
  --space-card: 2rem;
}

.dark {
  --color-bg: 8 8 16;              /* #080810 Bera Black */
  --color-surface: 17 17 32;       /* #111120 Bera Surface */
  --color-text: 240 237 230;       /* #F0EDE6 Bera Cream */
  --color-text-muted: 176 173 165; /* dimmed cream — distinct from primary text, still 8.9:1 on Bera Black */
}
`;
}

function applyLive(t: TokenState) {
  const root = document.documentElement.style;
  root.setProperty('--color-primary', hexToRgb(t.colorPrimary));
  root.setProperty('--color-accent', hexToRgb(t.colorAccent));
  root.setProperty('--color-grey', hexToRgb(t.colorGrey));
  root.setProperty('--font-heading', `'${t.fontHeading}', ui-sans-serif, system-ui, sans-serif`);
  root.setProperty('--font-body', `'${t.fontBody}', ui-sans-serif, system-ui, sans-serif`);
  root.setProperty('--text-h1-size', `clamp(2.75rem, 6vw, ${t.h1Size / 16}rem)`);
  root.setProperty('--text-h2-size', `clamp(2rem, 4vw, ${t.h2Size / 16}rem)`);
  root.setProperty('--text-h3-size', `clamp(1.25rem, 2vw, ${t.h3Size / 16}rem)`);
  root.setProperty('--text-body-size', `${t.bodySize / 16}rem`);
  root.setProperty('--space-section', `${t.sectionSpace / 16}rem`);
}

export const DesignPanel: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [tokens, setTokens] = useState<TokenState | null>(null);
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  useEffect(() => {
    setTokens(readCurrentTokens());
  }, []);

  if (!tokens) return null;

  const update = (patch: Partial<TokenState>) => {
    const next = { ...tokens, ...patch };
    setTokens(next);
    applyLive(next);
  };

  const save = async () => {
    setStatus('saving');
    try {
      const res = await fetch('/__design-tokens', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ css: buildTokensCss(tokens) }),
      });
      setStatus(res.ok ? 'saved' : 'error');
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 2000);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-[100] flex items-center gap-2 px-4 py-3 bg-black text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-primary transition-colors"
        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
      >
        <Settings2 size={16} />
        Design Panel
      </button>

      {open && (
        <div
          className="fixed bottom-20 right-5 z-[100] w-80 max-h-[75vh] overflow-y-auto bg-white text-black shadow-2xl border border-black/10"
          style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-black/10 bg-black text-white">
            <span className="text-xs font-bold uppercase tracking-wider">Dev Design Panel</span>
            <button onClick={() => setOpen(false)} aria-label="Close"><X size={16} /></button>
          </div>

          <div className="p-4 space-y-6 text-sm">
            <section>
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3">
                <Palette size={14} /> Colors <span className="font-normal text-black/40">(60/25/15)</span>
              </h3>
              <div className="space-y-2">
                <label className="flex items-center justify-between">
                  Primary (60%)
                  <input type="color" value={tokens.colorPrimary} onChange={(e) => update({ colorPrimary: e.target.value })} />
                </label>
                <label className="flex items-center justify-between">
                  Accent (25%)
                  <input type="color" value={tokens.colorAccent} onChange={(e) => update({ colorAccent: e.target.value })} />
                </label>
                <label className="flex items-center justify-between">
                  Grey neutral (15%)
                  <input type="color" value={tokens.colorGrey} onChange={(e) => update({ colorGrey: e.target.value })} />
                </label>
              </div>
            </section>

            <section>
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3">
                <Type size={14} /> Typography
              </h3>
              <div className="space-y-3">
                <label className="block">
                  Heading font
                  <input
                    type="text"
                    value={tokens.fontHeading}
                    onChange={(e) => update({ fontHeading: e.target.value })}
                    className="w-full border border-black/20 px-2 py-1 mt-1"
                  />
                </label>
                <label className="block">
                  Body font
                  <input
                    type="text"
                    value={tokens.fontBody}
                    onChange={(e) => update({ fontBody: e.target.value })}
                    className="w-full border border-black/20 px-2 py-1 mt-1"
                  />
                </label>
                {([
                  ['H1 size', 'h1Size', 40, 96],
                  ['H2 size', 'h2Size', 24, 64],
                  ['H3 size', 'h3Size', 16, 32],
                  ['Body size', 'bodySize', 14, 20],
                ] as const).map(([label, key, min, max]) => (
                  <label key={key} className="block">
                    {label}: {tokens[key]}px
                    <input
                      type="range"
                      min={min}
                      max={max}
                      value={tokens[key]}
                      onChange={(e) => update({ [key]: Number(e.target.value) } as Partial<TokenState>)}
                      className="w-full"
                    />
                  </label>
                ))}
              </div>
            </section>

            <section>
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3">
                <Ruler size={14} /> Spacing
              </h3>
              <label className="block">
                Section rhythm: {tokens.sectionSpace}px
                <input
                  type="range"
                  min={48}
                  max={160}
                  value={tokens.sectionSpace}
                  onChange={(e) => update({ sectionSpace: Number(e.target.value) })}
                  className="w-full"
                />
              </label>
            </section>

            <button
              onClick={save}
              className="w-full py-3 bg-primary text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              {status === 'saving' ? 'Saving…' : status === 'saved' ? 'Saved to tokens.css ✓' : status === 'error' ? 'Save failed' : 'Save to disk'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
