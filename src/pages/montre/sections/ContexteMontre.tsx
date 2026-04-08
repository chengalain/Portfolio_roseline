import { motion } from "framer-motion";
import montreDeFace from "@/assets/images/Projects/blender/context/montre_de_face.png";
import { useLanguage } from "@/lib/language";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

export default function ContexteMontre() {
  const { language } = useLanguage();

  const texts = (
    <>
      <motion.h2
        variants={fadeUp}
        className="text-foreground leading-tight mb-5"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3.5rem)", fontWeight: 700 }}
      >
        {language === "fr" ? "Explication du contexte" : "Context explanation"}
      </motion.h2>
      <motion.div variants={fadeUp} className="h-px w-10 bg-foreground/30 mb-5" />
      <motion.p variants={fadeUp} className="text-foreground/75 text-sm leading-relaxed mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {language === "fr"
          ? "Projet réalisé en novembre 2025 lors de mes premières séances sur Blender avec Henri Arbezier. L'objectif était de se familiariser avec la modélisation 3D à travers un objet en éclaté."
          : "Project completed in November 2025 during my first Blender sessions with Henri Arbezier. The goal was to get familiar with 3D modeling through an exploded object study."}
      </motion.p>
      <motion.p variants={fadeUp} className="text-foreground/55 text-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {language === "fr"
          ? "J'ai choisi une montre Cartier et en quelques jours, j'ai modélisé, animé, coloré et texturé l'ensemble, apprenant à gérer tous les aspects du workflow 3D et montrant ma progression rapide sur Blender."
          : "I chose a Cartier-inspired watch and, in just a few days, modeled, animated, colored, and textured it, learning every part of the 3D workflow and showing rapid progress in Blender."}
      </motion.p>
    </>
  );

  return (
    <section id="contexte" className="w-full">

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs uppercase tracking-[0.35em] text-foreground/50 px-6 md:px-16 lg:px-[336px] pt-10 mb-10 md:mb-14"
      >
        {language === "fr" ? "01 · Contexte" : "01 · Context"}
      </motion.p>

      {/* ── Mobile (<768px) ── */}
      <div className="md:hidden px-6 pb-10">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col">
          {texts}
          <motion.img
            variants={fadeUp}
            src={montreDeFace}
            alt="Montre Cartier de face"
            className="w-28 self-end mt-6 object-contain drop-shadow-xl"
          />
        </motion.div>
      </div>

      {/* ── Tablette (768px–1023px) ── */}
      <div className="hidden md:flex lg:hidden px-10 pb-16 items-center gap-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1"
        >
          {texts}
        </motion.div>
        <motion.img
          src={montreDeFace}
          alt="Montre Cartier de face"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-48 flex-shrink-0 object-contain drop-shadow-2xl"
        />
      </div>

      {/* ── Desktop (1024px+) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full hidden lg:block"
      >
        <div className="w-full h-[78vh] block bg-background" />

        <motion.img
          src={montreDeFace}
          alt="Montre Cartier de face"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-8 object-contain drop-shadow-2xl"
          style={{ width: "clamp(90px, 16vw, 280px)", right: "clamp(8rem, 20vw, 22rem)" }}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="absolute bottom-24 left-80 z-10 pr-6"
          style={{ maxWidth: "min(92vw, 42rem)" }}
        >
          {texts}
        </motion.div>

        <div
          className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-20"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }}
        />
      </motion.div>

    </section>
  );
}
