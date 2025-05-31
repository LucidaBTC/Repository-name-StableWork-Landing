import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AccessibilityProvider } from "@/components/common/AccessibilityProvider";
import { StickyCTA } from "@/components/common/StickyCTA";
import { Navbar } from "@/components/common/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "StableWork - Freelance Worldwide, Get Paid in Stablecoins",
    template: "%s | StableWork",
  },
  description:
    "Join 10,000+ freelancers earning in cryptocurrency. Get paid instantly in USDC or DAI with smart contract escrow protection. No borders, no delays.",
  keywords: [
    "freelance",
    "cryptocurrency",
    "stablecoins",
    "USDC",
    "DAI",
    "remote work",
    "blockchain",
    "smart contracts",
    "escrow",
    "global payments",
    "web3 jobs",
    "crypto freelancing",
  ],
  authors: [{ name: "StableWork Team" }],
  creator: "StableWork",
  publisher: "StableWork",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://stablework.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stablework.io",
    title: "StableWork - Freelance Worldwide, Get Paid in Stablecoins",
    description:
      "Join 10,000+ freelancers earning in cryptocurrency. Get paid instantly in USDC or DAI with smart contract escrow protection.",
    siteName: "StableWork",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StableWork - Freelance Platform for Cryptocurrency Payments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StableWork - Freelance Worldwide, Get Paid in Stablecoins",
    description:
      "Join 10,000+ freelancers earning in cryptocurrency. Get paid instantly in USDC or DAI.",
    images: ["/og-image.jpg"],
    creator: "@stablework",
  },
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
  verification: {
    // Remove placeholder verification code until you have the real one
    // google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "StableWork",
  description:
    "Global freelance platform with cryptocurrency payments and smart contract escrow protection.",
  url: "https://stablework.io",
  logo: "https://stablework.io/logo.png",
  sameAs: [
    // Remove placeholder social links until you have real ones
    // "https://twitter.com/stablework",
    // "https://linkedin.com/company/stablework",
    // "https://github.com/stablework",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    // Remove placeholder phone until you have a real one
    // telephone: "+1-555-0123",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressRegion: "CA",
    addressLocality: "San Francisco",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="color-scheme" content="light" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <AccessibilityProvider>
          <div id="skip-to-content" className="sr-only">
            <a
              href="#main-content"
              className="absolute top-0 left-0 bg-primary-600 text-white px-4 py-2 rounded-br-lg focus:not-sr-only focus:z-50 transition-all"
            >
              Skip to main content
            </a>
          </div>
          <main id="main-content">{children}</main>
          <StickyCTA />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
