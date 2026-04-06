import type { IconType } from "react-icons";
import { SiFigma, SiBlender } from "react-icons/si";
import topRic from "@/assets/images/Projects/ricmaa/top_ric.png";
import topMontre from "@/assets/images/Projects/blender/top_montre.png";
import type { LocalizedText } from "./types";

export interface TechIcon {
  id: string;
  icon: IconType;
  name: string;
}

export interface Project {
  id: string;
  title: LocalizedText;
  github: string;
  slug?: string;
  link?: string;
  image?: string;
  imageFit?: "cover" | "contain";
  content: LocalizedText;
  stack: TechIcon[];
}

export const PROJECTS: Project[] = [
  {
    id: "project-ricmaa",
    title: { fr: "Ricmaa Custom — Site Web", en: "Ricmaa Custom — Website" },
    github: "#",
    slug: "ricmaa",
    image: topRic,
    imageFit: "cover",
    content: {
      fr: "Conception UX/UI du futur site web de Ricmaa Custom. Maquettes réalisées sur Figma lors de mon stage : architecture de l'information, wireframes et design final.",
      en: "UX/UI design for the future Ricmaa Custom website. Figma mockups created during my internship: information architecture, wireframes, and final design.",
    },
    stack: [
      { id: "icon-1", icon: SiFigma, name: "Figma" },
    ],
  },
  {
    id: "project-blender",
    title: { fr: "Montre 3D — Blender", en: "3D Watch — Blender" },
    github: "#",
    slug: "montre",
    image: topMontre,
    imageFit: "cover",
    content: {
      fr: "Modélisation et animation 3D d'une montre réalisées en cours sur Blender. Travail sur la géométrie, les matériaux et le rendu.",
      en: "3D watch modeling and animation created in class with Blender. Work focused on geometry, materials, and rendering.",
    },
    stack: [
      { id: "icon-1", icon: SiBlender, name: "Blender" },
    ],
  },
  {
    id: "project-1",
    title: { fr: "Portfolio Personnel", en: "Personal Portfolio" },
    github: "#",
    link: "https://www.figma.com/design/21fJzzYHn6DC2oUZtdOsES/portfolio?node-id=0-1&p=f",
    image: "/logo.png",
    imageFit: "contain",
    content: {
      fr: "Conception du portfolio sur Figma, puis transformation en site web via une approche de prototypage et d'intégration web assistée par IA.",
      en: "Portfolio design in Figma, then transformed into a website through a prototyping and AI-assisted web integration workflow.",
    },
    stack: [
      { id: "icon-1", icon: SiFigma, name: "Figma" },
    ],
  },
];
