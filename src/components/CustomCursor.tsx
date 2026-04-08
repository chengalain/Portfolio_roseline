import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import usePrefersReducedMotion from "@/lib/usePrefersReducedMotion";
import { useTheme } from "@/lib/theme";
import sourieNoir from "@/assets/images/cursor/sourie_noir.png";
import sourieBlanc from "@/assets/images/cursor/sourie_blanc.png";

const LINK_SELECTORS =
  "a, button, [data-cursor-hover]";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { theme } = useTheme();
  const cursorImg = theme === "light" ? sourieNoir : sourieBlanc;

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY]
  );

  useEffect(() => {
    const hasTouch = !window.matchMedia("(pointer: fine)").matches;
    setIsTouchDevice(hasTouch);
    if (hasTouch) return;

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", () => setHidden(true));
    window.addEventListener("mouseenter", () => setHidden(false));

    const onOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest(LINK_SELECTORS)) setHovered(true);
    };
    const onOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest(LINK_SELECTORS)) setHovered(false);
    };

    const onClick = () => setHovered(false);

    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    document.addEventListener("click", onClick, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("click", onClick);
    };
  }, [onMouseMove]);

  if (isTouchDevice || prefersReducedMotion) return null;

  return (
    <>
      {/* Curseur image custom */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-4px",
          translateY: "-4px",
        }}
        animate={{ opacity: hidden ? 0 : 1, scale: hovered ? 0.8 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <img src={cursorImg} alt="" width={24} height={32} style={{ display: "block", userSelect: "none" }} />
      </motion.div>

      {/* Ring — only appears on link/button hover */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: hidden ? 0 : hovered ? 1 : 0,
          scale: hovered ? 1 : 0.5,
          width: 56,
          height: 56,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <div
          className="h-full w-full rounded-full border border-white/60"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
      </motion.div>
    </>
  );
}
