import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.novaclean-move.ch";

  const urls = [
    "",
    "/umzug",
    "/endreinigung",
    "/unterhaltsreinigung",
    "/entsorgung",
    "/preise",
    "/bewertungen",
    "/ueber-uns",
    "/kontakt",
    "/offerte",
    "/agb",
    "/datenschutz",
    "/impressum",

    // Einsatzgebiete
    "/einsatzgebiete",
    "/einsatzgebiete/bern",
    "/einsatzgebiete/biel",
    "/einsatzgebiete/solothurn",
    "/einsatzgebiete/freiburg",
    "/einsatzgebiete/zuerich-winterthur",
    "/einsatzgebiete/schaffhausen",
  ];

  return urls.map((url) => ({
    url: base + url,
    lastModified: new Date(),
    changeFrequency: url === "" ? "weekly" : "monthly",
    priority: url === "" ? 1 : url === "/einsatzgebiete" ? 0.9 : 0.8,
  }));
}