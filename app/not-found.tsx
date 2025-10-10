
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-slate-50 text-slate-800 px-4">
      <h1 className="text-5xl font-extrabold mb-4">404</h1>
      <p className="text-lg mb-6">Die Seite, die du suchst, wurde nicht gefunden.</p>
      <a href="/" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-2 hover:bg-slate-800 transition">Zur Startseite</a>
    </div>
  );
}
