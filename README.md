# GravityTech Software

Enterprise IT services website built with React, Vite, Tailwind CSS, and WebGPU shaders. Converted from the Axion Studio design system with full multi-page routing.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS 3.4
- React Router DOM
- [`shaders`](https://www.npmjs.com/package/shaders) — home hero background
- [`lucide-react`](https://lucide.dev/) — icons

## Pages

| Route | Page |
|-------|------|
| `/` | Home — shader hero, clients, services preview |
| `/about` | About — story, values, global offices |
| `/services` | Services — capabilities, why GravityTech |
| `/careers` | Careers — perks, openings, SCIP, apply form |

## Project Structure

```
src/
├── App.tsx                 # Router + ScrollToTop
├── main.tsx
├── index.css
└── components/
    ├── Navbar.tsx
    ├── Footer.tsx
    ├── TextRollButton.tsx
    ├── SectionBadge.tsx
    ├── HeroBackground.tsx
    └── pages/
        ├── Home.tsx
        ├── About.tsx
        ├── Services.tsx
        └── Careers.tsx
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Brand

- **Accent color:** Cyan `#1fb6e8` (replaces Axion orange)
- **Logo:** GT
- **Clock:** IST (Asia/Kolkata)
