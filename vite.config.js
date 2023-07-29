import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'AG Client',
        short_name: 'AG Client',
        description: 'Website description(Could be same with index.html file)',
        theme_color: '#f1f5f9',
        background_color: '#f1f5f9',
        start_url: '/',
        icons:[
                {
                  src: 'apple-icon.png',
                  sizes: '192x192',
                  type: 'image/png',
                },
                {
                  src: 'apple-icon.png',
                  sizes: '512x512',
                  type: 'image/png',
                },
                {
                  src: 'apple-icon.png',
                  sizes: '512x512',
                  type: 'image/png',
                  purpose: 'any maskable',
                },
              ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
