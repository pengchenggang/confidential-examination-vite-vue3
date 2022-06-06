import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "es2015",
  },
  plugins: [legacy({
    targets: ['defaults', 'not IE 11']
  }), vue()],
  base: './',
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '_c': path.resolve(__dirname, 'src/components'),
    },
  },
})
