import { motion } from "framer-motion";
import montreCouleur from "@/assets/images/Projects/blender/couleur/montre_couleur.png";
import { useLanguage } from "@/lib/language";

const COLORS = [
  {
    nameFr: <>Noir <span className="font-light italic">Cacao</span></>,
    nameEn: <>Black <span className="font-light italic">Cacao</span></>,
    hex: "#0F0908",
    codes: [
      { label: "HEX",  value: "#0F0908" },
      { label: "RGB",  value: "15, 9, 8" },
      { label: "CMYK", value: "0, 41, 47, 94" },
      { label: "HSL",  value: "9°, 31%, 5%" },
    ],
  },
  {
    nameFr: <>Brun <span className="font-light italic">Terracotta</span></>,
    nameEn: <>Brown <span className="font-light italic">Terracotta</span></>,
    hex: "#B0584B",
    codes: [
      { label: "HEX",  value: "#B0584B" },
      { label: "RGB",  value: "176, 88, 75" },
      { label: "CMYK", value: "0, 50, 57, 31" },
      { label: "HSL",  value: "8°, 40%, 49%" },
    ],
  },
];

export default function CouleurMontre() {
  const { language } = useLanguage();

  return (
    <section id="couleur" className="w-full relative">

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs uppercase tracking-[0.35em] text-foreground/50 px-6 md:px-16 lg:px-[336px] pt-10 pb-6"
      >
        {language === "fr" ? "02 · Couleur" : "02 · Color"}
      </motion.p>

      {/* Image */}
      <div className="relative">
        <div
          className="hidden lg:block absolute top-0 left-0 w-full h-40 pointer-events-none z-10"
          style={{ background: "linear-gradient(to top, transparent, hsl(var(--background)))" }}
        />

        {/* Noir Cacao — desktop overlay */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-40 left-[20%] z-20 hidden lg:flex items-stretch gap-4"
        >
          <div className="flex flex-col gap-1">
            <p className="text-foreground text-base font-semibold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {language === "fr" ? COLORS[0].nameFr : COLORS[0].nameEn}
            </p>
            {COLORS[0].codes.map((row) => (
              <div key={row.label} className="flex items-baseline gap-2">
                <span className="text-[9px] uppercase tracking-[0.25em] text-foreground/30 w-8" style={{ fontFamily: "'Poppins', sans-serif" }}>{row.label}</span>
                <span className="text-[11px] font-mono text-foreground/70">{row.value}</span>
              </div>
            ))}
          </div>
          <div className="w-20 h-20 rounded-full border border-foreground/20 flex-shrink-0 self-center" style={{ backgroundColor: COLORS[0].hex }} />
        </motion.div>

        {/* Brun Terracotta — desktop overlay */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-52 right-[20%] z-20 hidden lg:flex items-stretch gap-4"
        >
          <div className="w-20 h-20 rounded-full border border-foreground/20 flex-shrink-0 self-center" style={{ backgroundColor: COLORS[1].hex }} />
          <div className="flex flex-col gap-1">
            <p className="text-foreground text-base font-semibold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {language === "fr" ? COLORS[1].nameFr : COLORS[1].nameEn}
            </p>
            {COLORS[1].codes.map((row) => (
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
          className="w-full h-auto block relative -top-10 md:-top-40 -mb-10 md:-mb-20"
        />
      </div>

      {/* Mobile + Tablette — swatches sous l'image */}
      <div className="lg:hidden px-6 md:px-16 pb-10 grid grid-cols-2 gap-4">
        {COLORS.map((color, i) => (
          <motion.div
            key={color.hex}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-xl border border-border/40 p-4 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-foreground/20 flex-shrink-0" style={{ backgroundColor: color.hex }} />
              <p className="text-sm font-semibold leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {language === "fr" ? color.nameFr : color.nameEn}
              </p>
            </div>
            <div className="space-y-1">
              {color.codes.map((row) => (
                <div key={row.label} className="flex items-baseline gap-2">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-foreground/30 w-8" style={{ fontFamily: "'Poppins', sans-serif" }}>{row.label}</span>
                  <span className="text-[10px] font-mono text-foreground/65">{row.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
