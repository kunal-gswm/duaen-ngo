import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'))
const ImpactPage = lazy(() => import('./pages/ImpactPage'))
const VolunteerPage = lazy(() => import('./pages/VolunteerPage'))
const DonatePage = lazy(() => import('./pages/DonatePage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function PageFallback() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center bg-cream/30"
      role="status"
      aria-label="Loading page content"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-3 border-border border-t-terracotta" />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<PageFallback />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<PageFallback />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="programs"
            element={
              <Suspense fallback={<PageFallback />}>
                <ProgramsPage />
              </Suspense>
            }
          />
          <Route
            path="impact"
            element={
              <Suspense fallback={<PageFallback />}>
                <ImpactPage />
              </Suspense>
            }
          />
          <Route
            path="volunteer"
            element={
              <Suspense fallback={<PageFallback />}>
                <VolunteerPage />
              </Suspense>
            }
          />
          <Route
            path="donate"
            element={
              <Suspense fallback={<PageFallback />}>
                <DonatePage />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<PageFallback />}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="privacy-policy"
            element={
              <Suspense fallback={<PageFallback />}>
                <PrivacyPolicyPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageFallback />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  )
}
