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
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',    // Pink pekat/rose lembut elegan (bukan merah crimson)
          700: '#be185d',    // Rose pekat dalam
          800: '#9d174d',
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
        'soft': '0 4px 20px -2px rgba(219, 39, 119, 0.06)',
        'soft-hover': '0 12px 30px -4px rgba(219, 39, 119, 0.12)',
        'btn': '0 8px 18px -4px rgba(219, 39, 119, 0.3)',
      }
    },
  },
  plugins: [],
};
