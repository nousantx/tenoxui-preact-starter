import type { CreatorConfig, UtilityFunction } from '@tenoxui/plugin-moxie'
import { is } from 'cssrxp'

const toRem = (value: string): string =>
  is.number.test(value) ? Number(value) * 0.25 + 'rem' : value
const spacing =
  (prop: string): UtilityFunction =>
  ({ value }) =>
    !value ? null : { [prop]: toRem(value) }

export const config: CreatorConfig & {
  aliases?: any
} = {
  utilities: {
    bg: 'background',
    m: spacing('margin'),
    p: spacing('padding'),
    radius: spacing('borderRadius')
  },
  variants: {
    hover: '&:hover'
  }
}

export default config
