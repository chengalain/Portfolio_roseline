import { motion } from "framer-motion";
import { ArrowRight, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language";
import { setPageMetadata } from "@/lib/seo";
import NavbarMontre from "./sections/NavbarMontre";
import HeroMontre from "./sections/HeroMontre";
import ContexteMontre from "./sections/ContexteMontre";
import CouleurMontre from "./sections/CouleurMontre";
import ExplicationMontre from "./sections/ExplicationMontre";
import EclaterMontre from "./sections/EclaterMontre";
import ModelisationMontre from "./sections/ModelisationMontre";
import AnimationMontre from "./sections/AnimationMontre";
import InteractifMontre from "./sections/InteractifMontre";

export default function ProjectMontre() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    return setPageMetadata({
      title:
        language === "fr"
          ? "Projet Montre 3D — Roseline Cheng"
          : "3D Watch Project — Roseline Cheng",
      description:
        language === "fr"
          ? "Étude de cas de modélisation et animation 3D d'une montre sous Blender, du concept à l'expérience interactive."
          : "Case study of 3D watch modeling and animation in Blender, from concept to interactive experience.",
      canonical: "https://www.roselinecheng.com/projets/montre",
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
      <NavbarMontre />

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

      {/* Sections */}
      <HeroMontre />
      <ContexteMontre />
      <CouleurMontre />
      <EclaterMontre />
      <ExplicationMontre />
      <ModelisationMontre />
      <AnimationMontre />
      <InteractifMontre />

      {/* Footer */}
      <section className="w-full px-8 md:px-20 py-24 border-t border-foreground/10 bg-background">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/50 mb-3">Montre 3D · 2025</p>
            <p className="text-foreground/40 text-sm max-w-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {language === "fr"
                ? "Projet réalisé en cours — modélisation et animation sur Blender."
                : "Project created in class — modeling and animation in Blender."}
            </p>
          </div>
          <Link
            to="/projets/portfolio"
            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
          >
            {language === "fr" ? "Projet suivant — Portfolio" : "Next project — Portfolio"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
