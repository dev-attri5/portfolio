import SkipLink from './components/SkipLink'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import CodingProfiles from './sections/CodingProfiles'
import Education from './sections/Education'
import Contact from './sections/Contact'

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

        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
