import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on 0.0.0.0 so ngrok and external tunnels can reach Vite
    port: 5173,
    cors: true,
    allowedHosts: [
      'rockiness-foothold-speckled.ngrok-free.dev',
      '.ngrok-free.dev',
      '.ngrok-free.app',
      '.ngrok.io',
      '.ngrok.app',
    ],
  },
  preview: {
    host: true,
    port: 5173,
    cors: true,
    allowedHosts: [
      'rockiness-foothold-speckled.ngrok-free.dev',
      '.ngrok-free.dev',
      '.ngrok-free.app',
      '.ngrok.io',
      '.ngrok.app',
    ],
  },
  build: {
    outDir: 'dist/client',
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three'],
          'react-three-vendor': ['@react-three/fiber', '@react-three/drei'],
          'motion-vendor': ['framer-motion'],
        },
      },
    },
  },
});
