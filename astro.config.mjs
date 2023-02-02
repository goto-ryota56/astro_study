import { defineConfig } from 'astro/config'
import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [image()],
  server: {
    port: 1234,
    host: true
  }
})
