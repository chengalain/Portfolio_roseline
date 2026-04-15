import type { IconType } from "react-icons";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiFigma,
} from "react-icons/si";

import planRapproche from "@/assets/images/Experience/plan-rapproche.png";
import ricmaa from "@/assets/images/Experience/ricmaa.png";
import type { LocalizedText } from "./types";

export interface TechItem {
  id: string;
  icon: IconType;
  name: string;
}

export interface Position {
  title: LocalizedText;
  duration: LocalizedText;
  content?: { text: LocalizedText; link?: string; tech?: TechItem[] }[];
}

export interface Experience {
  organisation: LocalizedText;
  logo: string;
  link: string;
  positions: Position[];
}

export const EXPERIENCES: Experience[] = [
  {
    organisation: { fr: "Plan Rapproché", en: "Plan Rapproché" },
    logo: planRapproche,
    link: "https://www.planrapproche.com/",
    positions: [
      {
        title: { fr: "Stagiaire Graphisme & Motion Design", en: "Graphic & Motion Design Intern" },
        duration: { fr: "Décembre 2025 — 2 semaines", en: "December 2025 — 2 weeks" },
        content: [
          {
            text: {
              fr: "Création d'habillages vidéo et d'animations en motion design.",
              en: "Created video graphics packages and motion design animations.",
            },
            tech: [
              { id: "pr-1", icon: SiAdobeaftereffects, name: "After Effects" },
              { id: "pr-2", icon: SiAdobepremierepro, name: "Premiere Pro" },
              { id: "pr-3", icon: SiAdobeillustrator, name: "Illustrator" },
            ],
          },
          {
            text: {
              fr: "Déclinaisons et adaptations d'identités graphiques existantes sur différents formats vidéo.",
              en: "Adapted existing visual identities across multiple video formats.",
            },
          },
          {
            text: {
              fr: "Conception de moodboards et recherches visuelles pour orienter les directions artistiques.",
              en: "Produced moodboards and visual research to guide art direction.",
            },
          },
          {
            text: {
              fr: "Assistance graphique sur divers supports et traduction de contenus FR/EN.",
              en: "Supported graphic production on various media and translated FR/EN content.",
            },
          },
        ],
      },
    ],
  },
  {
    organisation: { fr: "Ricmaa Custom", en: "Ricmaa Custom" },
    logo: ricmaa,
    link: "https://www.instagram.com/ricmaacustom/",
    positions: [
      {
        title: { fr: "Stagiaire Création Digitale", en: "Digital Creation Intern" },
        duration: { fr: "Juin 2025 — 1 mois", en: "June 2025 — 1 month" },
        content: [
          {
            text: {
              fr: "Montage de vidéos courtes pour TikTok et Instagram, adaptées aux codes et tendances des plateformes.",
              en: "Edited short-form videos for TikTok and Instagram aligned with platform trends and formats.",
            },
            tech: [
              { id: "rc-1", icon: SiAdobepremierepro, name: "Premiere Pro" },
              { id: "rc-2", icon: SiFigma, name: "Figma" },
            ],
          },
          {
            text: {
              fr: "Participation à la conception et optimisation du site web.",
              en: "Contributed to website design and optimization.",
            },
          },
          {
            text: {
              fr: "Gestion et suivi des collaborations avec des marques et coordination pour la validation des contenus sponsorisés.",
              en: "Managed brand collaborations and coordinated approvals for sponsored content.",
            },
          },
          {
            text: {
              fr: "Veille et recherche de nouvelles opportunités de partenariats et d'influence.",
              en: "Monitored trends and identified new partnership and influencer opportunities.",
            },
          },
        ],
      },
    ],
  },
];
