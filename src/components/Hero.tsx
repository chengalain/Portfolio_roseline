import { motion, LayoutGroup } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import { ABOUT_ME, SOCIAL_MEDIA, RESUME_LINKS } from "@/constants";
import { useLanguage } from "@/lib/language";
import Magnetic from "./Magnetic";

import videoGauche from "@/assets/images/videos/video_gauche.mp4";
import videoMilieux from "@/assets/images/videos/video_milieux.mp4";
import videoDroite from "@/assets/images/videos/video_droite.mp4";

const VIDEOS = [videoGauche, videoMilieux, videoDroite];

type Slot = "left" | "center" | "right";
const SLOTS: Slot[] = ["left", "center", "right"];

export default function Hero() {
  const { language } = useLanguage();
  // order[0] = index vidéo à gauche, order[1] = centre, order[2] = droite
  const [order, setOrder] = useState([0, 1, 2]);
  const [hoveredSlot, setHoveredSlot] = useState<Slot | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([null, null, null]);

  // Sync lecture vidéo selon position et hover
  useEffect(() => {
    order.forEach((videoIndex, slotIndex) => {
      const video = videoRefs.current[videoIndex];
      if (!video) return;
      const slot = SLOTS[slotIndex];
      const shouldPlay = slot === "center" || slot === hoveredSlot;
      if (shouldPlay) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [order, hoveredSlot]);

  const rotateTo = useCallback((clickedSlot: "left" | "right") => {
    setHoveredSlot(null);
    if (clickedSlot === "left") {
      // Le gauche devient centre : [r, l, c]
      setOrder(([l, c, r]) => [r, l, c]);
    } else {
      // Le droite devient centre : [c, r, l]
      setOrder(([l, c, r]) => [c, r, l]);
    }
  }, []);

  return (
    <section id="home" className="relative flex flex-col md:flex-row h-screen overflow-hidden">
      <LayoutGroup>
        {order.map((videoIndex, slotIndex) => {
          const slot = SLOTS[slotIndex];
          const isCenter = slot === "center";
          const isHovered = slot === hoveredSlot;

          return (
            <motion.div
              key={videoIndex}
              layout
              transition={{ layout: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }}
              style={{ flex: isCenter ? 3 : 1 }}
              className={`relative overflow-hidden border-white dark:border-black ${
                slotIndex === 0
                  ? "border-b-[12px] md:border-b-0 md:border-r-[12px]"
                  : slotIndex === 1
                  ? "border-y-[12px] md:border-y-0 md:border-x-[12px]"
                  : "border-t-[12px] md:border-t-0 md:border-l-[12px]"
              }${!isCenter ? " cursor-pointer" : ""}`}
              onClick={() => !isCenter && rotateTo(slot as "left" | "right")}
              onMouseEnter={() => !isCenter && setHoveredSlot(slot)}
              onMouseLeave={() => setHoveredSlot(null)}
              tabIndex={!isCenter ? 0 : undefined}
              onKeyDown={(e) => {
                if (!isCenter && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  rotateTo(slot as "left" | "right");
                }
              }}
              aria-label={
                !isCenter
                  ? slot === "left"
                    ? language === "fr" ? "Voir panneau gauche" : "View left panel"
                    : language === "fr" ? "Voir panneau droit" : "View right panel"
                  : undefined
              }
            >
              {/* Vidéo */}
              <motion.video
                ref={(el) => {
                  videoRefs.current[videoIndex] = el;
                }}
                src={VIDEOS[videoIndex]}
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                animate={{ scale: isHovered ? 1.04 : 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              {/* Panneau central : dégradé + contenu texte */}
              {isCenter && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16 pointer-events-none">
                    {/* Badge dispo */}
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs text-white/80 w-fit"
                    >
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                      </span>
                      {language === "fr"
                        ? "Disponible — Alternance sept. 2026"
                        : "Available — Apprenticeship from Sep 2026"}
                    </motion.div>

                    {/* Nom */}
                    <motion.h1
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "clamp(2.5rem, 5vw, 6rem)",
                        fontWeight: 700,
                        lineHeight: 0.95,
                      }}
                      className="text-white tracking-tight"
                    >
                      {ABOUT_ME.lastName.toUpperCase()}
                      <br />
                      <span className="text-white/55">{ABOUT_ME.firstName.toUpperCase()}</span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="mt-4 text-xs uppercase tracking-[0.25em] text-white/60"
                    >
                      {language === "fr"
                        ? "Design Graphique · UX/UI · Motion Design"
                        : "Graphic Design · UX/UI · Motion Design"}
                    </motion.p>

                    {/* Réseaux sociaux + CV */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.65 }}
                      className="mt-6 flex items-center gap-2.5 pointer-events-auto"
                    >
                      {SOCIAL_MEDIA.map((social) => (
                        <Magnetic key={social.id} strength={0.4}>
                          <a
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="flex h-9 w-9 items-center justify-center rounded-full
                                       border border-white/30 bg-white/10 backdrop-blur-sm
                                       text-white/80 transition-all hover:bg-white/20 hover:text-white"
                          >
                            <social.icon className="h-4 w-4" />
                          </a>
                        </Magnetic>
                      ))}
                      <Magnetic strength={0.2}>
                        <a
                          href={RESUME_LINKS[language]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/30
                                     bg-white/10 backdrop-blur-sm px-5 py-2 text-xs font-medium
                                     text-white transition-all hover:bg-white/20 ml-1"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          {language === "fr" ? "Mon CV" : "My Resume"}
                        </a>
                      </Magnetic>
                    </motion.div>
                  </div>
                </>
              )}

              {/* Indicateur de clic sur les panneaux latéraux */}
              {!isCenter && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur-sm text-white text-lg">
                    <span className="md:hidden">{slot === "left" ? "↑" : "↓"}</span>
                  <span className="hidden md:inline">{slot === "left" ? "←" : "→"}</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </LayoutGroup>

      {/* Flèche scroll */}
      <motion.a
        href="#experience"
        aria-label={language === "fr" ? "Défiler vers l'expérience" : "Scroll to experience"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-6 w-6 text-white/70 hover:text-white transition-colors" />
        </motion.div>
      </motion.a>
    </section>
  );
}
