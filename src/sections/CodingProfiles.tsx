import SectionHeading from '../components/SectionHeading'
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons'
import { codingProfiles } from '../data/portfolio'
import { Code2, ExternalLink, Terminal } from 'lucide-react'

export default function CodingProfiles() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'github':
        return <GithubIcon className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
      case 'linkedin':
        return <LinkedinIcon className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
      case 'leetcode':
        return <Code2 className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
      case 'geeksforgeeks':
        return <Terminal className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
      default:
        return <ExternalLink className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
    }
  }

  return (
    <section id="profiles" className="py-16 md:py-24 border-b border-border/50">
      <div className="section-container">
        <SectionHeading
          tag="Coding Profiles"
          title="Problem Solving &amp; Platforms"
          subtitle="Direct links to my authentic developer profiles where I solve algorithmic problems and publish code."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingProfiles.map((profile) => (
            <a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-xl border border-border bg-surface hover:border-accent/40 hover:bg-surface-hover transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-lg bg-bg border border-border group-hover:border-accent/30 transition-colors">
                    {getIcon(profile.id)}
                  </div>
                  {profile.badge && (
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-bg text-text-muted border border-border">
                      {profile.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-text-main group-hover:text-accent transition-colors mb-1">
                  {profile.platform}
                </h3>
                <p className="text-xs font-mono text-accent mb-3">
                  @{profile.handle}
                </p>
                <p className="text-xs text-text-muted leading-relaxed">
                  {profile.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-text-muted group-hover:text-text-main transition-colors">
                <span>View Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
