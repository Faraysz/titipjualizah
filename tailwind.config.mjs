/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palet Terbatas & Elegan (Anti AI Slop)
        // 1. Krem/Putih Hangat (Background Utama & Card)
        cream: {
          50: '#fffbf9',
          100: '#fff7f4',
          200: '#ffede7',
          300: '#ffe2d8',
        },
        // 2. Pink Utama Lembut (Blush/Soft Rose untuk Card Accent & Badge)
        blush: {
          50: '#fff0f3',
          100: '#ffe3e8',
          200: '#fecdd6',
          300: '#fda4b4',
          400: '#fb7189',
        },
        // 3. Pink Pekat Aksen (Deep Berry Rose untuk Tombol Utama & Highlight Kontras)
        rosebrand: {
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
        },
        // 4. Warna Teks Gelap Hangat (Warm Espresso / Stone, BUKAN hitam pekat #000)
        warmtext: {
          main: '#292524',    // stone-800: nyaman dibaca, ramah mata
          muted: '#78716c',   // stone-500: deskripsi sekunder
          soft: '#a8a29e',    // stone-400: placeholder & metadata
          dark: '#1c1917',    // stone-900: heading kontras tinggi
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Poppins"', 'system-ui', '-apple-system', 'sans-serif'],
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

