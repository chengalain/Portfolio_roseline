import { motion } from "framer-motion";
import montreCouleur from "@/assets/images/Projects/blender/couleur/montre_couleur.png";
import { useLanguage } from "@/lib/language";

export default function CouleurMontre() {
  const { language } = useLanguage();

  return (
    <section id="couleur" className="w-full relative bg-background">

      {/* Image pleine largeur */}
      <div className="relative">

        {/* Fondu haut — raccord avec Contexte */}
        <div
          className="absolute top-0 left-0 w-full h-40 pointer-events-none z-10"
          style={{ background: "linear-gradient(to top, transparent, hsl(var(--background)))" }}
        />

        {/* Label section */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute top-6 left-6 md:top-10 md:left-16 lg:left-[336px] z-20 text-xs uppercase tracking-[0.35em] text-foreground/25"
        >
          {language === "fr" ? "02 · Couleur" : "02 · Color"}
        </motion.p>

        {/* Haut gauche — Noir CACAO */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-20 left-4 md:top-60 md:left-[20%] z-20 hidden md:flex items-stretch gap-4"
        >
          {/* Texte */}
          <div className="flex flex-col gap-1">
            <p className="text-foreground text-base font-semibold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {language === "fr"
                ? <>Noir <span className="font-light italic">Cacao</span></>
                : <>Black <span className="font-light italic">Cacao</span></>}
            </p>
            {[
              { label: "HEX",  value: "#0F0908" },
              { label: "RGB",  value: "15, 9, 8" },
              { label: "CMYK", value: "0, 41, 47, 94" },
              { label: "HSL",  value: "9°, 31%, 5%" },
            ].map((row) => (
              <div key={row.label} className="flex items-baseline gap-2">
                <span className="text-[9px] uppercase tracking-[0.25em] text-foreground/30 w-8" style={{ fontFamily: "'Poppins', sans-serif" }}>{row.label}</span>
                <span className="text-[11px] font-mono text-foreground/70">{row.value}</span>
              </div>
            ))}
          </div>
          {/* Cercle */}
          <div className="w-20 h-20 rounded-full border border-foreground/20 flex-shrink-0 self-center" style={{ backgroundColor: "#0F0908" }} />
        </motion.div>

        {/* Bas droite — Brun TERRACOTTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-20 right-4 md:bottom-32 md:right-[20%] z-20 hidden md:flex items-stretch gap-4"
        >
          {/* Cercle */}
          <div className="w-20 h-20 rounded-full border border-foreground/20 flex-shrink-0 self-center" style={{ backgroundColor: "#B0584B" }} />
          {/* Texte */}
          <div className="flex flex-col gap-1">
            <p className="text-foreground text-base font-semibold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {language === "fr"
                ? <>Brun <span className="font-light italic">Terracotta</span></>
                : <>Brown <span className="font-light italic">Terracotta</span></>}
            </p>
            {[
              { label: "HEX",  value: "#B0584B" },
              { label: "RGB",  value: "176, 88, 75" },
              { label: "CMYK", value: "0, 50, 57, 31" },
              { label: "HSL",  value: "8°, 40%, 49%" },
            ].map((row) => (
              <div key={row.label} className="flex items-baseline gap-2">
                <span className="text-[9px] uppercase tracking-[0.25em] text-foreground/30 w-8" style={{ fontFamily: "'Poppins', sans-serif" }}>{row.label}</span>
                <span className="text-[11px] font-mono text-foreground/70">{row.value}</span>
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

        <div className="md:hidden px-6 py-8 space-y-4">
          <div className="rounded-xl border border-border/40 p-4">
            <p className="text-sm font-semibold mb-2">
              {language === "fr" ? "Noir Cacao" : "Black Cacao"}
            </p>
            <p className="text-xs text-muted-foreground font-mono">#0F0908 · RGB 15,9,8</p>
          </div>
          <div className="rounded-xl border border-border/40 p-4">
            <p className="text-sm font-semibold mb-2">
              {language === "fr" ? "Brun Terracotta" : "Brown Terracotta"}
            </p>
            <p className="text-xs text-muted-foreground font-mono">#B0584B · RGB 176,88,75</p>
          </div>
        </div>

      </div>

    </section>
  );
}
