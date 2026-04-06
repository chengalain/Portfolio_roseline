import type { LocalizedText } from "./types";

export { SOCIAL_MEDIA } from "./socialMedia";
export type { SocialLink } from "./socialMedia";

export { EXPERIENCES } from "./experience";
export type { Experience, Position, TechItem } from "./experience";

export { EDUCATION_LIST } from "./education";
export type { Education } from "./education";

export { PROJECTS } from "./projects";
export type { Project, TechIcon } from "./projects";

export const RESUME_LINKS = {
  fr: "/cv_fr.pdf",
  en: "/cv_en.pdf",
} as const;

export const ABOUT_ME = {
  name: "Roseline Cheng",
  firstName: "Roseline",
  lastName: "Cheng",
  tagLine: {
    fr: "Étudiante Design UX/UI · Motion Design · Gobelins",
    en: "UX/UI Design Student · Motion Design · Gobelins",
  } satisfies LocalizedText,
  intro: {
    fr: "Étudiante en Design Graphique & UX/UI basée à Paris.",
    en: "Graphic Design & UX/UI student based in Paris.",
  } satisfies LocalizedText,
  email: "roseline.cheng2006@gmail.com",
};

export const NAV_LINKS = [
  { link: "#experience", title: { fr: "Expérience", en: "Experience" } satisfies LocalizedText },
  { link: "#projects", title: { fr: "Projets", en: "Projects" } satisfies LocalizedText },
  { link: "#education", title: { fr: "Formation", en: "Education" } satisfies LocalizedText },
  { link: "#contact", title: { fr: "Contact", en: "Contact" } satisfies LocalizedText },
];
