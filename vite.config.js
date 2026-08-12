import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    base: '/dry-eye-wheel/',
    plugins: [
        vue(),
        svgLoader({
            svgoConfig: {
                plugins: [
                    { name: 'inlineStyles', params: { onlyMatchedOnce: false } }, // Converts <style> to inline
                ],
            },
        }),
    ],
    build: {
        outDir: 'docs',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
