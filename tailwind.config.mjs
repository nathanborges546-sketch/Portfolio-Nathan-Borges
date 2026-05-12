/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'midnight-navy': '#0A1128',
        'azure-tech': '#007BFF',
        'cyan-electric': '#00FFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Apple-like
        mono: ['"Roboto Mono"', 'monospace'], 
      },
      colors: {
        'deep-blue': '#0b0e14', // Fundo principal
        'card-dark': '#161b22', // Fundo dos cards Bento
        'off-white': '#f0f6fc', // Texto principal
        'cyan-accent': '#00FFFF', // Detalhes sutis
      }
    },
  },
  plugins: [],
}
