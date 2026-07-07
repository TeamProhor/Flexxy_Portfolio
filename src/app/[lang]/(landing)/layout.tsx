import type { ReactElement, ReactNode } from "react";
import { getDictionary } from "@/lib/i18n";
import { siteFaqJsonLd } from "@/lib/seo";

export default async function LandingLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ lang: string }>;
}>): Promise<ReactElement> {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  const dynamicFaqJsonLd = {
    ...siteFaqJsonLd,
    mainEntity: dict.jsonLd.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const jsonLdString = JSON.stringify(dynamicFaqJsonLd)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD payload is safe
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />
      {children}
    </div>
  );
}
