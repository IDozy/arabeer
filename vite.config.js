import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Importa la librería 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, 'src/'), // Define tu baseUrl aquí
    },
  },
});
