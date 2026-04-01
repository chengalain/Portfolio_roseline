import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import topRic from "@/assets/images/Projects/ricmaa/top_ric.png";
import ricExplication from "@/assets/images/Projects/ricmaa/ric_explication.png";
import eventailleRic from "@/assets/images/Projects/ricmaa/eventaille_ric.png";

export default function ProjectRicmaa() {
  return (
    <div className="bg-background text-foreground">

      {/* Bouton retour */}
      <Link
        to="/"
        className="fixed top-6 left-8 z-50 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour
      </Link>

      {/* Section 1 — Image plein écran */}
      <section className="relative w-screen h-screen overflow-hidden">
        <img
          src={topRic}
          alt="Portfolio Ricmaa Custom"
          className="w-full h-full object-cover"
        />
        {/* Dégradé bas vers noir */}
        <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #000000)" }}
        />
      </section>

      {/* Transition — titre sur fond noir */}
      <section className="w-full flex flex-col items-center justify-center py-16" style={{ backgroundColor: "#000000" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1
            className="text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700 }}
          >
            Portfolio de Ricmaa
          </h1>
          <div className="mt-3 mx-auto h-px w-16 bg-white/30" />
        </motion.div>
      </section>

      {/* Section 2 — Explication plein écran */}
      <section className="relative w-screen h-screen overflow-hidden">
        <img
          src={ricExplication}
          alt="Explication du contexte Ricmaa"
          className="w-full h-full object-cover"
        />

        {/* 3 tirets en bas de l'image */}
        <div className="absolute bottom-8 left-0 w-full flex items-center gap-4 px-12 pointer-events-none">
          <div className="h-px flex-[2] bg-white/70" />
          <div className="h-px flex-[3] bg-white/70" />
          <div className="h-px flex-[2] bg-white/70" />
        </div>

        {/* Texte — droite, haut */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute top-[15%] right-[8%] w-full max-w-[45%]"
        >
          <h2
            className="text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 700 }}
          >
            Explication du contexte
          </h2>
          <div className="mt-3 mb-5 h-px w-16 bg-white/50" />
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            Projet réalisé lors de mon stage chez Ricmaa en juin 2025, influenceuse et créatrice
            de contenu, visant la conception d'un site promotionnel multi-pages mettant en valeur
            son univers et ses activités.
          </p>
          <p className="text-white/80 text-sm leading-relaxed">
            L'approche UX visait à proposer une interface simple et lisible, facilitant la
            compréhension des contenus, tout en intégrant une identité féminine cohérente avec
            des projets axés sur le skincare et le maquillage.
          </p>
        </motion.div>
      </section>

      {/* Section 3 — Eventaille / Font */}
      <section
        className="relative w-screen overflow-hidden"
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${eventailleRic})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >

        {/* 3 tirets en haut */}
        <div className="absolute top-6 left-0 w-full flex items-center gap-6 px-10 pointer-events-none">
          <div className="h-px flex-[2] bg-white/70" />
          <div className="h-px flex-[3] bg-white/40" />
          <div className="h-px flex-[2] bg-white/70" />
        </div>

        {/* Texte — gauche */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute top-[20%] left-[6%] w-full max-w-[38%]"
        >
          <h2
            className="text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700 }}
          >
            Font
          </h2>
          <div className="mt-2 mb-5 h-px w-12 bg-white/60" />

          <p className="text-white/90 text-base font-light tracking-widest mb-5">Poppins</p>

          <p className="text-white/60 text-xs leading-relaxed mb-8" style={{ maxWidth: "280px" }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commo
            consequat.
          </p>

          <div className="flex items-center gap-6 text-white/80 text-sm pl-8">
            <span className="font-normal">Regular</span>
            <span className="font-medium">Medium</span>
            <span className="font-bold">Bold</span>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
