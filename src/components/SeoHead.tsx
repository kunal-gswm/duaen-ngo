import { useEffect } from 'react'

interface SeoHeadProps {
  title: string
  description?: string
  path?: string
}

const SITE_NAME = 'Duaen Foundation NGO'
const BASE_URL = 'https://duaenfoundationngo.in'
const DEFAULT_DESCRIPTION =
  'Duaen Foundation NGO is a social welfare organization dedicated to empowering underprivileged communities through education, healthcare awareness, women empowerment, and community support in Ghaziabad.'

export default function SeoHead({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
}: SeoHeadProps) {
  useEffect(() => {
    const fullTitle = title === 'Home'
      ? `${SITE_NAME} — Helping • Healing • Caring`
      : `${title} | ${SITE_NAME}`

    document.title = fullTitle

    // Update meta tags
    setMeta('description', description)
    setMeta('og:title', fullTitle)
    setMeta('og:description', description)
    setMeta('og:url', `${BASE_URL}${path}`)
    setMeta('og:site_name', SITE_NAME)
    setMeta('og:type', 'website')
  }, [title, description, path])

  return null
}

function setMeta(name: string, content: string) {
  const isOg = name.startsWith('og:')
  const attr = isOg ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null

  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}
