import { useState } from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiNotion,
  SiCanva,
  SiBlender,
  SiWordpress,
} from "react-icons/si";
import { RiScissorsLine } from "react-icons/ri";
import { useLanguage } from "@/lib/language";

type Keyword = {
  label: { fr: string; en: string };
  icon?: IconType;
  flag?: string; // country code ex: "fr", "cn", "gb"
  color: string;
};

const KEYWORDS: Keyword[] = [
  { label: { fr: "Figma", en: "Figma" }, icon: SiFigma, color: "#F24E1E" },
  { label: { fr: "Adobe Illustrator", en: "Adobe Illustrator" }, icon: SiAdobeillustrator, color: "#FF9A00" },
  { label: { fr: "Adobe Photoshop", en: "Adobe Photoshop" }, icon: SiAdobephotoshop, color: "#31A8FF" },
  { label: { fr: "Adobe After Effects", en: "Adobe After Effects" }, icon: SiAdobeaftereffects, color: "#9999FF" },
  { label: { fr: "Adobe Premiere Pro", en: "Adobe Premiere Pro" }, icon: SiAdobepremierepro, color: "#EA77FF" },
  { label: { fr: "CapCut", en: "CapCut" }, icon: RiScissorsLine, color: "#FE2C55" },
  { label: { fr: "Français · Natif", en: "French · Native" }, flag: "fr", color: "#0055A4" },
  { label: { fr: "Mandarin · Courant", en: "Mandarin · Fluent" }, flag: "cn", color: "#DE2910" },
  { label: { fr: "Anglais · B2", en: "English · B2" }, flag: "gb", color: "#C8102E" },
  { label: { fr: "Notion", en: "Notion" }, icon: SiNotion, color: "#aaaaaa" },
  { label: { fr: "Canva", en: "Canva" }, icon: SiCanva, color: "#00C4CC" },
  { label: { fr: "Blender", en: "Blender" }, icon: SiBlender, color: "#E87D0D" },
  { label: { fr: "WordPress", en: "WordPress" }, icon: SiWordpress, color: "#21759B" },
];

function KeywordItem({ item, language }: { item: Keyword; language: "fr" | "en" }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="flex items-center gap-3 cursor-default transition-all duration-300"
      style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icône outil — grise par défaut, couleur au hover */}
      {item.icon && (
        <item.icon
          className="h-6 w-6 flex-shrink-0 transition-colors duration-300"
          style={{ color: hovered ? item.color : "currentColor", opacity: hovered ? 1 : 0.4 }}
        />
      )}

      {/* Drapeau — grisé par défaut, couleur au hover */}
      {item.flag && (
        <img
          src={`https://flagcdn.com/w20/${item.flag}.png`}
          alt={item.flag}
          className="h-5 w-auto rounded-sm flex-shrink-0 transition-all duration-300"
          style={{ filter: hovered ? "grayscale(0)" : "grayscale(1)", opacity: hovered ? 1 : 0.4 }}
        />
      )}

      {/* Texte — toujours normal */}
      <span className="whitespace-nowrap text-base font-medium text-foreground/80 md:text-lg">
        {item.label[language]}
      </span>
    </span>
  );
}

function KeywordSet({ language }: { language: "fr" | "en" }) {
  return (
    <>
      {KEYWORDS.map((item, i) => (
        <span key={`${item.label.fr}-${i}`} className="flex shrink-0 items-center gap-10">
          <KeywordItem item={item} language={language} />
          <span className="text-accent/60">&#9670;</span>
        </span>
      ))}
    </>
  );
}

export default function MarqueeStrip() {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-muted/20 backdrop-blur-sm"
    >
      {/* Ligne haute */}
      <div className="flex items-center gap-4 px-6 py-2 border-y border-border/30">
        <div className="flex-1 h-px bg-border/50" />
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground whitespace-nowrap">
          {language === "fr" ? "Compétences & Outils" : "Skills & Tools"}
        </span>
        <div className="flex-1 h-px bg-border/50" />
      </div>

      {/* Marquee */}
      <div className="group relative overflow-hidden py-7">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
        <div className="marquee-scroll group-hover:[animation-play-state:paused] flex w-max gap-6">
          <KeywordSet language={language} />
          <KeywordSet language={language} />
        </div>
      </div>

      {/* Ligne basse */}
      <div className="flex items-center gap-4 px-6 py-2 border-y border-border/30">
        <div className="flex-1 h-px bg-border/50" />
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground whitespace-nowrap">
          {language === "fr" ? "Compétences & Outils" : "Skills & Tools"}
        </span>
        <div className="flex-1 h-px bg-border/50" />
      </div>
    </motion.div>
  );
}
