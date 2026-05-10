/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import QRCode from "qrcode";
import { useState } from "react";

const services = [
  "Website bisnis & landing page",
  "Automasi konten dan operasional",
  "QR code untuk promo, katalog, dan event",
];

const channels = [
  { label: "Instagram", href: "https://www.instagram.com/archana.tech/" },
  { label: "WhatsApp", href: "https://wa.me/62895363076706" },
  { label: "Email", href: "mailto:archanaaditama@gmail.com" },
];

const siteUrl = "https://qrcode.archana.co.id";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "Archana App",
      url: siteUrl,
      logo: `${siteUrl}/archana-logo.png`,
      image: `${siteUrl}/archana-logo.png`,
      description:
        "Archana App adalah partner digital dari Klaten, Jawa Tengah untuk website bisnis, automasi, dan QR code promosi.",
      email: "archanaaditama@gmail.com",
      telephone: "+62895363076706",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Klaten",
        addressRegion: "Jawa Tengah",
        addressCountry: "ID",
      },
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Klaten",
        },
        {
          "@type": "Country",
          name: "Indonesia",
        },
      ],
      sameAs: ["https://www.instagram.com/archana.tech/"],
    },
    {
      "@type": "WebApplication",
      "@id": `${siteUrl}/#qr-generator`,
      name: "Archana App QR Code Generator",
      url: siteUrl,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      isAccessibleForFree: true,
      browserRequirements: "Requires JavaScript",
      description:
        "Generator QR code gratis untuk membuat QR dari link Instagram, Google Maps, katalog, menu, event, dan promosi bisnis.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "IDR",
      },
      provider: {
        "@id": `${siteUrl}/#business`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Archana App QR Code Generator",
      url: siteUrl,
      inLanguage: "id-ID",
      publisher: {
        "@id": `${siteUrl}/#business`,
      },
    },
  ],
};

