import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Authority } from './components/Authority';
import { Cases } from './components/Cases';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';

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
        <Services />
        <Authority />
        <Cases />
        <Faq />
        <Contact />
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
