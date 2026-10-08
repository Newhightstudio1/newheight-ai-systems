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
        charcoal: "#0B0D0F",
        graphite: "#15191D",
        offwhite: "#F4F1EB",
        "brand-blue": "#5B7CFA",
        "brand-blue-light": "#A9B7FF",
        "surface-dark": "#15191D",
        "surface-light": "#F4F1EB",
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      borderRadius: {
        'subtle': '6px',
        'md': '10px',
        'lg': '14px',
        'xl': '20px'
      }
    },
  },
  plugins: [],
}
