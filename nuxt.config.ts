// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["../assets/css/main.css", "flowbite/dist/flowbite.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxt/image",
    "flowbite/plugin",
    "@vueuse/motion/nuxt",
    "@nuxtjs/i18n",
  ],
  app: {
    head: {
      titleTemplate: "%s - Samiasta Space",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/images/Samiasta-Logo-Mini.png",
        },
      ],
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

  i18n: {
    defaultLocale: "id",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "id", name: "Bahasa Indonesia", file: "id.json" },
    ],

    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: false, // biar tidak dipaksa tiap kali refresh
      fallbackLocale: "id",
    },
  },
});
