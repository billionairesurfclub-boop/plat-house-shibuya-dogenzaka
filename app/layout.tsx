import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ぷらっとハウス中目黒 | 中目黒駅・池尻大橋駅 徒歩10分 20㎡ 2客室 民泊",
  description:
    "中目黒駅・池尻大橋駅 徒歩10分。20㎡の洗練された2客室（各クイーンベッド1台・最大2名）。Netflix・キッチン・浴槽・ボタニスト完備。おしゃれな中目黒エリアで快適ステイ。",
  keywords:
    "ぷらっとハウス中目黒, 中目黒 民泊, 池尻大橋 民泊, 中目黒 宿泊, 目黒 カップル宿泊, Nakameguro accommodation, Tokyo couple stay",
  openGraph: {
    title: "ぷらっとハウス中目黒 | 中目黒駅10分 20㎡ 2名 民泊",
    description:
      "中目黒駅・池尻大橋駅10分。20㎡クイーンベッド客室・Netflix・キッチン・浴槽完備。",
    url: "https://nakameguro.plat-house.jp",
    siteName: "Plat House Nakameguro",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://nakameguro.plat-house.jp",
    languages: {
      "ja": "https://nakameguro.plat-house.jp",
      "en": "https://nakameguro.plat-house.jp/en",
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
          "name": "ぷらっとハウス中目黒",
          "url": "https://nakameguro.plat-house.jp",
          "telephone": "08070583086",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "東山2−9−20",
            "addressLocality": "目黒区",
            "addressRegion": "東京都",
            "postalCode": "153-0043",
            "addressCountry": "JP"
          },
          "checkinTime": "16:00",
          "checkoutTime": "11:00",
          "priceRange": "¥12,000〜¥25,000",
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Netflix", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Nintendo Switch", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "キッチン", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "浴槽", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "ポケットWi-Fi", "value": true }
          ]
        }) }} />
        {children}
      </body>
    </html>
  );
}
