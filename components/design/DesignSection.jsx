"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import Script from "next/script";

// ─────────────────────────────────────────
// 🚀 Rocket Item
// ─────────────────────────────────────────
const RocketItem = ({ id, onExplode }) => {
  const [exploded, setExploded] = useState(false);
  const randomX = useRef(Math.random() * 80 + 10);
  const speed = useRef(Math.random() * 3 + 20);

  const handleClick = (e) => {
    e.stopPropagation();
    setExploded(true);
    setTimeout(() => onExplode(id), 600);
  };

  return (
    <motion.div
      initial={{ y: "110vh", opacity: 0, scale: 0.8 }}
      animate={
        exploded
          ? { scale: [1, 2.5, 0], opacity: 0, filter: "blur(15px) brightness(2)" }
          : { y: "-90vh", opacity: 1, scale: 1 }
      }
      transition={{
        duration: exploded ? 0.4 : speed.current,
        ease: exploded ? "easeOut" : "linear",
      }}
      onAnimationComplete={() => !exploded && onExplode(id)}
      onClick={handleClick}
      className="absolute z-[70] cursor-pointer pointer-events-auto flex flex-col items-center"
      style={{ left: `${randomX.current}%` }}
    >
      {exploded ? (
        <div className="relative">
          <span className="text-5xl">💥</span>
          <div className="absolute inset-0 bg-cyan-400 blur-3xl rounded-full opacity-50 animate-ping" />
        </div>
      ) : (
        <div className="flex flex-col items-center group relative">
          <span
            className="text-xl font-black tracking-widest transition-all duration-500 group-hover:scale-125"
            style={{
              background: "linear-gradient(90deg,#00f2fe,#a3e635,#ff0080)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 8px rgba(0,242,254,0.7))",
            }}
          >
            MR. Robin Ahmed
          </span>
          <motion.div
            animate={{
              height: [35, 80, 35],
              opacity: [0.7, 1, 0.7],
              scaleX: [1, 2.2, 1],
            }}
            transition={{ repeat: Infinity, duration: 0.12, ease: "easeInOut" }}
            style={{
              width: 4,
              background: "linear-gradient(to top,transparent,#00f2fe,#facc15)",
              borderRadius: 4,
              marginTop: 6,
              boxShadow: "0 0 20px #00f2fe",
            }}
          />
        </div>
      )}
    </motion.div>
  );
};

