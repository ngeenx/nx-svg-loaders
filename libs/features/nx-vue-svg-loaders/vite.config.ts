/// <reference types='vitest' />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import * as path from "path";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import { nxCopyAssetsPlugin } from "@nx/vite/plugins/nx-copy-assets.plugin";

export default defineConfig({
  root: __dirname,
  cacheDir: "../../../node_modules/.vite/libs/features/nx-vue-svg-loaders",
  plugins: [
    vue(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(["*.md"]),
    dts({
      entryRoot: "src",
      tsconfigPath: path.join(__dirname, "tsconfig.lib.json"),
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: "../../../dist/libs/features/nx-vue-svg-loaders",
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: "src/index.ts",
      name: "nx-vue-svg-loaders",
      fileName: "index",
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "../../../coverage/libs/features/nx-vue-svg-loaders",
      provider: "v8",
    },
  },
});
