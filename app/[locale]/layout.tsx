import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { GoogleTagManagerScript, GoogleTagManagerNoScript } from "@/components/analytics/GoogleTagManager";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";
import { SITE_URL } from "@/lib/site";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "DTA Sistemas — Partner tecnológico para empresas",
      template: "%s | DTA Sistemas",
    },
    description: t("heroSubtitle"),
    openGraph: {
      siteName: "DTA Sistemas",
      locale: locale === "en" ? "en_US" : "es_MX",
      type: "website",
      images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "DTA Sistemas" }],
    },
    twitter: { card: "summary_large_image", site: "@dtasistemas" },
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  };
}

/**
 * True root layout (Fase 13) — vive en app/[locale]/layout.tsx, NO en
 * app/layout.tsx (que ya no existe). Patrón estándar de next-intl: dado
 * que TODA ruta del sitio vive bajo [locale], este layout es el único que
 * declara <html>/<body>. Ver docs/i18n.md para el detalle completo de la
 * migración.
 */
export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        <GoogleTagManagerScript />
      </head>
      <body>
        <GoogleTagManagerNoScript />
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
