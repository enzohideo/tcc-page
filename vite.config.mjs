import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: "src",
  base: "/tcc-page/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        schedule: resolve(__dirname, "src/schedule/index.html"),
        progress: resolve(__dirname, "src/schedule/progress.html"),
      },
    },
  },
});
