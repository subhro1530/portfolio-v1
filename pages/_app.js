import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Orbitron, Rajdhani } from "next/font/google";
import { useEffect, useRef } from "react";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["500", "700"] });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["300", "400"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "600"] });

export default function App({ Component, pageProps }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");

    const setSize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    const rnd = (min, max) => Math.random() * (max - min) + min;
    const particles = Array.from({ length: 42 }).map(() => ({
      x: rnd(0, c.width),
      y: rnd(0, c.height),
      r: rnd(1.4, 2.8),
      vx: rnd(-0.5, 0.5),
      vy: rnd(-0.5, 0.5),
      hue: rnd(300, 325), // magenta band
      tw: rnd(0.6, 1.25),
    }));

    let raf;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      // thin veil for trails so particles are visible over dark bg
      ctx.fillStyle = "rgba(10,6,18,0.22)";
      ctx.fillRect(0, 0, c.width, c.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // wrap edges
        if (p.x < -8) p.x = c.width + 8;
        if (p.x > c.width + 8) p.x = -8;
        if (p.y < -8) p.y = c.height + 8;
        if (p.y > c.height + 8) p.y = -8;

        const t = (Date.now() * 0.001 + i) * p.tw;
        const alpha = 0.5 + Math.sin(t) * 0.25;

        // core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 95%, 65%, ${alpha})`;
        ctx.fill();

        // halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + 1.3, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${p.hue}, 90%, 60%, ${alpha * 0.5})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();
      });
    };
    loop();

    return () => {
      window.removeEventListener("resize", setSize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <main className="relative bg-[#0a0612] text-white min-h-screen antialiased">
      {/* particle layer: z-0 so it sits above base bg, below all sections */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      {/* app content at z-10 so it stays above particles */}
      <div className="relative z-10">
        <div className="min-h-screen scroll-smooth">
          <Component {...pageProps} />
        </div>
      </div>
    </main>
  );
}
