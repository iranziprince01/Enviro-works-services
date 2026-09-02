# EnviroWorks Services Inc

Production-ready marketing website for EnviroWorks Services Inc — a premium property maintenance company serving Edmonton and surrounding Alberta communities.

## Tech Stack

- **Next.js 16**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **React Hook Form + Zod**
- **shadcn/ui**
- **Lucide Icons**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) — no additional configuration required.

## Project Structure

```
src/
├── app/              # Pages, layouts, sitemap, robots, RSS
├── components/       # UI, layout, sections, forms, SEO
├── data/             # Services, testimonials, blog, FAQ content
├── hooks/            # Custom React hooks
└── lib/              # SEO, schemas, validations, utilities
```

## Features

- Multi-page site with 9 service pages, blog, careers, quote system
- Comprehensive SEO (metadata, JSON-LD, sitemap, robots.txt, RSS)
- WCAG AA accessibility (skip links, ARIA, semantic HTML, focus states)
- Dark/light mode support
- Framer Motion animations with reduced-motion support
- Optimized remote images via Next/Image

## Environment

No environment variables required for the marketing site. Connect quote and contact forms to your backend API when ready.

## License

Proprietary — EnviroWorks Services Inc.
