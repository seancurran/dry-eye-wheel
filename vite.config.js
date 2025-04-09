import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

const path = require('path');

export default defineConfig({
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
