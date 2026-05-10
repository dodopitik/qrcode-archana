import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Archana App | QR Code Generator",
  description:
    "QR code generator dan promo layanan digital Archana App dari Klaten, Jawa Tengah.",
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
