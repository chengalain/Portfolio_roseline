import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { setPageMetadata } from "@/lib/seo";
import NavbarPortfolio from "./sections/NavbarPortfolio";
import HeroPortfolio from "./sections/HeroPortfolio";
import FigmaPortfolio from "./sections/FigmaPortfolio";
import SitePortfolio from "./sections/SitePortfolio";
import FooterPortfolio from "./sections/FooterPortfolio";

export default function ProjectPortfolio() {
  const { language } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    return setPageMetadata({
      title:
        language === "fr"
          ? "Projet Portfolio Personnel — Roseline Cheng"
          : "Personal Portfolio Project — Roseline Cheng",
      description:
        language === "fr"
          ? "Étude de cas de la première version du portfolio: conception Figma, transformation en site web et choix techniques."
          : "Case study of the first portfolio version: Figma design, website implementation, and technical choices.",
      canonical: "https://www.roselinecheng.com/projets/portfolio",
      ogLocale: language === "fr" ? "fr_FR" : "en_US",
    });
  }, [language]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative z-[1]">
      <NavbarPortfolio />

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

      <HeroPortfolio />
      <FigmaPortfolio />
      <SitePortfolio />
      <FooterPortfolio />
    </div>
  );
}
