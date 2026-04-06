import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/constants";
import { useLanguage } from "@/lib/language";

export default function Experience() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = EXPERIENCES.length;
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const sectionHeight = height - window.innerHeight;
      const scrolled = -top;
      if (scrolled < 0 || scrolled > sectionHeight) return;
      const progress = scrolled / sectionHeight;
      const newIndex = Math.min(count - 1, Math.floor(progress * count));
      if (newIndex !== activeIndex) setActiveIndex(newIndex);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, count]);

  return (
    <section id="experience">

      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
            {language === "fr" ? "Parcours" : "Journey"}
          </p>
          <h2
            className="leading-none text-foreground"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700 }}
          >
            {language === "fr" ? "Expériences" : "Experience"}
          </h2>
        </motion.div>
      </div>

      {/* Sticky scroll wrapper */}
      <div ref={wrapperRef} style={{ height: `${count * 100}vh` }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-8 md:px-64">

          {/* Indicateurs verticaux */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
            {EXPERIENCES.map((_, i) => (
              <div
                key={i}
                className={`w-0.5 rounded-full transition-all duration-500 ${
                  i === activeIndex ? "h-8 bg-foreground" : "h-2 bg-foreground/20"
                }`}
              />
            ))}
          </div>

          {/* Cartes empilées */}
          <div className="relative w-full" style={{ height: "68vh" }}>
            {EXPERIENCES.map((expItem, i) => {
              const offset = i - activeIndex;
              if (offset < -1 || offset > 1) return null;
              const isActive = offset === 0;
              const yOffset = offset * 32;
              const scale = isActive ? 1 : 0.96;
              const opacity = isActive ? 1 : 0.35;
              const zIndex = isActive ? 20 : 10;
              const pos = expItem.positions[0];

              return (
                <motion.div
                  key={i}
                  animate={{ y: yOffset, scale, opacity }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-black/60 dark:border-white/60"
                  style={{ zIndex, backgroundColor: "hsl(var(--card))" }}
                >
                  <div className="relative w-full h-full grid md:grid-cols-[1fr_1.5fr] overflow-hidden">

                    {/* Numéro décoratif */}
                    <span
                      className="absolute bottom-4 right-8 select-none pointer-events-none leading-none"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "clamp(7rem, 16vw, 13rem)",
                        fontWeight: 700,
                        color: "hsl(var(--border))",
                        lineHeight: 1,
                        opacity: 0.6,
                      }}
                    >
                      0{i + 1}
                    </span>

                    {/* Colonne gauche */}
                    <div className="flex flex-col justify-between p-10 md:p-14 border-r border-border/30 z-10">
                      <div className="flex flex-col gap-6">
                        {/* Logo + organisation */}
                        <div className="flex items-center gap-4">
                          {expItem.logo && (
                            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-muted flex items-center justify-center">
                              <img src={expItem.logo} alt={expItem.organisation[language]} className="h-8 w-8 object-contain" />
                            </div>
                          )}
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-0.5">
                              {pos.duration[language]}
                            </p>
                            <h3 className="font-semibold text-foreground text-lg">{expItem.organisation[language]}</h3>
                          </div>
                        </div>

                        {/* Titre du poste */}
                        <p
                          className="text-foreground/80 leading-snug"
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: "clamp(1.3rem, 2vw, 1.8rem)",
                            fontWeight: 700,
                          }}
                        >
                          {pos.title[language]}
                        </p>
                      </div>

                      {/* Tech stack */}
                      {pos.content?.some(c => c.tech && c.tech.length > 0) && (
                        <div className="flex flex-wrap gap-2 mt-8">
                          {pos.content
                            .flatMap(c => c.tech ?? [])
                            .filter((t, idx, arr) => arr.findIndex(x => x.id === t.id) === idx)
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
                    </div>

                    {/* Colonne droite — missions */}
                    <div className="flex flex-col justify-center p-10 md:p-14 z-10">
                      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground/50 mb-6">
                        {language === "fr" ? "Missions" : "Responsibilities"}
                      </p>
                      <ul className="space-y-4">
                        {pos.content?.map((c, cIdx) => (
                          <motion.li
                            key={cIdx}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 + cIdx * 0.07 }}
                            className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                          >
                            <span className="mt-2 h-px w-4 shrink-0 bg-muted-foreground/40" />
                            {c.text[language]}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Hint scroll */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
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
