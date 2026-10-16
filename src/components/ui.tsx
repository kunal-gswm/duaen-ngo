import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'white' | 'cream' | 'navy' | 'dusty-blue'
}

export function Section({
  children,
  className = '',
  id,
  background = 'white',
}: SectionProps) {
  const bgClasses: Record<string, string> = {
    white: 'bg-white',
    cream: 'bg-cream',
    navy: 'bg-navy text-white',
    'dusty-blue': 'bg-dusty-blue',
  }

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${bgClasses[background]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-12 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`font-heading text-2xl font-bold sm:text-3xl lg:text-4xl ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg ${
            light ? 'text-dusty-blue/90' : 'text-text-secondary'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

interface PageHeroProps {
  title: string
  description?: string
  breadcrumb?: string
}

export function PageHero({ title, description, breadcrumb }: PageHeroProps) {
  return (
    <div className="bg-navy py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-dusty-blue/70">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span className="text-dusty-blue" aria-current="page">
                  {breadcrumb}
                </span>
              </li>
            </ol>
          </nav>
        )}
        <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-dusty-blue/90 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

interface ButtonLinkProps {
  to: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light'
  className?: string
  external?: boolean
}

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  className = '',
  external = false,
}: ButtonLinkProps) {
  const variants: Record<string, string> = {
    primary:
      'bg-terracotta text-white hover:bg-terracotta-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta',
    secondary:
      'bg-navy text-white hover:bg-navy-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy',
    outline:
      'border-2 border-navy text-navy hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy',
    'outline-light':
      'border-2 border-white text-white hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
  }

  const classes = `inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors ${variants[variant]} ${className}`

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  )
}

interface PlaceholderImageProps {
  alt: string
  className?: string
  aspectRatio?: string
  icon?: ReactNode
  label?: string
}

export function PlaceholderImage({
  alt,
  className = '',
  aspectRatio = 'aspect-video',
  icon,
  label,
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-cream-dark ${aspectRatio} ${className}`}
      role="img"
      aria-label={alt}
    >
      <div className="text-center text-text-secondary/60">
        {icon && <div className="mx-auto mb-2 h-10 w-10">{icon}</div>}
        {label && <p className="text-sm font-medium px-4">{label}</p>}
        {!icon && !label && (
          <p className="text-sm font-medium px-4">{alt}</p>
        )}
      </div>
    </div>
  )
}
