import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "gXHCgYW1liWYzDHLdMnZqsms3IllJliPGWeecgZRK5E",
  },
  title: "ぷらっとハウス渋谷（道玄坂）| 渋谷駅徒歩5分 35㎡ 最大5名 民泊",
  description:
    "渋谷駅徒歩5分・神泉駅徒歩3分。35㎡の一棟貸切・最大5名。ダブルベッド＋ソファーベッド完備。渋谷・道玄坂エリアのプライベートステイ。",
  keywords:
    "ぷらっとハウス渋谷, 道玄坂 民泊, 渋谷 宿泊, 渋谷区 民泊, 神泉 民泊, Shibuya accommodation, Tokyo group stay",
  openGraph: {
    title: "ぷらっとハウス渋谷（道玄坂）| 渋谷駅5分 35㎡ 最大5名",
    description:
      "渋谷駅5分・神泉駅3分。35㎡一棟貸切・最大5名。ダブルベッド＋ソファーベッド完備。",
    url: "https://shibuya-dogenzaka.plat-house.jp",
    siteName: "Plat House Shibuya Dogenzaka",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://shibuya-dogenzaka.plat-house.jp",
    languages: {
      "ja": "https://shibuya-dogenzaka.plat-house.jp",
      "en": "https://shibuya-dogenzaka.plat-house.jp/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-CEF9DL6ET5" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CEF9DL6ET5');
        `}</Script>
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "ぷらっとハウス渋谷（道玄坂）",
          "url": "https://shibuya-dogenzaka.plat-house.jp",
          "telephone": "08070583086",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "道玄坂１－１７－９",
            "addressLocality": "渋谷区",
            "addressRegion": "東京都",
            "postalCode": "150-0044",
            "addressCountry": "JP"
          },
          "checkinTime": "16:00",
          "checkoutTime": "11:00",
          "priceRange": "¥15,000〜¥50,000",
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Nintendo Switch", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "キッチン", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "ポケットWi-Fi", "value": true }
          ]
        }) }} />
        {children}
      </body>
    </html>
  );
}
