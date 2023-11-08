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
  components: [{ path: "~/components", pathPrefix: false }],
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
      // apiUrl: ""
    },
    basicAuth: process.env.BASIC_AUTH,
  },
  css: ["@/assets/css/index.css"],
  modules: ["@vueuse/nuxt", "@pinia/nuxt", "@nuxtjs/sanity"],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['en', 'fr'],  // used in URL path prefix
    defaultLocale: 'en'   // default locale of your project for Nuxt pages and routings
  },
  sanity: {
    projectId: process.env.NUXT_ENV_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_ENV_SANITY_DATASET,
    apiVersion: "2022-03-25",
    perspective: "published",
    useCdn: false,
  },
  pinia: {
    autoImports: ["defineStore", "definePiniaStore", "storeToRefs"],
  },
  postcss: {
    plugins: {
      "./postcss-get-tokens": {
        path: "./assets/css/tokens.json",
      },
      "postcss-nested": {},
      "postcss-preset-env": {
        stage: 0,
        features: {
          "nesting-rules": false,
        },
      },
    },
  },
  watch: ["assets/css/tokens.json"],
});
