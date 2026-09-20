import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

const contacts = [
  {
    name: "Izak Brehane",
    role: "Mitgründer & Ansprechpartner",
    region: "Schaffhausen & Umgebung · Zürich & Winterthur",
    phone: "+41 78 888 47 27",
    phoneHref: "+41788884727",
    image: "/img/team/izak-brehane.jpg",
  },
  {
    name: "Yosef Berhane",
    role: "Geschäftsführung & Kundenservice",
    region: "Bern & Umgebung",
    phone: "+41 77 943 76 67",
    phoneHref: "+41779437667",
    image: "/img/team/yosef-berhane.png",
  },
];

export default function Page() {
  return (
    <main>
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <p className="font-bold uppercase tracking-[.2em] text-amber-400">NovaClean & Move</p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">Kontaktieren Sie uns</h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Ob Bern, Zürich, Winterthur, Schaffhausen oder eine andere Region: Senden Sie uns Ihre Anfrage. Wir prüfen gerne, ob wir Ihren Auftrag übernehmen können.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-black">Ihre Ansprechpartner</h2>
        <div className="mt-7 grid gap-6 md:grid-cols-2">
          {contacts.map((person) => (
            <article key={person.name} className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
              <div className="grid sm:grid-cols-[190px_1fr]">
                <div className="relative min-h-64 sm:min-h-full">
                  <Image src={person.image} alt={`${person.name} – NovaClean & Move`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 190px" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black">{person.name}</h3>
                  <p className="mt-1 font-semibold">{person.role}</p>
                  <p className="mt-1 text-zinc-600">{person.region}</p>
                  <a className="mt-5 block text-xl font-black hover:text-amber-600" href={`tel:${person.phoneHref}`}>📞 {person.phone}</a>
                  <a className="mt-3 block font-semibold hover:text-amber-600" href={`mailto:${COMPANY.email}`}>✉️ {COMPANY.email}</a>
                  <a href={`https://wa.me/${person.phoneHref.replace("+", "")}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-xl bg-green-600 px-5 py-3 font-bold text-white hover:bg-green-700">WhatsApp schreiben</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-zinc-100 p-7">
            <h2 className="text-2xl font-black">Firmendaten</h2>
            <p className="mt-4">{COMPANY.address}</p>
            <p className="mt-2">{COMPANY.opening}</p>
            <p className="mt-4 text-zinc-600">Hauptsitz in Bern. Einsätze in weiteren Regionen nach Verfügbarkeit und Vereinbarung.</p>
          </div>
          <div className="rounded-3xl bg-amber-400 p-7">
            <h2 className="text-2xl font-black">Kostenlose Offerte</h2>
            <p className="mt-3">Teilen Sie uns Ort, Termin und gewünschte Leistung mit. Fotos helfen uns bei einer schnellen ersten Einschätzung.</p>
            <Link href="/offerte" className="mt-6 inline-block rounded-xl bg-zinc-950 px-6 py-3 font-bold text-white">Offerte anfragen</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
