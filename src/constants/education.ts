import gobelins from "@/assets/images/Education/gobelins.png";
import type { LocalizedText } from "./types";

export interface Education {
  id: string;
  icon: string;
  title: LocalizedText;
  website?: string;
  degree: LocalizedText;
  duration: LocalizedText;
  content1: LocalizedText;
  content2: LocalizedText;
}

export const EDUCATION_LIST: Education[] = [
  {
    id: "education-1",
    icon: gobelins,
    title: {
      fr: "Gobelins, l'école de l'image — Paris",
      en: "Gobelins, l'école de l'image — Paris",
    },
    website: "https://www.gobelins.fr/",
    degree: { fr: "DNMADE Graphisme", en: "DNMADE Graphic Design" },
    duration: { fr: "2025 — 2027 (en cours)", en: "2025 — 2027 (ongoing)" },
    content1: { fr: "Spécialité : Design Graphique & UX/UI", en: "Specialization: Graphic Design & UX/UI" },
    content2: { fr: "Alternance à partir de septembre 2026", en: "Work-study from September 2026" },
  },
];
