import type { Metadata } from "next";
import WebdesignPage from "../components/WebdesignPage";

export const metadata: Metadata = {
  title: "Webdesign für Unternehmen",
  description: "WBS entwickelt und modernisiert hochwertige Unternehmenswebsites – mit individuellem Design, responsiver Umsetzung, SEO-Grundoptimierung und persönlicher Betreuung.",
  alternates: { canonical: "/webdesign" },
  openGraph: {
    title: "Webdesign für Unternehmen | Wesner Business Solutions",
    description: "Hochwertige Unternehmenswebsites, Website-Relaunches und langfristige Betreuung von WBS.",
    url: "/webdesign",
    type: "website",
  },
};

export default function Page() {
  return <WebdesignPage />;
}
