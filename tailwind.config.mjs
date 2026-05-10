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
        sans: ['Sora', 'Inter', 'sans-serif'], // Títulos em bloco sólido
        mono: ['"Roboto Mono"', 'monospace'], // Elementos técnicos
        body: ['"Space Grotesk"', 'sans-serif'], // Corpo e precisão (ink traps)
      },
      backgroundImage: {
        'blueprint': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0V60H60V0ZM59 59H1V1H59V59Z' fill='%23ffffff' fill-opacity='0.02'/%3E%3Cpath d='M30 0V60M0 30H60' stroke='%23ffffff' stroke-opacity='0.01' stroke-width='0.5'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
