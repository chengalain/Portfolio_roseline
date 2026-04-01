import { motion } from "framer-motion";
import { EDUCATION_LIST } from "@/constants";

export default function Education() {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Parcours académique</p>
        <h2
          className="leading-none text-foreground"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400 }}
        >
          Formation
        </h2>
      </motion.div>

      <div className="space-y-0">
        {EDUCATION_LIST.map((edu, idx) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="group grid md:grid-cols-3 border-t border-border/50 py-10 gap-6 items-start hover:bg-card/30 transition-colors duration-300 px-2"
          >
            {/* Colonne 1 — Date + logo */}
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {edu.duration}
              </span>
            </div>

            {/* Colonne 2 — École + diplôme */}
            <div className="flex items-start gap-4">
              {edu.icon && (
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-muted flex items-center justify-center mt-1">
                  <img src={edu.icon} alt={edu.title} className="h-7 w-7 object-contain" />
                </div>
              )}
              <div>
                <h3
                  className="text-foreground leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(1.2rem, 2vw, 1.5rem)", fontWeight: 400 }}
                >
                  {edu.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-accent/80">{edu.degree}</p>
              </div>
            </div>

            {/* Colonne 3 — Détails */}
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground leading-relaxed">{edu.content1}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{edu.content2}</p>
            </div>
          </motion.div>
        ))}

        {/* Ligne de fermeture */}
        <div className="border-t border-border/50" />
      </div>
    </section>
  );
}
