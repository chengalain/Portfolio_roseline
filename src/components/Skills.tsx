import { motion } from "framer-motion";
import { SKILLS_LIST } from "@/constants";

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Outils & Savoir-faire</p>
        <h2
          className="leading-none text-foreground"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400 }}
        >
          Compétences
        </h2>
      </motion.div>

      <div className="space-y-16">
        {SKILLS_LIST.map((group, groupIdx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
          >
            {/* Catégorie */}
            <div className="flex items-center gap-4 mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground shrink-0">
                {group.title}
              </p>
              <div className="h-px flex-1 bg-border/50" />
            </div>

            {/* Outils */}
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              {group.items.map((skill, skillIdx) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: groupIdx * 0.1 + skillIdx * 0.07 }}
                  className="group flex items-center gap-3 cursor-default"
                >
                  <skill.icon className="h-4 w-4 text-muted-foreground/50 transition-colors duration-300 group-hover:text-accent shrink-0" />
                  <span
                    className="text-foreground/70 transition-colors duration-300 group-hover:text-foreground"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400 }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
