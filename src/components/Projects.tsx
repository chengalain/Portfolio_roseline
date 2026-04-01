import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "@/constants";

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Créations</p>
        <h2
          className="leading-none text-foreground"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400 }}
        >
          Projets
        </h2>
      </motion.div>

      <div className="space-y-0">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group grid md:grid-cols-12 border-t border-border/50 py-10 gap-6 items-start hover:bg-card/30 transition-colors duration-300 px-2"
          >
            {/* Numéro */}
            <div className="md:col-span-1">
              <span className="text-xs text-muted-foreground/40 font-mono">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Titre */}
            <div className="md:col-span-4">
              <h3
                className="text-foreground leading-snug group-hover:text-accent transition-colors duration-300"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400 }}
              >
                {project.title}
              </h3>

              {/* Outils */}
              {project.stack.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech.id}
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
                    >
                      <tech.icon className="h-3 w-3" />
                      {tech.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            <div className="md:col-span-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.content}
              </p>
            </div>

            {/* Lien */}
            <div className="md:col-span-1 flex justify-end">
              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir ${project.title}`}
                  className="text-muted-foreground/40 transition-all duration-300 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </motion.div>
        ))}

        {/* Ligne de fermeture */}
        <div className="border-t border-border/50" />
      </div>
    </section>
  );
}
