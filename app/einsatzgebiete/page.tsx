import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Einsatzgebiete | Umzug & Reinigung | NovaClean & Move",
  description:
    "NovaClean & Move für Umzug, Endreinigung, Unterhaltsreinigung und Entsorgung in Bern, Biel, Solothurn, Freiburg, Zürich, Winterthur und Schaffhausen.",
};

const regions = [
  {
    name: "Bern & Umgebung",
    href: "/einsatzgebiete/bern",
    text: "Umzug, Endreinigung, Unterhaltsreinigung und Entsorgung in Bern und Umgebung.",
  },
  {
    name: "Biel/Bienne & Umgebung",
    href: "/einsatzgebiete/biel",
    text: "Professionelle Umzugs- und Reinigungsdienstleistungen in Biel/Bienne und Umgebung.",
  },
  {
    name: "Solothurn & Umgebung",
    href: "/einsatzgebiete/solothurn",
    text: "Zuverlässige Unterstützung für Umzug, Reinigung und Entsorgung in Solothurn und Umgebung.",
  },
  {
    name: "Freiburg/Fribourg & Umgebung",
    href: "/einsatzgebiete/freiburg",
    text: "Umzug und Reinigung für Privatpersonen und Unternehmen in Freiburg/Fribourg und Umgebung.",
  },
  {
    name: "Zürich & Winterthur",
    href: "/einsatzgebiete/zuerich-winterthur",
    text: "Umzug, Endreinigung und weitere Dienstleistungen in Zürich, Winterthur und Umgebung.",
  },
  {
    name: "Schaffhausen & Umgebung",
    href: "/einsatzgebiete/schaffhausen",
    text: "Persönlicher Service für Umzüge, Reinigungen und Entsorgungen in Schaffhausen und Umgebung.",
  },
];

export default function EinsatzgebietePage() {
  return (
    <main>
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-amber-400">
            NovaClean & Move
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Unsere Einsatzgebiete
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Wir unterstützen Sie bei Umzug, Endreinigung,
            Unterhaltsreinigung und Entsorgung in mehreren Regionen der
            Schweiz.
          </p>

          <div className="mt-8">
            <Link
              href="/offerte"
              className="inline-flex rounded-lg bg-amber-400 px-6 py-3 font-semibold text-black transition hover:bg-amber-300"
            >
              Kostenlose Offerte
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold text-black md:text-4xl">
              In diesen Regionen sind wir für Sie da
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Wählen Sie Ihre Region und erfahren Sie mehr über unsere
              Dienstleistungen vor Ort.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <Link
                key={region.href}
                href={region.href}
                className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-black group-hover:text-amber-600">
                  {region.name}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {region.text}
                </p>

                <p className="mt-6 font-semibold text-black">
                  Region ansehen →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-black">
            Ihre Ortschaft ist nicht aufgeführt?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Fragen Sie uns trotzdem an. Wir prüfen gerne, ob wir Ihren
            Umzug oder Ihre Reinigung an Ihrem Standort durchführen können.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/offerte"
              className="rounded-lg bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Offerte anfragen
            </Link>

            <Link
              href="/kontakt"
              className="rounded-lg border border-black px-6 py-3 font-semibold text-black transition hover:bg-black hover:text-white"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}