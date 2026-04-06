import { motion } from "framer-motion";
import logo from "/logo.png";

interface LoadingProps {
  reduceMotion?: boolean;
}

export default function Loading({ reduceMotion = false }: LoadingProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      initial={reduceMotion ? false : undefined}
      exit={{ opacity: 0 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.5 }}
        className="w-64 md:w-80"
      >
        <img src={logo} alt="Roseline Cheng" className="w-full h-full object-contain" />
      </motion.div>

      <motion.div
        initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion ? { duration: 0 } : { delay: 0.3, duration: 0.4 }}
        className="mt-6"
      >
        <span className="text-lg font-medium tracking-widest text-foreground/80">
          ✨ Roseline ✨
        </span>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: reduceMotion ? 0 : "8rem" }}
        transition={reduceMotion ? { duration: 0 } : { delay: 0.5, duration: 1.5, ease: "easeInOut" }}
        className="mt-4 h-0.5 rounded-full bg-accent/60"
      />
    </motion.div>
  );
}
