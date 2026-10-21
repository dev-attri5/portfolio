import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="section-container flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight text-text-main hover:text-accent transition-colors"
        >
          Dev Attri
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Desktop Navigation" className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-muted hover:text-text-main hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-surface border border-border text-text-main hover:border-accent/40 hover:bg-surface-hover transition-colors"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-text-muted hover:text-text-main hover:bg-surface border border-transparent hover:border-border transition-colors cursor-pointer"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-bg/95 backdrop-blur-lg border-b border-border z-30 px-6 py-8 flex flex-col gap-6"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-text-main hover:text-accent py-2 border-b border-border/40 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-4">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center py-3 px-4 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors text-center"
            >
              Contact Dev
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
