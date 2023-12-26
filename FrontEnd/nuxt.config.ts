// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  build: {
    transpile: ['vuetify'],
  },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "nuxt-swiper",
  ],
  googleFonts: {
    families: {
      Tajawal: {
        wght: [400, 500, 600, 700],
      },
    },
  },
  app: {
    pageTransition: {name: "page", mode: "out-in"},
  },
  eslint: {
    /* module options */
  },
  colorMode: {
    classSuffix: "",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/vue-google-maps',
  ],

})




