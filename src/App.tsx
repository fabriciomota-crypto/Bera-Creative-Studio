import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Authority } from './components/Authority';
import { Cases } from './components/Cases';
import { Contact } from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <Services />
        <Authority />
        <Cases />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
