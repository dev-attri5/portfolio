import SkipLink from './components/SkipLink'
import Header from './components/Header'
import Footer from './components/Footer'
import SectionHeading from './components/SectionHeading'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-main flex flex-col">
      <SkipLink />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Core Sections */}
        <Hero />
        <About />
        <Skills />
        <Projects />

        {/* Coding Profiles Section (to be extracted into component in Phase 6) */}
        <section id="profiles" className="section-container py-16 md:py-24 border-b border-border/50">
          <SectionHeading
            tag="Coding Profiles"
            title="Problem Solving & Code"
            subtitle="Verified profiles where I practice algorithmic problem solving and maintain code repositories."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://leetcode.com/u/dev-attri/"
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-xl border border-border bg-surface hover:border-accent/40 hover:bg-surface-hover transition-colors block"
            >
              <h3 className="font-semibold text-text-main mb-1">LeetCode</h3>
              <p className="text-xs text-text-muted">leetcode.com/u/dev-attri</p>
            </a>
            <a
              href="https://www.geeksforgeeks.org/profile/devattu1v8"
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-xl border border-border bg-surface hover:border-accent/40 hover:bg-surface-hover transition-colors block"
            >
              <h3 className="font-semibold text-text-main mb-1">GeeksforGeeks</h3>
              <p className="text-xs text-text-muted">profile/devattu1v8</p>
            </a>
            <a
              href="https://github.com/dev-attri5"
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-xl border border-border bg-surface hover:border-accent/40 hover:bg-surface-hover transition-colors block"
            >
              <h3 className="font-semibold text-text-main mb-1">GitHub</h3>
              <p className="text-xs text-text-muted">github.com/dev-attri5</p>
            </a>
            <a
              href="https://www.linkedin.com/in/dev-attri-51051a386/"
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-xl border border-border bg-surface hover:border-accent/40 hover:bg-surface-hover transition-colors block"
            >
              <h3 className="font-semibold text-text-main mb-1">LinkedIn</h3>
              <p className="text-xs text-text-muted">Dev Attri</p>
            </a>
          </div>
        </section>

        {/* Education Section (to be extracted into component in Phase 6) */}
        <section id="education" className="section-container py-16 md:py-24 border-b border-border/50">
          <SectionHeading
            tag="Academic Background"
            title="Education"
            subtitle="Current university degree and academic track."
          />
          <div className="p-8 rounded-xl border border-border bg-surface max-w-2xl">
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-bg text-accent border border-border inline-block mb-3">
              3rd Semester (Current)
            </span>
            <h3 className="text-xl font-bold text-text-main">
              Bachelor of Technology — Computer Science and Engineering
            </h3>
            <p className="text-text-muted mt-1 font-medium">GLA University, Mathura</p>
          </div>
        </section>

        {/* Contact Section (to be extracted into component in Phase 7) */}
        <section id="contact" className="section-container py-16 md:py-24">
          <SectionHeading
            tag="Contact"
            title="Get In Touch"
            subtitle="Feel free to reach out for collaborations, project discussions, or opportunities."
          />
          <div className="p-8 rounded-xl border border-border bg-surface max-w-xl">
            <p className="text-text-muted mb-6 leading-relaxed">
              The best way to reach me is directly via email or LinkedIn.
            </p>
            <a
              href="mailto:devattri099@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
            >
              Send an Email: devattri099@gmail.com
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
