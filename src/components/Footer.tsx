const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface/30 py-12 text-sm text-text-muted">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-medium text-text-main">Dev Attri</p>
          <p className="text-xs text-text-muted mt-1">
            B.Tech Computer Science Engineering Student • GLA University
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs sm:text-sm">
          <a
            href="https://github.com/dev-attri5"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dev-attri-51051a386/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/dev-attri/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            LeetCode
          </a>
          <a
            href="https://www.geeksforgeeks.org/profile/devattu1v8"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            GeeksforGeeks
          </a>
        </div>

        <p className="text-xs text-text-muted">
          © {currentYear} Dev Attri. Built with React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
