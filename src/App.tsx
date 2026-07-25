import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Authority } from './components/Authority';
import { Intro } from './components/Intro';
import { Services } from './components/Services';
import { Cases } from './components/Cases';
import { About } from './components/About';
import { Method } from './components/Method';
import { Team } from './components/Team';
import { Tagline } from './components/Tagline';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import layoutConfig from './design/layout.json';

// Dev-only visual control panel (Step 5) — import.meta.env.DEV is statically
// known at build time, so Vite's production build tree-shakes this entire
// branch (and DesignPanel.tsx) out of the shipped bundle.
const DesignPanel = import.meta.env.DEV
  ? React.lazy(() => import('./dev/DesignPanel').then((m) => ({ default: m.DesignPanel })))
  : null;

// Section presentation order (step 4): content/sections never change, only
// the order they're presented in — reversible via the "editorial" vs
// "original" preset in src/design/layout.json, editable through the dev
// design panel. Hero always opens and FAQ/Footer always close, regardless
// of preset — only the narrative-order sections in between resequence.
const SECTIONS: Record<string, React.FC> = {
  stats: Stats,
  authority: Authority,
  intro: Intro,
  services: Services,
  cases: Cases,
  about: About,
  method: Method,
  team: Team,
  tagline: Tagline,
  gallery: Gallery,
  contact: Contact,
};

function App() {
  const order = (layoutConfig as { active: string; presets: Record<string, string[]> })
    .presets[layoutConfig.active] ?? layoutConfig.presets.original;

  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        {order.map((key) => {
          const Section = SECTIONS[key];
          return Section ? <Section key={key} /> : null;
        })}
        {/* FAQ: not on the live site — added per the original project brief,
            placed after all real sections and before the footer. */}
        <Faq />
        <Footer />
      </Layout>
      {DesignPanel && (
        <React.Suspense fallback={null}>
          <DesignPanel />
        </React.Suspense>
      )}
    </ThemeProvider>
  );
}

export default App;
