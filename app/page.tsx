
"use client";
import { useState } from "react";
import { Move, Sparkles, Truck, Recycle, Phone, Mail, MapPin, Clock, Shield, CheckCircle2, Quote, MessageSquare, ArrowRight, SwissFranc } from "lucide-react";

const COMPANY = {
  name: "NovaClean & Move",
  phone: "+41 77 943 76 67",
  email: "info@novaclean-move.ch",
  whatsapp: "https://wa.me/41779437667",
  address: "Statthalterstrasse 37, 3018 Bern, Schweiz",
  serviceArea: "Bern • Köniz • Ostermundigen • Ittigen • Zollikofen • Thun",
  opening: "Mo–Fr 07:30–18:30, Sa 09:00–14:00",
};

export default function Page() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData as any)),
      });
      if (!res.ok) throw new Error("send-failed");
      setSent(true); form.reset();
    } catch (err) { setError("Senden fehlgeschlagen – bitte später erneut versuchen."); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <div className="w-full bg-slate-900 text-white text-sm">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> {COMPANY.phone}</span>
            <span className="hidden md:flex items-center gap-1"><Mail className="w-4 h-4" /> {COMPANY.email}</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-xl bg-white/10">Versichert & zuverlässig</span>
            <span className="px-2 py-0.5 rounded-xl bg-white/10">Kostenlose Offerte</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-slate-900 text-white">
              <Move className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-lg">{COMPANY.name}</div>
              <div className="text-xs text-slate-500">Reinigung • Umzug • Endreinigung mit Abnahmegarantie</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-slate-700">Leistungen</a>
            <a href="#preise" className="hover:text-slate-700">Preise</a>
            <a href="#bewertungen" className="hover:text-slate-700">Bewertungen</a>
            <a href="#ueber-uns" className="hover:text-slate-700">Über uns</a>
            <a href="#agb" className="hover:text-slate-700">AGB</a>
            <a href="#kontakt" className="hover:text-slate-700">Kontakt</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="rounded-2xl bg-slate-900 text-white px-4 py-2">WhatsApp anfragen</a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pt-10 pb-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Stressfrei umziehen & glänzend sauber – <span className="text-slate-600">in & um Bern</span></h1>
          <p className="mt-4 text-slate-600 text-lg">Wir kümmern uns um <strong>Umzug, Endreinigung mit Abnahmegarantie</strong> und laufende Unterhaltsreinigung. Pünktlich, sorgfältig und fair bepreist.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-2 py-1 rounded-xl border border-slate-200 text-sm inline-flex items-center gap-1"><Shield className="w-4 h-4"/>Betriebshaftpflicht</span>
            <span className="px-2 py-1 rounded-xl border border-slate-200 text-sm inline-flex items-center gap-1"><Clock className="w-4 h-4"/>Termintreu</span>
            <span className="px-2 py-1 rounded-xl border border-slate-200 text-sm inline-flex items-center gap-1"><MapPin className="w-4 h-4"/>Region {COMPANY.serviceArea}</span>
          </div>
          <div className="mt-8 flex gap-3">
            <a href="#offerte" className="rounded-2xl bg-slate-900 text-white px-4 py-2">Kostenlose Offerte anfordern</a>
            <a href="#services" className="rounded-2xl border border-slate-300 px-4 py-2">Leistungen ansehen</a>
          </div>
          <p className="mt-3 text-sm text-slate-500">Öffnungszeiten: {COMPANY.opening}</p>
        </div>
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6">
            <div className="grid grid-cols-2 gap-4">
              <Feature icon={<Truck className="w-5 h-5"/>} title="Umzug" text="Möbelmontage, Transport, Möbellift auf Anfrage"/>
              <Feature icon={<Sparkles className="w-5 h-5"/>} title="Endreinigung" text="Mit Abnahmegarantie inkl. Protokoll"/>
              <Feature icon={<Sparkles className="w-5 h-5"/>} title="Unterhalt" text="Privat & Büro – wöchentlich/monatlich"/>
              <Feature icon={<Recycle className="w-5 h-5"/>} title="Entsorgung" text="Räumungen, Keller, Sperrgut"/>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Unsere Leistungen</h2>
          <p className="text-slate-600 mt-2">Transparent, professionell und auf Ihre Bedürfnisse abgestimmt.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard icon={Truck} title="Umzug" points={["Demontage & Montage","Sicherer Transport","Schutzmaterial inklusive","Optional: Möbellift"]} hint="Ab CHF 120/h (2 Personen + Lieferwagen)"/>
          <ServiceCard icon={Sparkles} title="Endreinigung" points={["Abnahmegarantie","Fenster, Küche, Bad","Profi-Geräte & -Mittel","Protokoll & Fotos"]} hint="2–4 Zi. Whg. ab CHF 590 pauschal"/>
          <ServiceCard icon={Sparkles} title="Unterhaltsreinigung" points={["Privat & Büro","Fixe Zeiten","Öko-Mittel möglich","Schlüssel-Übergabe sicher"]} hint="ab CHF 42/h pro Reinigungskraft"/>
        </div>
      </section>

      <section id="preise" className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Transparente Preise</h2>
              <p className="text-slate-600 mt-2">Faire Pakete ohne versteckte Kosten. Fixpreis nach Besichtigung möglich.</p>
            </div>
            <span className="px-2 py-0.5 rounded-xl border border-slate-200 text-sm inline-flex items-center gap-1"><SwissFranc className="w-4 h-4"/>MWST-optimal je nach Umsatz</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <PriceCard title="Umzug Basic" price="CHF 120/h" note="2 Macher + Lieferwagen" features={["Schutzdecken & Gurte","Kilometer in Region Bern inkl.","Trage- & Transportversicherung"]} />
            <PriceCard title="Endreinigung" price="ab CHF 590" note="2–4 Zimmer Wohnung" features={["Abnahmegarantie","Material inkl.","Fixpreis nach Objekt"]} highlight />
            <PriceCard title="Abo Reinigung" price="ab CHF 42/h" note="wöchentlich/14-täglich" features={["Fixe Zeiten","Vertretung bei Ausfall","Öko-Mittel auf Wunsch"]} />
          </div>
          <p className="text-xs text-slate-500 mt-3">* Preise sind Richtwerte. Endpreise nach Objektgrösse, Etage, Distanz und Aufwand.</p>
        </div>
      </section>

      <section id="bewertungen" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Kundinnen & Kunden über uns</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Testimonial name="Nina M." text="Super zuverlässig! Die Endreinigung wurde vom Vermieter sofort abgenommen."/>
          <Testimonial name="Carmelo T." text="Top Team – Umzug in Rekordzeit und alles heil angekommen."/>
          <Testimonial name="Valentin P." text="Sehr freundlicher Service, transparente Preise. Klare Empfehlung!"/>
        </div>
      </section>

      <section id="ueber-uns" className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-center gap-3 mb-4">
          <Move className="w-6 h-6 text-slate-700" />
          <h2 className="text-2xl md:text-3xl font-bold">Über uns</h2>
        </div>
        <p className="text-slate-600 leading-relaxed"><strong>NovaClean & Move</strong> ist ein junges, engagiertes Unternehmen aus Bern, gegründet von <strong>Yosef Berhane</strong>. Wir stehen für zuverlässige, saubere und stressfreie Umzüge und Reinigungen mit persönlicher Betreuung.</p>
        <p className="text-slate-600 mt-4">Ob Privat- oder Geschäftskunde: Wir behandeln jedes Objekt, als wäre es unser eigenes. Freundlichkeit, Pünktlichkeit und Qualität stehen bei uns an erster Stelle.</p>
      </section>

      <section id="offerte" className="bg-slate-100/60 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Kostenlose Offerte anfordern</h2>
            <p className="text-slate-600 mt-2">Beschreibe kurz dein Objekt und Wunschtermin – wir melden uns noch heute.</p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 mt-0.5"/>Antwort in 2–4 Stunden</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 mt-0.5"/>Fixpreis nach kurzer Besichtigung per Video</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 mt-0.5"/>Abnahmeprotokoll bei Endreinigung inklusive</li>
            </ul>
          </div>
          <div id="kontakt" className="rounded-3xl border-slate-200 shadow-sm bg-white p-6">
            {!sent ? (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input required name="name" placeholder="Vor- und Nachname" className="border border-slate-300 rounded-xl px-3 py-2" />
                  <input required type="tel" name="phone" placeholder="Telefon" className="border border-slate-300 rounded-xl px-3 py-2" />
                </div>
                <input required type="email" name="email" placeholder="E-Mail" className="border border-slate-300 rounded-xl px-3 py-2 w-full" />
                <input name="address" placeholder="Adresse / Ort" className="border border-slate-300 rounded-xl px-3 py-2 w-full" />
                <div className="grid md:grid-cols-2 gap-4">
                  <input name="date" placeholder="Wunschtermin" className="border border-slate-300 rounded-xl px-3 py-2" />
                  <input name="size" placeholder="Wohnungsgrösse (z. B. 3.5 Zi)" className="border border-slate-300 rounded-xl px-3 py-2" />
                </div>
                <textarea name="message" placeholder="Was dürfen wir für dich erledigen? (Umzug, Endreinigung, Abo…)" className="border border-slate-300 rounded-xl px-3 py-2 w-full min-h-28" />
                <button type="submit" disabled={loading} className="w-full rounded-2xl bg-slate-900 text-white px-4 py-2">
                  {loading ? "Wird gesendet…" : "Anfrage senden"}
                </button>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <p className="text-xs text-slate-500">Mit dem Absenden akzeptierst du unsere AGB & Datenschutz.</p>
              </form>
            ) : (
              <div className="text-center py-6">
                <h3 className="font-semibold text-lg">Danke! 🎉</h3>
                <p className="text-slate-600">Wir melden uns schnellstmöglich unter deiner angegebenen Nummer oder per E-Mail.</p>
                <div className="mt-4">
                  <a href={`mailto:${COMPANY.email}`} className="rounded-2xl border border-slate-300 px-4 py-2 inline-flex items-center gap-2"><Mail className="w-4 h-4"/>Mail jetzt schreiben</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="agb" className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-slate-700" />
          <h2 className="text-2xl md:text-3xl font-bold">Allgemeine Geschäftsbedingungen (AGB)</h2>
        </div>
        <ul className="list-disc pl-6 text-slate-600 space-y-3">
          <li>Offerten sind unverbindlich. Ein Auftrag gilt erst als bestätigt, wenn er schriftlich oder per E-Mail angenommen wurde.</li>
          <li>Bei Absage weniger als 48 Stunden vor Ausführung können Stornogebühren anfallen.</li>
          <li>Der Kunde stellt Zugang zu Räumen und Parkmöglichkeiten sicher.</li>
          <li>Haftung im Rahmen der Betriebshaftpflichtversicherung.</li>
          <li>Zahlung nach Ausführung in bar oder per Rechnung innerhalb 10 Tagen.</li>
        </ul>
      </section>

      <footer className="bg-slate-900 text-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-semibold text-lg"><Move className="w-5 h-5"/>{COMPANY.name}</div>
            <p className="text-slate-300 mt-3">Reinigung & Umzug in Bern und Umgebung. Sorgfältig, freundlich, fair.</p>
            <div className="flex gap-3 mt-4">
              <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-slate-300 hover:text-white"><MessageSquare className="w-4 h-4"/> WhatsApp</a>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-3">Kontakt</div>
            <ul className="space-y-2 text-slate-300">
              <li><Phone className="w-4 h-4 inline-block mr-1"/>{COMPANY.phone}</li>
              <li><Mail className="w-4 h-4 inline-block mr-1"/>{COMPANY.email}</li>
              <li><MapPin className="w-4 h-4 inline-block mr-1"/>{COMPANY.address}</li>
              <li><Clock className="w-4 h-4 inline-block mr-1"/>{COMPANY.opening}</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Rechtliches</div>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#agb" className="hover:underline">AGB</a></li>
              <li><a href="#ueber-uns" className="hover:underline">Über uns</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 py-4 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} NovaClean & Move – Yosef Berhane, Bern. Alle Rechte vorbehalten.
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "LocalBusiness",
        name: COMPANY.name, url: "https://novaclean-move.ch", telephone: COMPANY.phone,
        address: { "@type": "PostalAddress", streetAddress: "Statthalterstrasse 37", postalCode: "3018", addressLocality: "Bern", addressCountry: "CH" },
        areaServed: ["Bern","Köniz","Ostermundigen","Ittigen","Zollikofen","Thun"]
      })}} />
    </div>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="p-4 border border-slate-200 rounded-2xl">
      <div className="flex items-center gap-2 font-semibold"><span className="text-slate-700">{icon}</span> {title}</div>
      <p className="text-sm text-slate-600 mt-1">{text}</p>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, points, hint }: { icon: any; title: string; points: string[]; hint: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 shadow-sm p-5">
      <div className="pb-2 text-lg font-semibold flex items-center gap-2"><Icon className="w-5 h-5" /> {title}</div>
      <ul className="space-y-2 text-slate-700">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/>{p}</li>
        ))}
      </ul>
      <p className="text-xs text-slate-500 mt-3">{hint}</p>
    </div>
  );
}

function PriceCard({ title, price, note, features, highlight }: { title: string; price: string; note: string; features: string[]; highlight?: boolean }) {
  return (
    <div className={`rounded-3xl border border-slate-200 shadow-sm p-5 ${highlight ? 'ring-2 ring-slate-900' : ''}`}>
      <div className="text-xl font-bold">{title}</div>
      <div className="text-3xl font-extrabold mt-1">{price}</div>
      <div className="text-sm text-slate-500">{note}</div>
      <ul className="mt-4 space-y-2 text-slate-700">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/>{f}</li>
        ))}
      </ul>
      <div className="mt-5">
        <a href="#offerte" className="w-full block text-center rounded-2xl bg-slate-900 text-white px-4 py-2">Jetzt anfragen</a>
      </div>
    </div>
  );
}

function Testimonial({ name, text }: { name: string; text: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 shadow-sm p-5">
      <Quote className="w-6 h-6 text-slate-400"/>
      <p className="mt-3 text-slate-700">{text}</p>
      <div className="mt-4 font-semibold">{name}</div>
    </div>
  );
}
