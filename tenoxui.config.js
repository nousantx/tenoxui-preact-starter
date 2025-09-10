import css from './src/.dev/lib/tenoxui/config.ts'
import { styles as apply } from './src/.dev/styles/index.ts'
import { defaultProperties, preflight } from '@tenoxui/preset-tailwind'

export default {
  include: ['index.html', 'src/**/*.{js,jsx,ts,tsx}'],
  css: { ...css, apply }
}
