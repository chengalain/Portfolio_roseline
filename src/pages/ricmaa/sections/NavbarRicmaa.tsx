import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage } from "@/lib/language";

export default function NavbarRicmaa() {
  const [activeSection, setActiveSection] = useState("");
  const { language } = useLanguage();

  useEffect(() => {
    const ids = ["contexte", "font", "couleurs", "parcours", "design-final"];
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
      <nav className="flex w-full items-center justify-between px-8 py-4">
        {/* Retour */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {language === "fr" ? "Accueil" : "Home"}
        </Link>

        {/* Liens sections */}
        <div className="hidden md:flex items-center gap-6 ml-auto mr-8">
          {[
            { label: { fr: "Contexte", en: "Context" }, href: "#contexte" },
            { label: { fr: "Font", en: "Font" }, href: "#font" },
            { label: { fr: "Couleurs", en: "Colors" }, href: "#couleurs" },
            { label: { fr: "Parcours", en: "Journey" }, href: "#parcours" },
            { label: { fr: "Design final", en: "Final design" }, href: "#design-final" },
          ].map((item) => (
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
                  layoutId="ric-nav-indicator"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-foreground/60"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* ThemeToggle */}
        <ThemeToggle />
      </nav>
    </motion.header>
  );
}
