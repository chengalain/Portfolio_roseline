import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language";
import montrGlb from "@/assets/images/Projects/blender/eclater/roseline_cheng_copie 2.glb?url";
import * as THREE from "three";

function WatchModel() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(montrGlb);
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (names.length > 0) {
      const action = actions[names[0]];
      if (action) {
        action.reset().play();
        action.clampWhenFinished = false;
        action.setLoop(THREE.LoopRepeat, Infinity);
      }
    }
  }, [actions, names]);

  useFrame(() => {
    if (group.current && names.length === 0) {
      group.current.rotation.y += 0.003;
    }
  });

  return <primitive ref={group} object={scene} />;
}

export default function EclaterMontre() {
  const { language } = useLanguage();

  return (
    <section id="eclater" className="w-full px-8 md:px-20 pb-16">

      <div className="max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.35em] text-foreground/50 pt-10 mb-14 relative z-10"
        >
          {language === "fr" ? "03 · Éclaté" : "03 · Exploded view"}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-sm"
          style={{ height: "clamp(300px, 50vh, 500px)" }}
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <directionalLight position={[-5, -2, -5]} intensity={0.4} />
            <Suspense fallback={null}>
              <WatchModel />
              <Environment preset="studio" />
            </Suspense>
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              minDistance={2}
              maxDistance={10}
              autoRotate={false}
            />
          </Canvas>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-xs text-muted-foreground/50 mt-4 tracking-widest uppercase"
        >
          {language === "fr" ? "Glisser pour pivoter · Scroll pour zoomer" : "Drag to rotate · Scroll to zoom"}
        </motion.p>

      </div>

    </section>
  );
}
