# unocss-unit-to-vw

Convert all rem/px to vw in utils

## Install

```bash
npm install --save-dev unocss-unit-to-vw
```

## Usage

### Options

```ts
// rem to vw options
interface RemToVwOptions {
  baseFontSize?: number // defalut 16
  baseWidth?: number // defalut 375
  unitPrecision?: number // defalut 4
}
```

### Config

```ts
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { presetUno } from 'unocss'
import presetRemToVw from 'unocss-unit-to-vw'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [
        presetUno(),
        presetRemToVw()
      ],
    }),
  ],
})
```

<table><tr><td width="500px" valign="top">

### without

```css
.m-2 {
  margin: 0.5rem;
}

.m-8px {
  margin: 8px;
}
```

</td><td width="500px" valign="top">

### with

```css
.m-2 {
  margin: 2.1333vw;
}

.m-8px {
  margin: 2.1333vw;
}
```
