import { Geist, Geist_Mono, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

/**
 * Font optimization
 * - Geist: Default sans-serif font
 * - Geist_Mono: Code/monospace font
 * - Manrope: Supreme Group brand font
 */
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

/**
 * Metadata for SEO and Open Graph
 * Improve search visibility and social media sharing
 */
export const metadata = {
  title: "Supreme Group - Leading Innovation in Automotive & Industrial Solutions",
  description: "Supreme Group provides innovative solutions across automotive, apparel, filtration, and customized applications. Discover our global competency and commitment to excellence.",
  keywords: "Supreme Group, automotive solutions, industrial filtration, apparel technology, customized solutions, innovation",
  authors: [{ name: "Supreme Group" }],
  creator: "Supreme Group",
  publisher: "Supreme Group",
  
  // Open Graph for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://supreme-group.vercel.app/",
    title: "Supreme Group - Leading Innovation",
    description: "Innovative solutions across automotive, apparel, and industrial applications",
    siteName: "Supreme Group",
    images: [
      {
        url: "https://supreme-group.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Supreme Group",
        type: "image/png",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Supreme Group",
    description: "Leading Innovation in Automotive & Industrial Solutions",
    creator: "@SupremeGroup",
  },

  // SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Viewport & Mobile
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },

  // Canonical
  alternates: {
    canonical: "https://supreme-group.vercel.app/",
  },
};

/**
 * RootLayout Component
 * - Shared layout for all pages
 * - Navbar (fixed, persistent)
 * - Page content
 * - Footer (persistent)
 * 
 * Performance: Navbar & Footer rendered once, reused across all pages
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#003d82" />
      </head>
      
      <body 
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased bg-white text-gray-900`}
        style={{
          fontFamily: 'var(--font-manrope), sans-serif',
        }}
      >
        {/* Fixed Navigation - Persistent across all pages */}
        <Navbar />

        {/* Main Content - Page-specific content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer - Persistent across all pages */}
        <Footer />

        {/* Skip to main content link (Accessibility) */}
        <a 
          href="#main" 
          className="absolute top-0 left-0 bg-black text-white px-4 py-2 -translate-y-10 focus:translate-y-0 transition-transform"
        >
          Skip to main content
        </a>
      </body>
    </html>
  );
}
