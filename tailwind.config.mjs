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
        sans: ['Inter', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm39 39V1H1v38h38z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
