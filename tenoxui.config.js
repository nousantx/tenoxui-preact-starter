import { styles as apply, config } from './src/styles.ts'

export default {
  include: ['index.html', 'src/**/*.{js,jsx,ts,tsx}'],
  css: { ...config, apply }
}
