import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, 'index.html'),
          dest: '', 
          rename: '404.html' 
        },
      ],
    })
  ],
  build: {
    outDir: 'docs', 
    emptyOutDir: true, 
  },
})