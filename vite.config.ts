import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import preact from '@preact/preset-vite'
import tenoxui from 'vite-plugin-tenoxui-beta'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(), tenoxui()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
