/** @type {import('tailwindcss').Config} */
function withOpacity(variable) {
  return ({ opacityValue }) =>
    opacityValue === undefined
      ? `rgb(var(${variable}))`
      : `rgb(var(${variable}) / ${opacityValue})`;
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand — Solid Blue (60% usage), Electric Mint (25%), Grey (part of 15% neutral)
        primary: withOpacity('--color-primary'),
        primaryDeep: withOpacity('--color-primary-deep'),
        accent: withOpacity('--color-accent'),
        grey: withOpacity('--color-grey'),
        // Theme-dependent surfaces
        bg: withOpacity('--color-bg'),
        surface: withOpacity('--color-surface'),
        text: withOpacity('--color-text'),
        textMuted: withOpacity('--color-text-muted'),
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },
      fontSize: {
        h1: ['var(--text-h1-size)', { lineHeight: 'var(--text-h1-leading)', fontWeight: 'var(--text-h1-weight)' }],
        h2: ['var(--text-h2-size)', { lineHeight: 'var(--text-h2-leading)', fontWeight: 'var(--text-h2-weight)' }],
        h3: ['var(--text-h3-size)', { lineHeight: 'var(--text-h3-leading)', fontWeight: 'var(--text-h3-weight)' }],
        bodyText: ['var(--text-body-size)', { lineHeight: 'var(--text-body-leading)', fontWeight: 'var(--text-body-weight)' }],
        label: ['var(--text-label-size)', { letterSpacing: 'var(--text-label-tracking)', fontWeight: 'var(--text-label-weight)' }],
      },
      spacing: {
        section: 'var(--space-section)',
        card: 'var(--space-card)',
      },
    },
  },
  plugins: [],
}
