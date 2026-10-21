import { ExternalLink, FolderGit2 } from 'lucide-react'
import type { Project } from '../data/portfolio'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-border bg-surface hover:border-accent/40 transition-colors flex flex-col justify-between p-6 sm:p-7 shadow-sm">
      <div>
        {/* Header: Status and Placeholder indicator */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
              project.status === 'completed'
                ? 'bg-success/10 text-success border border-success/30'
                : 'bg-accent/10 text-accent border border-accent/30'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                project.status === 'completed' ? 'bg-success' : 'bg-accent animate-pulse'
              }`}
              aria-hidden="true"
            />
            {project.status === 'completed' ? 'Completed' : 'In Progress'}
          </span>

          {project.isPlaceholder && (
            <span className="text-[11px] font-medium text-text-muted bg-bg px-2 py-0.5 rounded border border-border">
              Coursework Plan
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-main mb-2">
          {project.title}
        </h3>

        {/* Tagline / Subtitle */}
        <p className="text-sm font-medium text-text-muted mb-4">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-text-muted/90 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
              Key Highlights:
            </h4>
            <ul className="space-y-1.5 text-xs text-text-muted">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-bg text-text-main border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="pt-4 border-t border-border/50 flex flex-wrap items-center gap-3">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-surface hover:bg-surface-hover text-text-main border border-border hover:border-accent/40 transition-colors"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
            <span>View Repository</span>
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-accent text-bg hover:bg-accent-hover transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </article>
  )
}
