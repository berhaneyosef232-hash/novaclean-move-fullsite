import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umzug & Reinigung Bern | NovaClean & Move",
  description:
    "NovaClean & Move für Umzug, Endreinigung, Unterhaltsreinigung und Entsorgung in Bern und Umgebung. Jetzt kostenlose Offerte anfragen.",
};

export default function BernPage() {
  return (
    <main>
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-amber-400">
            Bern & Umgebung
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Umzug & Reinigung in Bern
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            NovaClean & Move unterstützt Privatpersonen und Unternehmen
            zuverlässig bei Umzügen, Endreinigungen, Unterhaltsreinigungen
            und Entsorgungen in Bern und Umgebung.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/offerte"
              className="rounded-lg bg-amber-400 px-6 py-3 font-semibold text-black transition hover:bg-amber-300"
            >
              Kostenlose Offerte
            </Link>

            <a
              href="https://wa.me/41779437667"
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
            Unsere Dienstleistungen in Bern
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">Umzug</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Unterstützung bei privaten und geschäftlichen Umzügen –
                vom Tragen und Transportieren bis zum sicheren Einzug.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">Endreinigung</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Gründliche Wohnungsreinigung für die Übergabe mit
                Abnahmegarantie.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">Unterhaltsreinigung</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Regelmässige Reinigung für Wohnungen, Haushalte,
                Büros und weitere Räumlichkeiten.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">Entsorgung & Räumung</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Wir unterstützen bei Räumungen und transportieren
                nicht mehr benötigte Gegenstände zur Entsorgung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
  <div className="mx-auto max-w-7xl px-6 py-16">
    <p className="font-semibold text-amber-600">
      Ihr Ansprechpartner in Bern & Umgebung
    </p>

    <h2 className="mt-2 text-3xl font-bold text-black">
      Yosef Berhane
    </h2>

    <p className="mt-4 max-w-3xl leading-7 text-gray-600">
      Für Fragen zu Ihrem Umzug, Ihrer Reinigung oder Entsorgung in
      Bern und Umgebung können Sie mich direkt kontaktieren.
    </p>

    <div className="mt-6 flex flex-wrap gap-4">
      <a
        href="tel:+41779437667"
        className="rounded-lg bg-black px-6 py-3 font-semibold text-white"
      >
        +41 77 943 76 67
      </a>

      <a
        href="https://wa.me/41779437667"
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
            Umzug oder Reinigung in Bern geplant?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Teilen Sie uns die wichtigsten Angaben mit und erhalten Sie
            eine unverbindliche Offerte.
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