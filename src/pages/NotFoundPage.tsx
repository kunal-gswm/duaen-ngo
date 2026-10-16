import { ButtonLink } from '../components/ui'
import SeoHead from '../components/SeoHead'
import { AlertTriangle, Home, Mail } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="Page Not Found"
        description="The page you are looking for does not exist or may have been moved. Return to the Duaen Foundation NGO homepage or contact our team."
      />

      <section
        className="flex min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex-col items-center justify-center bg-navy px-4 py-16 sm:py-24 text-center text-white"
        aria-labelledby="not-found-heading"
      >
        <div className="mx-auto max-w-xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-mustard backdrop-blur-sm sm:h-20 sm:w-20">
            <AlertTriangle className="h-9 w-9 sm:h-11 sm:w-11" aria-hidden="true" />
          </div>

          <p className="font-heading text-7xl font-extrabold tracking-tight text-mustard sm:text-9xl">
            404
          </p>

          <h1
            id="not-found-heading"
            className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Page not found
          </h1>

          <p className="mt-4 text-base text-dusty-blue/90 sm:text-lg leading-relaxed">
            The page you're looking for doesn't exist or may have been moved.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <ButtonLink to="/" variant="primary" className="w-full sm:w-auto gap-2">
              <Home className="h-4 w-4" aria-hidden="true" />
              Return to Homepage
            </ButtonLink>
            <ButtonLink
              to="/contact"
              variant="outline-light"
              className="w-full sm:w-auto gap-2"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
