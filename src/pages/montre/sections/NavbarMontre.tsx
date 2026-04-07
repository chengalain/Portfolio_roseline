import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage } from "@/lib/language";

const NAV_SECTIONS = [
  { label: { fr: "Contexte", en: "Context" }, href: "#contexte" },
  { label: { fr: "Couleur", en: "Color" }, href: "#couleur" },
  { label: { fr: "Éclaté", en: "Exploded view" }, href: "#eclater" },
  { label: { fr: "Explication", en: "Explanation" }, href: "#explication" },
  { label: { fr: "Modélisation", en: "Modeling" }, href: "#modelisation" },
  { label: { fr: "Animation", en: "Animation" }, href: "#animation" },
  { label: { fr: "Interactif", en: "Interactive" }, href: "#interactif" },
] as const;

export default function NavbarMontre() {
  const [activeSection, setActiveSection] = useState("");
  const { language, setLanguage } = useLanguage();

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
  );
}
