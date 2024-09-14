// Add this to your imports
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    //... other plugins
    svelte(), // Add this line
  ],
  //...
  server: {
    port: 3200,
    host: "localhost",
  },
});
