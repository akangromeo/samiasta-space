/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
      primary: {
        yellow: "var(--color-primary-yellow)",
        brown: "var(--color-primary-brown)",
        white: "var(--color-primary-white)",
      },
      secondary: {
        brown: "var(--color-secondary-brown)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
