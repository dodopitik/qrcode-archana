import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Archana App QR Code Generator",
    short_name: "Archana QR",
    description:
      "Generator QR code gratis untuk link promosi, katalog, menu, event, dan bisnis lokal.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070f",
    theme_color: "#05070f",
    lang: "id",
    icons: [
      {
        src: "/archana-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
