/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palet Terbatas & Elegan (Anti AI Slop - Referensi Allu)
        cream: {
          50: '#fffbf9',
          100: '#fff7f4',
          200: '#ffede7',
          300: '#ffe2d8',
        },
        blush: {
          50: '#fff0f3',
          100: '#ffe3e8',
          200: '#fecdd6',
          300: '#fda4b4',
          400: '#fb7189',
        },
        rosebrand: {
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
        },
        warmtext: {
          main: '#292524',    // stone-800
          muted: '#78716c',   // stone-500
          soft: '#a8a29e',    // stone-400
          dark: '#1c1917',    // stone-900 (kontras tinggi untuk Cormorant Garamond)
        }
      },
      fontFamily: {
        // Heading: Cormorant Garamond (Fallback: Georgia, serif)
        heading: ['var(--font-heading)', 'Cormorant Garamond', 'Georgia', 'serif'],
        // Body: DM Sans (Fallback: system-ui, sans-serif)
        body: ['var(--font-body)', 'DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(225, 29, 72, 0.05)',
        'soft-hover': '0 12px 30px -4px rgba(225, 29, 72, 0.1)',
        'btn': '0 8px 18px -4px rgba(225, 29, 72, 0.35)',
      }
    },
  },
  plugins: [],
};
