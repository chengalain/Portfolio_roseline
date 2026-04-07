import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language";

export default function FooterPortfolio() {
  const { language } = useLanguage();

  return (
    <section className="w-full px-6 md:px-20 py-20 border-t border-foreground/8 bg-background">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/25 mb-3">Portfolio Personnel · V1</p>
          <p className="text-foreground/40 text-sm max-w-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {language === "fr"
              ? "Première version: conception Figma puis intégration en HTML, CSS et JavaScript."
              : "First version: Figma design then implementation with HTML, CSS, and JavaScript."}
          </p>
        </div>
        <Link
          to="/projets/ricmaa"
          className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
        >
          {language === "fr" ? "Projet suivant — Ricmaa Custom" : "Next project — Ricmaa Custom"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
