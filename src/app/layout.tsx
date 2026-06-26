import type { Metadata } from "next";
import { Inter, Instrument_Serif, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flexxy | Premium Video Editor",
  description: "Crafting cinematic stories and premium motion design for top brands.",
};

import { ThemeProvider } from "@/components/theme-provider";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