// ─────────────────────────────────────────
// 💻 Auto-Typing Code Rain Canvas
// ─────────────────────────────────────────
const CodeRainCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const codeLines = [
      `const hero = () => <Robin />;`,
      `import { motion } from 'framer-motion';`,
      `useState(null) // init`,
      `useEffect(() => { animate(); }, []);`,
      `const x = useSpring(mouseX, { stiffness: 1000 });`,
      `export default DesignSection;`,
      `background: linear-gradient(135deg, #00f2fe, #ff0080);`,
      `border-radius: 12px; overflow: hidden;`,
      `type Props = { children: ReactNode };`,
      `const ref = useRef<HTMLDivElement>(null);`,
      `vanta.HALO({ el: sectionRef.current });`,
      `rockets.map((id) => <RocketItem key={id} />);`,
      `const smoothX = useSpring(mouseX, {...});`,
      `filter: drop-shadow(0 0 12px #00f2fe);`,
      `animation: rise 22s linear forwards;`,
      `@keyframes pulse { 0%{opacity:1} 50%{opacity:0.3} }`,
      `z-index: 100; pointer-events: none;`,
      `transform: translate(-50%, -50%) rotate(360deg);`,
      `const [rockets, setRockets] = useState([]);`,
      `setInterval(() => spawnRocket(), 4500);`,
    ];

    const FONT_SIZE = 12;
    const LINE_HEIGHT = 22;
    const COL_WIDTH = 320;

    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const cols = Math.ceil(W / COL_WIDTH);

    const streams = Array.from({ length: cols }, (_, i) => ({
      x: i * COL_WIDTH + 10,
      y: Math.random() * H,
      lineIdx: Math.floor(Math.random() * codeLines.length),
      charIdx: 0,
      charTimer: 0,
      charSpeed: Math.floor(Math.random() * 2) + 1,
      opacity: Math.random() * 0.22 + 0.06,
      color: Math.random() < 0.5 ? "0,200,255" : "100,255,100",
    }));

    let animId;
    let frame = 0;

    const KEYWORDS =
      /^(const|let|var|return|import|export|from|default|type|useState|useEffect|useRef|useSpring|null|true|false)$/;

    function draw() {
      ctx.fillStyle = "rgba(2,5,16,0.16)";
      ctx.fillRect(0, 0, W, H);
      ctx.font = `${FONT_SIZE}px 'Courier New', monospace`;

      streams.forEach((s) => {
        const line = codeLines[s.lineIdx];
        s.charTimer++;
        if (s.charTimer >= s.charSpeed) {
          s.charTimer = 0;
          if (s.charIdx < line.length) {
            s.charIdx++;
          } else {
            s.y += LINE_HEIGHT;
            s.lineIdx = (s.lineIdx + 1) % codeLines.length;
            s.charIdx = 0;
            s.charSpeed = Math.floor(Math.random() * 2) + 1;
            if (s.y > H + 40) s.y = -LINE_HEIGHT * 2;
          }
        }

        const visible = line.slice(0, s.charIdx);
        const words = visible.split(/(const|let|var|return|import|export|from|default|type|useState|useEffect|useRef|useSpring|null|true|false)/g);
        let drawX = s.x;

        words.forEach((word) => {
          const isKw = KEYWORDS.test(word);
          ctx.fillStyle = isKw
            ? `rgba(255,160,80,${s.opacity})`
            : `rgba(${s.color},${s.opacity})`;
          ctx.fillText(word, drawX, s.y);
          drawX += ctx.measureText(word).width;
        });

        // blinking cursor
        if (s.charIdx < line.length && frame % 30 < 15) {
          ctx.fillStyle = `rgba(${s.color},${s.opacity + 0.3})`;
          ctx.fillRect(drawX, s.y - FONT_SIZE, 6, FONT_SIZE + 2);
        }
      });

      frame++;
      animId = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.42, mixBlendMode: "screen" }}
    />
  );
};

