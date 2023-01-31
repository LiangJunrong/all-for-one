import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 加载插件
  plugins: [vue()],
  // 端口设置
  server: {
    port: 8888,
  },
  // 打包模式
  build: {
    outDir: `dist/${mode}`,
    lib: {
      entry: {
        [mode]: mode === 'A'
          ? 'src/components/a/entry.js'
          : 'src/components/b/entry.js'
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.entry.${format}.js`,
    },
  }
}));
