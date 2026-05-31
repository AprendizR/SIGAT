import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/SIGAT/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        novo: resolve(__dirname, 'novo.html'),
        menu: resolve(__dirname, 'menu.html')
      }
    }
  }
})