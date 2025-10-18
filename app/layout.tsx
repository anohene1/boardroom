import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { inter, baskervville } from "@/config/fonts";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Boardroom",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-[#202945] bg-[#F3F3F3] font-sans antialiased",
          inter.variable,
          baskervville.variable
        )}
      >
        <Providers>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-8 sm:pt-12 md:pt-16 px-4 sm:px-6 flex-grow overflow-y-scroll no-scrollbar">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
