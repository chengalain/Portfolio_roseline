import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language";

export default function FooterRicmaa() {
  const { language } = useLanguage();
  return (
    <section className="w-full px-8 md:px-20 py-24 border-t border-foreground/8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/50 mb-3">Ricmaa Custom · 2025</p>
          <p className="text-foreground/40 text-sm max-w-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {language === "fr"
              ? "Projet réalisé en stage — conception UX/UI complète sur Figma."
              : "Internship project — full UX/UI design process in Figma."}
          </p>
        </div>
        <Link
          to="/projets/montre"
          className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
        >
          {language === "fr" ? "Projet suivant — Montre 3D" : "Next project — 3D Watch"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
