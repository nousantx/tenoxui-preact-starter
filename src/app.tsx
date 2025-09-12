export function App() {
  return (
    <div class="relative h-full">
      <div class="inset-0 absolute border-x border-current/20 max-w-996px mx-auto pointer-events-none"></div>
      <main class="w-full">
        <article class="h-svh w-full p-4 max-w-996px mx-auto isolate relative">
          <header class="flex items-center justify-center text-center flex-col border border-current/20 rounded-md h-full p-2 text-balance">
            <div class="rounded-full bg-gray-200/60 p-2 px-4 text-sm flex items-center leading-normal">
              <span class="font-medium">What's new in v2?</span>
              <div class="w-1px h-15px bg-current mx-3"></div>
              <span>Learn more {'->'}</span>
            </div>

            <h1 class="mt-4 font-medium tracking-tighter text-6xl leading-[0.9]">
              Build your own utility-first CSS framework in second!
            </h1>

            <p class="tracking-tight text-current/70 font-medium text-lg mt-6">
              TenoxUI is a ready-to-use tool for creating a style generator for your utility-first
              frameworks.
            </p>

            <div class="flex items-center justify-center gap-4 mt-8">
              <a
                href="https://tenoxui.web.app"
                class="h-45px font-medium tracking--0.025em px-4 rounded-full bg-gray-950 text-gray-50 flex items-center"
              >
                Explore Docs
              </a>
              <a
                href="https://github.com/tenoxui/tenoxui"
                class="h-45px font-medium tracking--0.015em px-4 rounded-full border border-current flex items-center"
              >
                Star on GitHub
              </a>
            </div>
          </header>
        </article>
      </main>

      <footer class="p-8 border-t border-b mb-8 border-current/20 max-w-996px mx-auto">
        <header class="text-pretty">
          <h1 class="text-xl font-medium tracking-tight">TenoxUI</h1>
          <p class="text-sm mt-1.5 text-current/70">
            A rich and quick style renderer solution for your utility-first css framework.
          </p>
        </header>

        <div class="w-full h-1px bg-current/20 my-6"></div>

        <p class="text-xs tracking-tight text-current/70">
          Built by <span class="italic">Human</span>.
        </p>
      </footer>
    </div>
  )
}
