/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: 'rgb(100, 105, 142)',
          STRONG: 'rgb(0, 12, 96)',
          TITLE: 'rgb(0, 12, 96)',
          TITLE2: 'rgb(0, 12, 96)',
          TITLE3: 'rgb(0, 12, 96)',
        },
        dark: {
          DEFAULT: '#ffff',
          STRONG: '#ffff',
          TITLE: '#ffff',
          TITLE2: '#ffff',
          TITLE3: '#ffff',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
