import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base helps static hosts (InfinityFree, etc.)
  base: './',
  plugins: [react(), tailwindcss()],
})
