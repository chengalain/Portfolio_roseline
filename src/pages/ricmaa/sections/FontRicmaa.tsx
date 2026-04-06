import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { fadeUp, stagger } from "../animations";
import ricmaaTriangle from "@/assets/images/Projects/ricmaa/ricmaa_triangle.png";
import { useLanguage } from "@/lib/language";

export default function FontRicmaa() {
  const [activeWeight, setActiveWeight] = useState<400 | 500 | 700>(400);
  const { language } = useLanguage();

  return (
    <section id="font" className="w-full px-8 md:px-20 pb-16 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.35em] text-foreground/25 mb-14"
        >
          {language === "fr" ? "02 · Font" : "02 · Typeface"}
        </motion.p>

        {/* Image pleine largeur avec texte overlay à gauche */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-sm"
        >
          {/* Bordure dorée haut uniquement */}
          <div
            className="absolute top-0 left-0 w-full h-[12px] z-20"
            style={{
              background: "linear-gradient(to right, #664305, #FFC300, #FFD856, #FFC300, #664305)",
            }}
          />

          {/* Image en haut à droite */}
          <img
            src={ricmaaTriangle}
            alt="Ricmaa Triangle"
            className="hidden md:block absolute top-0 right-0 h-[58%] w-auto object-contain object-top z-10"
          />

          {/* Texte — gauche */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10 flex flex-col justify-center px-12 py-8 w-full md:max-w-[62%]"
          >
            <motion.h2
              variants={fadeUp}
              className="text-foreground leading-tight mb-6"
              style={{
                fontFamily: "'Didot', 'Bodoni MT', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 700,
              }}
              >
                {language === "fr" ? "Typographie" : "Typography"}
                <br />
              </motion.h2>
            <motion.div variants={fadeUp} className="h-px w-10 bg-foreground/25 mb-8" />

            {/* Typo — style brand guide */}
            <motion.div variants={fadeUp} className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {language === "fr" ? "Police principale" : "Primary typeface"}
              </p>
              <p className="text-2xl text-foreground/80 mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>Poppins</p>
              <p className="text-[10px] text-foreground/30 mb-1 italic" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {language === "fr" ? "Cliquer pour tester les tailles" : "Click to test weights"}
              </p>

              {/* Ligne séparatrice haut */}
              <div className="h-px bg-foreground/10" />

              {/* Grand Aa + colonnes */}
              <div className="flex items-stretch gap-6">

                {/* Grand Aa — pleine hauteur */}
                <motion.div
                  key={`aa-${activeWeight}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="text-foreground/80 select-none flex-shrink-0 flex items-center border-r border-foreground/10 pr-6"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: activeWeight, fontSize: "8rem", lineHeight: 1 }}
                >
                  Aa
                </motion.div>

                {/* Weights + Overview */}
                <div className="flex gap-6 flex-1 py-6">

                  {/* Weights */}
                  <div className="flex flex-col gap-2 border-r border-foreground/10 pr-6">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-foreground/30 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Weights</p>
                    {([
                      { weight: 400, label: "Regular" },
                      { weight: 500, label: "Medium" },
                      { weight: 700, label: "Bold" },
                    ] as { weight: 400 | 500 | 700; label: string }[]).map((t) => (
                      <button
                        key={t.weight}
                        onClick={() => setActiveWeight(t.weight)}
                        className={`text-sm text-left transition-colors duration-200 ${
                          activeWeight === t.weight ? "text-foreground" : "text-foreground/40 hover:text-foreground/70"
                        }`}
                        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: t.weight }}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>

                  {/* Overview */}
                  <div className="flex flex-col gap-1 flex-1 justify-center">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-foreground/30 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Overview</p>
                    <motion.p
                      key={activeWeight}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="text-xs text-foreground/60 leading-relaxed"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: activeWeight }}
                    >
                      Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk
                      <br />Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
                    </motion.p>
                    <motion.p
                      key={`num-${activeWeight}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="text-xs text-foreground/60 mt-1"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: activeWeight }}
                    >
                      0 1 2 3 4 5 6 7 8 9
                    </motion.p>
                    <motion.p
                      key={`sym-${activeWeight}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="text-xs text-foreground/40 mt-1"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: activeWeight }}
                    >
                      ! @ # $ % &amp; * ( ) — + &#123; &#125; ?
                    </motion.p>
                  </div>

                </div>
              </div>

              {/* Ligne séparatrice bas */}
              <div className="h-px bg-foreground/10" />

              {/* Flèche */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="mt-3 flex ml-[240px]"
              >
                <ArrowUp className="h-4 w-4 text-foreground/25" />
              </motion.div>
            </motion.div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
