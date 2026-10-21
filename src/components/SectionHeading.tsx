interface SectionHeadingProps {
  title: string
  subtitle?: string
  tag?: string
}

export default function SectionHeading({ title, subtitle, tag }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      {tag && (
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-surface border border-border text-accent mb-3">
          {tag}
        </span>
      )}
      <h2 className="section-title text-text-main mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
