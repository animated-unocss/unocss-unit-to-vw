import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import {presetPxToVw,presetRemToVw} from "unocss-unit-to-vw"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets: [
        presetAttributify({ /* preset options */}),
        presetUno(),
        presetPxToVw(),
        presetRemToVw()
        // ...custom presets
      ],
    }),
  ],
})
