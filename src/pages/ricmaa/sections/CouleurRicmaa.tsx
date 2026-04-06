import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";
import couleurRic from "@/assets/images/Projects/ricmaa/couleur_ric.png";
import { useLanguage } from "@/lib/language";

export default function CouleurRicmaa() {
  const { language } = useLanguage();

  return (
    <section id="couleurs" className="w-full px-8 md:px-20 pb-16 bg-background">
      <div className="max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.35em] text-foreground/25 mb-14"
        >
          {language === "fr" ? "03 · Couleurs" : "03 · Colors"}
        </motion.p>

        {/* Image + titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-14"
        >
          <div>
            <h2
              className="text-foreground leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 700 }}
            >
              {language === "fr" ? "Palette" : "Palette"}
            </h2>
            <div className="h-px w-10 bg-foreground/15 mb-5" />
            <p className="text-sm text-foreground/45 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {language === "fr"
                ? "Une palette construite autour du blanc et du rose — légèreté, féminité et modernité — pour refléter l'univers beauté de Ricmaa."
                : "A palette built around white and pink — lightness, femininity, and modernity — to reflect Ricmaa's beauty universe."}
            </p>
          </div>
          <div className="overflow-hidden rounded-sm">
            <img
              src={couleurRic}
              alt={language === "fr" ? "Palette couleurs Ricmaa" : "Ricmaa color palette"}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Bandes horizontales éditoriales */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-0 border border-foreground/8 overflow-hidden"
        >
          {[
            { name: "Blanc",           hex: "#FFFFFF", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0",   hsl: "0°, 0%, 100%"  },
            { name: "Gris foncé",      hex: "#333333", rgb: "51, 51, 51",   cmyk: "0, 0, 0, 80",  hsl: "0°, 0%, 20%"   },
            { name: "Rose pastel",     hex: "#FDD1DC", rgb: "253, 209, 220", cmyk: "0, 17, 13, 1", hsl: "345°, 91%, 91%" },
            { name: "Rose framboise",  hex: "#FB85A2", rgb: "251, 133, 162", cmyk: "0, 47, 35, 2", hsl: "345°, 94%, 75%" },
          ].map((color, i) => (
            <motion.div
              key={color.hex}
              variants={fadeUp}
              className="flex items-stretch border-b border-foreground/8 last:border-b-0"
            >
              {/* Swatch */}
              <div
                className="w-24 md:w-36 flex-shrink-0"
                style={{ backgroundColor: color.hex, minHeight: "88px" }}
              />

              {/* Nom */}
              <div className="flex items-center px-6 border-r border-foreground/8 w-[160px] flex-shrink-0">
                <p
                  className="text-sm text-foreground/80 font-medium"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {color.name}
                </p>
              </div>

              {/* Codes couleur */}
              <div className="flex flex-1 items-center px-6 py-4">
                {[
                  { label: "HEX",  value: color.hex },
                  { label: "RGB",  value: color.rgb },
                  { label: "CMYK", value: color.cmyk },
                  { label: "HSL",  value: color.hsl },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col gap-1 w-[130px] flex-shrink-0">
                    <span
                      className="text-[8px] uppercase tracking-[0.3em] text-foreground/20"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {row.label}
                    </span>
                    <span
                      className="text-[11px] font-mono"
                      style={{ color: color.hex === "#333333" ? "#888888" : color.hex }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Numéro */}
              <div className="flex items-center pr-6 pl-4 border-l border-foreground/8">
                <span className="text-[10px] font-mono text-foreground/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
