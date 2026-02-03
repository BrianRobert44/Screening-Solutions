/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
      brand: {
        teal: '#2EC4B6',
        dark: '#0B1F2A',
        glass: '#0F2E3C',
      },
    },
  },
  plugins: [],
}
