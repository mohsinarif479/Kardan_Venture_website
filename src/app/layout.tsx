import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  title: "Kardan Ventures | Government Contractor, Civil Infrastructure & Enterprise IT Solutions",
  description: "Official portal of Kardan Ventures — registered government contractor executing public tenders across Civil Construction, Datacenter Servers, Fleet Laptops, High-Lumen Projectors, Desktops, and Turnkey IT Procurement.",
  keywords: [
    "Government Contractor",
    "Public Tenders",
    "PPRA Compliant Bidding",
    "Civil Construction Contractor",
    "Enterprise IT Equipment",
    "Rack Servers Dell HP",
    "Commercial Laptops Fleet",
    "Laser Projectors Government Tenders",
    "Turnkey IT Infrastructure",
    "PEC Category C-2 Constructor"
  ],
  authors: [{ name: "Kardan Ventures (Pvt.) Limited" }],
  openGraph: {
    title: "Kardan Ventures — Premier Government Contractor & Enterprise IT",
    description: "Turnkey public sector tender execution, civil infrastructure, and authorized Tier-1 IT hardware provisioning (servers, laptops, projectors, desktops).",
    type: "website",
    locale: "en_US",
    siteName: "Kardan Ventures",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950`}
      >
        {children}
      </body>
    </html>
  );
}
