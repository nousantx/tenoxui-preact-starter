import { render } from 'preact'
import { App } from './app.tsx'
import 'virtual:tenoxui.css'
import type { ComponentChildren } from 'preact'

async function renderApp() {
  let DevStyler: any = ({ children }: { children: ComponentChildren }) => <>{children}</>

  if (import.meta.env.DEV) DevStyler = (await import('./.dev/styler')).default

  render(
    <DevStyler>
      <App />
    </DevStyler>,
    document.getElementById('app')!
  )
}

renderApp()
