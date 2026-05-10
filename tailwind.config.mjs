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
        sans: ['Sora', 'Inter', 'sans-serif'], // Editorial: Pesos variados (Thin a Extra Bold)
        mono: ['"Roboto Mono"', 'monospace'], 
        body: ['"Space Grotesk"', 'sans-serif'], // Apenas detalhes sutis
      },
      backgroundImage: {
        'soft-glow': "radial-gradient(circle at center, rgba(0, 123, 255, 0.05) 0%, transparent 70%)",
      }
    },
  },
  plugins: [],
}
