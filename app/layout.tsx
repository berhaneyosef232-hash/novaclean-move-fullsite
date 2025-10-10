
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NovaClean & Move – Reinigung & Umzug in Bern",
  description: "Umzug, Endreinigung mit Abnahmegarantie und Unterhaltsreinigung in Bern. Kostenlose Offerte.",
  metadataBase: new URL("https://novaclean-move.ch"),
  openGraph: {
    title: "NovaClean & Move",
    description: "Reinigung & Umzug in Bern",
    url: "https://novaclean-move.ch",
    siteName: "NovaClean & Move",
    locale: "de_CH",
    type: "website",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body>{children}</body>
    </html>
  );
}
