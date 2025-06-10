import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const siteUrl = "https://result-base.com";
const siteName = "RESULTBASE";
const siteTitle = "RESULTBASE | Event Organizer & Exhibition Services Thailand";
const siteDescription =
  "RESULTBASE Co., Ltd. - ผู้นำด้านการจัดงานอีเว้นท์และงานแสดงสินค้าในประเทศไทย ตัวแทนจำหน่ายอย่างเป็นทางการของ TSO International สำหรับงาน SPORTEC, Wellness Tokyo, Japan Foods Week บริการจัดงานครบวงจร การก่อสร้างบูธ และที่ปรึกษาการตลาดเชิงกลยุทธ์ตั้งแต่ปี 2567";
const siteKeywords =
  "จัดงานอีเว้นท์ไทย, งานแสดงสินค้ากรุงเทพ, SPORTEC ประเทศไทย, งานแสดงสินค้า Wellness Tokyo, Japan Foods Week ไทย, TSO International Thailand, จัดงาน Trade Show, จัดประชุมสัมมนา, วางแผนงานสัมมนา, งานกีฬาประเทศไทย, ก่อสร้างบูธแสดงสินค้า, ออกแบบงานแสดงสินค้า, ที่ปรึกษาการตลาดไทย, วางแผนงานอีเว้นท์กรุงเทพ, งานแสดงสินค้านานาชาติ, งานธุรกิจประเทศไทย, event organizer Thailand, exhibition services Bangkok, RESULTBASE Thailand";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | RESULTBASE - Event Organizer Thailand",
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [
    { name: "RESULTBASE Co., Ltd.", url: siteUrl },
    { name: "TSO International Thailand Representative" },
  ],
  creator: "RESULTBASE Co., Ltd.",
  publisher: "RESULTBASE Co., Ltd.",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["th_TH"],
    url: siteUrl,
    siteName: siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/img_hero_seo.png",
        width: 1200,
        height: 630,
        alt: "RESULTBASE International Exhibitions - SPORTEC, Wellness Tokyo, Japan Foods Week",
        type: "image/png",
      },
    ],
    countryName: "Thailand",
    emails: ["projects@results-base.com", "prinkproy.mnw@results-base.com"],
    phoneNumbers: ["+66"],
  },

  twitter: {
    card: "summary_large_image",
    site: "@resultbase_th",
    creator: "@resultbase_th",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/img_hero_seo.png",
        width: 1200,
        height: 630,
        alt: "RESULTBASE - Event Organizer & Exhibition Services Thailand",
      },
    ],
  },

  facebook: {
    appId: "your-facebook-app-id",
  },

  verification: {
    google: "your-google-search-console-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
    other: {
      "msvalidate.01": "your-bing-verification",
      "p:domain_verify": "your-pinterest-verification",
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
    media: {
      "only screen and (max-width: 600px)": `${siteUrl}/mobile`,
    },
    types: {
      "application/rss+xml": `${siteUrl}/rss.xml`,
      "application/atom+xml": `${siteUrl}/atom.xml`,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-touch-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-touch-icon-76x76.png", sizes: "76x76", type: "image/png" },
      {
        url: "/apple-touch-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/apple-touch-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/apple-touch-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/apple-touch-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1B2B58" },
      { rel: "shortcut icon", url: "/favicon.ico" },
    ],
  },

  manifest: "/site.webmanifest",

  appleWebApp: {
    capable: true,
    title: "RESULTBASE Events",
    statusBarStyle: "black-translucent",
    startupImage: [
      {
        url: "/images/img_hero_seo.png",
        media:
          "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/images/img_hero_seo.png",
        media:
          "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)",
      },
    ],
  },

  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },

  category: "Business Services",
  classification: "Event Management & Exhibition Services",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1B2B58" },
  ],

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover",
  },

  appLinks: {
    web: {
      url: siteUrl,
      should_fallback: true,
    },
  },

  archives: [`${siteUrl}/portfolio`, `${siteUrl}/exhibitions`],
  assets: [`${siteUrl}/images`],
  bookmarks: [siteUrl],

  other: {
    "msapplication-TileColor": "#1B2B58",
    "msapplication-TileImage": "/images/img_rb_logo.png",
    "msapplication-square70x70logo": "/images/img_rb_logo.png",
    "msapplication-square150x150logo": "/images/img_rb_logo.png",
    "msapplication-wide310x150logo": "/images/img_rb_logo.png",
    "msapplication-square310x310logo": "/images/img_rb_logo.png",
    "msapplication-config": "/browserconfig.xml",
    "mobile-web-app-capable": "yes",
    "mobile-web-app-title": "RESULTBASE",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "RESULTBASE",
    "format-detection": "telephone=no, email=no, address=no",
    HandheldFriendly: "true",
    MobileOptimized: "width",
    skype_toolbar: "skype_toolbar_parser_compatible",
    "pinterest-rich-pin": "true",
    "fb:app_id": "your-facebook-app-id",
    "og:rich_attachment": "true",
    "twitter:dnt": "on",
    "twitter:widgets:csp": "on",
    rating: "general",
    distribution: "global",
    "revisit-after": "7 days",
    expires: "never",
    pragma: "no-cache",
    "cache-control": "no-cache",
    "geo.region": "TH-10",
    "geo.placename": "Bangkok",
    "geo.position": "13.7563;100.5018",
    ICBM: "13.7563, 100.5018",
    "DC.title": siteTitle,
    "DC.creator": "RESULTBASE Co., Ltd.",
    "DC.subject": "Event Management, Exhibition Services, Thailand",
    "DC.description": siteDescription,
    "DC.publisher": "RESULTBASE Co., Ltd.",
    "DC.contributor": "TSO International",
    "DC.date": "2024",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": siteUrl,
    "DC.language": "en",
    "DC.coverage": "Thailand",
    "DC.rights": "Copyright 2024 RESULTBASE Co., Ltd.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${siteUrl}/#organization`,
                  name: "RESULTBASE Co., Ltd.",
                  url: siteUrl,
                  logo: {
                    "@type": "ImageObject",
                    url: `${siteUrl}/images/img_rb_logo.png`,
                    width: 400,
                    height: 100,
                  },
                  description: siteDescription,
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "Thailand",
                    addressRegion: "Bangkok",
                    addressLocality: "Bangkok",
                  },
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      contactType: "customer service",
                      email: "projects@results-base.com",
                      availableLanguage: ["English", "Thai"],
                      areaServed: "Thailand",
                    },
                    {
                      "@type": "ContactPoint",
                      contactType: "sales",
                      email: "prinkproy.mnw@results-base.com",
                      availableLanguage: ["English", "Thai"],
                      areaServed: "Thailand",
                    },
                  ],
                  sameAs: [
                    "https://www.facebook.com/profile.php?id=61576568222207",
                    "https://lin.ee/dkYo13A",
                    "https://line.me/ti/p/@848pxphc",
                  ],
                  foundingDate: "2024",
                  numberOfEmployees: "10-50",
                  slogan: "Professional Event Organizer & Exhibition Services",
                  knowsAbout: [
                    "Event Management",
                    "Exhibition Services",
                    "Trade Shows",
                    "Conference Organization",
                    "SPORTEC",
                    "Wellness Tokyo",
                    "Japan Foods Week",
                  ],
                  areaServed: {
                    "@type": "Country",
                    name: "Thailand",
                  },
                  serviceArea: {
                    "@type": "GeoCircle",
                    geoMidpoint: {
                      "@type": "GeoCoordinates",
                      latitude: 13.7563,
                      longitude: 100.5018,
                    },
                    geoRadius: "1000",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: siteUrl,
                  name: siteName,
                  publisher: {
                    "@id": `${siteUrl}/#organization`,
                  },
                  inLanguage: "en-US",
                  description: siteDescription,
                  potentialAction: {
                    "@type": "SearchAction",
                    target: `${siteUrl}/search?q={search_term_string}`,
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "WebPage",
                  "@id": `${siteUrl}/#webpage`,
                  url: siteUrl,
                  name: siteTitle,
                  description: siteDescription,
                  publisher: {
                    "@id": `${siteUrl}/#organization`,
                  },
                  isPartOf: {
                    "@id": `${siteUrl}/#website`,
                  },
                  inLanguage: "en-US",
                  datePublished: "2024-01-01T00:00:00+07:00",
                  dateModified: new Date().toISOString(),
                  breadcrumb: {
                    "@id": `${siteUrl}/#breadcrumb`,
                  },
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${siteUrl}/#breadcrumb`,
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: siteUrl,
                    },
                  ],
                },
                {
                  "@type": "Service",
                  name: "Exhibition Services",
                  description:
                    "Professional exhibition planning and management for international trade shows including SPORTEC, Wellness Tokyo, and Japan Foods Week",
                  provider: {
                    "@id": `${siteUrl}/#organization`,
                  },
                  areaServed: "Thailand",
                  serviceType: "Exhibition Management",
                },
                {
                  "@type": "Service",
                  name: "Event Organization",
                  description:
                    "Comprehensive event planning and execution services for conferences, seminars, and corporate events",
                  provider: {
                    "@id": `${siteUrl}/#organization`,
                  },
                  areaServed: "Thailand",
                  serviceType: "Event Management",
                },
                {
                  "@type": "Service",
                  name: "Construction & Design Services",
                  description:
                    "Exhibition booth design, construction and contracting services for temporary and permanent structures",
                  provider: {
                    "@id": `${siteUrl}/#organization`,
                  },
                  areaServed: "Thailand",
                  serviceType: "Construction Services",
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "RESULTBASE Co., Ltd.",
              image: `${siteUrl}/images/img_rb_logo.png`,
              "@id": siteUrl,
              url: siteUrl,
              telephone: "+66",
              address: {
                "@type": "PostalAddress",
                streetAddress: "",
                addressLocality: "Bangkok",
                addressRegion: "Bangkok",
                postalCode: "",
                addressCountry: "TH",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 13.7563,
                longitude: 100.5018,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61576568222207",
                "https://lin.ee/dkYo13A",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {children}
      </body>
    </html>
  );
}
