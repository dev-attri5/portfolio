import SectionHeading from '../components/SectionHeading'
import { education } from '../data/portfolio'
import { BookOpen, Code, GraduationCap, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-border/50">
      <div className="section-container">
        <SectionHeading
          tag="About Me"
          title="Background & Engineering Focus"
          subtitle="Undergraduate computer science student dedicated to building clean software systems and sharpening algorithmic skills."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Overview */}
          <div className="lg:col-span-7 space-y-4 text-text-muted leading-relaxed">
            <p>
              I am currently in my 3rd semester of <strong className="text-text-main font-semibold">{education.degree}</strong> in {education.branch} at <strong className="text-text-main font-semibold">{education.institution}</strong>, {education.location}.
            </p>
            <p>
              My primary technical focus centers on <strong className="text-text-main font-semibold">Java development</strong> and solving algorithmic challenges. I spend significant time working through data structure problems on platforms like LeetCode and GeeksforGeeks, reinforcing theoretical concepts with practical code.
            </p>
            <p>
              Beyond language syntax, I am interested in computer science fundamentals—understanding how memory is managed, how operating systems schedule tasks, and how modular object-oriented design keeps software maintainable over time.
            </p>
            <p>
              I believe in writing clear, well-documented code and continuously expanding my developer toolkit through structured coursework and hands-on coding exercises.
            </p>
          </div>

          {/* Key Facts / Focus Highlights */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="p-5 rounded-xl border border-border bg-surface flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-bg border border-border text-accent shrink-0">
                <GraduationCap className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-text-main text-sm">Academic Track</h3>
                <p className="text-xs text-text-muted mt-1">
                  {education.institution} • {education.currentSemester}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-border bg-surface flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-bg border border-border text-accent shrink-0">
                <Code className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-text-main text-sm">Primary Focus</h3>
                <p className="text-xs text-text-muted mt-1">
                  Java Development &amp; Data Structures / Algorithms
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-border bg-surface flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-bg border border-border text-accent shrink-0">
                <BookOpen className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-text-main text-sm">CS Foundations</h3>
                <p className="text-xs text-text-muted mt-1">
                  OOP, Operating Systems &amp; Computer Networks
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-border bg-surface flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-bg border border-border text-accent shrink-0">
                <Sparkles className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-text-main text-sm">Current Goal</h3>
                <p className="text-xs text-text-muted mt-1">
                  Strengthening problem solving and preparing for software engineering internships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
