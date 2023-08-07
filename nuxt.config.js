import tokens from "./assets/css/tokens.json"

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
	runtimeConfig: {
		public: {
			baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
			// apiUrl: ""
		},
		basicAuth: process.env.BASIC_AUTH,
	},
	css: ["@/assets/css/index.css"],
	modules: ["@vueuse/nuxt", "@pinia/nuxt"],
	pinia: {
		autoImports: ["defineStore", "definePiniaStore", "storeToRefs"],
	},
	postcss: {
		plugins: {
			"./postcss-get-tokens": { tokens },
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
})
