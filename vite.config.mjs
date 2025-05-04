import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  base: '/tcc-page/',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
