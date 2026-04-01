import type { IconType } from "react-icons";
import {
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiFigma,
} from "react-icons/si";

export interface TechIcon {
  id: string;
  icon: IconType;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  github: string;
  link?: string;
  image?: string;
  content: string;
  stack: TechIcon[];
}

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Portfolio Personnel",
    github: "#",
    link: "https://www.figma.com/@roseline",
    content:
      "Conception du portfolio sur Figma, puis transformation en site web via une approche de prototypage et d'intégration web assistée par IA.",
    stack: [
      { id: "icon-1", icon: SiFigma, name: "Figma" },
    ],
  },
  {
    id: "project-2",
    title: "Figurines Fimo",
    github: "#",
    content:
      "Conception et sculpture de formes et volumes en pâte Fimo. Gestion de commandes personnalisées avec adaptation créative aux demandes spécifiques.",
    stack: [],
  },
  {
    id: "project-3",
    title: "Scantrad — Webtoon FR",
    github: "#",
    content:
      "Traduction et adaptation créative de webtoons de l'anglais au français. Redessinage des cases, intégration des onomatopées et remplacement des textes de bulles.",
    stack: [
      { id: "icon-1", icon: SiAdobephotoshop, name: "Photoshop" },
    ],
  },
  {
    id: "project-4",
    title: "Animations GachaLife",
    github: "#",
    content:
      "Création d'animations et de vidéos narratives. Conception de personnages et mise en scène d'histoires visuelles publiées sur YouTube.",
    stack: [
      { id: "icon-1", icon: SiAdobeaftereffects, name: "After Effects" },
      { id: "icon-2", icon: SiAdobepremierepro, name: "Premiere Pro" },
    ],
  },
];
