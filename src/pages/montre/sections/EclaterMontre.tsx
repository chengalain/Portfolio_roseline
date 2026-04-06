import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import eclaterMontre from "@/assets/images/Projects/blender/eclater/eclater_montre.png";
import eclaterMontre1 from "@/assets/images/Projects/blender/eclater/eclater_montre1.png";
import partieMontre from "@/assets/images/Projects/blender/eclater/partie_montre.png";
import { useLanguage } from "@/lib/language";

export default function EclaterMontre() {
  const { language } = useLanguage();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Image gauche — suit dans un sens
  const leftX = useTransform(springX, [-1, 1], [-30, 30]);
  const leftY = useTransform(springY, [-1, 1], [-20, 20]);

  // Image droite — suit dans le sens inverse
  const rightX = useTransform(springX, [-1, 1], [30, -30]);
  const rightY = useTransform(springY, [-1, 1], [20, -20]);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mouseX, mouseY]);

  return (
    <section id="eclater" className="w-full bg-background">

      {/* Image principale + images flottantes par-dessus */}
      <div className="relative w-full">

        {/* Label en overlay sur l'image */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute top-6 left-6 md:top-10 md:left-16 lg:left-[336px] z-20 text-xs uppercase tracking-[0.35em] text-foreground/25"
        >
          {language === "fr" ? "03 · Éclaté" : "03 · Exploded view"}
        </motion.p>

        <motion.img
          src={eclaterMontre}
          alt="Montre éclatée"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-auto block"
        />

        {/* Gauche — par-dessus */}
        <motion.img
          src={eclaterMontre1}
          alt="Éclaté vue 2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ x: leftX, y: leftY }}
          className="absolute left-[12%] top-[20%] w-[22%] object-contain drop-shadow-2xl hidden md:block"
        />

        {/* Droite — par-dessus */}
        <motion.img
          src={partieMontre}
          alt="Partie montre"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ x: rightX, y: rightY }}
          className="absolute right-[12%] top-[15%] w-[22%] object-contain drop-shadow-2xl hidden md:block"
        />

      </div>

    </section>
  );
}