// ─────────────────────────────────────────
// ✨ Particle + Glow Canvas (mouse reactive)
// ─────────────────────────────────────────
const ParticleCanvas = ({ mousePos }) => {
  const canvasRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    mousePosRef.current = mousePos;
  }, [mousePos]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      a: Math.random() * 0.5 + 0.15,
      col: Math.random() < 0.5 ? "0,180,255" : "140,0,255",
    }));

    const floatLines = Array.from({ length: 8 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 1.4,
      vy: (Math.random() - 0.5) * 0.5,
      len: Math.random() * 80 + 30,
      a: Math.random() * 0.4 + 0.08,
      col: Math.random() < 0.5 ? "0,200,255" : "120,80,255",
    }));

    let animId;

    function draw() {
      const { x: hx, y: hy } = mousePosRef.current;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "rgba(2,5,16,1)";
      ctx.fillRect(0, 0, W, H);

      // base ambient glow
      const grd = ctx.createRadialGradient(W * 0.5, H * 0.42, 0, W * 0.5, H * 0.42, W * 0.6);
      grd.addColorStop(0, "rgba(0,50,130,.32)");
      grd.addColorStop(0.5, "rgba(60,0,120,.14)");
      grd.addColorStop(1, "transparent");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);

      // mouse reactive glow
      if (hx > 0 || hy > 0) {
        const mg = ctx.createRadialGradient(hx, hy, 0, hx, hy, 220);
        mg.addColorStop(0, "rgba(0,120,255,.22)");
        mg.addColorStop(0.5, "rgba(100,0,200,.09)");
        mg.addColorStop(1, "transparent");
        ctx.fillStyle = mg;
        ctx.fillRect(0, 0, W, H);
      }

      // floating speed lines
      floatLines.forEach((l) => {
        l.x += l.vx; l.y += l.vy;
        if (l.x < -200) l.x = W + 100;
        if (l.x > W + 200) l.x = -100;
        if (l.y < -100) l.y = H + 50;
        if (l.y > H + 100) l.y = -50;
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x + l.vx * l.len, l.y + l.vy * l.len);
        ctx.strokeStyle = `rgba(${l.col},${l.a})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // particles
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        const dx = p.x - hx, dy = p.y - hy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const glow = dist < 180 ? Math.max(0, 1 - dist / 180) : 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + glow * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.col},${p.a + glow * 0.45})`;
        ctx.fill();

        if (glow > 0.3) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 3 + glow * 8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.col},${glow * 0.08})`;
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      W = canvas.offsetWidth; H = canvas.offsetHeight;
      canvas.width = W; canvas.height = H;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

// ─────────────────────────────────────────
// 🖱️ Cursor Trail (fixed, full-page)
// ─────────────────────────────────────────
const CursorTrail = ({ x, y }) => {
  const DOTS = 10;
  const positions = useRef(Array.from({ length: DOTS }, () => ({ x: 0, y: 0 })));
  const animRef = useRef();
  const [dots, setDots] = useState(Array.from({ length: DOTS }, () => ({ x: 0, y: 0 })));
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => { target.current = { x, y }; }, [x, y]);

  useEffect(() => {
    function loop() {
      const pos = positions.current;
      pos[0].x += (target.current.x - pos[0].x) * 0.18;
      pos[0].y += (target.current.y - pos[0].y) * 0.18;
      for (let i = 1; i < DOTS; i++) {
        pos[i].x += (pos[i - 1].x - pos[i].x) * 0.22;
        pos[i].y += (pos[i - 1].y - pos[i].y) * 0.22;
      }
      setDots(pos.map((p) => ({ x: p.x, y: p.y })));
      animRef.current = requestAnimationFrame(loop);
    }
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <>
      {dots.map((d, i) => {
        const size = Math.max(2, 9 - i * 0.8);
        const opacity = Math.max(0, 0.55 - i * 0.05);
        return (
          <div
            key={i}
            className="fixed pointer-events-none z-[95]"
            style={{
              left: d.x,
              top: d.y,
              width: size,
              height: size,
              borderRadius: "50%",
              background: `rgba(0,200,255,${opacity})`,
              transform: "translate(-50%,-50%)",
              boxShadow: i < 3 ? `0 0 ${6 - i}px rgba(0,200,255,0.6)` : "none",
            }}
          />
        );
      })}
    </>
  );
};

// ─────────────────────────────────────────
// 🎨 Main DesignSection
// ─────────────────────────────────────────
const DesignSection = ({ children }) => {
  const sectionRef = useRef(null);
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rawMouse, setRawMouse] = useState({ x: 0, y: 0 });
  const [rockets, setRockets] = useState([]);
  const [vantaLoaded, setVantaLoaded] = useState(false);

  const smoothX = useSpring(mouseX, { stiffness: 800, damping: 40, mass: 1 });
  const smoothY = useSpring(mouseY, { stiffness: 800, damping: 40, mass: 1 });

  // ── Vanta init ──
  const initVanta = () => {
    if (vantaEffect.current || !vantaRef.current || !window.VANTA || !window.THREE) return;
    vantaEffect.current = window.VANTA.HALO({
      el: vantaRef.current,
      THREE: window.THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      amplitudeFactor: 0.4,
      xOffset: -0.11,
      yOffset: 0.14,
      size: 1.2,
      backgroundColor: 0x020510,
      baseColor: 0x0055cc,
    });
  };

  useEffect(() => {
    if (vantaLoaded) initVanta();
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [vantaLoaded]);

  // ── Mouse tracking ──
  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setRawMouse({ x: e.clientX, y: e.clientY });

      if (sectionRef.current) {
        const r = sectionRef.current.getBoundingClientRect();
        const lx = e.clientX - r.left;
        const ly = e.clientY - r.top;
        setMousePos({ x: lx, y: ly });
        sectionRef.current.style.setProperty("--x", `${lx}px`);
        sectionRef.current.style.setProperty("--y", `${ly}px`);
      }
    };

    window.addEventListener("mousemove", handleMove);

    const interval = setInterval(() => {
      setRockets((prev) => [...prev.slice(-4), Date.now()]);
    }, 4500);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      clearInterval(interval);
    };
  }, [mouseX, mouseY]);

  const handleRemove = (id) => setRockets((prev) => prev.filter((r) => r !== id));

  return (
    <>
      {/* ── CDN Scripts ── */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js"
        strategy="afterInteractive"
        onLoad={() => setVantaLoaded(true)}
      />

      {/* ── Cursor trail (fixed, above everything) ── */}
      <CursorTrail x={rawMouse.x} y={rawMouse.y} />

      <section
        ref={sectionRef}
        className="relative w-full min-h-screen overflow-hidden select-none text-white"
        style={{ background: "#020510", "--x": "0px", "--y": "0px", cursor: "none" }}
      >
        {/* ── Layer 0: Vanta HALO ── */}
        <div
          ref={vantaRef}
          className="absolute inset-0 z-0 pointer-events-none"
        />

        {/* ── Layer 1: Particle + mouse glow canvas ── */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <ParticleCanvas mousePos={mousePos} />
        </div>

        {/* ── Layer 2: Auto-typing code rain ── */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          <CodeRainCanvas />
        </div>

        {/* ── Layer 3: Grid reveal (follows cursor) ── */}
        <div
          className="absolute inset-0 z-[3] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,200,100,.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,200,100,.06) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 400px 300px at var(--x) var(--y), #000 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 400px 300px at var(--x) var(--y), #000 20%, transparent 75%)",
          }}
        />

        {/* ── Layer 4: Mouse halo glow ── */}
        <motion.div
          className="fixed pointer-events-none z-[4] rounded-full"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
            width: 340,
            height: 340,
            background:
              "radial-gradient(circle, rgba(0,140,255,.14) 0%, rgba(120,0,255,.07) 45%, transparent 70%)",
            filter: "blur(4px)",
          }}
        />

        {/* ── Layer 5: Ripple ring ── */}
        <motion.div
          className="fixed pointer-events-none z-[5] rounded-full"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
            width: 72,
            height: 72,
            border: "1px solid rgba(0,200,255,.22)",
          }}
          animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        />

        {/* ── Layer 6: Rockets ── */}
        <div className="fixed inset-0 z-[60] pointer-events-none">
          <AnimatePresence>
            {rockets.map((id) => (
              <RocketItem key={id} id={id} onExplode={handleRemove} />
            ))}
          </AnimatePresence>
        </div>

        {/* ── Layer 7: Cyber cursor ── */}
        <motion.div
          className="fixed top-0 left-0 z-[100] pointer-events-none hidden lg:block"
          style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
        >
          <div className="relative w-16 h-16 flex items-center justify-center">
            {/* Rotating outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                border: "1.5px solid rgba(0,200,255,.55)",
                boxShadow: "0 0 10px rgba(0,200,255,.18)",
                maskImage: "conic-gradient(from 0deg, black, transparent 65%, black)",
                WebkitMaskImage: "conic-gradient(from 0deg, black, transparent 65%, black)",
              }}
            />
            {/* Inner dashed ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute w-9 h-9 border border-dashed rounded-full"
              style={{ borderColor: "rgba(0,200,255,.38)" }}
            />
            {/* Center dot */}
            <div
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{ boxShadow: "0 0 6px #fff, 0 0 12px rgba(0,200,255,.8)" }}
            />
            {/* Corner brackets */}
            <div
              className="absolute top-1 left-1 w-3 h-3 border-t border-l"
              style={{ borderColor: "rgba(0,200,255,.65)" }}
            />
            <div
              className="absolute bottom-1 right-1 w-3 h-3 border-b border-r"
              style={{ borderColor: "rgba(0,200,255,.65)" }}
            />
          </div>
        </motion.div>

        {/* ────────────────────────────────────
            Hero Content
        ──────────────────────────────────── */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full"
            style={{
              border: "1px solid rgba(0,200,255,.25)",
              background: "rgba(0,200,255,.06)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
              style={{ boxShadow: "0 0 6px #00c8ff" }}
            />
            <span className="text-[10px] tracking-[3px] text-cyan-400 uppercase font-mono">
              Available for Projects
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="font-black leading-none tracking-tight"
            style={{ fontSize: "clamp(40px,8.5vw,92px)" }}
          >
            <span
              style={{
                background: "linear-gradient(125deg,#00f2fe 0%,#a3e635 48%,#ff0080 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 32px rgba(0,242,254,.2))",
              }}
            >
              MR. Robin Ahmed
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-4 uppercase font-mono"
            style={{
              fontSize: "clamp(10px,1.8vw,13px)",
              letterSpacing: "5px",
              color: "rgba(255,255,255,.3)",
            }}
          >
            Creative Developer &amp; Digital Architect
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.45 }}
            style={{
              width: 72,
              height: 1,
              margin: "22px auto",
              background: "linear-gradient(90deg,transparent,#00f2fe,transparent)",
            }}
          />

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52 }}
            className="flex flex-wrap gap-2 justify-center mb-7"
          >
            {["UI / UX", "Motion Design", "Frontend", "React", "Three.js"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-[10px] uppercase tracking-widest font-mono transition-all duration-300 rounded-md cursor-default"
                style={{
                  border: "1px solid rgba(255,255,255,.09)",
                  color: "rgba(255,255,255,.34)",
                  background: "rgba(255,255,255,.02)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,200,255,.5)";
                  e.currentTarget.style.color = "#00c8ff";
                  e.currentTarget.style.background = "rgba(0,200,255,.07)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,.09)";
                  e.currentTarget.style.color = "rgba(255,255,255,.34)";
                  e.currentTarget.style.background = "rgba(255,255,255,.02)";
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-3 flex-wrap justify-center"
          >
            <button
              className="px-8 py-3 rounded-lg font-bold text-[11px] tracking-[2px] uppercase transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg,#00b4d8,#0066cc)",
                color: "#fff",
                boxShadow: "0 0 22px rgba(0,180,255,.2)",
                cursor: "none",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 32px rgba(0,180,255,.45)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 22px rgba(0,180,255,.2)"; }}
            >
              View Work
            </button>
            <button
              className="px-8 py-3 rounded-lg font-bold text-[11px] tracking-[2px] uppercase transition-all duration-300 hover:-translate-y-1"
              style={{
                border: "1px solid rgba(0,200,255,.38)",
                color: "#00c8ff",
                background: "transparent",
                cursor: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,200,255,.08)";
                e.currentTarget.style.borderColor = "rgba(0,200,255,.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(0,200,255,.38)";
              }}
            >
              Contact Me
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-14 grid grid-cols-3 w-full max-w-sm overflow-hidden rounded-xl"
            style={{
              border: "1px solid rgba(255,255,255,.06)",
              background: "rgba(255,255,255,.03)",
            }}
          >
            {[
              { n: "120+", l: "Projects" },
              { n: "48+", l: "Clients" },
              { n: "6", l: "Years Exp." },
            ].map(({ n, l }, i) => (
              <div
                key={l}
                className="py-5 text-center"
                style={{
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,.06)" : "none",
                }}
              >
                <div
                  className="text-2xl font-black"
                  style={{
                    background: "linear-gradient(135deg,#00f2fe,#a3e635)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {n}
                </div>
                <div
                  className="text-[9px] tracking-[2px] uppercase font-mono mt-1"
                  style={{ color: "rgba(255,255,255,.28)" }}
                >
                  {l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Children ── */}
        <div className="relative z-10 w-full">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">{children}</div>
        </div>

        {/* ── Global Styles ── */}
        <style jsx global>{`
          :root { --x: 0px; --y: 0px; }
          body {
            cursor: none !important;
            background: #020510;
            margin: 0;
            overflow-x: hidden;
          }
          a, button { cursor: none !important; }
        `}</style>
      </section>
    </>
  );
};

export default DesignSection;