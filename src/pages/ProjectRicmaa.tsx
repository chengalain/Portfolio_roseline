import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import topRic from "@/assets/images/Projects/ricmaa/top_ric.png";
import ricmaaBg from "@/assets/images/Projects/ricmaa/background.png";
import ricInsta from "@/assets/images/Projects/ricmaa/ric_insta.png";
import ricmaaTriangle from "@/assets/images/Projects/ricmaa/ricmaa_triangle.png";
import couleurRic from "@/assets/images/Projects/ricmaa/couleur_ric.png";
import pcRicAccueil from "@/assets/images/Projects/ricmaa/parcour_user/pc_ric_acceulle.png";
import ricmaaRic from "@/assets/images/Projects/ricmaa/parcour_user/ricmaa_ric.png";
import hemshRic from "@/assets/images/Projects/ricmaa/parcour_user/hemsh_ric.png";
import minisoRic from "@/assets/images/Projects/ricmaa/parcour_user/miniso_ric.png";
import mixoonRic from "@/assets/images/Projects/ricmaa/parcour_user/mixoon_ric.png";
import stylekorenRic from "@/assets/images/Projects/ricmaa/parcour_user/stylekoren_ric.png";
import yesstyleRic from "@/assets/images/Projects/ricmaa/parcour_user/yesstyle_ric.png";
import figmaRic from "@/assets/images/Projects/ricmaa/design_final/figma_ric.png";
import figmaRicmaa22 from "@/assets/images/Projects/ricmaa/design_final/figma_ricmaa22.png";
import figmaaRic3 from "@/assets/images/Projects/ricmaa/design_final/figmaa_ric3.png";
import mokup1 from "@/assets/images/Projects/ricmaa/design_final/mokup1.png";
import mokup2 from "@/assets/images/Projects/ricmaa/design_final/mokup2.png";

