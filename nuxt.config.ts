import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: ["@vueuse/motion/nuxt"],

  runtimeConfig: {
    public: {
      motion: {
        directives: {
          "fadein-up-once": {
            initial: {
              opacity: 0,
              y: 50,
            },
            visibleOnce: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1000,
                delay: 200
              },
            },
          },
          "fadein-down-enter": {
            initial: {
              opacity: 0,
              y: -100,
            },
            enter: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 500,
              },
            },
          },
        },
      },
    },
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },
});
