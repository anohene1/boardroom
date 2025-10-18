import { Inter, Baskervville } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const baskervville = Baskervville({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif"
});
