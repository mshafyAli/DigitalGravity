/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E32049',
        'darkGray': '#363636',
        'lightGray': '#E3E3E3',
        "moreLightGray": "#F8F8F8",
        'accent': '#64748B',
      },
      backgroundImage: {
        'AwardBg': "url('/src/assets/AwardBg.webp')",
        'AboutBg': "url('/src/assets/AboutBg.svg')",
        'servicesHero' : "url('/src/assets/serviceshero.jpeg')"
      },
      // Add custom keyframes and animations here
      keyframes: {
        "carousel-move": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "carousel-move": "carousel-move var(--duration, 20s) linear infinite",
        "carousel-moveMd": "carousel-move var(--duration, 50s) linear infinite",
      },
    },
  },
  plugins: [],
}
