import { useEffect, useRef } from "react";
import sourieNoir from "@/assets/images/cursor/sourie_noir.png";
import sourieBlanc from "@/assets/images/cursor/sourie_blanc.png";

interface Trail {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  alpha: number;
  scale: number;
}

export default function PetalTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trails = useRef<Trail[]>([]);
  const mouse = useRef({ lastX: -999, lastY: -999 });
  const frameRef = useRef(0);
  const imgNoir = useRef<HTMLImageElement | null>(null);
  const imgBlanc = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const noir = new Image(); noir.src = sourieNoir; imgNoir.current = noir;
    const blanc = new Image(); blanc.src = sourieBlanc; imgBlanc.current = blanc;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - mouse.current.lastX;
      const dy = e.clientY - mouse.current.lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 8) {
        mouse.current.lastX = e.clientX;
        mouse.current.lastY = e.clientY;

        const count = 1;
        for (let i = 0; i < count; i++) trails.current.push({
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + 22 + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * 2.5,
          vy: (Math.random() - 0.5) * 2.5,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 6,
          alpha: 0.7,
          scale: 0.4 + Math.random() * 1.4,
        });

        if (trails.current.length > 35) trails.current.splice(0, trails.current.length - 35);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains("dark");
      const img = isDark ? imgBlanc.current : imgNoir.current;

      trails.current = trails.current.filter((t) => t.alpha > 0.02);

      for (const t of trails.current) {
        t.x += t.vx;
        t.y += t.vy;

        t.rotation += t.rotationSpeed;
        t.alpha -= 0.008;

        if (!img || !img.complete) continue;
        const size = 24 * t.scale;
        ctx.save();
        ctx.globalAlpha = t.alpha;
        ctx.translate(t.x, t.y);
        ctx.rotate((t.rotation * Math.PI) / 180);
        ctx.drawImage(img, -size / 2, -size / 2, size, size);
        ctx.restore();
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[9998]" />;
}
