import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { fadeUp, stagger } from "../animations";
import { useLanguage } from "@/lib/language";
import figmaRic from "@/assets/images/Projects/ricmaa/design_final/figma_ric.png";
import figmaRicmaa22 from "@/assets/images/Projects/ricmaa/design_final/figma_ricmaa22.png";
import figmaaRic3 from "@/assets/images/Projects/ricmaa/design_final/figmaa_ric3.png";
import mokup1 from "@/assets/images/Projects/ricmaa/design_final/mokup1.png";
import mokup2 from "@/assets/images/Projects/ricmaa/design_final/mokup2.png";

export default function DesignFinalRicmaa() {
  const { language } = useLanguage();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const m1x = useTransform(springX, [-1, 1], [-45, 45]);
  const m1y = useTransform(springY, [-1, 1], [-30, 30]);
  const m2x = useTransform(springX, [-1, 1], [45, -45]);
  const m2y = useTransform(springY, [-1, 1], [30, -30]);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mouseX, mouseY]);

  return (
    <section id="design-final" className="w-full px-8 md:px-20 pt-10 pb-16 bg-background">
      <div className="max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.35em] text-foreground/25 mb-4"
        >
          {language === "fr" ? "05 · Design final" : "05 · Final design"}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-foreground leading-tight mb-16"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 700 }}
        >
          {language === "fr" ? (
            <>Résultat <span className="text-foreground/30">sur Figma</span></>
          ) : (
            <>Result <span className="text-foreground/30">in Figma</span></>
          )}
        </motion.h2>

        {/* 3 images Figma sur une ligne */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-3 gap-3 mb-24"
        >
          {[
            { src: figmaRic,      alt: "Design final Ricmaa — vue 1" },
            { src: figmaRicmaa22, alt: "Design final Ricmaa — vue 2" },
            { src: figmaaRic3,    alt: "Design final Ricmaa — vue 3" },
          ].map((img) => (
            <motion.div key={img.alt} variants={fadeUp} className="overflow-hidden rounded-sm aspect-video">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover opacity-90"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Mockups — disposition diagonale avec parallax souris */}
        <div className="relative h-[520px] md:h-[600px]">

          {/* Mockup 1 — haut gauche */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: m1x, y: m1y }}
            className="absolute top-0 left-0 w-[55%] md:w-[48%] overflow-hidden rounded-sm shadow-2xl z-10"
          >
            <img src={mokup1} alt="Mockup Ricmaa 1" className="w-full object-cover" />
          </motion.div>

          {/* Mockup 2 — bas droite */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: m2x, y: m2y }}
            className="absolute bottom-0 right-0 w-[55%] md:w-[48%] overflow-hidden rounded-sm shadow-2xl z-10"
          >
            <img src={mokup2} alt="Mockup Ricmaa 2" className="w-full object-cover" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
