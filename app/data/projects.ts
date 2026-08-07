export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  industry: string;
  projectType: "Demo-Projekt" | "Kundenprojekt";
  title: string;
  copy: string;
  description: string;
  features: string[];
  previewEyebrow: string;
  previewHeading: string;
  previewItems: string[];
  theme: "restaurant" | "construction" | "realestate" | "legal" | "medical";
  browserTitle: string;
  browserSubtitle: string;
  image: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "salz-und-flamme",
    name: "SALZ & FLAMME",
    category: "GASTRONOMIE",
    industry: "Gastronomie",
    projectType: "Demo-Projekt",
    title: "Restaurant-Webdesign",
    copy: "Atmosphärischer Premium-Auftritt für Restaurants, Hotels und Cafés – klar aufgebaut, hochwertig gestaltet und auf Reservierungen ausgerichtet.",
    description: "Ein warmer, charakterstarker Webauftritt, der Atmosphäre spürbar macht, Angebote klar führt und den Weg zur Reservierung bewusst kurz hält.",
    features: ["Atmosphärische Bildsprache", "Reservierungsfokus", "Mobile Menüführung", "Klare Angebotsstruktur"],
    previewEyebrow: "UNSERE KOMPETENZ",
    previewHeading: "Qualität, die sichtbar wird.",
    previewItems: ["Menü", "Weinkarte", "Reservierung"],
    theme: "restaurant",
    browserTitle: "SALZ & FLAMME",
    browserSubtitle: "GENUSS, DER BLEIBT.",
    image: "/demo-restaurant.webp",
  },
  {
    slug: "hinterberger",
    name: "HINTERBERGER",
    category: "BAU & ERDBAU",
    industry: "Bau",
    projectType: "Demo-Projekt",
    title: "Website für Bauunternehmen",
    copy: "Eine kraftvolle Außendarstellung für Betriebe, die Kompetenz zeigen, Vertrauen schaffen und mehr qualifizierte Anfragen erhalten möchten.",
    description: "Eine präzise, robuste Präsentation für Leistungen, Maschinen und Projekte – entwickelt für schnelle Orientierung und einen überzeugenden ersten Eindruck.",
    features: ["Kraftvolle Markenwirkung", "Leistungsübersicht", "Projektpräsentation", "Anfrageorientierte Wege"],
    previewEyebrow: "WAS WIR BEWEGEN",
    previewHeading: "Leistung, auf die Verlass ist.",
    previewItems: ["Erdbau", "Transporte", "Projekte"],
    theme: "construction",
    browserTitle: "HINTERBERGER",
    browserSubtitle: "BAUEN. BEWEGEN. BEGEISTERN.",
    image: "/demo-construction.webp",
  },
  {
    slug: "raumwerk",
    name: "RAUMWERK",
    category: "IMMOBILIEN & ARCHITEKTUR",
    industry: "Immobilien",
    projectType: "Demo-Projekt",
    title: "Immobilien-Webdesign",
    copy: "Ruhige Premium-Präsentation für Makler, Architekten und Bauträger – mit klarer Nutzerführung und überzeugender Objektwirkung.",
    description: "Ein reduzierter Auftritt, der Architektur Raum gibt, Objekte hochwertig inszeniert und Interessenten sicher zu den relevanten Informationen führt.",
    features: ["Großzügige Objektwirkung", "Ruhige Typografie", "Responsive Exposés", "Hochwertige Kontaktführung"],
    previewEyebrow: "AUSGEWÄHLTE OBJEKTE",
    previewHeading: "Räume mit bleibendem Wert.",
    previewItems: ["Kaufen", "Verkaufen", "Beratung"],
    theme: "realestate",
    browserTitle: "RAUMWERK",
    browserSubtitle: "WO ZUKUNFT ZUHAUSE IST.",
    image: "/demo-realestate.webp",
  },
  {
    slug: "norden-und-klee",
    name: "NORDEN & KLEE",
    category: "RECHTSANWALTSKANZLEI",
    industry: "Recht",
    projectType: "Demo-Projekt",
    title: "Webdesign für eine moderne Kanzlei",
    copy: "Eine ruhige digitale Präsenz für eine Kanzlei, die juristische Präzision mit persönlicher Beratung und zeitgemäßer Klarheit verbindet.",
    description: "Ein seriöser, architektonischer Auftritt mit klarer Informationshierarchie – vertrauenswürdig und modern, ganz ohne die üblichen visuellen Rechtsklischees.",
    features: ["Diskrete Premium-Ästhetik", "Klare Rechtsgebiete", "Vertrauensvolle Kontaktführung", "Ruhige mobile Navigation"],
    previewEyebrow: "KOMPETENZEN",
    previewHeading: "Klarheit in komplexen Fragen.",
    previewItems: ["Unternehmen", "Immobilien", "Privatmandate"],
    theme: "legal",
    browserTitle: "NORDEN & KLEE",
    browserSubtitle: "RECHT. KLAR GEDACHT.",
    image: "/images/projects/norden-und-klee/kanzlei-interior-hero.webp",
  },
  {
    slug: "ordination-avena",
    name: "ORDINATION AVENA",
    category: "PRIVATORDINATION",
    industry: "Gesundheit",
    projectType: "Demo-Projekt",
    title: "Webdesign für eine Privatordination",
    copy: "Ein heller, menschlicher Auftritt für moderne Medizin – mit ruhiger Orientierung, verständlichen Leistungen und einem angenehmen Weg zum Termin.",
    description: "Eine warme digitale Umgebung, die medizinische Kompetenz und persönliche Zuwendung verbindet, ohne steril oder wie eine gewöhnliche Praxisvorlage zu wirken.",
    features: ["Menschliche Bildsprache", "Verständliche Leistungen", "Sanfte Terminführung", "Barrierearme Lesbarkeit"],
    previewEyebrow: "WOFÜR WIR DA SIND",
    previewHeading: "Medizin mit Zeit und Nähe.",
    previewItems: ["Vorsorge", "Diagnostik", "Termin"],
    theme: "medical",
    browserTitle: "ORDINATION AVENA",
    browserSubtitle: "GESUNDHEIT IN GUTEN HÄNDEN.",
    image: "/images/projects/ordination-avena/privatordination-interior-hero.webp",
  },
];
