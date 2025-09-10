import { defaultProperties, preflight } from '@tenoxui/preset-tailwind'

export const resetter = {
  ...defaultProperties,
  ...preflight,
  ':root': '[--tw-default-font-sans]-Inter'
}

export const styles = {
  ...resetter,
  '.your-custom-class': 'bg-red p-10'
}
