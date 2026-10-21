import SectionHeading from '../components/SectionHeading'
import { education } from '../data/portfolio'
import { BookOpen, Calendar, GraduationCap, MapPin } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 border-b border-border/50">
      <div className="section-container">
        <SectionHeading
          tag="Academic Background"
          title="Education"
          subtitle="Formal academic coursework and undergraduate computer science studies."
        />

        <div className="max-w-3xl">
          <div className="p-8 rounded-xl border border-border bg-surface shadow-sm">
            {/* Header / Institution */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 mb-3">
                  <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Undergraduate Degree</span>
                </span>
                <h3 className="text-2xl font-bold text-text-main">
                  {education.degree}
                </h3>
                <p className="text-base font-semibold text-text-main/90 mt-1">
                  {education.branch}
                </p>
              </div>

              <div className="text-right sm:text-right">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-md bg-bg border border-border text-text-muted">
                  <Calendar className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  <span>{education.currentSemester}</span>
                </span>
              </div>
            </div>

            {/* University & Location */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-6 pb-6 border-b border-border/50">
              <span className="font-medium text-text-main">{education.institution}</span>
              <span className="text-border">•</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                <span>{education.location}</span>
              </span>
            </div>

            {/* Core Coursework */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                <span>Relevant Coursework:</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-bg border border-border text-text-main/90"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
