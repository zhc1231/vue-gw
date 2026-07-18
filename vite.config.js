import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages 部署在 /vue-gw/ 子路径下
export default defineConfig({
  plugins: [vue()],
  base: '/vue-gw/',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 2000
  }
})
