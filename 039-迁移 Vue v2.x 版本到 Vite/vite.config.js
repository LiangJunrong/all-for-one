import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 加载插件
  plugins: [vue()],
  // 端口设置
  server: {
    port: 8888,
  },
  // 打包模式
  build: {
    rollupOptions: {
      input: {
        'A/A.entry': 'src/components/a/entry.js',
        'B/B.entry': 'src/components/b/entry.js'
      },
      output: {
        entryFileNames: '[name].js',
        dir: 'dist',
      }
    }
  }
});

