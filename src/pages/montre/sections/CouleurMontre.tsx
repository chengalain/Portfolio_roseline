import { motion } from "framer-motion";
import montreCouleur from "@/assets/images/Projects/blender/couleur/montre_couleur.png";

export default function CouleurMontre() {
  return (
    <section id="couleur" className="w-full relative" style={{ backgroundColor: "#000000" }}>

      {/* Image pleine largeur */}
      <div className="relative">

        {/* Fondu haut — raccord avec Contexte */}
        <div
          className="absolute top-0 left-0 w-full h-40 pointer-events-none z-10"
          style={{ background: "linear-gradient(to top, transparent, #000000)" }}
        />

        {/* Label section */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute top-10 z-20 text-xs uppercase tracking-[0.35em] text-white/25"
          style={{ left: "336px" }}
        >
          02 · Couleur
        </motion.p>

        {/* Haut gauche — Noir CACAO */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-60 left-[20%] z-20 flex items-stretch gap-4"
        >
          {/* Texte */}
          <div className="flex flex-col gap-1">
            <p className="text-white text-base font-semibold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Noir <span className="font-light italic">Cacao</span>
            </p>
            {[
              { label: "HEX",  value: "#0F0908" },
              { label: "RGB",  value: "15, 9, 8" },
              { label: "CMYK", value: "0, 41, 47, 94" },
              { label: "HSL",  value: "9°, 31%, 5%" },
            ].map((row) => (
              <div key={row.label} className="flex items-baseline gap-2">
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/30 w-8" style={{ fontFamily: "'Poppins', sans-serif" }}>{row.label}</span>
                <span className="text-[11px] font-mono text-white/70">{row.value}</span>
              </div>
            ))}
          </div>
          {/* Cercle */}
          <div className="w-20 h-20 rounded-full border border-white/20 flex-shrink-0 self-center" style={{ backgroundColor: "#0F0908" }} />
        </motion.div>

        {/* Bas droite — Brun TERRACOTTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-32 right-[20%] z-20 flex items-stretch gap-4"
        >
          {/* Cercle */}
          <div className="w-20 h-20 rounded-full border border-white/20 flex-shrink-0 self-center" style={{ backgroundColor: "#B0584B" }} />
          {/* Texte */}
          <div className="flex flex-col gap-1">
            <p className="text-white text-base font-semibold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Brun <span className="font-light italic">Terracotta</span>
            </p>
            {[
              { label: "HEX",  value: "#B0584B" },
              { label: "RGB",  value: "176, 88, 75" },
              { label: "CMYK", value: "0, 50, 57, 31" },
              { label: "HSL",  value: "8°, 40%, 49%" },
            ].map((row) => (
              <div key={row.label} className="flex items-baseline gap-2">
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/30 w-8" style={{ fontFamily: "'Poppins', sans-serif" }}>{row.label}</span>
                <span className="text-[11px] font-mono text-white/70">{row.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.img
          src={montreCouleur}
          alt="Couleurs de la montre"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-auto block"
        />

      </div>

    </section>
  );
}
