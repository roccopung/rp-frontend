import tokens from "./tokens.json"

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
	modules: ["@vueuse/nuxt", "@pinia/nuxt"],
	pinia: {
		autoImports: ["defineStore", "definePiniaStore", "storeToRefs"],
	},
	css: ["@/assets/css/index.css"],
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
})
