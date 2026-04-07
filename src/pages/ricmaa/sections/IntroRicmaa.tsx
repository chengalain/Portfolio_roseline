import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";
import { useLanguage } from "@/lib/language";

export default function IntroRicmaa() {
  const { language } = useLanguage();

  return (
    <section className="w-full py-24 px-8 md:px-20 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Étiquette */}
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.35em] text-foreground/30 mb-6"
          >
            UX / UI Design · Figma · 2025
          </motion.p>

          {/* Titre principal */}
          <motion.h1
            variants={fadeUp}
            className="text-foreground leading-tight mb-8"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 700,
            }}
          >
            {language === "fr" ? "Portfolio de Ricmaa" : "Ricmaa Portfolio"}
          </motion.h1>

          <motion.div variants={fadeUp} className="h-px w-16 bg-foreground/20 mb-10" />

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-foreground/55 text-base leading-relaxed max-w-2xl mb-6"
          >
            {language === "fr"
              ? "Ricmaa est une influenceuse et créatrice de contenu spécialisée dans le skincare et le maquillage. Ce projet, réalisé lors de mon stage en juin 2025, consistait à concevoir son site promotionnel multi-pages de A à Z sur Figma."
              : "Ricmaa is an influencer and content creator specialized in skincare and makeup. This project, completed during my internship in June 2025, involved designing her multi-page promotional website from A to Z in Figma."}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-foreground/40 text-sm leading-relaxed max-w-2xl"
          >
            {language === "fr"
              ? "L'enjeu était de bâtir une identité numérique cohérente avec son univers féminin et premium — architecture de l'information, wireframes, et design final avec système de composants."
              : "The challenge was to build a digital identity consistent with her feminine and premium brand universe — information architecture, wireframes, and final design with a component system."}
          </motion.p>

          {/* Méta */}
          <motion.div
            variants={fadeUp}
            className="mt-14 pt-10 border-t border-foreground/10 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              language === "fr"
                ? { label: "Rôle", value: "UX/UI Designer" }
                : { label: "Role", value: "UX/UI Designer" },
              language === "fr"
                ? { label: "Outil", value: "Figma" }
                : { label: "Tool", value: "Figma" },
              language === "fr"
                ? { label: "Durée", value: "1 mois" }
                : { label: "Duration", value: "1 month" },
              language === "fr"
                ? { label: "Année", value: "2025" }
                : { label: "Year", value: "2025" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-2">{item.label}</p>
                <p className="text-sm text-foreground/70 font-light">{item.value}</p>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
