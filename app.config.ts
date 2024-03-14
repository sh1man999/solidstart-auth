import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from '@solidjs/start/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  //middleware: "./src/middlewares",
  vite: {
    plugins: [tsconfigPaths()],
  },
});
