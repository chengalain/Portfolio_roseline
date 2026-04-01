import type { IconType } from "react-icons";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiFigma,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { AiFillGithub } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";

export interface Skill {
  id: string;
  icon: IconType;
  name: string;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export const SKILLS_LIST: SkillGroup[] = [
  {
    title: "Design & UI",
    items: [
      { id: "d-1", icon: SiFigma, name: "Figma" },
      { id: "d-2", icon: SiAdobeillustrator, name: "Illustrator" },
      { id: "d-3", icon: SiAdobephotoshop, name: "Photoshop" },
    ],
  },
  {
    title: "Motion & Vidéo",
    items: [
      { id: "m-1", icon: SiAdobeaftereffects, name: "After Effects" },
      { id: "m-2", icon: SiAdobepremierepro, name: "Premiere Pro" },
      { id: "m-3", icon: MdVideoLibrary, name: "CapCut" },
    ],
  },
  {
    title: "Outils & Autres",
    items: [
      { id: "t-1", icon: VscCode, name: "VS Code" },
      { id: "t-2", icon: AiFillGithub, name: "GitHub" },
    ],
  },
];
