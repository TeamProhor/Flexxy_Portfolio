import type { ReactElement, ReactNode } from "react";
import { MobileBottomNav } from "@/components/landing/MobileBottomNav";
import dict from "@/dictionaries/en.json";
import { siteFaqJsonLd } from "@/lib/seo";

export default function LandingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactElement {
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
      <div className="flex-1">{children}</div>
      <MobileBottomNav />
    </div>
  );
}
