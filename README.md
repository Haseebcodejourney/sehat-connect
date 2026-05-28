# Sehat Connect Frontend

Frontend web application for Sehat Connect built with React and Vite.

## Tech Stack

- React
- Vite
- React Router
- SCSS (modular page/layout styles)

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Routing Overview

Main router file: `src/app/router.jsx`

Public routes include:

- `/` home
- `/doctors` doctors listing
- `/doctors/:city/:specialty/:slug` doctor profile
- `/lab-tests`
- `/pharmacy/*`
- `/about`
- `/contact-us`
- `/editorial-policy`
- `/careers`
- `/terms` (new Terms of Use page)

## Major UI Updates Included

This project includes recent UI updates for responsive behavior and navigation:

- Responsive header + mobile menu drawer
- Mobile menu icons and guest actions
- Improved responsive handling for:
  - Home page sections and slider
  - About page
  - Doctors listing page
  - Doctor detail/profile page
- New Terms of Use page

## Terms of Use Page

- Component: `src/pages/public/TermsOfUse.jsx`
- Styles: `src/styles/pages/_terms.scss`
- Route: `/terms` in `src/app/router.jsx`
- Styles import: added in `src/styles/main.scss`

## Header Search (Mock Dynamic for Testing)

Header component: `src/components/common/Header.jsx`

### Current Behavior

Two separate search inputs are implemented:

1. City search
   - Cyprus city suggestions (mock)
2. Main search
   - Mock results for:
     - Doctor
     - Medicine
     - Lab test
     - Pharmacy

### Notes

- Current search is mock-data based for UI testing.
- It is intentionally structured so backend APIs can replace mock constants later.

### Replace Mock Data with APIs (Suggested)

In `Header.jsx`, replace:

- `CYPRUS_CITIES`
- `MOCK_SEARCH_DATA`

with API-driven state:

- Call city suggestions endpoint on city input change
- Call universal search endpoint on main search input change
- Map API response shape into current render fields (`title`, `subtitle`, `type`, `city`)

## Styling Conventions

- Global style entry: `src/styles/main.scss`
- Layout styles: `src/styles/layout/*`
- Page styles: `src/styles/pages/*`
- Home section styles: `src/styles/layout/home/*`

## Folder Highlights

- `src/app` - app router and app-level setup
- `src/components` - shared and section-level UI components
- `src/modules` - domain modules (doctors, lab, pharmacy, about, careers, etc.)
- `src/pages` - page-level route components
- `src/styles` - SCSS styles

## Development Notes

- Prefer adding responsive changes at component/page-specific SCSS files.
- Keep mobile behavior explicit (`max-width` breakpoints) for predictable QA.
- For production integration, replace mock search with APIs without changing UI contract.
