import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { geist, instrumentSerif, inter, mukta, rozhaOne } from "@/lib/fonts";
import "@/app/globals.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import dict from "@/dictionaries/en.json";
import { siteJsonLd, siteMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...siteMetadata,
  title: dict.meta.title,
  description: dict.meta.description,
  authors: [{ name: "Prohor Team", url: "https://github.com/TeamProhor" }],
  creator: "Prohor Team",
  publisher: "Prohor Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
    date: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...siteMetadata.openGraph,
    title: dict.meta.ogTitle,
    description: dict.meta.ogDescription,
    locale: "en_US",
    url: "https://prohor-nextjs-starter-kit.vercel.app/",
  },
  twitter: {
    ...siteMetadata.twitter,
    title: dict.meta.twitterTitle,
    description: dict.meta.twitterDescription,
    site: "@TeamProhor",
    creator: "@TeamProhor",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dynamicJsonLd = {
    ...siteJsonLd,
    "@graph": siteJsonLd["@graph"].map((item) => {
      if (item["@type"] === "WebSite") {
        return {
          ...item,
          name: dict.jsonLd.name,
          description: dict.jsonLd.description,
          inLanguage: dict.jsonLd.language,
          url: "https://prohor-nextjs-starter-kit.vercel.app/",
        };
      }
      return item;
    }),
  };

  const jsonLdString = JSON.stringify(dynamicJsonLd)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");

  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} ${instrumentSerif.variable} ${rozhaOne.variable} ${mukta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link
          rel="preconnect"
          href="https://img.youtube.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.youtube.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD payload is safe
          dangerouslySetInnerHTML={{
            __html: jsonLdString,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <SmoothCursor />
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
