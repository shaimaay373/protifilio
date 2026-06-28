# Shaimaa Yasser — Portfolio

Modern, recruiter-friendly portfolio built with **React**, **Vite**, and **Framer Motion**. Showcases MERN stack projects, experience, education, and contact information.

## Features

- Premium glassmorphism UI with dark/light mode
- Framer Motion scroll animations
- Lazy-loaded images with skeleton placeholders
- Project cards with image gallery support
- Code-split sections for performance
- Fully responsive, mobile-first design
- SEO meta tags

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, Background
│   ├── sections/     # Hero, About, Skills, etc.
│   └── ui/           # Reusable UI components
├── data/
│   └── portfolio.js  # All portfolio content (edit here)
├── hooks/            # useTheme, useActiveSection
└── styles/
    └── globals.css
public/
└── images/
    ├── profile.png
    └── projects/     # Add project screenshots here
```

## Adding Project Screenshots

1. Add images to `public/images/projects/` (e.g. `online-courses-1.png`)
2. Update `src/data/portfolio.js`:

```js
{
  id: 'online-courses',
  images: ['/images/projects/online-courses-1.png', '/images/projects/online-courses-2.png'],
  // ...
}
```

## Deploy

Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages.

---

Built by **Shaimaa Yasser** — Junior Full-Stack Developer | MERN Stack
