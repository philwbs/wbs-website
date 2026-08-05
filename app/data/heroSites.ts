export type HeroIndustrySite = {
  id: string;
  industry: string;
  brand: string;
  tabLabel: string;
  url: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  cta: string;
  image: string;
  theme: "construction" | "realestate" | "restaurant" | "legal" | "medical";
  stats: readonly [string, string, string];
  services: readonly [string, string, string];
};

export const heroIndustrySites: readonly HeroIndustrySite[] = [
  {
    id: "construction",
    industry: "Bau & Erdbau",
    brand: "HINTERBERGER",
    tabLabel: "Hinterberger Bau",
    url: "hinterberger-bau.at",
    eyebrow: "BAUEN MIT VERANTWORTUNG",
    title: "Wir bewegen,",
    titleAccent: "was Zukunft schafft.",
    description: "Erdbau, Abbruch und Infrastruktur aus einer Hand. Präzise geplant, verlässlich umgesetzt.",
    cta: "Projekt besprechen",
    image: "/construction-hero.webp",
    theme: "construction",
    stats: ["25+ Jahre Erfahrung", "80 Mitarbeitende", "Regional verwurzelt"],
    services: ["Erdbau", "Abbruch", "Infrastruktur"],
  },
  {
    id: "realestate",
    industry: "Immobilien",
    brand: "RAUMWERK",
    tabLabel: "Raumwerk Immobilien",
    url: "raumwerk-immobilien.at",
    eyebrow: "AUSSERGEWÖHNLICHE IMMOBILIEN",
    title: "Wo Zukunft",
    titleAccent: "zu Hause ist.",
    description: "Ausgewählte Immobilien, persönliche Beratung und ein Blick für Räume mit bleibendem Wert.",
    cta: "Immobilien entdecken",
    image: "/realestate-hero.webp",
    theme: "realestate",
    stats: ["Exklusive Objekte", "Diskrete Beratung", "Starke Vermarktung"],
    services: ["Kaufen", "Verkaufen", "Bewerten"],
  },
  {
    id: "restaurant",
    industry: "Gastronomie",
    brand: "SALZ & FLAMME",
    tabLabel: "Salz & Flamme",
    url: "salzundflamme.at",
    eyebrow: "FINE DINING · SALZKAMMERGUT",
    title: "Genuss,",
    titleAccent: "der bleibt.",
    description: "Eine Küche mit Herkunft, Haltung und überraschender Leichtigkeit. Für Abende, die nachwirken.",
    cta: "Tisch reservieren",
    image: "/restaurant-hero.webp",
    theme: "restaurant",
    stats: ["4 Gänge", "Regionale Zutaten", "Persönlich serviert"],
    services: ["Menü", "Weinkarte", "Reservierung"],
  },
  {
    id: "legal",
    industry: "Rechtsanwalt",
    brand: "KANZLEI VON BERG",
    tabLabel: "Kanzlei von Berg",
    url: "kanzlei-vonberg.at",
    eyebrow: "WIRTSCHAFTSRECHT · WIEN",
    title: "Klarheit in",
    titleAccent: "entscheidenden Fragen.",
    description: "Vorausschauende Rechtsberatung für Unternehmen, Eigentümer und verantwortungsvolle Entscheidungen.",
    cta: "Erstgespräch anfragen",
    image: "/legal-hero.webp",
    theme: "legal",
    stats: ["Direkte Beratung", "Diskret & präzise", "Unternehmerisch gedacht"],
    services: ["Gesellschaftsrecht", "Verträge", "Immobilienrecht"],
  },
  {
    id: "medical",
    industry: "Arztpraxis",
    brand: "PRAXIS AM PARK",
    tabLabel: "Praxis am Park",
    url: "praxis-ampark.at",
    eyebrow: "INNERE MEDIZIN · VORSORGE",
    title: "Medizin, die",
    titleAccent: "den Menschen sieht.",
    description: "Moderne Diagnostik, ausreichend Zeit und eine Betreuung, bei der Sie sich gut aufgehoben fühlen.",
    cta: "Termin vereinbaren",
    image: "/medical-hero.webp",
    theme: "medical",
    stats: ["Kurze Wartezeiten", "Moderne Diagnostik", "Persönliche Begleitung"],
    services: ["Vorsorge", "Diagnostik", "Therapie"],
  },
] as const;
