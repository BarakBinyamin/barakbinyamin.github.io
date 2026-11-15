import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    outDir: '../docs'
  },
  server : {
    allowedHosts : [
      "a76ec4b65f02d0.lhr.life"
    ]
  }
})
