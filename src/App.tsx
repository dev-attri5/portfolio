import SkipLink from './components/SkipLink'
import Header from './components/Header'
import Footer from './components/Footer'
import SectionHeading from './components/SectionHeading'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-main flex flex-col">
      <SkipLink />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="section-container py-20 md:py-32 border-b border-border/50">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-surface border border-border text-accent mb-4">
              B.Tech CSE Student • Java Developer
            </span>
            <h1 className="hero-title text-text-main mb-6">
              Dev Attri
            </h1>
            <p className="text-text-muted text-lg md:text-xl leading-relaxed mb-8">
              B.Tech Computer Science Engineering student passionate about Java development, data structures, and building real-world software applications.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors shadow-sm"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-border bg-surface text-text-main font-semibold hover:bg-surface-hover hover:border-accent/40 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-container py-16 md:py-24 border-b border-border/50">
          <SectionHeading
            tag="About Me"
            title="Education & Engineering Focus"
            subtitle="Undergraduate computer science student building foundational knowledge in algorithms and software systems."
          />
          <div className="rounded-xl border border-border bg-surface p-8 max-w-3xl">
            <p className="text-text-muted leading-relaxed mb-4">
              Currently pursuing a Bachelor of Technology in Computer Science and Engineering at GLA University, Mathura (3rd Semester).
            </p>
            <p className="text-text-muted leading-relaxed">
              Focused on core computer science foundations including object-oriented programming, algorithms, operating systems, and computer networks, with hands-on practice in Java and problem solving.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-container py-16 md:py-24 border-b border-border/50">
          <SectionHeading
            tag="Technical Skills"
            title="Tools & Technologies"
            subtitle="Genuine technical skills, languages, and core computer science concepts studied and applied."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-text-main mb-3">Languages</h3>
              <p className="text-sm text-text-muted">Java, Python, C</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-text-main mb-3">Web Basics</h3>
              <p className="text-sm text-text-muted">HTML, CSS</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-text-main mb-3">CS Fundamentals</h3>
              <p className="text-sm text-text-muted">DSA, OOP, OS, Networks</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-text-main mb-3">Tools &amp; IDEs</h3>
              <p className="text-sm text-text-muted">Git, GitHub, IntelliJ IDEA, VS Code</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-container py-16 md:py-24 border-b border-border/50">
          <SectionHeading
            tag="Projects"
            title="Featured Work"
            subtitle="Software projects and coursework applications."
          />
          <div className="p-8 rounded-xl border border-border bg-surface/50 text-center">
            <p className="text-text-muted">
              Project showcase components are being linked with verified repository data in upcoming phases.
            </p>
          </div>
        </section>

        {/* Coding Profiles Section */}
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

        {/* Education Section */}
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

        {/* Contact Section */}
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
