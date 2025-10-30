import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Supreme Group - Leading Innovation in Automotive & Industrial Solutions",
  description: "Supreme Group provides innovative solutions across automotive, apparel, filtration, and customized applications. Discover our global competency and commitment to excellence.",
  keywords: "Supreme Group, automotive solutions, industrial filtration, apparel technology, customized solutions, innovation",
  authors: [{ name: "Supreme Group" }],
  creator: "Supreme Group",
  publisher: "Supreme Group",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://supreme-group.vercel.app/",
    title: "Supreme Group - Leading Innovation",
    description: "Innovative solutions across automotive, apparel, and industrial applications",
    siteName: "Supreme Group",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
