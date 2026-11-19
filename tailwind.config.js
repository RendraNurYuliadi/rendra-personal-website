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
        // Minimalist Grayscale & Monochrome Palette (Hitam, Abu Tua, Abu Muda, Putih)
        mono: {
          950: '#09090b', // Deep jet black
          900: '#121215', // Dark charcoal / Abu tua
          850: '#18181b', // Card surface / Abu tua
          800: '#27272a', // Subtle borders
          700: '#3f3f46', // Muted text & dividers
          600: '#52525b', // Mid gray
          500: '#71717a', // Subtle icons
          400: '#a1a1aa', // Secondary text / Abu muda
          300: '#d4d4d8', // Light gray / Abu muda
          200: '#e4e4e7', // Near white
          100: '#f4f4f5', // Soft white
          50: '#fafafa',  // Pure white tint
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
