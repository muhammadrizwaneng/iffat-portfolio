# Iffat Zahra — Content Writer Portfolio

Standalone Next.js portfolio for **Iffat Zahra** (SEO content writing, editing, research).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repo to GitHub as `iffat-portfolio` (or any name).
2. [vercel.com/new](https://vercel.com/new) → Import repo → Deploy.
3. Set environment variable:

```env
NEXT_PUBLIC_SITE_URL=https://iffat-portfolio-eight.vercel.app
```

Use your actual Vercel URL after the first deploy (no trailing slash).

## Content updates

- Profile, skills, writing samples: `src/data/profile.ts`
- CV file: replace `public/cv.pdf`
