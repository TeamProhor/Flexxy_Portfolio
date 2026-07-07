import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://prohor-nextjs-starter-kit.vercel.app"),
  title: "Flexxy - Premium Video Editor & Motion Designer Portfolio",
  description:
    "Cinematic storytelling and premium video editing for SaaS, tech startups, and brands. Expert post-production including color grading and sound design.",
  keywords: [
    "Video Editor Portfolio",
    "Premium Video Editing",
    "Motion Designer",
    "SaaS Commercials Editor",
    "Cinematic Color Grading",
    "DaVinci Resolve Editor",
    "Sound Design Specialist",
    "Vedita Edits",
    "Flexxy Video Editing",
  ],
  authors: [
    { name: "Flexxy", url: "https://prohor-nextjs-starter-kit.vercel.app" },
  ],
  creator: "Flexxy",
  publisher: "Flexxy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "hi-IN": "/hi",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Flexxy - Premium Video Editor & Motion Designer Portfolio",
    description:
      "Cinematic storytelling and premium video editing for SaaS, tech startups, and brands. Expert post-production including color grading and sound design.",
    type: "website",
    siteName: "Vedita Edits",
    locale: "en_US",
    alternateLocale: ["hi_IN"],
    url: "https://prohor-nextjs-starter-kit.vercel.app/",
    images: [
      {
        url: "https://prohor-nextjs-starter-kit.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flexxy - Premium Video Editor & Motion Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flexxy - Premium Video Editor & Motion Designer Portfolio",
    description:
      "Cinematic storytelling and premium video editing for SaaS, tech startups, and brands. Expert post-production including color grading and sound design.",
    site: "@VeditaEdits",
    creator: "@VeditaEdits",
    images: ["https://prohor-nextjs-starter-kit.vercel.app/og-image.png"],
  },
};

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://prohor-nextjs-starter-kit.vercel.app/#website",
      url: "https://prohor-nextjs-starter-kit.vercel.app/",
      name: "Flexxy Portfolio",
      description:
        "Premium video editing and post-production portfolio for brands.",
      inLanguage: ["en-US", "hi-IN"],
    },
    {
      "@type": "Person",
      "@id": "https://prohor-nextjs-starter-kit.vercel.app/#person",
      name: "Flexxy",
      jobTitle: "Premium Video Editor & Motion Designer",
      url: "https://prohor-nextjs-starter-kit.vercel.app/",
      sameAs: [
        "https://github.com/TeamProhor",
        "https://twitter.com/VeditaEdits",
      ],
      description:
        "Specializing in rhythm-driven editing, cinematic color grading, sound design, and custom motion graphics for startups and creators.",
    },
    {
      "@type": "ProfessionalService",
      name: "Vedita Edits",
      description:
        "High-end post-production services including commercial video editing, color grading, sound mixing, and custom title designs.",
      url: "https://prohor-nextjs-starter-kit.vercel.app/",
    },
  ],
};

export const siteFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What specific types of videos do you edit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I specialize in premium commercials, engaging documentaries, and high-end cinematic social media content.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical project take to finish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depending on the scope, most projects are completed within two weeks. Rush delivery is always available.",
      },
    },
  ],
};
