import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  base: "/tcc-page/",
  build: {
    outDir: "../dist",
  },
  assetsInclude: ["src/*/*.html"],
  define: {
    __LAST_MODIFIED__: Date.now(),
  },
});
