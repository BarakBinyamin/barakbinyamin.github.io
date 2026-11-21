import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Baraks Website',
        short_name: 'BaraksWebsite',
        theme_color: '#000000',
        icons: [
          { src: 'public/icon.png', sizes: '192x192', type: 'image/png' },
        ]
      }
    })
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