import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons'
import { profile } from '../data/portfolio'
import { Check, Copy, Mail, MessageSquare, Send } from 'lucide-react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch {
      // Fallback if clipboard API is not permitted
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container">
        <SectionHeading
          tag="Get In Touch"
          title="Contact &amp; Collaboration"
          subtitle="Interested in collaborating on a project, discussing software engineering, or exploring internship opportunities? Feel free to reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Direct Contact Card */}
          <div className="lg:col-span-7 p-8 rounded-xl border border-border bg-surface shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-bg border border-border text-accent">
                <Mail className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-main">
                  Direct Email
                </h3>
                <p className="text-xs text-text-muted mt-0.5">
                  Fastest route for communication and professional inquiries
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-bg border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="font-mono text-sm sm:text-base text-text-main break-all">
                {profile.email}
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-surface border border-border text-text-main hover:border-accent/40 hover:text-accent transition-colors shrink-0 cursor-pointer"
                aria-label={copied ? 'Email copied' : 'Copy email address'}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-success" aria-hidden="true" />
                    <span className="text-success">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors shadow-sm"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Open Mail Client</span>
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-surface text-text-main font-semibold hover:bg-surface-hover hover:border-accent/40 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-accent" aria-hidden="true" />
                <span>Message on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Social Profiles Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl border border-border bg-surface">
              <h4 className="text-sm font-bold text-text-main mb-2">
                Availability &amp; Location
              </h4>
              <p className="text-xs text-text-muted leading-relaxed mb-4">
                Currently open to internship opportunities, student developer programs, and open source collaboration. Based in Mathura, Uttar Pradesh, India.
              </p>
              <div className="space-y-2 pt-2 border-t border-border/50 text-xs text-text-muted">
                <div className="flex items-center justify-between">
                  <span>Status:</span>
                  <span className="font-semibold text-success flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-success" aria-hidden="true" />
                    Open to opportunities
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>University:</span>
                  <span className="font-semibold text-text-main">GLA University</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-surface">
              <h4 className="text-sm font-bold text-text-main mb-3">
                Connect Across Platforms
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-2.5 rounded-lg border border-border bg-bg text-xs font-semibold text-text-main hover:border-accent/40 hover:text-accent transition-colors"
                >
                  <GithubIcon className="w-4 h-4" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-2.5 rounded-lg border border-border bg-bg text-xs font-semibold text-text-main hover:border-accent/40 hover:text-accent transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
