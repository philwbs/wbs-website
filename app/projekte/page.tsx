import type { Metadata } from "next";
import ProjectsPage from "../components/ProjectsPage";

export const metadata: Metadata = {
  title: "Projekte & Demo-Websites",
  description: "Ausgewählte Webdesign-Projekte und hochwertige Demo-Konzepte von WBS für Gastronomie, Bau und Immobilien – responsiv präsentiert für Desktop und Smartphone.",
  alternates: { canonical: "/projekte" },
  openGraph: {
    title: "Projekte & Demo-Websites | Wesner Business Solutions",
    description: "Webdesign-Konzepte von WBS für Gastronomie, Bau und Immobilien – strategisch, hochwertig und vollständig responsiv.",
    url: "/projekte",
    type: "website",
  },
};

export default function Page() {
  return <ProjectsPage />;
}
