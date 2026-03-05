import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages - matches repository name
  base: '/radacafe/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure proper path handling
    rollupOptions: {
      output: {
        // Ensure assets use correct paths
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
      },
    },
  },
})
