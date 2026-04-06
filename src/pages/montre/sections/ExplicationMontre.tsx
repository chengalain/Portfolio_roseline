import { motion } from "framer-motion";
import montreSignification from "@/assets/images/Projects/blender/explication/montre__signification.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

export default function ExplicationMontre() {
  return (
    <section id="explication" className="w-full px-8 md:px-20 py-24" style={{ backgroundColor: "#000000" }}>
      <div className="max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.35em] text-white/25 mb-14"
        >
          04 · Explication
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Texte — gauche */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-white leading-tight mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 700,
              }}
            >
              Choix
              <br />de la montre
            </motion.h2>

            <motion.div variants={fadeUp} className="h-px w-10 bg-white/25 mb-8" />

            <motion.p
              variants={fadeUp}
              className="text-white/75 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              J'ai choisi de modéliser une montre inspirée de Cartier pour travailler sur un objet
              à la fois technique et élégant. Ce modèle m'a permis d'explorer la précision des formes,
              la symétrie du cadran et le réalisme des matériaux comme le métal et le verre.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-white/50 text-sm leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              À travers ce projet, j'ai appris à structurer une modélisation complexe, à gérer
              les proportions avec rigueur et à utiliser l'éclairage pour mettre en valeur
              les volumes et les détails.
            </motion.p>
          </motion.div>

          {/* Image — droite */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col mt-10"
          >
            <div className="overflow-hidden rounded-sm">
              <img
                src={montreSignification}
                alt="Explication du choix de la montre"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Trait blanc collé sous l'image */}
            <div className="h-px bg-white/40 w-full mt-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
