import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Show after scrolling 400px, but hide when approaching footer (last 350px)
      // to avoid obscuring bottom content, event cards, or interactive footer links
      const isPastThreshold = scrollY > 400
      const isNearBottom = windowHeight + scrollY >= documentHeight - 350

      setVisible(isPastThreshold && !isNearBottom)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-navy/90 text-white shadow-lg backdrop-blur-xs transition-all hover:bg-navy hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta border border-white/20 print:hidden"
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
    </button>
  )
}
