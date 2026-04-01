import type { IconType } from "react-icons";
import { SiFigma } from "react-icons/si";
import topRic from "@/assets/images/Projects/ricmaa/top_ric.png";

export interface TechIcon {
  id: string;
  icon: IconType;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  github: string;
  slug?: string;
  link?: string;
  image?: string;
  imageFit?: "cover" | "contain";
  content: string;
  stack: TechIcon[];
}

export const PROJECTS: Project[] = [
  {
    id: "project-ricmaa",
    title: "Ricmaa Custom — Site Web",
    github: "#",
    slug: "ricmaa",
    image: topRic,
    imageFit: "cover",
    content:
      "Conception UX/UI du futur site web de Ricmaa Custom. Maquettes réalisées sur Figma lors de mon stage : architecture de l'information, wireframes et design final.",
    stack: [
      { id: "icon-1", icon: SiFigma, name: "Figma" },
    ],
  },
  {
    id: "project-1",
    title: "Portfolio Personnel",
    github: "#",
    link: "https://www.figma.com/design/21fJzzYHn6DC2oUZtdOsES/portfolio?node-id=0-1&p=f",
    image: "/logo.png",
    imageFit: "contain",
    content:
      "Conception du portfolio sur Figma, puis transformation en site web via une approche de prototypage et d'intégration web assistée par IA.",
    stack: [
      { id: "icon-1", icon: SiFigma, name: "Figma" },
    ],
  },
];
