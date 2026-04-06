import { motion } from "framer-motion";
import mokupMontre from "@/assets/images/Projects/blender/modelisation/mokup_explicatif_montre.png";
import montreNoir from "@/assets/images/Projects/blender/modelisation/montre_noir.png";
import montreBlanc from "@/assets/images/Projects/blender/modelisation/montre_blanc.png";
import montreOrange from "@/assets/images/Projects/blender/modelisation/montre_orange.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function ModelisationMontre() {
  return (
    <section id="modelisation" className="w-full px-8 md:px-20 py-24" style={{ backgroundColor: "#000000" }}>
      <div className="max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.35em] text-white/25 mb-14"
        >
          05 · Modélisation
        </motion.p>

        {/* Mokup pleine largeur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full overflow-hidden rounded-sm mb-6"
        >
          <img
            src={mokupMontre}
            alt="Mockup explicatif montre"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* 3 images sur la même ligne */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-3 gap-4"
        >
          {[
            { src: montreNoir,   alt: "Montre noire"   },
            { src: montreBlanc,  alt: "Montre blanche" },
            { src: montreOrange, alt: "Montre orange"  },
          ].map((img) => (
            <motion.div key={img.alt} variants={fadeUp} className="overflow-hidden rounded-sm aspect-square flex items-center justify-center bg-black">
              <img src={img.src} alt={img.alt} className="w-full h-full object-contain" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
