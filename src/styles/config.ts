import { preset } from '@tenoxui/preset-tailwind'

const { variants, ...twConfig } = preset()

export const config = {
  ...twConfig,
  variants: {
    ...variants,
    dark: "value:[data-theme='dark'] &",
    light: "value:&:not([data-theme='dark']) &"
  }
}

export default config
