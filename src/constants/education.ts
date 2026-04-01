import gobelins from "@/assets/images/Education/gobelins.png";

export interface Education {
  id: string;
  icon: string;
  title: string;
  degree: string;
  duration: string;
  content1: string;
  content2: string;
}

export const EDUCATION_LIST: Education[] = [
  {
    id: "education-1",
    icon: gobelins,
    title: "Gobelins, l'école de l'image — Paris",
    degree: "DNMADE Graphisme",
    duration: "2025 — 2027 (en cours)",
    content1: "Spécialité : Design Graphique & UX/UI",
    content2: "Alternance à partir de septembre 2026",
  },
];
