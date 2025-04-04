import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@/components/Analytics";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Doan Thanh Chung - Portfolio",
  description: "Back-End Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={roboto.className}>
        {/* Google Analytics Scripts */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>

        <Analytics />
        {children}
      </body>
    </html>
  );
}
