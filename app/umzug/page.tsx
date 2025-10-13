// app/umzug/page.tsx
import { Metadata } from "next";
import { Truck, CheckCircle2, Clock, Shield, Phone, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Umzug in Bern – NovaClean & Move",
  description:
    "Zuverlässige Umzugsfirma in Bern: Demontage & Montage, sicherer Transport, Möbellift auf Anfrage. Faire Preise, termintreu, versichert.",
  alternates: { canonical: "https://novaclean-move.ch/umzug" },
  openGraph: {
    title: "Umzug in Bern – NovaClean & Move",
    description:
      "Zuverlässige Umzugsfirma in Bern: Demontage & Montage, sicherer Transport, Möbellift auf Anfrage.",
    url: "https://novaclean-move.ch/umzug",
    type: "website",
    images: ["/img/move-hero.jpg"],
  },
};

const COMPANY = {
  phone: "+41 77 943 76 67",
  whatsapp: "https://wa.me/41779437667",
  email: "info@novaclean-move.ch",
};

export default function UmzugPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: "NovaClean & Move",
    url: "https://novaclean-move.ch/umzug",
    areaServed: ["Bern", "Köniz", "Ostermundigen", "Ittigen", "Zollikofen", "Thun"],
    telephone: COMPANY.phone,
    email: COMPANY.email,
    image: "https://novaclean-move.ch/img/move-hero.jpg",
    serviceType: "Umzug",
  };

  return (
    <>
      {/* SEO: JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO mit großem Bild */}
      <section
        className="w-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.35), rgba(15,23,42,0.6)), url('/img/move-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 text-white">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-extrabold">Umzug in Bern – sorgfältig, schnell & fair</h1>
            <p className="mt-4 text-lg text-slate-100">
              Demontage & Montage, sicherer Transport, Schutzmaterial inklusive. Möbellift auf Anfrage.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge icon={<Shield className="w-4 h-4" />}>Versichert</Badge>
              <Badge icon={<Clock className="w-4 h-4" />}>Termintreu</Badge>
              <Badge icon={<Truck className="w-4 h-4" />}>Region Bern</Badge>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA href="/#offerte">Kostenlose Offerte</CTA>
              <CTA href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} outline>
                <Phone className="w-4 h-4 mr-2" /> Anrufen
              </CTA>
              <CTA href={COMPANY.whatsapp} outline target="_blank">
                <MessageSquare className="w-4 h-4 mr-2" /> WhatsApp
              </CTA>
            </div>
          </div>
        </div>
      </section>

      {/* Inhalte */}
      <main className="mx-auto max-w-6xl px-4 py-14 space-y-14">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold">Unsere Umzugsleistungen</h2>
          <p className="text-slate-600 mt-2">Alles aus einer Hand – transparent und auf deinen Umzug abgestimmt.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <Feature title="Demontage & Montage" points={["Möbel demontieren/aufbauen", "Schutzmaterial inklusive", "Sorgfältige Kennzeichnung"]} />
            <Feature title="Transport & Tragen" points={["Sicherer Transport", "Trage- & Transportversicherung", "Optional: Möbellift"]} />
            <Feature title="Zusatzservices" points={["Entsorgung/Räumung", "Endreinigung mit Abnahmegarantie", "Fixpreis nach Besichtigung"]} />
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold">Transparente Preise</h2>
          <p className="text-slate-600 mt-2">Beispiele – final nach Distanz, Etage, Größe und Aufwand.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <Price title="Umzug Basic" price="CHF 120/h" note="2 Macher + Lieferwagen" />
            <Price title="Umzug Plus" price="CHF 160/h" note="3 Macher + Lieferwagen" highlight />
            <Price title="Fixpreis" price="auf Anfrage" note="Nach kurzer Video-Besichtigung" />
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6">
          <h3 className="text-xl font-semibold">Kostenlose Offerte erhalten</h3>
          <p className="text-slate-600 mt-1">Objektgröße & Wunschtermin senden – wir melden uns noch heute.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <CTA href="/#offerte"><Mail className="w-4 h-4 mr-2" /> Anfrageformular öffnen</CTA>
            <CTA href={COMPANY.whatsapp} outline target="_blank"><MessageSquare className="w-4 h-4 mr-2" /> WhatsApp schreiben</CTA>
          </div>
        </section>
      </main>
    </>
  );
}

/* --- kleine UI-Helfer --- */
function Badge({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return <span className="inline-flex items-center gap-1 bg-white/90 text-slate-800 px-3 py-1 rounded-xl text-sm shadow-sm">{icon} {children}</span>;
}
function CTA({ href, children, outline, target }: { href: string; children: React.ReactNode; outline?: boolean; target?: string }) {
  return (
    <Link href={href} target={target}
      className={outline ? "inline-flex items-center rounded-2xl border border-white/70 bg-white/10 hover:bg-white/20 transition px-4 py-2"
                         : "inline-flex items-center rounded-2xl bg-white text-slate-900 hover:bg-slate-100 transition px-4 py-2"}>
      {children}
    </Link>
  );
}
function Feature({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
      <div className="font-semibold flex items-center gap-2"><Truck className="w-5 h-5 text-slate-700" /> {title}</div>
      <ul className="mt-3 space-y-2 text-slate-700">
        {points.map((p, i) => (<li key={i} className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5" /> {p}</li>))}
      </ul>
    </div>
  );
}
function Price({ title, price, note, highlight }: { title: string; price: string; note: string; highlight?: boolean }) {
  return (
    <div className={`p-6 bg-white rounded-3xl border border-slate-200 shadow-sm ${highlight ? "ring-2 ring-slate-900" : ""}`}>
      <div className="text-xl font-semibold">{title}</div>
      <div className="text-3xl font-extrabold mt-1">{price}</div>
      <div className="text-sm text-slate-500">{note}</div>
    </div>
  );
}
