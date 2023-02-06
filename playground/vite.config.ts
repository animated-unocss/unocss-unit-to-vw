import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import presetRemToVw from "unocss-unit-to-vw"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets: [
        presetAttributify({ /* preset options */}),
        presetUno(),
        presetRemToVw()
        // ...custom presets
      ],
    }),
  ],
})
