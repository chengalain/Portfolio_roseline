import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
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

  useEffect(() => {
    const previousTitle = document.title;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionMeta?.getAttribute("content") ?? "";
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonicalLink?.getAttribute("href") ?? "";

    document.title = "Projet Ricmaa Custom — Roseline Cheng";
    descriptionMeta?.setAttribute(
      "content",
      "Étude de cas UX/UI du projet Ricmaa Custom: direction artistique, parcours utilisateur et design final."
    );
    canonicalLink?.setAttribute("href", "https://www.roselinecheng.com/projets/ricmaa");

    return () => {
      document.title = previousTitle;
      descriptionMeta?.setAttribute("content", previousDescription);
      canonicalLink?.setAttribute("href", previousCanonical);
    };
  }, []);

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
        aria-label="Remonter en haut"
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
