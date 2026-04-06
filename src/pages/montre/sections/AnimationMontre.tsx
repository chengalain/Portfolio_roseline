import { motion } from "framer-motion";
import montreVideo from "@/assets/images/Projects/blender/animation/montre_video.mp4";

export default function AnimationMontre() {
  return (
    <section id="animation" className="w-full px-8 md:px-20 py-24 bg-background">
      <div className="max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.35em] text-foreground/25 mb-14"
        >
          06 · Animation
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-sm"
        >
          <video
            src={montreVideo}
            controls
            loop
            playsInline
            className="w-full h-auto block"
          />
        </motion.div>

      </div>
    </section>
  );
}
