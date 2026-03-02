import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'
// https://vite.dev/config/
export default defineConfig({
  base: 'my-website/',
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
    manifest:
    {
      name: "F1 INFO",
      short_name: 'F1 INFO',
      description: 'แอบพลิเคชันแบบกำหนดเอง',
      theme_color: '#ffffff',
      icons:
        [
          {
            src: 'logo f1.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'logo f1.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'logo f1.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          },
        ]
    }
  })
  ]
})