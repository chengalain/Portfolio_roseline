import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProjectRicmaa from "@/pages/ProjectRicmaa";
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

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;
    const hash = window.location.hash;
    if (!hash) return;
    requestAnimationFrame(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView();
    });
  }, [loading]);

  return (
    <Routes>
      <Route path="/projets/ricmaa" element={<ProjectRicmaa />} />
      <Route path="*" element={
        <>
          <AnimatePresence mode="wait">
            {loading && <Loading key="loading" />}
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
