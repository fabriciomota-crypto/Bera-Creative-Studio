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

// Dev-only visual control panel (Step 5) — import.meta.env.DEV is statically
// known at build time, so Vite's production build tree-shakes this entire
// branch (and DesignPanel.tsx) out of the shipped bundle.
const DesignPanel = import.meta.env.DEV
  ? React.lazy(() => import('./dev/DesignPanel').then((m) => ({ default: m.DesignPanel })))
  : null;

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <Stats />
        <Authority />
        <Intro />
        <Services />
        <Cases />
        <About />
        <Method />
        <Team />
        <Tagline />
        <Gallery />
        <Contact />
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
