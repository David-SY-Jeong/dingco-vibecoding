import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "바이브코딩 - 딩코딩코의 프로그래밍 강의",
  description: "딩코딩코의 바이브코딩으로 프로그래밍을 즐겁게 배워보세요! 실무 중심의 강의와 재미있는 코딩 문화를 경험하세요.",
  verification: {
    google: "6z_LOU_hB8VEpFlwT2ALJwHz0D2Ojwt0-FjBAx9QLrA",
  },
  other: {
    "google-adsense-account": "ca-pub-5263058944375875",
    "google-site-verification": "6z_LOU_hB8VEpFlwT2ALJwHz0D2Ojwt0-FjBAx9QLrA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="6z_LOU_hB8VEpFlwT2ALJwHz0D2Ojwt0-FjBAx9QLrA" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5263058944375875"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
