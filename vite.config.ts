import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Root deploy on Hostinger (public_html)
  base: '/',
  plugins: [react(), tailwindcss()],
})
