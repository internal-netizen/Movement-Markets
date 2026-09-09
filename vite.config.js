import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 5180 },
  // The three.js keycap scene is a deliberate lazy chunk — it only downloads
  // when the closing CTA comes into view, so it is allowed to be large.
  build: { chunkSizeWarningLimit: 700 },
});
