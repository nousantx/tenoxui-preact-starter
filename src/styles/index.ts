import { defaultProperties, preflight } from '@tenoxui/preset-tailwind'

export const styles = {
  ...defaultProperties,
  ...preflight,
  ':root': '[--tw-default-font-sans]-Inter',
  body: 'bg-gray-50 text-gray-950'
}

export default styles
