export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
      ],
    },
  },
  modules: [
    "@vueuse/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "definePiniaStore", "storeToRefs"],
      },
    ],
  ],
  css: ["@/assets/css/index.css"],
  postcss: {
    plugins: {
      "postcss-each": {},
      "postcss-for": {},
      "postcss-simple-vars": {
        silent: true,
        variables: () => require("./postcss.variables"),
      },
      "postcss-extend-rule": {},
      "@csstools/postcss-global-data": {
        files: ["./assets/css/media.css"],
      },
      "postcss-preset-env": {
        stage: 0,
        features: {
          "nesting-rules": false,
        },
      },
      "postcss-nested": {},
    },
  },
})
