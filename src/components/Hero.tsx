import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { ABOUT_ME, SOCIAL_MEDIA, RESUME_LINK } from "@/constants";
import Magnetic from "./Magnetic";
import profile from "@/assets/images/profile.png";
import { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const moveX = useTransform(springX, [-window.innerWidth / 2, window.innerWidth / 2], [-12, 12]);
  const moveY = useTransform(springY, [-window.innerHeight / 2, window.innerHeight / 2], [-6, 6]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative grid min-h-screen md:grid-cols-2 overflow-hidden"
    >
      {/* Gauche — texte vertical centré */}
      <div className="flex flex-col justify-center px-10 md:px-16 pt-24 pb-12 z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border
                     bg-card/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm w-fit"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Disponible — stage mai 2026 · alternance sept. 2026
        </motion.div>

        {/* Nom */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              x: moveX,
              y: moveY,
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
              fontWeight: 700,
              lineHeight: 0.95,
            }}
            className="text-foreground tracking-tight"
          >
            {ABOUT_ME.lastName.toUpperCase()}
            <br />
            <span className="text-foreground/50">{ABOUT_ME.firstName.toUpperCase()}</span>
          </motion.h1>
        </div>

        {/* Séparateur */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-8 mb-6 h-px bg-border origin-left"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          Design Graphique · UX/UI · Motion Design
        </motion.p>

        {/* Gobelins */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground/50"
        >
          <a
            href="https://www.gobelins.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            Gobelins, l'école de l'image — Paris
          </a>
        </motion.p>

        {/* Liens sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 flex items-center gap-2.5"
        >
          {SOCIAL_MEDIA.map((social) => (
            <Magnetic key={social.id} strength={0.4}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full
                           border border-border bg-card/50 text-muted-foreground
                           transition-all hover:-translate-y-0.5 hover:border-accent/50
                           hover:text-foreground"
              >
                <social.icon className="h-4 w-4" />
              </a>
            </Magnetic>
          ))}

          <Magnetic strength={0.2}>
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border
                         bg-card/50 px-5 py-2 text-xs font-medium text-foreground
                         transition-all hover:bg-muted ml-1"
            >
              <FileText className="h-3.5 w-3.5" />
              Mon CV
            </a>
          </Magnetic>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#experience"
          aria-label="Défiler vers l'expérience"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <ArrowDown className="h-6 w-6 text-foreground/70 hover:text-foreground transition-colors" />
          </motion.div>
        </motion.a>
      </div>

      {/* Droite — photo + demi-cercle, collé au bord */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative flex items-end justify-center overflow-hidden"
      >
        {/* Halo principal sous la photo */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-0"
          style={{
            width: "70%",
            height: "50%",
            background: "radial-gradient(ellipse at center bottom, rgba(240,230,211,0.18) 0%, rgba(240,230,211,0.04) 50%, transparent 75%)",
            filter: "blur(40px)",
          }}
        />

        {/* Halo secondaire plus large et subtil */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-0"
          style={{
            width: "100%",
            height: "60%",
            background: "radial-gradient(ellipse at center bottom, rgba(240,230,211,0.05) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        {/* Photo */}
        <motion.img
          src={profile}
          alt="Roseline Cheng"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 select-none object-contain object-bottom w-full"
          style={{ maxHeight: "90vh" }}
          draggable={false}
        />
      </motion.div>
    </section>
  );
}
