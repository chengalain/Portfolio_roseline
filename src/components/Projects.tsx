import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "@/constants";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
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
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700 }}
          >
            Projets
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {PROJECTS.map((project, idx) => {
            const imageLeft = idx % 2 === 0;
            const href = project.slug ? `/projets/${project.slug}` : project.link;
            const isInternal = !!project.slug;
            const fit = project.imageFit ?? "cover";

            const cardInner = (
              <div className={`flex flex-col md:h-[440px] ${imageLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>

                {/* Image */}
                <div className={`w-full md:w-1/2 overflow-hidden bg-muted flex-shrink-0 aspect-video md:aspect-auto ${fit === "contain" ? "flex items-center justify-center p-10" : ""}`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`transition-all duration-700 ease-out brightness-[0.82] group-hover:brightness-105 group-hover:scale-[1.05] ${
                        fit === "contain"
                          ? "max-h-40 w-auto object-contain"
                          : "w-full h-full object-cover"
                      }`}
                    />
                  ) : (
                    <div className="w-full h-full bg-muted" />
                  )}
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between bg-card">
                  <div>
                    <span className="text-xs font-mono text-muted-foreground/40 mb-4 block">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="text-foreground leading-snug mb-5"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.3rem, 2vw, 1.8rem)", fontWeight: 700 }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.content}
                    </p>
                  </div>

                  <div className="flex items-end justify-between mt-6">
                    {/* Stack */}
                    <div className="flex flex-wrap gap-3">
                      {project.stack.map((tech) => (
                        <span key={tech.id} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <tech.icon className="h-3 w-3" />
                          {tech.name}
                        </span>
                      ))}
                    </div>

                    {/* Arrow */}
                    {href && href !== "#" && (
                      <div className="text-muted-foreground/30 group-hover:text-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0 ml-4">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                </div>

              </div>
            );

            const wrapperClass = "group block overflow-hidden rounded-lg border border-border/40 transition-transform duration-500 ease-out hover:scale-[1.015] cursor-pointer";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
              >
                {isInternal && href ? (
                  <Link to={href} className={wrapperClass}>{cardInner}</Link>
                ) : href && href !== "#" ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className={wrapperClass}>{cardInner}</a>
                ) : (
                  <div className={wrapperClass}>{cardInner}</div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
