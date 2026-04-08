import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/language";
import pcRicAccueil from "@/assets/images/Projects/ricmaa/parcour_user/pc_ric_acceulle.png";
import ricmaaRic from "@/assets/images/Projects/ricmaa/parcour_user/ricmaa_ric.png";
import hemshRic from "@/assets/images/Projects/ricmaa/parcour_user/hemsh_ric.png";
import minisoRic from "@/assets/images/Projects/ricmaa/parcour_user/miniso_ric.png";
import mixoonRic from "@/assets/images/Projects/ricmaa/parcour_user/mixoon_ric.png";
import stylekorenRic from "@/assets/images/Projects/ricmaa/parcour_user/stylekoren_ric.png";
import yesstyleRic from "@/assets/images/Projects/ricmaa/parcour_user/yesstyle_ric.png";

const slides = [
  { img: ricmaaRic,     label: "Ricmaa",       desc: "Présentation de la marque" },
  { img: hemshRic,      label: "Hemsh",        desc: "Page partenaire" },
  { img: minisoRic,     label: "Miniso",       desc: "Page partenaire" },
  { img: mixoonRic,     label: "Mixoon",       desc: "Page partenaire" },
  { img: stylekorenRic, label: "Style Koren",  desc: "Page partenaire" },
  { img: yesstyleRic,   label: "YesStyle",     desc: "Page partenaire" },
];

export default function ParcoursRicmaa() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef<number>(0);
  const { language } = useLanguage();

  const goNext = () => { setDirection(1);  setCurrentSlide((p) => (p + 1) % slides.length); };
  const goPrev = () => { setDirection(-1); setCurrentSlide((p) => (p - 1 + slides.length) % slides.length); };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev();
  };

  return (
    <section id="parcours" className="w-full px-8 md:px-20 pt-10 pb-16">
      <div className="max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.35em] text-foreground/50 mb-4"
        >
          {language === "fr" ? "04 · Parcours utilisateur" : "04 · User journey"}
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
            <>Navigation <span className="text-foreground/30">du site</span></>
          ) : (
            <>Website <span className="text-foreground/30">navigation</span></>
          )}
        </motion.h2>

        {/* Flow vertical */}
        <div className="flex flex-col items-center">

          {/* Écran 1 — Accueil PC */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-[60%] self-center"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {language === "fr" ? "01 · Accueil" : "01 · Home"}
            </p>
            <div className="overflow-hidden">
              <img src={pcRicAccueil} alt="Accueil Ricmaa" className="w-full object-cover" />
            </div>
          </motion.div>

          {/* Flèche */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="my-10 text-foreground/20"
          >
            <ArrowUp className="h-5 w-5 rotate-180" />
          </motion.div>

          {/* Carrousel sous-pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full self-center"
          >
            {/* Label + compteur */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center mb-4"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {String(currentSlide + 2).padStart(2, "0")} · {slides[currentSlide].label}
                </p>
                <p className="text-xs text-foreground/35" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {slides[currentSlide].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Carrousel avec aperçus gauche/droite */}
            <div className="relative flex items-center gap-3 overflow-hidden">

              {/* Aperçu précédent — gauche */}
              <div className="hidden md:block w-[18%] flex-shrink-0 opacity-30 scale-95 origin-right transition-all duration-500 cursor-pointer"
                onClick={goPrev}
              >
                <img
                  src={slides[(currentSlide - 1 + slides.length) % slides.length].img}
                  alt="précédent"
                  className="w-full object-cover"
                />
              </div>

              {/* Image principale */}
              <div
                className="flex-1 relative"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.img
                    key={currentSlide}
                    src={slides[currentSlide].img}
                    alt={slides[currentSlide].label}
                    custom={direction}
                    initial={{ x: direction * 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction * -80, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* Aperçu suivant — droite */}
              <div className="hidden md:block w-[18%] flex-shrink-0 opacity-30 scale-95 origin-left transition-all duration-500 cursor-pointer"
                onClick={goNext}
              >
                <img
                  src={slides[(currentSlide + 1) % slides.length].img}
                  alt="suivant"
                  className="w-full object-cover"
                />
              </div>

            </div>

            {/* Dots + flèches — mobile uniquement */}
            <div className="flex md:hidden justify-center items-center gap-4 mt-4">
              <button onClick={goPrev} className="text-foreground/70 hover:text-foreground transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > currentSlide ? 1 : -1); setCurrentSlide(i); }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-foreground/80 w-6" : "bg-foreground/25 w-2.5"}`}
                  />
                ))}
              </div>
              <button onClick={goNext} className="text-foreground/70 hover:text-foreground transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
