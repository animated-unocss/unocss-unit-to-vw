# unocss-unit-to-vw

Convert all rem/px to vw in utils

## Install

```bash
npm install --save-dev unocss-unit-to-vw
```

<details>
<summary>preset rem to vw</summary><br>

```ts
// rem to vw options
interface RemToVwOptions {
	baseFontSize?: number // defalut 16
	baseWidth?: number // defalut 375
	unitPrecision?: number // defalut 4
}
```

```ts
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { presetUno } from 'unocss'
import { presetRemToVw } from "unocss-unit-to-vw"

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

<br></details>

<details>
<summary>preset px to vw</summary><br>

```ts
interface PxToVwOptions {
    viewportWidth?: number // defalut 750
}
```

```ts
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { presetUno } from 'unocss'
import { presetPxToVw } from "unocss-unit-to-vw"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [
        presetUno(),
        presetPxToVw()
      ],
    }),
  ],
})
```

<br></details>
