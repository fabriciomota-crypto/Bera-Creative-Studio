import React from 'react';
import { Navbar } from './Navbar';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col font-body transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
    </div>
  );
};
