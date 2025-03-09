// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
// https://astro.build/configexport 
export default defineConfig({
	vite: {
		plugins: [
			tailwindcss()
		]
	},
    build: {
		format: "directory",
	},
	integrations: [mdx()]
});