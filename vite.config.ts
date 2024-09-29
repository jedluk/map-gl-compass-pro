import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    publicDir: command === 'serve' ? 'public' : false,
    build: {
      lib: {
        entry: resolve(__dirname, 'src/Compass.tsx'),
        name: 'map-gl-compass-pro',
        fileName: 'compass'
      },
      rollupOptions: {
        external: ['react-map-gl', 'maplibre-gl', 'react', 'react-dom']
      }
    },
    plugins: [
      react(),
      dts({
        outDir: 'types',
        insertTypesEntry: true,
        rollupTypes: true
      })
    ]
  }
})
