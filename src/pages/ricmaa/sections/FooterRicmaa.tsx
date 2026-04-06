import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function FooterRicmaa() {
  return (
    <section className="w-full px-8 md:px-20 py-24 border-t border-foreground/8 bg-background">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/25 mb-3">Ricmaa Custom · 2025</p>
          <p className="text-foreground/40 text-sm max-w-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Projet réalisé en stage — conception UX/UI complète sur Figma.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour au portfolio
        </Link>
      </div>
    </section>
  );
}
