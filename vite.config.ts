import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import path from 'path';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/personal-website/' : '/',
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
}));