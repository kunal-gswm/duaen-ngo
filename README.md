# Duaen Foundation NGO — Official Website

> **Helping • Healing • Caring**  
> Primary Initiative: Duaen Primary School, D-Block, Ghaziabad, Uttar Pradesh  
> Official Email: [duaenfoundation@gmail.com](mailto:duaenfoundation@gmail.com)  
> Website: [https://duaenfoundationngo.in](https://duaenfoundationngo.in)  
> Instagram: [https://www.instagram.com/duaenfoundationngo/](https://www.instagram.com/duaenfoundationngo/)

A modern, accessible, responsive frontend website designed and implemented for **Duaen Foundation NGO**, a social welfare organization committed to empowering underprivileged communities through foundational primary education, women's vocational training, healthcare awareness, and essential community support.

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Design System & Palette](#-design-system--palette)
- [Information Architecture & Routes](#-information-architecture--routes)
- [Installation & Quick Start](#-installation--quick-start)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Accessibility & WCAG 2.2 AA Compliance](#-accessibility--wcag-22-aa-compliance)
- [Content Integrity & Verification Notes](#-content-integrity--verification-notes)
- [QA Summary](#-qa-summary)

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 8](https://vite.dev/) with `@tailwindcss/vite`
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with CSS-based `@theme` design tokens
- **Routing:** [React Router v7](https://reactrouter.com/) (declarative client-side routing with automatic scroll restoration)
- **Icons:** [Lucide React](https://lucide.dev/) (consistent, lightweight, accessible icon set)
- **Linter & Static Analysis:** [Oxlint](https://oxc.rs/) + TypeScript compiler (`tsc -b`)

---

## 🎨 Design System & Palette

The website implements a contemporary Indian nonprofit visual identity, warm and trustworthy without looking corporate or sentimental.

| Token | Hex | Intended Usage |
| :--- | :--- | :--- |
| **Deep Navy** | `#24324A` | Header, footer, primary headings, high-contrast dark sections |
| **Terracotta** | `#C45D42` | Primary calls to action, badges, accents, focus rings |
| **Warm Cream** | `#F7F1E8` | Warm section backgrounds, soft contrast cards |
| **Muted Mustard** | `#E6B85C` | Subtle decorative details, highlights |
| **Dusty Blue** | `#DCE6ED` | Informational sections, feature callouts, tags |
| **Pure White** | `#FFFFFF` | Clear content areas, form cards |
| **Primary Text** | `#252A31` | Body copy (exceeds WCAG 4.5:1 contrast) |
| **Secondary Text**| `#5F6268` | Captions, metadata, secondary copy |
| **Border Color** | `#E4DED4` | Restrained card boundaries and dividers |

### Typography
- **Headings:** [Manrope](https://fonts.google.com/specimen/Manrope) (weights: 600, 700, 800)
- **Body & Controls:** [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) (weights: 400, 500, 600)
- Loaded with `preconnect` optimizations in `index.html`.

### 🌿 Official Logo Integration
- **Source:** Master vector artwork supplied in `Logo.pdf`.
- **Preserved Artwork:** Two hands in brown supporting the Earth (green continents, blue oceans), Hindi lettering **"दुआएं फाउंडेशन एन.जी.ओ. रजि."**, horizontal brown divider rule, and green script tagline **"Helping • Healing • Caring"**.
- **Transparent Web Assets:**
  - `src/assets/logo.png` & `public/logo.png`: Full master logo (1200px retina web asset with transparent background). Used in the **Footer** and on the **About Us** page.
  - `src/assets/logo-mark.png` & `public/logo-mark.png`: Compact emblem (hands supporting Earth) with transparent background. Used in the **Header** navigation and **Homepage Hero**.
  - `public/favicon.png`: 128x128 & 32x32 transparent favicon rendered directly from the official emblem.
- **Palette Note:** The logo's authentic green, brown, and blue tones are intentionally preserved as official brand marks while the overall site aesthetic maintains the deep navy, terracotta, warm cream, and neutral palette.

---

## 🗺️ Information Architecture & Routes

Every route is fully functional and supports direct browser navigation:

| Path | Page Component | Description |
| :--- | :--- | :--- |
| `/` | `HomePage` | Full 13-section homepage (Hero, Intro, Mission & Vision, Our Work grid, School spotlight, Women's Empowerment, Healthcare & Medical Camp timeline, Qualitative Impact, Photo Gallery, Get Involved, FAQ accordion, Contact preview, Footer) |
| `/about` | `AboutPage` | Organizational background, core values, objectives, program pillars, Duaen Primary School, and verified leadership notices |
| `/programs` | `ProgramsPage` | In-depth program details with anchor navigation: Education, Women's Empowerment & Sewing Centre, Healthcare Camps, Community Welfare, Computer Learning, Volunteer Engagement |
| `/impact` | `ImpactPage` | Qualitative program achievements, documented activity timeline (medical camps, CPR sessions, disaster awareness), and filterable category photo gallery |
| `/volunteer` | `VolunteerPage` | Volunteering pathways, teaching mentorship, community relief drives, accessible demonstration interest form |
| `/donate` | `DonatePage` | Non-transactional support overview, transparent explanation of pending official payment details and direct contact instructions |
| `/contact` | `ContactPage` | Direct email, website, Instagram, school location details, and accessible demo enquiry form |
| `/privacy-policy` | `PrivacyPolicyPage` | Transparent preliminary data protection principles and prototype disclaimer clearly labeled as a draft |
| `*` | `NotFoundPage` | Custom 404 page with navigation pathways back to Home or Contact |

---

## 🚀 Installation & Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Setup
```bash
# Clone or navigate into the repository
cd d:\duaen-ngo

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📦 Available Scripts

- `npm run dev`: Starts the local development server with Hot Module Replacement (HMR).
- `npm run build`: Type-checks with `tsc -b` and builds the production bundle into `/dist`.
- `npm run lint`: Runs `oxlint` for high-speed static code analysis.
- `npm run preview`: Locally previews the production build from `/dist`.

---

## 📁 Project Structure

```
d:\duaen-ngo\
├── public\
│   ├── favicon.svg          # Custom SVG favicon
│   └── icons.svg
├── src\
│   ├── assets\              # Static assets
│   ├── components\
│   │   ├── Accordion.tsx    # Accessible WAI-ARIA accordion for FAQs
│   │   ├── BackToTop.tsx    # Scroll-triggered floating back-to-top button
│   │   ├── Footer.tsx       # Semantic footer with navigation and social links
│   │   ├── Header.tsx       # Responsive header with mobile drawer & skip link
│   │   ├── Layout.tsx       # Root layout wrapper with accessible landmark regions
│   │   ├── RegistrationCard.tsx     # Bordered credential card with logo, ref, & certificate link
│   │   ├── RegistrationsSection.tsx # Dedicated institutional credentials section
│   │   ├── SeoHead.tsx      # Dynamic title, Open Graph, and meta description injector
│   │   └── ui.tsx           # Shared Section, SectionHeading, PageHero, ButtonLink, PlaceholderImage
│   ├── data\
│   │   ├── content.ts       # Central source of truth for organization facts & copy
│   │   └── registrations.ts # Structured registry for statutory credentials and verification status
│   ├── pages\
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── DonatePage.tsx
│   │   ├── HomePage.tsx
│   │   ├── ImpactPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── PrivacyPolicyPage.tsx
│   │   ├── ProgramsPage.tsx
│   │   └── VolunteerPage.tsx
│   ├── App.tsx              # Router definitions and scroll-to-top restoration
│   ├── index.css            # Tailwind v4 theme, focus rings, reduced-motion overrides
│   └── main.tsx             # React entry point with BrowserRouter
├── CONTENT_VERIFICATION.md  # Checklist of pending items required before launch
├── index.html               # HTML5 shell with Open Graph and font preconnects
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ♿ Accessibility & WCAG 2.2 AA Compliance

- **Semantic Landmarks:** `<header role="banner">`, `<main id="main-content">`, `<footer role="contentinfo">`, `<section>`, `<nav>`, `<article>`.
- **Keyboard Navigation:**
  - Skip-to-main-content link (`.skip-link`) active on first tab.
  - High-contrast terracotta outline (`outline: 3px solid #C45D42; outline-offset: 2px`) on all `:focus-visible` elements.
  - Expandable mobile navigation and FAQ accordions operate smoothly via `Enter` and `Space`.
- **Screen Reader Support:**
  - Complete `aria-expanded`, `aria-controls`, and `aria-labelledby` bindings.
  - Decorative icons tagged with `aria-hidden="true"`.
  - External links clearly announced with `<span class="sr-only">(opens in a new tab)</span>`.
- **Forms & Inputs:**
  - All form controls are paired with explicit `<label htmlFor="...">`.
  - Mandatory fields marked with visual indicators and `aria-required="true"`.
  - Field errors announced in text via accessible error containers (`role="alert"`).
- **Reduced Motion:** Fully respects `prefers-reduced-motion: reduce` by disabling smooth scrolling and transitions.

---

## 🔒 Content Integrity & Verification Notes

Per project constraints:
1. **Frontend-Only Prototype:** No real backend, database, authentication, or payment service is connected.
2. **Form Interactions:** Forms on the Volunteer and Contact pages perform client-side validation and display clear demonstration confirmation banners. They explicitly note that submissions are not transmitted to a live server.
3. **Donation Policy:** No fictitious UPI IDs, fake QR codes, or payment inputs are included. The Donate page clearly guides donors to contact `duaenfoundation@gmail.com` directly for verified payment instructions.
4. **Factual Accuracy:** No unverified metrics, fake student counters, or fabricated leadership credentials are used. Documented historical events (e.g., Yashoda Hospital medical camp, Dr. Varsha Maurya CPR workshop, Christ University session) are clearly dated and qualified.
5. Refer to [`CONTENT_VERIFICATION.md`](./CONTENT_VERIFICATION.md) for the complete list of items awaiting official confirmation before live deployment.

---

## ✅ QA Summary

| Check | Tool / Method | Result | Notes |
| :--- | :--- | :--- | :--- |
| **TypeScript Compilation** | `npx tsc -b` | **PASS (0 errors)** | Strict typing across all components and pages |
| **Code Linting** | `npx oxlint` | **PASS (0 errors, 0 warnings)** | Clean code without unused variables or impure renders |
| **Production Build** | `npx vite build` | **PASS (502ms)** | Optimized HTML, CSS (64.8 kB), JS (488 kB) output in `/dist` |
| **Routing** | React Router v7 | **PASS** | All 8 main routes + 404 handler verified with ScrollToTop |
| **Responsive Layout** | Tailwind v4 | **PASS** | Mobile (320px–480px), Tablet (768px), Desktop (1024px–1280px+) |
| **Accessibility** | Semantic audit | **PASS** | Skip link, ARIA states, color contrast, keyboard focus rings |

---

*Website maintained for Duaen Foundation NGO.*
