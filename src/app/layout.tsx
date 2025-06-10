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

export const metadata: Metadata = {
  title: {
    default: "RESULTBASE | Event Organizer & Exhibition Services Thailand",
    template: "%s | RESULTBASE",
  },
  description:
    "RESULTBASE Co., Ltd. - Professional event organizer and exhibition services in Thailand. Official sales representative for TSO International exhibitions including SPORTEC, Wellness Tokyo, and Japan Foods Week. We provide comprehensive event management, construction, and strategic marketing consultancy.",
  keywords: [
    "event organizer Thailand",
    "exhibition services",
    "SPORTEC Thailand",
    "Wellness Tokyo",
    "Japan Foods Week",
    "TSO International",
    "trade show Thailand",
    "conference organizer",
    "seminar management",
    "sports events",
    "media production",
    "marketing consultancy",
    "event construction",
    "booth design",
    "exhibition booth",
    "งานแสดงสินค้า",
    "จัดงานอีเว้นท์",
    "งานนิทรรศการ",
    "RESULTBASE",
  ].join(", "),
  authors: [{ name: "RESULTBASE Co., Ltd." }],
  creator: "RESULTBASE Co., Ltd.",
  publisher: "RESULTBASE Co., Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "RESULTBASE | Event Organizer & Exhibition Services Thailand",
    description:
      "Professional event organizer and exhibition services in Thailand. Official sales representative for TSO International exhibitions. We deliver integrated solutions with creativity, precision, and professionalism.",
    url: "https://result-base.com",
    siteName: "RESULTBASE",
    images: [
      {
        url: "https://result-base.com/images/img_rb_logo.png", // ย้ายไปที่ public/images/
        width: 1200,
        height: 630,
        alt: "RESULTBASE - Event Organizer & Exhibition Services",
        type: "image/png",
      },
      {
        url: "https://result-base.com/images/img_exhibitions.png", // ย้ายไปที่ public/images/
        width: 1200,
        height: 630,
        alt: "RESULTBASE Exhibitions Services",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RESULTBASE | Event Organizer & Exhibition Services Thailand",
    description:
      "Professional event organizer and exhibition services in Thailand. Official sales representative for TSO International exhibitions.",
    images: ["https://result-base.com/images/img_rb_logo.png"], // ย้ายไปที่ public/images/
    creator: "@resultbase", // ถ้ามี Twitter account
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/img_rb_logo.png",
    shortcut: "/img_rb_logo.png",
    apple: "/img_rb_logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/img_rb_logo.png",
    },
  },
  manifest: "/site.webmanifest",
  category: "Business Services",
  classification: "Event Management & Exhibition Services",
  alternates: {
    canonical: "https://result-base.com",
    languages: {
      "en-US": "https://result-base.com/en",
      "th-TH": "https://result-base.com/th",
    },
  },
  verification: {
    google: "your-google-verification-code", // เพิ่ม Google Search Console verification code
  },
  other: {
    "theme-color": "#000000",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "RESULTBASE",
    "mobile-web-app-capable": "yes",
    "application-name": "RESULTBASE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RESULTBASE Co., Ltd.",
              description:
                "Professional event organizer and exhibition services in Thailand. Official sales representative for TSO International exhibitions.",
              url: "https://result-base.com",
              logo: "https://result-base.com/images/img_rb_logo.png", // ย้ายไปที่ public/images/
              address: {
                "@type": "PostalAddress",
                addressCountry: "Thailand",
                addressLocality: "Bangkok",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["English", "Thai"],
              },
              sameAs: [],
              service: [
                {
                  "@type": "Service",
                  name: "Exhibition Services",
                  description:
                    "Professional exhibition planning and management services",
                },
                {
                  "@type": "Service",
                  name: "Event Organization",
                  description:
                    "Comprehensive event planning and execution services",
                },
                {
                  "@type": "Service",
                  name: "Construction Services",
                  description:
                    "Exhibition booth design and construction services",
                },
              ],
            }),
          }}
        />

        {/* Breadcrumb JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://result-base.com",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
