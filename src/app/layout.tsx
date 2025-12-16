import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FrontalMinds — Digital Solutions & Development",
  description: "Pioneering the future of digital solutions. We merge innovative technology with clear-minded strategy to unlock your business potential.",
  keywords: "web development, mobile apps, cybersecurity, digital solutions, FrontalMinds",
  authors: [{ name: "FrontalMinds" }],
  openGraph: {
    title: "FrontalMinds — Digital Solutions & Development",
    description: "Pioneering the future of digital solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable}`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
