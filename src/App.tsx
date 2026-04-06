import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProjectRicmaa from "@/pages/ricmaa/ProjectRicmaa";
import ProjectMontre from "@/pages/montre/ProjectMontre";
import ProjectPortfolio from "@/pages/portfolio/ProjectPortfolio";
import Loading from "@/components/Loading";
import GradientOrbs from "@/components/GradientOrbs";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import usePrefersReducedMotion from "@/lib/usePrefersReducedMotion";
import { useLanguage } from "@/lib/language";
import { setPageMetadata } from "@/lib/seo";

export default function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), prefersReducedMotion ? 0 : 1200);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (loading) return;
    const hash = window.location.hash;
    if (!hash) return;
    requestAnimationFrame(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView();
    });
  }, [loading]);

  useEffect(() => {
    if (pathname !== "/" && pathname !== "/*") return;
    return setPageMetadata({
      title:
        language === "fr"
          ? "Roseline Cheng — Design UX/UI · Motion Design · Gobelins"
          : "Roseline Cheng — UX/UI Design · Motion Design · Gobelins",
      description:
        language === "fr"
          ? "Roseline Cheng — Étudiante en DNMADE Graphisme aux Gobelins. Passionnée par le design graphique, le motion design et l'UX/UI."
          : "Roseline Cheng — DNMADE Graphic Design student at Gobelins. Passionate about graphic design, motion design, and UX/UI.",
      canonical: "https://www.roselinecheng.com/",
      ogLocale: language === "fr" ? "fr_FR" : "en_US",
    });
  }, [language, pathname]);

  return (
    <Routes>
      <Route path="/projets/ricmaa" element={<ProjectRicmaa />} />
      <Route path="/projets/montre" element={<ProjectMontre />} />
      <Route path="/projets/portfolio" element={<ProjectPortfolio />} />
      <Route path="*" element={
        <>
          <AnimatePresence mode="wait">
            {loading && <Loading key="loading" reduceMotion={prefersReducedMotion} />}
          </AnimatePresence>

          {!loading && (
            <div className="relative min-h-screen">
              <CustomCursor />
              <GradientOrbs />
              <Navbar />
              <ScrollToTop />
              <main>
                <Hero />
                <MarqueeStrip />
                <Experience />
                <Projects />
                <Education />
                <Footer />
              </main>
            </div>
          )}
        </>
      } />
    </Routes>
  );
}
