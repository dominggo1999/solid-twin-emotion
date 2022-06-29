import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { URL, fileURLToPath } from 'url';

export default defineConfig({
  plugins: [solidPlugin({
    babel: {
      plugins: [
        'babel-plugin-macros',
      ],
    },
  })],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
