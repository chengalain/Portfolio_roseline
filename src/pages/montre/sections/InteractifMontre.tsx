import { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";
import { useLanguage } from "@/lib/language";
// @ts-ignore
import modelUrl from "@/assets/images/Projects/blender/interactif/roseline cheng.glb?url";

function WatchModel() {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} />;
}

function CanvasLoader() {
  return (
    <mesh>
      <boxGeometry args={[0, 0, 0]} />
    </mesh>
  );
}

export default function InteractifMontre() {
  const { language } = useLanguage();
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

  return (
    <section id="interactif" className="w-full px-8 md:px-20 pb-16">
      <div className="max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.35em] text-foreground/50 mb-4"
        >
          {language === "fr" ? "07 · Interactif" : "07 · Interactive"}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[11px] text-foreground/50 pt-10 mb-10 tracking-wide"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {language === "fr"
            ? "Clique et fais glisser pour faire tourner la montre"
            : "Click and drag to rotate the watch"}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full rounded-sm overflow-hidden"
          style={{ height: isMobile ? "52vh" : "70vh" }}
        >
          <Canvas
            camera={{ position: [0, 0, 4], fov: 45 }}
            style={{ background: "hsl(var(--background))", width: "100%", height: "100%" }}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <directionalLight position={[-5, -5, -3]} intensity={0.3} />

            <Suspense fallback={<CanvasLoader />}>
              <WatchModel />
              <Environment preset="city" />
              <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={6} blur={2} />
            </Suspense>

            <OrbitControls
              enableZoom
              enablePan={false}
              autoRotate={!isMobile}
              autoRotateSpeed={1.2}
              minDistance={2}
              maxDistance={8}
            />
          </Canvas>
        </motion.div>

      </div>
    </section>
  );
}

useGLTF.preload(modelUrl);
