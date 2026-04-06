import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "@/constants";
import { useLanguage } from "@/lib/language";

type Project = (typeof PROJECTS)[0];

function ProjectCard({
  project,
  index,
  scrollProgress,
  isActive,
  language,
}: {
  project: Project;
  index: number;
  scrollProgress: MotionValue<number>;
  isActive: boolean;
  language: "fr" | "en";
}) {
  const x = useTransform(scrollProgress, (v) => `${(index - v) * 58}%`);
  const scale = useTransform(scrollProgress, (v) =>
    Math.max(0.75, 1 - Math.abs(index - v) * 0.22)
  );
  const opacity = useTransform(scrollProgress, (v) => {
    const abs = Math.abs(index - v);
    if (abs > 1.8) return 0;
    if (abs > 1) return 1 - (abs - 1) * 2;
    return Math.max(0.35, 1 - abs * 0.55);
  });
  const filter = useTransform(scrollProgress, (v) =>
    `blur(${Math.min(3, Math.abs(index - v) * 2.5)}px)`
  );

  const fit = project.imageFit ?? "cover";
  const href = project.slug ? `/projets/${project.slug}` : project.link;
  const isInternal = !!project.slug;
  const hasLink = href && href !== "#";

  const content = (
    <div className="group w-full h-full flex">
      <div className={`w-[58%] flex-shrink-0 overflow-hidden bg-muted ${fit === "contain" ? "flex items-center justify-center p-8" : ""}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title[language]}
            className={`w-full h-full transition-all duration-700 brightness-90 ${isActive ? "group-hover:brightness-105 group-hover:scale-[1.03]" : ""} ${
              fit === "contain" ? "object-contain max-h-full" : "object-cover"
            }`}
          />
        ) : (
          <div className="w-full h-full bg-muted" />
        )}
      </div>

      <div className="flex-1 bg-card p-8 md:p-10 flex flex-col justify-between">
        <div>
          <span className="text-xs font-mono text-muted-foreground/30 mb-4 block">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className="text-foreground leading-snug mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1rem, 1.8vw, 1.6rem)", fontWeight: 700 }}
          >
            {project.title[language]}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {project.content[language]}
          </p>
        </div>

        <div className="flex items-end justify-between mt-4">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech.id} className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                <tech.icon className="h-2.5 w-2.5" />
                {tech.name}
              </span>
            ))}
          </div>
          {hasLink && isActive && (
            <div className="flex-shrink-0 ml-3 flex items-center gap-1 text-[11px] text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              <span>{language === "fr" ? "Voir" : "View"}</span>
              <ArrowUpRight className="h-3 w-3" />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      style={{
        x,
        scale,
        opacity,
        filter,
        zIndex: isActive ? 20 : 10,
        width: "46vw",
        maxWidth: "640px",
        height: "100%",
        position: "absolute",
      }}
      className="rounded-xl overflow-hidden border border-border/30 shadow-2xl"
    >
      {isActive && isInternal && href ? (
        <Link to={href} className="block w-full h-full">{content}</Link>
      ) : isActive && hasLink ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full h-full">{content}</a>
      ) : (
        content
      )}
    </motion.div>
  );
}

export default function Projects() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = PROJECTS.length;
  const { language } = useLanguage();

  const rawProgress = useMotionValue(0);
  const scrollProgress = useSpring(rawProgress, { stiffness: 90, damping: 22, mass: 0.6 });

  const scrollToProject = (index: number) => {
    const el = wrapperRef.current;
    if (!el) return;
    const sectionHeight = el.getBoundingClientRect().height - window.innerHeight;
    const target = el.offsetTop + (index / (count - 1)) * sectionHeight;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const sectionHeight = height - window.innerHeight;
      const scrolled = -top;
      if (scrolled < 0 || scrolled > sectionHeight) return;
      const progress = (scrolled / sectionHeight) * (count - 1);
      rawProgress.set(progress);
      const newIndex = Math.min(count - 1, Math.round(progress));
      if (newIndex !== activeIndex) setActiveIndex(newIndex);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, count, rawProgress]);

  return (
    <section id="projects">
      <div className="mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
            {language === "fr" ? "Créations" : "Creations"}
          </p>
          <h2
            className="leading-none text-foreground"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700 }}
          >
            {language === "fr" ? "Projets" : "Projects"}
          </h2>
        </motion.div>
      </div>

      <div ref={wrapperRef} style={{ height: `${count * 100}vh` }}>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {PROJECTS.map((_, i) => (
              <div
                key={i}
                className={`h-0.5 rounded-full transition-all duration-500 ${
                  i === activeIndex ? "w-8 bg-foreground" : "w-2 bg-foreground/20"
                }`}
              />
            ))}
          </div>

          <div className="relative w-full h-[68vh] flex items-center justify-center">
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                scrollProgress={scrollProgress}
                isActive={i === activeIndex}
                language={language}
              />
            ))}
          </div>

          {activeIndex > 0 && (
            <div
              onClick={() => scrollToProject(activeIndex - 1)}
              className="absolute left-0 top-0 h-full z-30 cursor-pointer"
              style={{ width: "calc(50% - min(23vw, 320px))" }}
            />
          )}
          {activeIndex < count - 1 && (
            <div
              onClick={() => scrollToProject(activeIndex + 1)}
              className="absolute right-0 top-0 h-full z-30 cursor-pointer"
              style={{ width: "calc(50% - min(23vw, 320px))" }}
            />
          )}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
            <motion.p
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50"
            >
              {activeIndex < count - 1
                ? language === "fr"
                  ? "Scroller pour continuer"
                  : "Scroll to continue"
                : language === "fr"
                  ? "Scroller pour quitter"
                  : "Scroll to exit"}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
