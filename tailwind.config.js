/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        'screen-16': 'calc(100vh - 64px)', // Screen minus Header height
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
