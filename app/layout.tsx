import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://qrcode.archana.co.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "QR Code Generator Gratis | Archana App Klaten",
    template: "%s | Archana App",
  },
  description:
    "Buat QR code gratis untuk link Instagram, Google Maps, katalog, menu, event, dan promo bisnis bersama Archana App dari Klaten, Jawa Tengah.",
  keywords: [
    "QR code generator",
    "QR code gratis",
    "buat QR code",
    "generator QR Indonesia",
    "QR code bisnis",
    "QR code promosi",
    "Archana App",
    "Archana Tech",
    "jasa website Klaten",
    "digital agency Klaten",
    "Klaten Jawa Tengah",
  ],
  applicationName: "Archana App QR Code Generator",
  authors: [{ name: "Archana App", url: siteUrl }],
  creator: "Archana App",
  publisher: "Archana App",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "QR Code Generator Gratis | Archana App Klaten",
    description:
      "Buat QR code gratis untuk link promosi, katalog, menu, event, dan profil bisnis. Dibuat oleh Archana App dari Klaten, Jawa Tengah.",
    url: siteUrl,
    siteName: "Archana App QR Code Generator",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/archana-logo.png",
        width: 1536,
        height: 2048,
        alt: "Logo Archana App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Code Generator Gratis | Archana App Klaten",
    description:
      "Generator QR code gratis untuk promosi bisnis, katalog, menu, event, dan link Instagram.",
    images: ["/archana-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
