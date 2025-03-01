// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
// https://astro.build/configexport 
export default defineConfig({  
    build: {
        format: "directory",
        //assetsPrefix: "./", // comment this line for production builds
        //assetsPrefix: "https://corecathx.github.io/", // comment this line for development builds
      },
    integrations: [mdx()],
    vite: {    
        plugins: [tailwindcss()],  
    },
    markdown: {
        syntaxHighlight: 'shiki',
        shikiConfig: {
          theme: 'github-dark',
        },
      },
});