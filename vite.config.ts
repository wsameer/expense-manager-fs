import { defineConfig } from 'vite';
import { getDirname } from '@adonisjs/core/helpers';
import inertia from '@adonisjs/inertia/client';
import react from '@vitejs/plugin-react';
import adonisjs from '@adonisjs/vite/client';

export default defineConfig({
  plugins: [
    inertia({ ssr: { enabled: false } }),
    react(),
    adonisjs({
      entrypoints: ['resources/css/app.css', 'resources/js/main.tsx'],
      reload: ['resources/views/**/*.edge'],
    }),
  ],

  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '~/': `${getDirname(import.meta.url)}/resources/`,
      '@': `${getDirname(import.meta.url)}/resources/js/`,
    },
  },
});
