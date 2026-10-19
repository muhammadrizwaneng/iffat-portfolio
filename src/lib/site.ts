import { iffatProfile } from "@/data/profile";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://iffat-portfolio-eight.vercel.app";

export const siteName = `${iffatProfile.name} | Content Writer Portfolio`;

export const seoDescription = `${iffatProfile.name} — professional content writer in Lahore specializing in SEO-friendly articles, keyword research, on-page optimization, editing, and web research.`;
