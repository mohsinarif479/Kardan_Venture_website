import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_LEGAL, SITE_URL } from "@/lib/constants";

const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102A43",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Professional Government Contractor & Institutional Partner`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Kardan Ventures (Pvt.) Limited — Professional business operations, government tender participation, institutional procurement support, and dependable B2G partnerships.",
  keywords: [
    "Government Contractor",
    "Public Tenders",
    "Institutional Procurement",
    "PPRA Vendor",
    "Civil Construction",
    "Enterprise IT Equipment",
    "Kardan Ventures",
  ],
  authors: [{ name: SITE_LEGAL }],
  openGraph: {
    title: `${SITE_NAME} — Professional Government Contractor`,
    description:
      "Dependable institutional partnerships, government tender participation, and enterprise procurement services.",
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} font-sans antialiased bg-white text-[#334E68]`}
        suppressHydrationWarning
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
