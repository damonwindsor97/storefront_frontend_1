import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
  optimizeDeps: {
    entries: {
      particles: '@/particles.js',
      app: '@/app.js',
    },
  },
  // Configure the HTML plugin to inject scripts and tags
  build: {
    // Ensure your `public/index.html` is the template
    base: './', // Adjust according to your deployment needs
    outDir: 'dist', // Specify your build output directory
    assetsDir: '', // Keep assets in root of outDir
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './index.html'),
      },
    },
  },
});