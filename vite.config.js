import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages project sites are served from /<repository-name>/.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [vue()],
})
