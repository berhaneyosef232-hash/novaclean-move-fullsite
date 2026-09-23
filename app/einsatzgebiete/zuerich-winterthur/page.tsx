import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umzug & Reinigung Zürich & Winterthur | NovaClean & Move",
  description:
    "NovaClean & Move für Umzug, Endreinigung, Unterhaltsreinigung und Entsorgung in Zürich, Winterthur und Umgebung. Jetzt kostenlose Offerte anfragen.",
};

export default function ZuerichWinterthurPage() {
  return (
    <main>
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-amber-400">
            Zürich & Winterthur
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Umzug & Reinigung in Zürich & Winterthur
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            NovaClean & Move unterstützt Sie bei Umzügen, Endreinigungen,
            Unterhaltsreinigungen und Entsorgungen in Zürich, Winterthur
            und Umgebung.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/offerte"
              className="rounded-lg bg-amber-400 px-6 py-3 font-semibold text-black transition hover:bg-amber-300"
            >
              Kostenlose Offerte
            </Link>

            <a
              href="https://wa.me/41788884727"
              className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold text-black md:text-4xl">
            Unsere Dienstleistungen in Zürich & Winterthur
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Wir unterstützen private und geschäftliche Kunden bei
            Wohnungswechseln, Reinigungen und Räumungen in der Region.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Service
              title="Umzug"
              text="Wir unterstützen beim Tragen und Transportieren Ihres Umzugsguts und sorgen für einen gut organisierten Ablauf."
            />

            <Service
              title="Endreinigung"
              text="Gründliche Endreinigung Ihrer Wohnung für die Übergabe mit Abnahmegarantie."
            />

            <Service
              title="Unterhaltsreinigung"
              text="Regelmässige Reinigung von Wohnungen, privaten Haushalten, Büros und weiteren Räumlichkeiten."
            />

            <Service
              title="Entsorgung & Räumung"
              text="Unterstützung bei Räumungen sowie beim Transport nicht mehr benötigter Gegenstände zur Entsorgung."
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="font-semibold text-amber-600">
            Ihr Ansprechpartner in Zürich, Winterthur & Umgebung
          </p>

          <h2 className="mt-2 text-3xl font-bold text-black">
            Izak Brehane
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Für Fragen zu Ihrem Umzug, Ihrer Reinigung oder Entsorgung in
            Zürich, Winterthur und Umgebung können Sie uns direkt kontaktieren.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="tel:+41788884727"
              className="rounded-lg bg-black px-6 py-3 font-semibold text-white"
            >
              +41 78 888 47 27
            </a>

            <a
              href="https://wa.me/41788884727"
              className="rounded-lg bg-amber-400 px-6 py-3 font-semibold text-black"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold">
            Umzug oder Reinigung in Zürich oder Winterthur geplant?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Teilen Sie uns die wichtigsten Angaben zu Ihrem Auftrag mit und
            fragen Sie eine unverbindliche Offerte an.
          </p>

          <Link
            href="/offerte"
            className="mt-8 inline-flex rounded-lg bg-amber-400 px-7 py-3 font-semibold text-black transition hover:bg-amber-300"
          >
            Kostenlose Offerte anfragen
          </Link>
        </div>
      </section>
    </main>
  );
}

function Service({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-7">
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <p className="mt-3 leading-7 text-gray-600">{text}</p>
    </div>
  );
}