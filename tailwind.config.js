/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 60-30-10 Rule configuration
        // Dominant (60%)
        dominant: {
          light: '#f9fafb', // Gray 50 (White-ish)
          dark: '#080810',  // Bera Black
        },
        // Secondary (30%)
        secondary: {
          light: '#f3f4f6', // Gray 100
          dark: '#111120',  // Bera Surface 2
        },
        // Accent (10%)
        accent: {
          light: '#309c58', // Slightly darker teal for light mode contrast
          dark: '#47B86D',  // Bera Teal
        },
        // Text colors
        content: {
          light: '#111827', // Gray 900
          dark: '#f0ede6',  // Bera Cream
        },
        contentMuted: {
          light: '#6b7280', // Gray 500
          dark: 'rgba(240,237,230,0.55)', // Bera Fg2
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
