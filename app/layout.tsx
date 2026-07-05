import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ぷらっとハウス表参道 | 表参道駅10分 民泊 キッチン・浴槽完備 カップル向け",
  description:
    "表参道駅徒歩10分。キッチン・浴槽・リビング完備の20㎡客室2室。Netflix・Nintendo Switch・10ギガインターネット・ボタニストアメニティ完備。表参道・原宿・青山観光の拠点に最適。",
  keywords:
    "ぷらっとハウス表参道, 表参道 民泊, 表参道 宿泊, 原宿 民泊, 西麻布 民泊, 港区 民泊, 表参道 カップル, Omotesando accommodation, Tokyo Harajuku stay, 表参道 キッチン付き 宿泊",
  openGraph: {
    title: "ぷらっとハウス表参道 | 表参道駅10分 キッチン・浴槽完備",
    description:
      "表参道駅10分。キッチン・浴槽・リビング付き20㎡。Netflix・Switch・10ギガ・ボタニスト完備。",
    url: "https://omotesando.plat-house.jp",
    siteName: "Plat House Omotesando",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://omotesando.plat-house.jp",
    languages: {
      "ja": "https://omotesando.plat-house.jp",
      "en": "https://omotesando.plat-house.jp/en",
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
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "ぷらっとハウス表参道",
          "url": "https://omotesando.plat-house.jp",
          "telephone": "08070583086",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "西麻布2-21-13",
            "addressLocality": "港区",
            "addressRegion": "東京都",
            "postalCode": "106-0031",
            "addressCountry": "JP"
          },
          "checkinTime": "16:00",
          "checkoutTime": "11:00",
          "priceRange": "¥15,000〜¥30,000",
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Netflix", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Nintendo Switch", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "キッチン", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "浴槽", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "10ギガインターネット", "value": true }
          ]
        }) }} />
        {children}
      </body>
    </html>
  );
}
