import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/language";

const FIGMA_LINK =
  "https://www.figma.com/design/21fJzzYHn6DC2oUZtdOsES/portfolio?node-id=0-1&p=f";

export default function FigmaPortfolio() {
  const { language } = useLanguage();

  return (
    <section id="figma" className="w-full px-6 md:px-20 py-16 md:py-24 border-t border-foreground/10">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.35em] text-foreground/25 mb-4">
          {language === "fr" ? "01 · Conception Figma" : "01 · Figma Design"}
        </p>
        <h2
          className="text-foreground mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700 }}
        >
          {language === "fr" ? "Première version du portfolio" : "First Portfolio Version"}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          {language === "fr"
            ? "J'ai commencé par concevoir l'interface complète sur Figma: structure des sections, direction artistique, hiérarchie visuelle et interactions principales. Cette V1 m'a servi de base pour cadrer le style et poser les fondations du projet."
            : "I started by designing the full interface in Figma: section structure, art direction, visual hierarchy, and key interactions. This V1 served as the foundation to define the style and frame the whole project."}
        </p>
        <a
          href={FIGMA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:border-foreground/30 transition-colors"
        >
          {language === "fr" ? "Voir le Figma" : "View Figma"}
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
