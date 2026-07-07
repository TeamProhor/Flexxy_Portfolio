import {
  Geist,
  Instrument_Serif,
  Inter,
  Mukta,
  Rozha_One,
} from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const rozhaOne = Rozha_One({
  variable: "--font-rozha-one",
  weight: "400",
  subsets: ["devanagari", "latin"],
  display: "swap",
});

export const mukta = Mukta({
  variable: "--font-mukta",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["devanagari", "latin"],
  display: "swap",
});
