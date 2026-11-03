import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_LEGAL, SITE_URL } from "@/lib/constants";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A3433",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Government Contractor & Institutional Partner`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Kardan Ventures (Private) Limited — A trusted government contractor and IT supply partner, delivering quality products, professional services and long-term business relationships across Pakistan.",
  keywords: [
    "Government Contractor",
    "Public Tenders Pakistan",
    "Institutional Procurement",
    "PPRA Pre-Qualified Vendor",
    "PEC Category C-2",
    "Enterprise IT Equipment",
    "Dell PowerEdge",
    "Kardan Ventures",
  ],
  authors: [{ name: SITE_LEGAL }],
  openGraph: {
    title: `${SITE_NAME} — Built on Trust. Driven by Expertise. Focused on Growth.`,
    description:
      "A trusted government contractor and IT supply partner, delivering quality products, professional services and long-term business relationships across Pakistan.",
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
        className="font-[family-name:'Plus_Jakarta_Sans',var(--font-sans),system-ui,sans-serif] antialiased bg-white text-[#334E68]"
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
