import React from 'react';
import { Navbar } from './Navbar';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-dominant-light dark:bg-dominant-dark flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      {/* Footer will go here */}
    </div>
  );
};
