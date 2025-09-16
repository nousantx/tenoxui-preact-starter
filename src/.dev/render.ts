import config from '../styles/config'
import { Renderer, createTenoxUI } from '@tenoxui/plugin-moxie'

export const ui = new Renderer({
  main: createTenoxUI(config),
  aliases: config.aliases
})

export function render(node: Document | Element): string {
  const elements = node.querySelectorAll('*')
  const classNames: string[] = []
  elements.forEach((element: Element) => {
    if (element.classList && element.classList.length > 0) {
      Array.from(element.classList).forEach((className: string) => {
        classNames.push(className)
      })
    }
  })
  return ui.render(Array.from(new Set(classNames)))
}
