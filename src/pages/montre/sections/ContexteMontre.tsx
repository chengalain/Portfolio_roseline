import { motion } from "framer-motion";
import montreFond from "@/assets/images/Projects/blender/context/montre_fond.png";
import montreDeFace from "@/assets/images/Projects/blender/context/montre_de_face.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

export default function ContexteMontre() {
  return (
    <section id="contexte" className="w-full bg-background">

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs uppercase tracking-[0.35em] text-foreground/25 px-8 md:px-[336px] pt-10 mb-14"
      >
        01 · Contexte
      </motion.p>

      {/* Carte pleine largeur */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full overflow-hidden"
      >
        {/* Fond image — pleine, non rognée */}
        <img
          src={montreFond}
          alt=""
          className="w-full h-auto block"
          style={{ filter: "brightness(0.4)" }}
        />

        {/* Montre de face — droite, positionnée en absolu */}
        <motion.img
          src={montreDeFace}
          alt="Montre Cartier de face"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 object-contain drop-shadow-2xl"
          style={{ width: "clamp(320px, 44vw, 640px)", right: "calc(10rem)" }}
        />

        {/* Texte — bas gauche */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="absolute bottom-52 left-12 md:left-80 z-10"
          style={{ maxWidth: "calc(56vw - 18rem)" }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-foreground leading-tight mb-5"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
            }}
          >
            Explication du contexte
          </motion.h2>

          <motion.div variants={fadeUp} className="h-px w-10 text-foreground/30 mb-6" />

          <motion.p
            variants={fadeUp}
            className="text-foreground/75 text-sm leading-relaxed mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Projet réalisé en novembre 2025 lors de mes premières séances sur Blender avec Henri
            Arbezier. L'objectif était de se familiariser avec la modélisation 3D à travers un objet en éclaté.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-foreground/55 text-sm leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            J'ai choisi une montre Cartier et en quelques jours, j'ai modélisé, animé, coloré et texturé
            l'ensemble, apprenant à gérer tous les aspects du workflow 3D et montrant ma progression
            rapide sur Blender.
          </motion.p>
        </motion.div>

        {/* Fondu bas vers noir */}
        <div
          className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-20"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }}
        />
      </motion.div>

    </section>
  );
}
