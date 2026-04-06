import { motion } from "framer-motion";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language";
import { setPageMetadata } from "@/lib/seo";
import ThemeToggle from "@/components/ThemeToggle";
import HeroMontre from "./sections/HeroMontre";
import ContexteMontre from "./sections/ContexteMontre";
import CouleurMontre from "./sections/CouleurMontre";
import ExplicationMontre from "./sections/ExplicationMontre";
import EclaterMontre from "./sections/EclaterMontre";
import ModelisationMontre from "./sections/ModelisationMontre";
import AnimationMontre from "./sections/AnimationMontre";
import InteractifMontre from "./sections/InteractifMontre";

const NAV_SECTIONS = [
  { label: { fr: "Contexte", en: "Context" }, href: "#contexte" },
  { label: { fr: "Couleur", en: "Color" }, href: "#couleur" },
  { label: { fr: "Éclaté", en: "Exploded view" }, href: "#eclater" },
  { label: { fr: "Explication", en: "Explanation" }, href: "#explication" },
  { label: { fr: "Modélisation", en: "Modeling" }, href: "#modelisation" },
  { label: { fr: "Animation", en: "Animation" }, href: "#animation" },
  { label: { fr: "Interactif", en: "Interactive" }, href: "#interactif" },
] as const;

export default function ProjectMontre() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { language, setLanguage } = useLanguage();

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

  useEffect(() => {
    const ids = NAV_SECTIONS.map((s) => s.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background text-foreground">

      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full border-b border-foreground/10 bg-background/60 backdrop-blur-lg"
      >
        <nav className="flex w-full items-center justify-between px-6 md:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {language === "fr" ? "Accueil" : "Home"}
          </Link>

          <div className="hidden md:flex items-center gap-6 ml-auto mr-8">
            {NAV_SECTIONS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm transition-colors ${
                  activeSection === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label[language]}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="montre-nav-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-foreground/60"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-border bg-card/50 px-3 py-1">
              <button
                onClick={() => setLanguage("fr")}
                className={`text-xs font-medium transition-colors px-1 ${
                  language === "fr" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                FR
              </button>
              <span className="text-border text-xs">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`text-xs font-medium transition-colors px-1 ${
                  language === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </motion.header>

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
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/25 mb-3">Montre 3D · 2025</p>
            <p className="text-foreground/40 text-sm max-w-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {language === "fr"
                ? "Projet réalisé en cours — modélisation et animation sur Blender."
                : "Project created in class — modeling and animation in Blender."}
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {language === "fr" ? "Retour au portfolio" : "Back to portfolio"}
          </Link>
        </div>
      </section>

    </div>
  );
}
