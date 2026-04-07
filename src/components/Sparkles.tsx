import { useEffect, useRef, useState, useCallback } from "react";

const SPARKLE_COUNT = 60;

interface SparkleData {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function random(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function createSparkle(id: number): SparkleData {
  const sizeRoll = Math.random();
  const size = sizeRoll < 0.6 ? random(1.5, 2.5) : sizeRoll < 0.9 ? random(3, 4.5) : random(5, 7);
  return {
    id,
    x: random(0, 100),
    y: random(0, 100),
    size,
    duration: random(6, 14),
    delay: random(0, 8),
    opacity: random(0.3, 0.8),
  };
}

export default function Sparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const sparkles = useRef<Array<SparkleData & { currentX: number; currentY: number; vy: number; phase: number }>>([]);
  const animFrame = useRef<number>(0);

  const init = useCallback(() => {
    sparkles.current = Array.from({ length: SPARKLE_COUNT }, (_, i) => {
      const s = createSparkle(i);
      return {
        ...s,
        currentX: (s.x / 100) * window.innerWidth,
        currentY: (s.y / 100) * window.innerHeight,
        vy: random(0.12, 0.5),
        phase: random(0, Math.PI * 2),
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    init();

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.016;

      for (const s of sparkles.current) {
        // Monter vers le haut
        s.currentY -= s.vy;

        // Léger ondoiement horizontal
        s.currentX += Math.sin(t * 0.8 + s.phase) * 0.3;

        // Respawn en bas quand sorti par le haut
        if (s.currentY < -10) {
          s.currentX = random(0, canvas.width);
          s.currentY = canvas.height + 10;
          s.vy = random(0.12, 0.5);
        }

        // Répulsion souris
        const dx = s.currentX - mouse.current.x;
        const dy = s.currentY - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 80;
        if (dist < repelRadius && dist > 0) {
          const force = (repelRadius - dist) / repelRadius;
          s.currentX += (dx / dist) * force * 3;
          s.currentY += (dy / dist) * force * 3;
        }

        // Scintillement via sin
        const flicker = 0.5 + 0.5 * Math.sin(t * (0.6 + s.phase * 0.3) + s.phase);
        const alpha = s.opacity * flicker;

        // Dessin — cercle + halo
        ctx.save();
        ctx.globalAlpha = alpha * 0.25;
        ctx.beginPath();
        ctx.arc(s.currentX, s.currentY, s.size * 2.5, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(s.currentX, s.currentY, 0, s.currentX, s.currentY, s.size * 2.5);
        grad.addColorStop(0, "white");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(s.currentX, s.currentY, s.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.restore();
      }

      animFrame.current = requestAnimationFrame(draw);
    };

    draw();

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animFrame.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
