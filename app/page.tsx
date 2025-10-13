"use client";

import { useState } from "react";
import {
  Move,
  Sparkles,
  Truck,
  Recycle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  CheckCircle2,
  Quote,
  MessageSquare,
  SwissFranc,
} from "lucide-react";

/* ======================================================
   BASIS FIRMENINFOS
   ====================================================== */
const COMPANY = {
  name: "NovaClean & Move",
  phone: "+41 77 943 76 67",
  email: "info@novaclean-move.ch",
  whatsapp: "https://wa.me/41779437667",
  address: "Statthalterstrasse 37, 3018 Bern, Schweiz",
  serviceArea:
    "Bern & Umgebung · Zürich & Winterthur & Umgebung · Schaffhausen & Umgebung",
  opening: "Mo–Fr 07:30–18:30, Sa 09:00–14:00",
};

/* ======================================================
   SEITENKOMPONENTE
   ====================================================== */
export default function Page() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData as any)),
      });
      if (!res.ok) throw new Error("send-failed");
      setSent(true);
      form.reset();
    } catch (err) {
      setError("Senden fehlgeschlagen – bitte später erneut versuchen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* --- Kopfzeile (Kontaktzeile) --- */}
      <div className="w-full bg-slate-900 text-white text-sm">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" /> {COMPANY.phone}
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Mail className="w-4 h-4" /> {COMPANY.email}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-xl bg-white/10">
              Versichert & zuverlässig
            </span>
            <span className="px-2 py-0.5 rounded-xl bg-white/10">
              Kostenlose Offerte
            </span>
          </div>
        </div>
      </div>

      {/* --- Navigation --- */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-slate-900 text-white">
              <Move className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-lg">{COMPANY.name}</div>
              <div className="text-xs text-slate-500">
                Reinigung • Umzug • Endreinigung mit Abnahmegarantie
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-slate-700">
              Leistungen
            </a>
            <a href="#preise" className="hover:text-slate-700">
              Preise
            </a>
            <a href="#bewertungen" className="hover:text-slate-700">
              Bewertungen
            </a>
            <a href="#about" className="hover:text-slate-700">
              Über uns
            </a>
            <a href="#agb" className="hover:text-slate-700">
              AGB
            </a>
            <a href="#kontakt" className="hover:text-slate-700">
              Kontakt
            </a>
           <a href="/umzug" className="hover:text-slate-700">Umzug</a>

          </nav>
          <div className="flex items-center gap-2">
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-slate-900 text-white px-4 py-2"
            >
              WhatsApp anfragen
            </a>
          </div>
        </div>
      </header>

      {/* --- Hero --- */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Stressfrei umziehen & glänzend sauber –
            <span className="text-slate-600"> in & um Bern</span>
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Wir kümmern uns um <strong>Umzug, Endreinigung mit Abnahmegarantie</strong>{" "}
            und laufende Unterhaltsreinigung. Pünktlich, sorgfältig und fair bepreist.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-2 py-1 rounded-xl border border-slate-200 text-sm inline-flex items-center gap-1">
              <Shield className="w-4 h-4" />
              Betriebshaftpflicht
            </span>
            <span className="px-2 py-1 rounded-xl border border-slate-200 text-sm inline-flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Termintreu
            </span>
            <span className="px-2 py-1 rounded-xl border border-slate-200 text-sm inline-flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Region {COMPANY.serviceArea}
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6">
            <div className="grid grid-cols-2 gap-4">
              <Feature
                icon={<Truck className="w-5 h-5" />}
                title="Umzug"
                text="Möbelmontage, Transport, Möbellift auf Anfrage"
              />
              <Feature
                icon={<Sparkles className="w-5 h-5" />}
                title="Endreinigung"
                text="Mit Abnahmegarantie inkl. Protokoll"
              />
              <Feature
                icon={<Sparkles className="w-5 h-5" />}
                title="Unterhalt"
                text="Privat & Büro – wöchentlich/monatlich"
              />
              <Feature
                icon={<Recycle className="w-5 h-5" />}
                title="Entsorgung"
                text="Räumungen, Keller, Sperrgut"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Leistungen --- */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Unsere Leistungen</h2>
        <p className="text-slate-600 mb-8">
          Transparent, professionell und auf Ihre Bedürfnisse abgestimmt.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            icon={Truck}
            title="Umzug"
            points={[
              "Demontage & Montage",
              "Sicherer Transport",
              "Schutzmaterial inklusive",
              "Optional: Möbellift",
            ]}
            hint="Ab CHF 120/h (2 Personen + Lieferwagen)"
          />
          <ServiceCard
            icon={Sparkles}
            title="Endreinigung"
            points={[
              "Abnahmegarantie",
              "Fenster, Küche, Bad",
              "Profi-Geräte & -Mittel",
              "Protokoll & Fotos",
            ]}
            hint="2–4 Zi. Whg. ab CHF 590 pauschal"
          />
          <ServiceCard
            icon={Sparkles}
            title="Unterhaltsreinigung"
            points={[
              "Privat & Büro",
              "Fixe Zeiten",
              "Öko-Mittel möglich",
              "Schlüssel-Übergabe sicher",
            ]}
            hint="ab CHF 42/h pro Reinigungskraft"
          />
        </div>
      </section>

      {/* --- Preise --- */}
      <section id="preise" className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Transparente Preise</h2>
          <p className="text-slate-600 mb-8">
            Faire Pakete ohne versteckte Kosten. Fixpreis nach Besichtigung möglich.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <PriceCard
              title="Umzug Basic"
              price="CHF 120/h"
              note="2 Macher + Lieferwagen"
              features={[
                "Schutzdecken & Gurte",
                "Kilometer in Region Bern inkl.",
                "Trage- & Transportversicherung",
              ]}
            />
            <PriceCard
              title="Endreinigung"
              price="ab CHF 590"
              note="2–4 Zimmer Wohnung"
              features={["Abnahmegarantie", "Material inkl.", "Fixpreis nach Objekt"]}
              highlight
            />
            <PriceCard
              title="Abo Reinigung"
              price="ab CHF 42/h"
              note="wöchentlich/14-täglich"
              features={["Fixe Zeiten", "Vertretung bei Ausfall", "Öko-Mittel auf Wunsch"]}
            />
          </div>
        </div>
      </section>

      {/* --- Bewertungen --- */}
      <section id="bewertungen" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Kundinnen & Kunden über uns
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Testimonial
            name="Nina M."
            text="Super zuverlässig! Die Endreinigung wurde vom Vermieter sofort abgenommen."
          />
          <Testimonial
            name="Carmelo T."
            text="Top Team – Umzug in Rekordzeit und alles heil angekommen."
          />
          <Testimonial
            name="Valentin P."
            text="Sehr freundlicher Service, transparente Preise. Klare Empfehlung!"
          />
        </div>
      </section>

      {/* --- ÜBER UNS (NEU) --- */}
      <AboutSection />

      {/* --- Offerte / Kontaktformular --- */}
      {/* dein alter Offerte-Abschnitt bleibt unverändert */}

      {/* --- Footer --- */}
      <footer className="bg-slate-900 text-slate-100 mt-20">
        <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-semibold text-lg">
              <Move className="w-5 h-5" />
              {COMPANY.name}
            </div>
            <p className="text-slate-300 mt-3">
              Reinigung & Umzug in {COMPANY.serviceArea}.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-slate-300 hover:text-white"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-3">Kontakt</div>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Phone className="w-4 h-4 inline-block mr-1" />
                {COMPANY.phone}
              </li>
              <li>
                <Mail className="w-4 h-4 inline-block mr-1" />
                {COMPANY.email}
              </li>
              <li>
                <MapPin className="w-4 h-4 inline-block mr-1" />
                {COMPANY.address}
              </li>
              <li>
                <Clock className="w-4 h-4 inline-block mr-1" />
                {COMPANY.opening}
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Rechtliches</div>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#agb" className="hover:underline">
                  AGB
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  Über uns
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 py-4 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} NovaClean & Move – Yosef Berhane, Bern.
        </div>
      </footer>

      {/* --- SEO JSON-LD --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: COMPANY.name,
            url: "https://novaclean-move.ch",
            telephone: COMPANY.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Statthalterstrasse 37",
              postalCode: "3018",
              addressLocality: "Bern",
              addressCountry: "CH",
            },
            areaServed: [
              "Bern",
              "Bern Umgebung",
              "Köniz",
              "Ostermundigen",
              "Ittigen",
              "Zollikofen",
              "Zürich",
              "Zürich Umgebung",
              "Winterthur",
              "Winterthur Umgebung",
              "Schaffhausen",
              "Schaffhausen Umgebung",
            ],
          }),
        }}
      />
    </div>
  );
}

/* ======================================================
   UNTERKOMPONENTEN
   ====================================================== */
function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="p-4 border border-slate-200 rounded-2xl">
      <div className="flex items-center gap-2 font-semibold text-slate-700">
        {icon} {title}
      </div>
      <p className="text-sm text-slate-600 mt-1">{text}</p>
    </div>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  points,
  hint,
}: {
  icon: any;
  title: string;
  points: string[];
  hint: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 shadow-sm p-5">
      <div className="pb-2 text-lg font-semibold flex items-center gap-2">
        <Icon className="w-5 h-5" /> {title}
      </div>
      <ul className="space-y-2 text-slate-700">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2">
            <CheckCircle2 className="w-4 h-4 mt-0.5" />
            {p}
          </li>
        ))}
      </ul>
      <p className="text-xs text-slate-500 mt-3">{hint}</p>
    </div>
  );
}