export default function Home() {
  const [url, setUrl] = useState("https://www.instagram.com/archana.tech/");
  const [qr, setQr] = useState("");

  const generateQr = async () => {
    const cleanUrl = url.trim();

    if (!cleanUrl) return;

    const qrData = await QRCode.toDataURL(cleanUrl, {
      color: {
        dark: "#111827",
        light: "#ffffff",
      },
      errorCorrectionLevel: "H",
      margin: 2,
      width: 720,
    });

    setQr(qrData);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070f] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <nav className="animate-fade-in sticky top-0 z-20 border-b border-white/10 bg-[#05070f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="relative h-11 w-11 overflow-hidden rounded-lg border border-white/10 bg-black">
              <Image
                src="/archana-logo.png"
                alt="Archana App logo"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-[0.22em] text-white">
                ARCHANA
              </span>
              <span className="block text-xs text-cyan-200/80">App Studio</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#generator" className="transition hover:text-white">
              QR Generator
            </a>
            <a href="#layanan" className="transition hover:text-white">
              Layanan
            </a>
            <a href="#kontak" className="transition hover:text-white">
              Kontak
            </a>
          </div>

          <a
            href="https://www.instagram.com/archana.tech/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10"
          >
            IG Archana
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-12 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-20 md:pt-18"
      >
        <div className="animate-glow-shift absolute inset-x-0 top-0 -z-0 h-96 bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.22),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.2),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />

        <div className="relative z-10 flex flex-col justify-center">
          <p className="animate-fade-up mb-5 w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-100">
            Digital partner dari Klaten, Jawa Tengah
          </p>
          <h1 className="animate-fade-up delay-100 max-w-3xl text-5xl font-black leading-[0.98] tracking-normal text-white md:text-7xl">
            Archana App bantu usaha tampil lebih siap digital.
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Buat QR code untuk promosi, katalog, menu, event, link Instagram,
            dan halaman bisnis. Cepat dibuat, mudah dibagikan, dan cocok untuk
            usaha lokal yang ingin terlihat profesional.
          </p>

          <div className="animate-fade-up delay-300 mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#generator"
              className="rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Coba Generator QR
            </a>
            <a
              href="https://www.instagram.com/archana.tech/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Lihat Instagram
            </a>
          </div>

          <div className="animate-fade-up delay-400 mt-10 grid max-w-xl grid-cols-3 gap-3 text-sm">
            <div className="border-l border-cyan-300/60 pl-4">
              <strong className="block text-2xl text-white">Klaten</strong>
              <span className="text-slate-400">Base kami</span>
            </div>
            <div className="border-l border-fuchsia-300/60 pl-4">
              <strong className="block text-2xl text-white">QR</strong>
              <span className="text-slate-400">Untuk promo</span>
            </div>
            <div className="border-l border-emerald-300/60 pl-4">
              <strong className="block text-2xl text-white">Web</strong>
              <span className="text-slate-400">Untuk bisnis</span>
            </div>
          </div>
        </div>

        <div className="animate-fade-up delay-300 relative z-10 flex items-center justify-center">
          <div className="animate-float-soft relative aspect-square w-full max-w-[520px] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-cyan-950/40">
            <Image
              src="/archana-logo.png"
              alt="Logo Archana App dengan roket"
              fill
              sizes="(max-width: 768px) 90vw, 520px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section
        id="generator"
        className="border-y border-white/10 bg-white/[0.03] px-5 py-16 md:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <div className="animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
              Free tool
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
              QR Code Generator untuk link bisnismu.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              Masukkan URL, generate QR, lalu download. Cocok ditempel di
              banner, kartu nama, meja kasir, poster event, packaging, atau
              katalog produk.
            </p>
          </div>

          <div className="animate-fade-up delay-100 rounded-2xl border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-black/30 transition hover:border-cyan-300/30 md:p-7">
            <label
              htmlFor="qr-url"
              className="text-sm font-semibold text-slate-200"
            >
              Link tujuan
            </label>
            <div className="mt-3 flex flex-col gap-3 lg:flex-row">
              <input
                id="qr-url"
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="min-h-12 flex-1 rounded-xl border border-white/10 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/15"
              />

              <button
                onClick={generateQr}
                className="min-h-12 rounded-xl bg-violet-500 px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-violet-400"
              >
                Generate QR
              </button>
            </div>

            <div className="mt-6 grid gap-5 rounded-xl border border-white/10 bg-white/[0.04] p-4 md:grid-cols-[220px_1fr]">
              <div className="flex min-h-[220px] items-center justify-center rounded-xl bg-white p-4">
                {qr ? (
                  <img
                    src={qr}
                    alt="QR Code hasil generate"
                    className="animate-fade-up h-full max-h-48 w-full max-w-48 object-contain"
                  />
                ) : (
                  <div className="grid h-44 w-44 place-items-center rounded-lg border border-dashed border-slate-300 text-center text-sm font-semibold text-slate-500">
                    QR akan muncul di sini
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between gap-5">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Siap dipakai untuk promosi
                  </h3>
                  <p className="mt-2 leading-7 text-slate-300">
                    Setelah QR muncul, download sebagai PNG dan gunakan di
                    desain promosi online maupun cetak.
                  </p>
                </div>

                {qr ? (
                  <a
                    href={qr}
                    download="archana-qrcode.png"
                    className="w-fit rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
                  >
                    Download PNG
                  </a>
                ) : (
                  <p className="text-sm text-slate-400">
                    Tips: gunakan link Instagram, Google Maps, katalog produk,
                    atau landing page promo.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="layanan" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div className="animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
              Archana App
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Bukan cuma QR, kami bantu usaha punya wajah digital.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="animate-fade-up rounded-xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]"
              >
                <div className="mb-5 h-1.5 w-12 rounded-full bg-cyan-300" />
                <h3 className="text-lg font-bold text-white">{service}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Dibuat ringkas, modern, dan mudah dipakai untuk kebutuhan
                  bisnis harian.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="kontak"
        className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-20"
      >
        <div className="animate-fade-up grid gap-6 rounded-2xl border border-cyan-300/20 bg-cyan-300 px-6 py-8 text-slate-950 md:grid-cols-[1fr_auto] md:items-center md:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em]">
              Mulai dari satu link
            </p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              Mau QR promo, landing page, atau sistem kecil untuk usahamu?
            </h2>
          </div>

          <a
            href="https://www.instagram.com/archana.tech/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Hubungi via Instagram
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Archana App. Base in Klaten, Jawa Tengah.</p>
          <div className="flex flex-wrap gap-4">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  channel.href.startsWith("http") ? "noreferrer" : undefined
                }
                className="transition hover:text-white"
              >
                {channel.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
