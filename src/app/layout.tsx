import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import { IffatJsonLd } from "@/components/IffatJsonLd";
import { iffatProfile } from "@/data/profile";
import { seoDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${iffatProfile.name}`,
  },
  description: seoDescription,
  keywords: [
    "Iffat Zahra",
    "content writer Lahore",
    "SEO content writer",
    "freelance content writer Pakistan",
    "blog writer",
    "keyword research",
    "on-page SEO",
  ],
  authors: [{ name: iffatProfile.name, url: siteUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${iffatProfile.name} Portfolio`,
    title: siteName,
    description: seoDescription,
  },
  twitter: {
    card: "summary",
    title: siteName,
    description: seoDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className={`iffat-root ${lora.variable} ${dmSans.variable}`}>
          <IffatJsonLd />
          {children}
        </div>
      </body>
    </html>
  );
}
