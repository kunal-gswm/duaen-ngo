import { useEffect, useCallback, useRef } from 'react'
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react'

export interface LightboxImage {
  src: string
  alt: string
  title?: string
  caption?: string
  date?: string
  location?: string
  category?: string
}

interface LightboxProps {
  images: LightboxImage[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const currentImage = images[currentIndex]

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length)
  }, [currentIndex, images.length, onNavigate])

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length)
  }, [currentIndex, images.length, onNavigate])

  // Keyboard navigation & focus trap
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        handleNext()
      }
    }

    // Lock body scroll
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen, onClose, handlePrev, handleNext])

  if (!isOpen || !currentImage) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentImage.title || 'Image preview'}
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/95 p-4 sm:p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Lightbox Container */}
      <div
        className="relative flex flex-col max-h-[92vh] max-w-5xl w-full overflow-hidden rounded-2xl bg-navy border border-white/20 shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-white/15 px-5 py-3.5 bg-navy-dark">
          <div className="truncate">
            <h3 className="font-heading text-sm sm:text-base font-bold text-white truncate">
              {currentImage.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-dusty-blue font-mono mr-2">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-terracotta hover:text-white transition-colors focus-visible:outline-3 focus-visible:outline-terracotta"
              aria-label="Close image preview (Escape)"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Image Display Area */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-black/40 min-h-[300px] max-h-[65vh] p-2 sm:p-4">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-h-full max-w-full object-contain rounded-lg select-none"
            loading="eager"
          />

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-navy/80 border border-white/20 text-white hover:bg-terracotta transition-colors shadow-lg focus-visible:outline-3 focus-visible:outline-terracotta"
                aria-label="Previous image (Left arrow key)"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-navy/80 border border-white/20 text-white hover:bg-terracotta transition-colors shadow-lg focus-visible:outline-3 focus-visible:outline-terracotta"
                aria-label="Next image (Right arrow key)"
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {/* Caption & Metadata Footer */}
        <div className="border-t border-white/15 px-5 py-3.5 bg-navy-light/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <p className="text-dusty-blue/90 text-sm leading-relaxed max-w-2xl">
            {currentImage.caption || currentImage.alt}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-dusty-blue/80 shrink-0">
            {currentImage.date && (
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-mustard" aria-hidden="true" />
                <span>{currentImage.date}</span>
              </span>
            )}
            {currentImage.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-terracotta-light" aria-hidden="true" />
                <span>{currentImage.location}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
