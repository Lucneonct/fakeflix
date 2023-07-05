import { defineConfig } from "vitest/config";
import path from 'path';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: "happy-dom"
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
})