function PriceCard({
  title,
  price,
  note,
  features,
  highlight,
}: {
  title: string;
  price: string;
  note: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border border-slate-200 shadow-sm p-5 ${
        highlight ? "ring-2 ring-slate-900" : ""
      }`}
    >
      <div className="text-xl font-bold">{title}</div>
      <div className="text-3xl font-extrabold mt-1">{price}</div>
      <div className="text-sm text-slate-500">{note}</div>
      <ul className="mt-4 space-y-2 text-slate-700">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2">
            <CheckCircle2 className="w-4 h-4 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
function Testimonial({ name, text }: { name: string; text: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 shadow-sm p-5">
      <Quote className="w-6 h-6 text-slate-400" />
      <p className="mt-3 text-slate-700">{text}</p>
      <div className="mt-4 font-semibold">{name}</div>
    </div>
  );
}

/* --- Über uns Abschnitt (Schwarz-Gold-Weiss) --- */
function AboutSection() {
  return (
    <section id="about" className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 tracking-tight">
          Über uns
        </h2>

        <p className="text-center max-w-3xl mx-auto mb-12 text-slate-200">
          <span className="font-semibold">NovaClean &amp; Move GmbH</span> wurde von{" "}
          <span className="font-semibold">Yosef Berhane</span> und{" "}
          <span className="font-semibold">Izak Brehane</span> gegründet. Wir stehen
          für Qualität, Zuverlässigkeit und faire Preise – mit Fokus auf Sauberkeit,
          Vertrauen und Kundenzufriedenheit.
          <br />
          <span className="block mt-3 text-sm uppercase tracking-wide text-[#D4AF37]">
            Regionen: Bern &amp; Umgebung · Zürich &amp; Winterthur &amp; Umgebung · Schaffhausen &amp; Umgebung
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Yosef */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-[#D4AF37]/40 hover:border-[#D4AF37] transition">
            <img
              src="/img/yosef.jpg"
              alt="Yosef Berhane"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-2 ring-[#D4AF37]"
            />
            <h3 className="text-xl font-semibold text-center">Yosef Berhane</h3>
            <p className="text-center text-slate-300">
              Geschäftsführung &amp; Kundenservice (Bern &amp; Umgebung)
            </p>
            <p className="text-center mt-2">
              📞{" "}
              <a
                href="tel:+41779437667"
                className="underline decoration-[#D4AF37] underline-offset-4"
              >
                +41 77 943 76 67
              </a>
            </p>
          </div>

          {/* Izak */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-[#D4AF37]/40 hover:border-[#D4AF37] transition">
            <img
              src="/img/izak.jpg"
              alt="Izak Brehane"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-2 ring-[#D4AF37]"
            />
            <h3 className="text-xl font-semibold text-center">Izak Brehane</h3>
            <p className="text-center text-slate-300">
              Mitgründer &amp; Ansprechpartner (Schaffhausen &amp; Umgebung · Zürich &amp; Winterthur)
            </p>
            <p className="text-center mt-2">
              📞{" "}
              <a
                href="tel:+41788884727"
                className="underline decoration-[#D4AF37] underline-offset-4"
              >
                +41 78 888 47 27
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


