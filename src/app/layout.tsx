import type { Metadata } from "next";
import { DM_Mono, Inter } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DualSpoke — Vertical Software for Professionals",
  description: "DualSpoke builds purpose-built software tools for professionals.",
  openGraph: {
    title: "DualSpoke — Vertical Software for Professionals",
    description: "DualSpoke builds purpose-built software tools for professionals.",
    url: "https://www.dualscript.io",
    siteName: "DualSpoke",
    images: [
      {
        url: "https://www.dualscript.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "DualSpoke — Vertical Software for Professionals",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DualSpoke — Vertical Software for Professionals",
    description: "DualSpoke builds purpose-built software tools for professionals.",
    images: ["https://www.dualscript.io/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmMono.variable} ${dmMono.className} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
