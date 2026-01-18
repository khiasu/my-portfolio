# Khiasu 2vis - Portfolio

A premium full-stack developer portfolio built with Next.js, featuring Apple Vision Pro–inspired glass UI, physical motion, and architectural elegance.

**Live Demo**: [View Portfolio](https://your-vercel-url.vercel.app)

## Design Philosophy

- **Glass Realism**: Multi-layer glass with depth, thickness, and edge refraction
- **Physical Motion**: Intentional animations with mass, inertia, and momentum
- **Restraint**: Subtle over flashy, silence as a feature
- **Premium Quality**: Every detail optimized for perceived quality

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom glass utilities
- **Motion**: Framer Motion + GSAP
- **Smooth Scrolling**: Lenis
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles with glass utilities
│   ├── layout.tsx            # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── navigation/          # Mobile-first navigation
│   ├── providers/           # Context providers
│   └── sections/            # Page sections
├── lib/
│   └── motion.ts            # Motion presets and utilities
└── public/                  # Static assets
```

## Features

- ✅ Glass UI with multi-layer depth
- ✅ Physical motion with inertia
- ✅ Mobile-first responsive design
- ✅ Gesture-driven navigation
- ✅ Smooth scrolling with Lenis
- ✅ Reduced-motion accessibility support
- ✅ Performance optimized (60-120 FPS target)

## Customization

### Accent Color

Edit CSS variables in `app/globals.css`:

```css
--color-accent: 100 200 255;        /* RGB values */
--color-accent-light: 150 220 255;
--color-accent-dark: 50 150 220;
```

### Glass Styles

Glass utilities are defined in `app/globals.css`:
- `.glass` - Standard glass
- `.glass-thick` - Thicker glass with more depth
- `.glass-thin` - Subtle glass effect

## Performance

- Target: 60-120 FPS on mobile
- GPU-friendly effects only
- Lazy-loading for heavy assets
- Lighthouse score ≥ 90

## License

MIT
