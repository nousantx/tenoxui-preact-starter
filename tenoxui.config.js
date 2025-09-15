import config from './src/styles/config.ts'
import apply from './src/styles/index.ts'

export default {
  include: ['index.html', 'src/**/*.{js,jsx,ts,tsx}'],
  css: {
    ...config,
    apply: { body: 'bg-red' }
  }
}
