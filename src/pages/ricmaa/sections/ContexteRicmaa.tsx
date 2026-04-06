import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";
import ricInsta from "@/assets/images/Projects/ricmaa/ric_insta.png";
import { useLanguage } from "@/lib/language";

export default function ContexteRicmaa() {
  const { language } = useLanguage();

  return (
    <section id="contexte" className="w-full px-8 md:px-20 pb-16 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.35em] text-foreground/25 mb-14"
        >
          {language === "fr" ? "01 · Contexte" : "01 · Context"}
        </motion.p>

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-sm grid grid-cols-1 md:grid-cols-2 items-center min-h-[600px]"
          >
            {/* Colonne gauche — ric_insta */}
            <div className="relative z-10 flex justify-center items-center p-10">
              <motion.img
                src={ricInsta}
                alt="Ricmaa Instagram"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-[300px] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Colonne droite — texte */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative z-10 flex flex-col justify-center px-10 py-12"
            >
              <motion.h2
                variants={fadeUp}
                className="text-foreground leading-tight mb-6"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                }}
              >
                {language === "fr" ? (
                  <>
                    Explication
                    <br />
                    du contexte
                  </>
                ) : (
                  <>
                    Context
                    <br />
                    explanation
                  </>
                )}
              </motion.h2>
              <motion.div variants={fadeUp} className="h-px w-10 bg-foreground/25 mb-6" />
              <motion.p variants={fadeUp} className="text-foreground/85 text-base leading-relaxed mb-4">
                {language === "fr"
                  ? "Ricmaa souhaitait une interface qui reflète son positionnement dans le secteur de la beauté : à la fois accessible pour sa communauté et premium pour ses partenaires marques."
                  : "Ricmaa wanted an interface that reflects her positioning in the beauty sector: accessible for her community while remaining premium for brand partners."}
              </motion.p>
              <motion.p variants={fadeUp} className="text-foreground/60 text-base leading-relaxed">
                {language === "fr"
                  ? "L'approche UX s'est concentrée sur une navigation simple et lisible, une hiérarchie visuelle claire et une identité graphique féminine cohérente tout au long du parcours utilisateur."
                  : "The UX approach focused on simple, readable navigation, clear visual hierarchy, and a feminine visual identity consistent throughout the user journey."}
              </motion.p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
