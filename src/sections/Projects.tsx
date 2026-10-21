import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-b border-border/50">
      <div className="section-container">
        <SectionHeading
          tag="Projects"
          title="Featured Projects"
          subtitle="Software projects, academic coursework applications, and developer tools."
        />

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-xl border border-border bg-surface text-center max-w-lg mx-auto">
            <p className="text-text-muted text-sm">
              Projects are currently being prepared and verified.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
