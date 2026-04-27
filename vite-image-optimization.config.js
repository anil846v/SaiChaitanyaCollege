// Add this to vite.config.js for image optimization
// Install first: npm install -D vite-plugin-imagemin imagemin-mozjpeg imagemin-pngquant

import imagemin from 'vite-plugin-imagemin'

export const imageOptimizationPlugin = imagemin({
  gifsicle: {
    optimizationLevel: 7,
    interlaced: false,
  },
  optipng: {
    optimizationLevel: 7,
  },
  mozjpeg: {
    quality: 70,
    progressive: true,
  },
  pngquant: {
    quality: [0.6, 0.8],
    speed: 4,
  },
  webp: {
    quality: 70,
  },
})

// Usage in vite.config.js:
// import { imageOptimizationPlugin } from './vite-image-optimization.config'
// plugins: [react(), imageOptimizationPlugin]
