import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/language";

const SITE_LINK = "https://cryt-art.github.io/Portfolio/index.html";

export default function SitePortfolio() {
  const { language } = useLanguage();

  return (
    <section id="site" className="w-full px-6 md:px-20 py-16 md:py-24 border-t border-foreground/10">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.35em] text-foreground/25 mb-4">
          {language === "fr" ? "02 · Version Web" : "02 · Web Version"}
        </p>
        <h2
          className="text-foreground mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700 }}
        >
          {language === "fr" ? "Du prototype à un site statique" : "From Prototype to a Static Website"}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          {language === "fr"
            ? "J'ai ensuite transformé cette première maquette en site statique HTML, CSS et JavaScript. Ce passage design → code m'a permis de concrétiser visuellement mon univers et de donner vie à mes créations."
            : "I then turned this first mockup into a static website in HTML, CSS, and JavaScript. This design-to-code step allowed me to bring my visual universe to life and make my creations tangible."}
        </p>
        <a
          href={SITE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:border-foreground/30 transition-colors"
        >
          {language === "fr" ? "Voir le site V1" : "View V1 Website"}
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
