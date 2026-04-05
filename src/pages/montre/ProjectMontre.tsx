import { motion } from "framer-motion";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import HeroMontre from "./sections/HeroMontre";
import ContexteMontre from "./sections/ContexteMontre";
import CouleurMontre from "./sections/CouleurMontre";

const NAV_SECTIONS = [
  { label: "Contexte", href: "#contexte" },
  { label: "Couleur",  href: "#couleur"  },
];

export default function ProjectMontre() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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
        className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-lg"
      >
        <nav className="flex w-full items-center justify-between px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Accueil
          </Link>

          <div className="hidden md:flex items-center gap-6 ml-auto mr-8">
            {NAV_SECTIONS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm transition-colors ${
                  activeSection === item.href
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="montre-nav-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-white/60"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <ThemeToggle />
        </nav>
      </motion.header>

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

      {/* Sections */}
      <HeroMontre />
      <ContexteMontre />
      <CouleurMontre />

      {/* Footer */}
      <section className="w-full px-8 md:px-20 py-24 border-t border-white/8" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/25 mb-3">Montre 3D · 2025</p>
            <p className="text-white/40 text-sm max-w-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Projet réalisé en cours — modélisation et animation sur Blender.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au portfolio
          </Link>
        </div>
      </section>

    </div>
  );
}
