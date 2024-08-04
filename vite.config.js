import { defineConfig } from 'vite';
import { dreamlandPlugin } from 'vite-plugin-dreamland';

export default defineConfig({
    plugins: [dreamlandPlugin()],
    build: {
        sourcemap: true,
    },
    css: {
        devSourcemap: true,
    },
});