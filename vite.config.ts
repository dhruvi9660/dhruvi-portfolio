import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/dhruvi-portfolio/',  // needed for GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // needed for @ imports
    },
  },
})
