import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wesner-solutions.at"),
  title: { default: "WBS | Premium-Websites & digitale Lösungen", template: "%s | Wesner Business Solutions" },
  description: "Wesner Business Solutions entwickelt hochwertige Unternehmenswebsites und verbindet Unternehmen mit passenden digitalen Lösungen – persönlich, strategisch und langfristig.",
  keywords: ["Webdesign Österreich", "Premium Unternehmenswebsite", "Website erstellen lassen", "Website Betreuung", "digitale Lösungen", "Wesner Business Solutions"],
  openGraph: {
    type: "website", locale: "de_AT", url: "https://www.wesner-solutions.at", siteName: "Wesner Business Solutions",
    title: "WBS – Websites, die Vertrauen schaffen.",
    description: "Premium-Webdesign, persönliche Betreuung und digitale Lösungen für Unternehmen.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#11110f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org", "@type": "ProfessionalService", name: "Wesner Business Solutions", alternateName: "WBS",
    url: "https://www.wesner-solutions.at", email: "philipp.wesner@wesner-solutions.at",
    founder: { "@type": "Person", name: "Philipp Wesner" }, areaServed: { "@type": "Country", name: "Österreich" },
    serviceType: ["Webdesign", "Website-Betreuung", "Suchmaschinenoptimierung", "Digitale Unternehmenslösungen", "IT-Lösungen"],
  };
  return (
    <html lang="de">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </body>
    </html>
  );
}
