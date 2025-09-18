// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["../assets/css/main.css", "flowbite/dist/flowbite.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/image", "flowbite/plugin", "@vueuse/motion/nuxt"],
  app: {
    head: {
      titleTemplate: "%s - Candra Yustisia Law Office",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  devServer: {
    port: 8080,
    host: process.env.VITE_HOST,
  },
  runtimeConfig: {
    emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
    emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
    emailjsPublicKey: process.env.EMAILJS_PUBLIC_KEY,
  },
});
