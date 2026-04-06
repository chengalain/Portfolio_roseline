import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { setPageMetadata } from "@/lib/seo";
import NavbarRicmaa from "./sections/NavbarRicmaa";
import HeroRicmaa from "./sections/HeroRicmaa";
import IntroRicmaa from "./sections/IntroRicmaa";
import ContexteRicmaa from "./sections/ContexteRicmaa";
import FontRicmaa from "./sections/FontRicmaa";
import CouleurRicmaa from "./sections/CouleurRicmaa";
import ParcoursRicmaa from "./sections/ParcoursRicmaa";
import DesignFinalRicmaa from "./sections/DesignFinalRicmaa";
import FooterRicmaa from "./sections/FooterRicmaa";

export default function ProjectRicmaa() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    return setPageMetadata({
      title:
        language === "fr"
          ? "Projet Ricmaa Custom — Roseline Cheng"
          : "Ricmaa Custom Project — Roseline Cheng",
      description:
        language === "fr"
          ? "Étude de cas UX/UI du projet Ricmaa Custom: direction artistique, parcours utilisateur et design final."
          : "UX/UI case study of the Ricmaa Custom project: art direction, user journey, and final design.",
      canonical: "https://www.roselinecheng.com/projets/ricmaa",
      ogLocale: language === "fr" ? "fr_FR" : "en_US",
    });
  }, [language]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background text-foreground">
      <NavbarRicmaa />

      {/* Bouton scroll-to-top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0, pointerEvents: showScrollTop ? "auto" : "none" }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors"
        aria-label={language === "fr" ? "Remonter en haut" : "Back to top"}
      >
        <ArrowUp className="h-4 w-4" />
      </motion.button>

      <HeroRicmaa />
      <IntroRicmaa />
      <ContexteRicmaa />
      <FontRicmaa />
      <CouleurRicmaa />
      <ParcoursRicmaa />
      <DesignFinalRicmaa />
      <FooterRicmaa />
    </div>
  );
}
