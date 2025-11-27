import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Orbitron, Rajdhani } from "next/font/google";
import { useEffect, useRef } from "react";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["500", "700"] });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["300", "400"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "600"] });

export default function App({ Component, pageProps }) {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // bubbles (upward drift)
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const bubbles = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 10 + 6,
      vy: -(Math.random() * 0.6 + 0.2),
      sway: Math.random() * 0.5 + 0.2,
      hue: 300 + Math.random() * 40, // magenta/purple band
    }));
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    let frameId;
    const draw = () => {
      frameId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, w, h);
      bubbles.forEach((b, i) => {
        b.y += b.vy;
        b.x += Math.sin((Date.now() / 1000 + i) * b.sway) * 0.4;
        if (b.y + b.r < 0) {
          b.y = h + b.r;
          b.x = Math.random() * w;
        }
        // bubble stroke + subtle fill
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${b.hue}, 90%, 60%, 0.35)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = `hsla(${b.hue}, 80%, 55%, 0.08)`;
        ctx.fill();
      });
    };
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const move = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 40}px, ${
          e.clientY - 40
        }px)`;
      }
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <main className="font-glam relative bg-[#0a0612] text-white min-h-screen antialiased">
      {/* background layers */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyanf-400/10 blur-3xl animate-orbit origin-center" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-tr from-cyanf-400/10 to-transparent rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-[url('/grid-noise.png')] opacity-25 mix-blend-screen" />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-70 animate-hueShift bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,212,0.22),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.22),transparent_60%)]" />
      </div>

      {/* particle layer: above base bg, below content */}
      <div className="fixed inset-0 -z-10">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* global cursor glow (magenta) */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 z-50 w-20 h-20 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,0,212,0.35) 0%, rgba(255,0,212,0.20) 35%, transparent 60%)",
          filter: "blur(18px)",
        }}
      />

      <div className="min-h-screen scroll-smooth">
        <Component {...pageProps} />
      </div>
    </main>
  );
}
