import { motion } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/language";
import { useTheme } from "@/lib/theme";
import montrePrincipal from "@/assets/images/Projects/blender/accueil/montre_principal.png";
import montreFond from "@/assets/images/Projects/blender/context/montre_fond.png";
import montre1 from "@/assets/images/Projects/blender/accueil/montre_1.png";
import montre2 from "@/assets/images/Projects/blender/accueil/montre_2.png";
import montre3 from "@/assets/images/Projects/blender/accueil/montre_3.png";
import montre4 from "@/assets/images/Projects/blender/accueil/montre_4.png";
import montre5 from "@/assets/images/Projects/blender/accueil/montre_5.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const FLOATING_IMAGES = [
  { src: montre1, alt: "Montre vue 1", top: "8%",  left: "4%",  width: "18%", rotate: -12 },
  { src: montre1, alt: "Montre vue 1 bis", top: "26%", left: "14%", width: "11%", rotate: 7 },
  { src: montre2, alt: "Montre vue 2", top: "55%", left: "2%",  width: "16%", rotate: 8  },
  { src: montre2, alt: "Montre vue 2 bis", top: "20%", left: "28%", width: "10%", rotate: -9 },
  { src: montre2, alt: "Montre vue 2 ter", top: "70%", left: "16%", width: "9%", rotate: 12 },
  { src: montre3, alt: "Montre vue 3", top: "5%",  left: "76%", width: "20%", rotate: 10 },
  { src: montre4, alt: "Montre vue 4", top: "60%", left: "78%", width: "17%", rotate: -7 },
  { src: montre4, alt: "Montre vue 4 mini", top: "12%", left: "68%", width: "8%", rotate: 15 },
  { src: montre5, alt: "Montre vue 5", top: "18%", left: "60%", width: "14%", rotate: 4  },
];

export default function HeroMontre() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <>
      {/* ── HERO — composition draggable ── */}
      <motion.section
        className="relative w-screen h-screen overflow-hidden bg-background"
      >
        <div ref={constraintsRef} className="absolute -inset-40" />
        <img
          src={montreFond}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: theme === "light" ? "brightness(0.85)" : "brightness(0.38)" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-[11px] uppercase tracking-[0.3em] text-foreground/30 pointer-events-none"
        >
          {language === "fr" ? "Déplace les images" : "Move the images"}
        </motion.p>

        <div
          className="absolute bottom-0 left-0 w-full h-48 pointer-events-none z-10"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32%] z-10">
          <motion.img
            src={montrePrincipal}
            alt="Montre principale"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full object-contain drop-shadow-2xl"
          />
        </div>

        {FLOATING_IMAGES.map((img, i) => (
          <motion.img
            key={img.alt}
            src={img.src}
            alt={img.alt}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.08}
            whileDrag={{ scale: 1.05, zIndex: 30 }}
            initial={{ opacity: 0, rotate: img.rotate, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              top: img.top,
              left: img.left,
              width: img.width,
              rotate: img.rotate,
              cursor: "grab",
              zIndex: 20,
            }}
            className="object-contain drop-shadow-xl select-none"
          />
        ))}
      </motion.section>

      {/* ── INTRO ── */}
      <section className="w-full py-24 px-8 md:px-20 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.35em] text-foreground/30 mb-6"
            >
              {language === "fr" ? "Modélisation 3D · Blender · 2025" : "3D Modeling · Blender · 2025"}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-foreground leading-tight mb-8"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 700,
              }}
            >
              {language === "fr" ? "Montre 3D" : "3D Watch"}
            </motion.h1>

            <motion.div variants={fadeUp} className="h-px w-16 bg-foreground/20 mb-10" />

            <motion.p
              variants={fadeUp}
              className="text-foreground/55 text-base leading-relaxed max-w-2xl mb-6"
            >
              {language === "fr"
                ? "Modélisation et animation 3D d'une montre réalisées en cours sur Blender. Travail sur la géométrie, les matériaux et le rendu."
                : "3D watch modeling and animation created in class with Blender. Work focused on geometry, materials, and rendering."}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-14 pt-10 border-t border-foreground/10 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                language === "fr"
                  ? { label: "Rôle", value: "Modélisation 3D" }
                  : { label: "Role", value: "3D Modeling" },
                language === "fr"
                  ? { label: "Outil", value: "Blender" }
                  : { label: "Tool", value: "Blender" },
                language === "fr"
                  ? { label: "Contexte", value: "Cours" }
                  : { label: "Context", value: "Class project" },
                language === "fr"
                  ? { label: "Année", value: "2025" }
                  : { label: "Year", value: "2025" },
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
    </>
  );
}
