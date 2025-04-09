# Dry Eye Wheel

## Deployment Instructions

- npm run build
- This will build everything to the /docs folder (chose that for Github Pages setup simplicity)
- Open /docs/index.html
- Change all instances of /assets to ./assets and save file
- Open /docs/assets/index-xxxxxxxx.js
- Change all instances of /assets to ./assets and save file (without formatting)
- Open /docs/assets/index-xxxxxxxx.css
- Change all instances of /assets/ to ./ and save file (without formatting)
- Now everyhing in the /docs folder will be prepared for relational referencing on any deployed server
- Deploy wherever!

## Development notes

* The French translations import SVGs directly rather than embedding them.
* But for whatever reason, we need to override the viewBox.
* At some point, the earlier langiages could be refactored.


### Challenges

#### SVG Styles

SVGs sometimes include global styles.

```
<style>
  .cls-1 {
    fill: #a5a7ab;
  }
</style>
```

Adding the following to vite.config.js solves this by converting SVG styles to inline styles.

```
...
import svgLoader from 'vite-svg-loader';
...
export default defineConfig({
...
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
...
});
```
