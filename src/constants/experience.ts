import type { IconType } from "react-icons";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiFigma,
} from "react-icons/si";

import planRapproche from "@/assets/images/Experience/plan-rapproche.png";
import ricmaa from "@/assets/images/Experience/ricmaa.png";

export interface TechItem {
  id: string;
  icon: IconType;
  name: string;
}

export interface Position {
  title: string;
  duration: string;
  content?: { text: string; link?: string; tech?: TechItem[] }[];
}

export interface Experience {
  organisation: string;
  logo: string;
  link: string;
  positions: Position[];
}

export const EXPERIENCES: Experience[] = [
  {
    organisation: "Plan Rapproché",
    logo: planRapproche,
    link: "https://www.planrapproche.com/",
    positions: [
      {
        title: "Stagiaire Graphisme & Motion Design",
        duration: "Décembre 2025 — 2 semaines",
        content: [
          {
            text: "Création d'habillages vidéo et d'animations en motion design.",
            tech: [
              { id: "pr-1", icon: SiAdobeaftereffects, name: "After Effects" },
              { id: "pr-2", icon: SiAdobepremierepro, name: "Premiere Pro" },
              { id: "pr-3", icon: SiAdobeillustrator, name: "Illustrator" },
            ],
          },
          {
            text: "Déclinaisons et adaptations d'identités graphiques existantes sur différents formats vidéo.",
          },
          {
            text: "Conception de moodboards et recherches visuelles pour orienter les directions artistiques.",
          },
          {
            text: "Assistance graphique sur divers supports et traduction de contenus FR/EN.",
          },
        ],
      },
    ],
  },
  {
    organisation: "Ricmaa Custom",
    logo: ricmaa,
    link: "https://www.instagram.com/ricmaacustom/",
    positions: [
      {
        title: "Stagiaire Création Digitale",
        duration: "Juin 2025 — 1 mois",
        content: [
          {
            text: "Montage de vidéos courtes pour TikTok et Instagram, adaptées aux codes et tendances des plateformes.",
            tech: [
              { id: "rc-1", icon: SiAdobepremierepro, name: "Premiere Pro" },
              { id: "rc-2", icon: SiFigma, name: "Figma" },
            ],
          },
          {
            text: "Participation à la conception et optimisation du site web.",
          },
          {
            text: "Gestion et suivi des collaborations avec des marques et coordination pour la validation des contenus sponsorisés.",
          },
          {
            text: "Veille et recherche de nouvelles opportunités de partenariats et d'influence.",
          },
        ],
      },
    ],
  },
];
