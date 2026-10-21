const currentYear = new Date().getFullYear()

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-main flex flex-col">
      <header className="border-b border-border py-4 bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="section-container flex items-center justify-between">
          <span className="font-semibold text-lg tracking-tight text-text-main">
            Dev Attri
          </span>
          <nav aria-label="Main Navigation" className="flex items-center gap-6 text-sm text-text-muted">
            <a href="#test" className="hover:text-accent transition-colors">
              Design System Test
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content" className="flex-1">
        <section className="section-container py-16 md:py-24" id="test">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-surface border border-border text-accent mb-4">
              Phase 2 Design System Verification
            </span>
            <h1 className="hero-title text-text-main mb-6">
              Modern, Dark &amp; Developer-Focused
            </h1>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              Verifying design tokens, typography scales, contrast standards, and responsive container constraints from Design.md.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="px-5 py-2.5 rounded-lg bg-accent text-bg font-medium hover:bg-accent-hover transition-colors shadow-sm cursor-pointer"
              >
                Primary Button
              </button>
              <button
                type="button"
                className="px-5 py-2.5 rounded-lg border border-border bg-surface text-text-main font-medium hover:bg-surface-hover hover:border-accent/40 transition-colors cursor-pointer"
              >
                Secondary Button
              </button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-surface border border-border hover:border-accent/30 transition-colors">
              <h2 className="text-lg font-semibold text-text-main mb-2">Surface Token</h2>
              <p className="text-sm text-text-muted leading-relaxed">
                Cards and surfaces render at #121620 with subtle border #293140 and high-contrast text.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-surface border border-border hover:border-accent/30 transition-colors">
              <h2 className="text-lg font-semibold text-text-main mb-2">Accent Token</h2>
              <p className="text-sm text-text-muted leading-relaxed">
                Accent points to #7C9CFF for actions, with hover #9BB3FF and focus indicator compliance.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-surface border border-border hover:border-accent/30 transition-colors">
              <h2 className="text-lg font-semibold text-text-main mb-2">Accessibility</h2>
              <p className="text-sm text-text-muted leading-relaxed">
                Focus-visible rings, reduced motion handling, semantic hierarchy, and mobile overflow protection.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-text-muted">
        <div className="section-container">
          <p>© {currentYear} Dev Attri. Design system verified.</p>
        </div>
      </footer>
    </div>
  )
}
