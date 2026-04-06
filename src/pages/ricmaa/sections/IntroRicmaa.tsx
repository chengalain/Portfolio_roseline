import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";

export default function IntroRicmaa() {
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
            Portfolio de Ricmaa
          </motion.h1>

          <motion.div variants={fadeUp} className="h-px w-16 bg-foreground/20 mb-10" />

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-foreground/55 text-base leading-relaxed max-w-2xl mb-6"
          >
            Ricmaa est une influenceuse et créatrice de contenu spécialisée dans le skincare
            et le maquillage. Ce projet, réalisé lors de mon stage en juin 2025, consistait
            à concevoir son site promotionnel multi-pages de A à Z sur Figma.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-foreground/40 text-sm leading-relaxed max-w-2xl"
          >
            L'enjeu était de bâtir une identité numérique cohérente avec son univers féminin
            et premium — architecture de l'information, wireframes, et design final avec
            système de composants.
          </motion.p>

          {/* Méta */}
          <motion.div
            variants={fadeUp}
            className="mt-14 pt-10 border-t border-foreground/10 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: "Rôle", value: "UX/UI Designer" },
              { label: "Outil", value: "Figma" },
              { label: "Durée", value: "1 mois" },
              { label: "Année", value: "2025" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/25 mb-2">{item.label}</p>
                <p className="text-sm text-foreground/70 font-light">{item.value}</p>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
