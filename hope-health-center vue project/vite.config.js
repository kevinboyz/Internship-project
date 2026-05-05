import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'vue-files/src')
    }
  },
  root: 'vue-files',
  server: {
    port: 3000
  }
})
