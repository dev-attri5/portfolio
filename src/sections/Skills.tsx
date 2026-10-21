import SectionHeading from '../components/SectionHeading'
import { skills } from '../data/portfolio'
import { CheckCircle2 } from 'lucide-react'

export default function Skills() {
  // Omit empty categories per PRD US-03
  const activeSkillGroups = skills.filter((group) => group.items && group.items.length > 0)

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-border/50">
      <div className="section-container">
        <SectionHeading
          tag="Technical Skills"
          title="Skills &amp; Technologies"
          subtitle="Genuine technical skills, core concepts, and development tools currently in active practice."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeSkillGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-xl border border-border bg-surface hover:border-accent/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-semibold text-text-main mb-4 flex items-center justify-between">
                  <span>{group.category}</span>
                  <span className="text-xs font-normal px-2 py-0.5 rounded bg-bg text-text-muted border border-border">
                    {group.items.length} {group.items.length === 1 ? 'skill' : 'skills'}
                  </span>
                </h3>

                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-text-muted"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                      <span className="text-text-main/90 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
