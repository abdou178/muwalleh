import type { Metadata, Viewport } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/context/LanguageThemeContext";
import { JsonLdSchema } from "@/components/JsonLdSchema";
import { CONTRACTOR_DATA } from "@/lib/contractor-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1128" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Water Leak Detection Sharjah | المركز المعتمد لكشف تسربات المياه بالشارقة (سيوا)",
  description:
    "Certified non-destructive water leak detection in Sharjah. Ultrasonic acoustic listening & FLIR thermal imaging with zero tile breakage. Official stamped SEWA utility bill rebate reports. 25-35 min emergency dispatch across Muwaileh Commercial, Al Zahia, Al Rahmaniya, Al Suyoh.",
  keywords: [
    "water leak detection sharjah",
    "كشف تسربات المياه بالشارقة",
    "تقرير كشف تسربات المياه سيوا",
    "كشف تسربات المياه بدون تكسير الشارقة",
    "water leak detection muwaileh commercial",
    "water leak detection al zahia",
    "sewa high water bill reduction",
    "ultrasonic water leak detection sharjah",
    "thermal imaging leak detection sharjah",
    "plumbing emergency sharjah",
  ],
  authors: [{ name: CONTRACTOR_DATA.businessNameEn }],
  creator: CONTRACTOR_DATA.businessNameEn,
  publisher: CONTRACTOR_DATA.businessNameEn,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Water Leak Detection Sharjah | المركز المعتمد لكشف تسربات المياه",
    description:
      "Pinpoint concealed water leaks within 5cm without breaking tiles. FLIR thermal cameras & ultrasonic acoustic tests with official SEWA reports. 24/7 Rapid dispatch across Sharjah.",
    url: "https://waterleakdetectionsharjah.ae",
    siteName: CONTRACTOR_DATA.businessNameEn,
    locale: "ar_AE",
    alternateLocale: ["en_US"],
    type: "website",
  },
  alternates: {
    canonical: "https://waterleakdetectionsharjah.ae",
    languages: {
      "ar-AE": "https://waterleakdetectionsharjah.ae/ar",
      "en-US": "https://waterleakdetectionsharjah.ae/en",
    },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className={`${inter.variable} ${cairo.variable}`}>
      <head>
        <JsonLdSchema />
      </head>
      <body className="antialiased min-h-screen bg-slate-50 dark:bg-hydro-900 text-slate-900 dark:text-slate-100 transition-colors selection:bg-cyan-500 selection:text-white">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
