import { defaultProperties, preflight, preset } from '@tenoxui/preset-tailwind'

const { variants, ...twConfig } = preset()

export const config = {
  ...twConfig,
  variants: {
    ...variants,
    dark: "value:[data-theme='dark'] &",
    light: "value:&:not([data-theme='dark']) &"
  }
}

export const resetter = {
  ...defaultProperties,
  ...preflight,
  ':root': '[--tw-default-font-sans]-Inter'
}

export const styles = {
  ...resetter,
  body: 'bg-gray-50 text-gray-950'
}

export default { config, styles }
