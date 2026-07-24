import React from 'react';

/**
 * Temporary wordmark placeholder — no official vector export of Bera's bear
 * mark exists in the project yet (see PRODUCT.md "Brand Commitments").
 * Uses the guideline's generic angular parallelogram graphic language
 * (Blocos Gráficos da Marca), not a reproduction of the trademarked bear
 * illustration. Swap the SVG below for the real mark in one place once
 * Bera supplies logo files.
 */
export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <a href="#" className={`flex items-center gap-2.5 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M2 20 L12 4 L20 4 L10 20 Z" fill="rgb(var(--color-primary))" />
        <path d="M14 20 L20 10 L26 10 L20 20 Z" fill="rgb(var(--color-accent))" />
      </svg>
      <span className="text-2xl font-heading font-black tracking-tight text-text">
        BERA
      </span>
    </a>
  );
};
