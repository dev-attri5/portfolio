import { ArrowDown, Code2, ExternalLink, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="hero" className="relative py-20 md:py-32 border-b border-border/50">
      <div className="section-container">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-accent text-xs font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" aria-hidden="true" />
            <span>GLA University • 3rd Semester CSE</span>
          </div>

          {/* Single Page-Level H1 */}
          <h1 className="hero-title text-text-main mb-6">
            Hi, I'm <span className="text-accent">{profile.name}</span>.
          </h1>

          {/* Subtitle / Headline */}
          <p className="text-xl sm:text-2xl font-medium text-text-main/90 mb-4 leading-snug">
            {profile.headline}
          </p>

          {/* Bio */}
          <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
            {profile.bio}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors shadow-sm"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-surface text-text-main font-semibold hover:bg-surface-hover hover:border-accent/40 transition-colors"
            >
              <span>Get in Touch</span>
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>

            {/* Conditionally rendered resume button per FR-04 */}
            {profile.resumePath && (
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-surface text-text-main font-semibold hover:bg-surface-hover hover:border-accent/40 transition-colors"
              >
                <span>Resume (PDF)</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </div>

          {/* Quick Profile Links */}
          <div className="flex items-center gap-4 pt-6 border-t border-border/40">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Connect:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-border bg-surface text-text-muted hover:text-text-main hover:border-accent/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-border bg-surface text-text-muted hover:text-text-main hover:border-accent/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={profile.leetcodeUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-border bg-surface text-text-muted hover:text-text-main hover:border-accent/40 transition-colors"
                aria-label="LeetCode Profile"
              >
                <Code2 className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2.5 rounded-lg border border-border bg-surface text-text-muted hover:text-text-main hover:border-accent/40 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
