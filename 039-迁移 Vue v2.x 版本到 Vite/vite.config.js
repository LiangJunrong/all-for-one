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
    // 库模式
    // lib: {
    //   // 设置入口文件
    //   entry: {
    //     'A': 'src/components/a/entry.js',
    //     'B': 'src/components/b/entry.js'
    //   },
    //   formats: ['es'],
    //   // 打包后的文件名
    //   fileName: (format, entryName) => `${entryName}/${entryName}.entry.${format}.js`,
    // },
    rollupOptions: {
      input: {
        'A': 'src/components/a/entry.js',
        'B': 'src/components/b/entry.js'
      },
      output: [
        {
          dir: 'dist1',
          // file: 'dist/a/a.js',
        },
        {
          dir: 'dist2',
          // file: 'dist/b/b.js',
        }
      ]
      // output: {
      //   dir: 'dist/',
      // }
    },
  }
});

