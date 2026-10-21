import SkipLink from './components/SkipLink'
import Header from './components/Header'
import Footer from './components/Footer'
import SectionHeading from './components/SectionHeading'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import CodingProfiles from './sections/CodingProfiles'
import Education from './sections/Education'

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

        {/* Supporting Sections */}
        <CodingProfiles />
        <Education />

        {/* Contact Section (to be modularized in Phase 7) */}
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
