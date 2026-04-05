import { motion } from "framer-motion";
import { EXPERIENCES } from "@/constants";

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Parcours</p>
        <h2
          className="leading-none text-foreground"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700 }}
        >
          Expériences
        </h2>
      </motion.div>

      <div className="grid gap-px md:grid-cols-2" style={{ background: "hsl(var(--border))" }}>
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.organisation}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="group relative flex flex-col justify-between bg-background p-10 transition-colors duration-500 hover:bg-card"
          >
            {/* Numéro */}
            <span
              className="absolute top-8 right-10 text-[6rem] font-bold leading-none select-none pointer-events-none"
              style={{ color: "hsl(var(--border))", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1 }}
            >
              0{idx + 1}
            </span>

            {/* Header */}
            <div>
              {/* Logo + Entreprise */}
              <div className="flex items-center gap-4 mb-8">
                {exp.logo && (
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-muted flex items-center justify-center">
                    <img
                      src={exp.logo}
                      alt={exp.organisation}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                )}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-0.5">
                    {exp.positions[0].duration}
                  </p>
                  <h3 className="font-semibold text-foreground text-lg">{exp.organisation}</h3>
                </div>
              </div>

              {/* Titre du poste */}
              <p
                className="text-2xl text-foreground/80 mb-8 leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
              >
                {exp.positions[0].title}
              </p>

              {/* Missions */}
              <ul className="space-y-3">
                {exp.positions[0].content?.map((c, cIdx) => (
                  <li key={cIdx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-2 h-px w-4 shrink-0 bg-muted-foreground/40" />
                    {c.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outils */}
            {exp.positions[0].content?.some(c => c.tech && c.tech.length > 0) && (
              <div className="mt-10 flex flex-wrap gap-2">
                {exp.positions[0].content
                  .flatMap(c => c.tech ?? [])
                  .filter((t, i, arr) => arr.findIndex(x => x.id === t.id) === i)
                  .map(t => (
                    <span
                      key={t.id}
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground border border-border/50 px-3 py-1 rounded-full"
                    >
                      <t.icon className="h-3 w-3" />
                      {t.name}
                    </span>
                  ))}
              </div>
            )}

            {/* Ligne décorative au hover */}
            <div className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