const slides = [
  { img: ricmaaRic,     label: "Ricmaa",       desc: "Présentation de la marque" },
  { img: hemshRic,      label: "Hemsh",        desc: "Page partenaire" },
  { img: minisoRic,     label: "Miniso",       desc: "Page partenaire" },
  { img: mixoonRic,     label: "Mixoon",       desc: "Page partenaire" },
  { img: stylekorenRic, label: "Style Koren",  desc: "Page partenaire" },
  { img: yesstyleRic,   label: "YesStyle",     desc: "Page partenaire" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

export default function ProjectRicmaa() {
  const [activeWeight, setActiveWeight] = useState<400 | 500 | 700>(400);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const touchStartX = useRef<number>(0);

  // Parallax souris — mockups
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

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = ["contexte", "font", "couleurs", "parcours", "design-final"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

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
    <div className="bg-background text-foreground">

      {/* Navbar projet */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-lg"
      >
        <nav className="flex w-full items-center justify-between px-8 py-4">
          {/* Retour */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Accueil
          </Link>

          {/* Liens sections */}
          <div className="hidden md:flex items-center gap-6 ml-auto mr-8">
            {[
              { label: "Contexte",     href: "#contexte" },
              { label: "Font",         href: "#font" },
              { label: "Couleurs",     href: "#couleurs" },
              { label: "Parcours",     href: "#parcours" },
              { label: "Design final", href: "#design-final" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm transition-colors ${
                  activeSection === item.href
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="ric-nav-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-white/60"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* ThemeToggle */}
          <ThemeToggle />
        </nav>
      </motion.header>

      {/* Bouton scroll-to-top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0, pointerEvents: showScrollTop ? "auto" : "none" }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Remonter en haut"
      >
        <ArrowUp className="h-4 w-4" />
      </motion.button>

      {/* ── HERO — image plein écran ────────────────────────────────────── */}
      <section
        className="relative w-screen h-screen overflow-hidden"
        style={{ backgroundImage: `url(${ricmaaBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <img
          src={topRic}
          alt="Portfolio Ricmaa Custom"
          className="relative z-10 w-full h-full object-contain mx-auto scale-125"
        />
        <div
          className="absolute bottom-0 left-0 w-full h-48 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #000000)" }}
        />
      </section>

      {/* ── INTRO — titre + présentation du projet ─────────────────────── */}
      <section className="w-full py-24 px-8 md:px-20" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Étiquette */}
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.35em] text-white/30 mb-6"
            >
              UX / UI Design · Figma · 2025
            </motion.p>

            {/* Titre principal */}
            <motion.h1
              variants={fadeUp}
              className="text-white leading-tight mb-8"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 700,
              }}
            >
              Portfolio de Ricmaa
            </motion.h1>

            <motion.div variants={fadeUp} className="h-px w-16 bg-white/20 mb-10" />

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-white/55 text-base leading-relaxed max-w-2xl mb-6"
            >
              Ricmaa est une influenceuse et créatrice de contenu spécialisée dans le skincare
              et le maquillage. Ce projet, réalisé lors de mon stage en juin 2025, consistait
              à concevoir son site promotionnel multi-pages de A à Z sur Figma.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-white/40 text-sm leading-relaxed max-w-2xl"
            >
              L'enjeu était de bâtir une identité numérique cohérente avec son univers féminin
              et premium — architecture de l'information, wireframes, et design final avec
              système de composants.
            </motion.p>

            {/* Méta */}
            <motion.div
              variants={fadeUp}
              className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { label: "Rôle", value: "UX/UI Designer" },
                { label: "Outil", value: "Figma" },
                { label: "Durée", value: "1 mois" },
                { label: "Année", value: "2025" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-2">{item.label}</p>
                  <p className="text-sm text-white/70 font-light">{item.value}</p>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ── SECTION — Contexte & Brief ─────────────────────────────────── */}
      <section id="contexte" className="w-full px-8 md:px-20 pb-16" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.35em] text-white/25 mb-14"
          >
            01 · Contexte

          </motion.p>

        {/* fond_ric_insta contenu + ric_insta à gauche + texte à droite */}
        <div>
          {/* Carte avec fond_ric_insta en background, contenue dans max-w-5xl */}
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
                className="text-white leading-tight mb-6"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                }}
              >
                Explication
                <br />
                du contexte
              </motion.h2>
              <motion.div variants={fadeUp} className="h-px w-10 bg-white/25 mb-6" />
              <motion.p variants={fadeUp} className="text-white/85 text-base leading-relaxed mb-4">
                Ricmaa souhaitait une interface qui reflète son positionnement dans le secteur
                de la beauté : à la fois accessible pour sa communauté et premium pour ses
                partenaires marques.
              </motion.p>
              <motion.p variants={fadeUp} className="text-white/60 text-base leading-relaxed">
                L'approche UX s'est concentrée sur une navigation simple et lisible, une
                hiérarchie visuelle claire et une identité graphique féminine cohérente tout
                au long du parcours utilisateur.
              </motion.p>
            </motion.div>

          </motion.div>
        </div>
        </div>
      </section>

      {/* ── SECTION — Système de design ────────────────────────────────── */}
      <section id="font" className="w-full px-8 md:px-20 pb-16" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.35em] text-white/25 mb-14"
          >
            02 · Font
          </motion.p>

        {/* Image pleine largeur avec texte overlay à gauche */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-sm"
        >
          {/* Bordure dorée haut uniquement */}
          <div
            className="absolute top-0 left-0 w-full h-[12px] z-20"
            style={{
              background: "linear-gradient(to right, #664305, #FFC300, #FFD856, #FFC300, #664305)",
            }}
          />

          {/* Image en haut à droite */}
          <img
            src={ricmaaTriangle}
            alt="Ricmaa Triangle"
            className="hidden md:block absolute top-0 right-0 h-[58%] w-auto object-contain object-top z-10"
          />

          {/* Texte — gauche */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10 flex flex-col justify-center px-12 py-8 w-full md:max-w-[62%]"
          >
            <motion.h2
              variants={fadeUp}
              className="text-white leading-tight mb-6"
              style={{
                fontFamily: "'Didot', 'Bodoni MT', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 700,
              }}
            >
              Typographie
              <br />
            </motion.h2>
            <motion.div variants={fadeUp} className="h-px w-10 bg-white/25 mb-8" />

            {/* Typo — style brand guide */}
            <motion.div variants={fadeUp} className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Police principale</p>
              <p className="text-2xl text-white/80 mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>Poppins</p>
              <p className="text-[10px] text-white/30 mb-1 italic" style={{ fontFamily: "'Poppins', sans-serif" }}>Cliquer pour tester les tailles</p>

              {/* Ligne séparatrice haut */}
              <div className="h-px bg-white/10" />

              {/* Grand Aa + colonnes — le Aa s'étire entre les deux traits */}
              <div className="flex items-stretch gap-6">

                {/* Grand Aa — pleine hauteur */}
                <motion.div
                  key={`aa-${activeWeight}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="text-white/80 select-none flex-shrink-0 flex items-center border-r border-white/10 pr-6"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: activeWeight, fontSize: "8rem", lineHeight: 1 }}
                >
                  Aa
                </motion.div>

                {/* Weights + Overview */}
                <div className="flex gap-6 flex-1 py-6">

                  {/* Weights */}
                  <div className="flex flex-col gap-2 border-r border-white/10 pr-6">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Weights</p>
                    {([
                      { weight: 400, label: "Regular" },
                      { weight: 500, label: "Medium" },
                      { weight: 700, label: "Bold" },
                    ] as { weight: 400 | 500 | 700; label: string }[]).map((t) => (
                      <button
                        key={t.weight}
                        onClick={() => setActiveWeight(t.weight)}
                        className={`text-sm text-left transition-colors duration-200 ${
                          activeWeight === t.weight ? "text-white" : "text-white/40 hover:text-white/70"
                        }`}
                        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: t.weight }}
                      >
                        {t.label}
                      </button>
                    ))}

                  </div>

                  {/* Overview */}
                  <div className="flex flex-col gap-1 flex-1 justify-center">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Overview</p>
                    <motion.p
                      key={activeWeight}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="text-xs text-white/60 leading-relaxed"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: activeWeight }}
                    >
                      Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk
                      <br />Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
                    </motion.p>
                    <motion.p
                      key={`num-${activeWeight}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="text-xs text-white/60 mt-1"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: activeWeight }}
                    >
                      0 1 2 3 4 5 6 7 8 9
                    </motion.p>
                    <motion.p
                      key={`sym-${activeWeight}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="text-xs text-white/40 mt-1"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: activeWeight }}
                    >
                      ! @ # $ % &amp; * ( ) — + &#123; &#125; ?
                    </motion.p>
                  </div>

                </div>
              </div>

              {/* Ligne séparatrice bas */}
              <div className="h-px bg-white/10" />

              {/* Flèche — en dessous du tableau, pointe vers le haut */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="mt-3 flex ml-[240px]"
              >
                <ArrowUp className="h-4 w-4 text-white/25" />
              </motion.div>
            </motion.div>

          </motion.div>

        </motion.div>
        </div>
      </section>

      {/* ── SECTION — Couleurs ──────────────────────────────────────────── */}
      <section id="couleurs" className="w-full px-8 md:px-20 pb-16" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-5xl mx-auto">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.35em] text-white/25 mb-14"
          >
            03 · Couleurs
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
                className="text-white leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 700 }}
              >
                Palette
              </h2>
              <div className="h-px w-10 bg-white/15 mb-5" />
              <p className="text-sm text-white/45 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Une palette construite autour du blanc et du rose — légèreté, féminité et modernité — pour refléter l'univers beauté de Ricmaa.
              </p>
            </div>
            <div className="overflow-hidden rounded-sm">
              <img
                src={couleurRic}
                alt="Palette couleurs Ricmaa"
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
            className="flex flex-col gap-0 border border-white/8 overflow-hidden"
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
                className="flex items-stretch border-b border-white/8 last:border-b-0"
              >
                {/* Swatch */}
                <div
                  className="w-24 md:w-36 flex-shrink-0"
                  style={{ backgroundColor: color.hex, minHeight: "88px" }}
                />

                {/* Nom */}
                <div className="flex items-center px-6 border-r border-white/8 w-[160px] flex-shrink-0">
                  <p
                    className="text-sm text-white/80 font-medium"
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
                        className="text-[8px] uppercase tracking-[0.3em] text-white/20"
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
                <div className="flex items-center pr-6 pl-4 border-l border-white/8">
                  <span className="text-[10px] font-mono text-white/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── SECTION — Parcours utilisateur ──────────────────────────────── */}
      <section id="parcours" className="w-full px-8 md:px-20 pt-10 pb-16" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-5xl mx-auto">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.35em] text-white/25 mb-4"
          >
            04 · Parcours utilisateur
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white leading-tight mb-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 700 }}
          >
            Navigation <span className="text-white/30">du site</span>
          </motion.h2>

          {/* Flow vertical */}
          <div className="flex flex-col items-center">

            {/* Écran 1 — Accueil PC (featured, pleine largeur) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-[60%] self-center"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                01 · Accueil
              </p>
              <div className="overflow-hidden">
                <img src={pcRicAccueil} alt="Accueil Ricmaa" className="w-full object-cover" />
              </div>
            </motion.div>

            {/* Flèche */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="my-10 text-white/20"
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
              {/* Label + compteur — en haut */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center text-center mb-4"
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {String(currentSlide + 2).padStart(2, "0")} · {slides[currentSlide].label}
                  </p>
                  <p className="text-xs text-white/35" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
                  {/* Flèches mobile — superposées sur l'image */}
                  <button
                    onClick={goPrev}
                    className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="h-7 w-7" />
                  </button>
                  <button
                    onClick={goNext}
                    className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronRight className="h-7 w-7" />
                  </button>
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

              {/* Dots — visibles uniquement sur mobile */}
              <div className="flex md:hidden justify-center gap-2 mt-4">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > currentSlide ? 1 : -1); setCurrentSlide(i); }}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-white/80 w-4" : "bg-white/25"}`}
                  />
                ))}
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SECTION — Design final ──────────────────────────────────────── */}
      <section id="design-final" className="w-full px-8 md:px-20 pt-10 pb-16" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-5xl mx-auto">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.35em] text-white/25 mb-4"
          >
            05 · Design final
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white leading-tight mb-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 700 }}
          >
            Résultat <span className="text-white/30">sur Figma</span>
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
              { src: figmaRic,       alt: "Design final Ricmaa — vue 1" },
              { src: figmaRicmaa22,  alt: "Design final Ricmaa — vue 2" },
              { src: figmaaRic3,     alt: "Design final Ricmaa — vue 3" },
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

          {/* Mockups — disposition diagonale */}
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

      {/* ── FOOTER — CTA retour ─────────────────────────────────────────── */}
      <section className="w-full px-8 md:px-20 py-24 border-t border-white/8" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/25 mb-3">Ricmaa Custom · 2025</p>
            <p className="text-white/40 text-sm max-w-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Projet réalisé en stage — conception UX/UI complète sur Figma.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au portfolio
          </Link>
        </div>
      </section>

    </div>
  );
}
