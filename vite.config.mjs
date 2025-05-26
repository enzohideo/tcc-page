import { defineConfig } from "vite";
import prism from "vite-plugin-prismjs";

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
  plugins: [
    prism({
      languages: ["javascript", "json", "shell", "rust"],
      plugins: ["line-numbers"],
      theme: "tomorrow",
      css: true,
    }),
  ],
});
