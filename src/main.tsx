import { render } from 'preact'
import { App } from './app.tsx'
import 'virtual:tenoxui.css'
import type { ComponentChildren } from 'preact'

const isDev = import.meta.env.DEV

async function renderApp() {
  let DevStyler: any = ({ children }: { children: ComponentChildren }) => <>{children}</>

  if (isDev) {
    const { default: styler } = await import('./.dev/styles/styler')
    DevStyler = styler
  }

  render(
    <DevStyler>
      <App />
    </DevStyler>,
    document.getElementById('app')!
  )
}

renderApp()
