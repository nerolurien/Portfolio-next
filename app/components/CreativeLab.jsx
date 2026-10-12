"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

export default function CreativeLab() {
  const { t } = useLanguage();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [mode, setMode] = useState("gravity"); // "gravity" | "constellation" | "physics"
  const [particleDensity, setParticleDensity] = useState(70);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [fps, setFps] = useState(60);
  const [entityCount, setEntityCount] = useState(70);

  const stateRef = useRef({
    mode: "gravity",
    density: 70,
    speed: 1,
    mouse: { x: -1000, y: -1000, isDown: false, prevX: 0, prevY: 0 },
    entities: [],
    isVisible: true,
    lastFrameTime: performance.now(),
    frameCount: 0,
    fpsTimer: performance.now(),
  });

  stateRef.current.mode = mode;
  stateRef.current.density = particleDensity;
  stateRef.current.speed = speedMultiplier;

  // Initialize entities depending on mode
  const initEntities = useCallback((width, height, targetMode) => {
    const entities = [];
    const count = targetMode === "physics" ? Math.min(30, Math.floor(stateRef.current.density / 2.5)) : stateRef.current.density;

    if (targetMode === "gravity") {
      for (let i = 0; i < count; i++) {
        entities.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          radius: Math.random() * 2.5 + 1.5,
          color: i % 3 === 0 ? "#38bdf8" : i % 3 === 1 ? "#818cf8" : "#c084fc",
          mass: Math.random() * 2 + 1,
        });
      }
    } else if (targetMode === "constellation") {
      for (let i = 0; i < count; i++) {
        entities.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          radius: Math.random() * 2 + 1.5,
          color: "#38bdf8",
        });
      }
    } else if (targetMode === "physics") {
      const palette = ["#38bdf8", "#34d399", "#fbbf24", "#f43f5e", "#a855f7"];
      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 12 + 8;
        entities.push({
          x: Math.random() * (width - 40) + 20,
          y: Math.random() * (height / 2) + 20,
          vx: (Math.random() - 0.5) * 8,
          vy: Math.random() * 2,
          radius,
          color: palette[i % palette.length],
          restitution: 0.78,
          mass: radius,
        });
      }
    }

    stateRef.current.entities = entities;
    setEntityCount(entities.length);
  }, []);

  // Shockwave burst interaction
  const triggerBurst = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const centerX = stateRef.current.mouse.x > 0 ? stateRef.current.mouse.x : rect.width / 2;
    const centerY = stateRef.current.mouse.y > 0 ? stateRef.current.mouse.y : rect.height / 2;

    stateRef.current.entities.forEach((p) => {
      const dx = p.x - centerX;
      const dy = p.y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const force = 18;
      p.vx += (dx / dist) * force;
      p.vy += (dy / dist) * force;
    });
  }, []);

  // Main canvas animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      initEntities(rect.width, rect.height, stateRef.current.mode);
    };

    resize();
    window.addEventListener("resize", resize);

    const observer = new IntersectionObserver(([entry]) => {
      stateRef.current.isVisible = entry.isIntersecting;
    });
    if (containerRef.current) observer.observe(containerRef.current);

    const loop = (timestamp) => {
      animId = requestAnimationFrame(loop);
      if (!stateRef.current.isVisible) return;

      // FPS tracking
      stateRef.current.frameCount++;
      if (timestamp - stateRef.current.fpsTimer >= 1000) {
        setFps(stateRef.current.frameCount);
        stateRef.current.frameCount = 0;
        stateRef.current.fpsTimer = timestamp;
      }

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const { mouse, speed, mode: currentMode, entities } = stateRef.current;

      ctx.clearRect(0, 0, width, height);

      // Simulation mode: Gravity Well
      if (currentMode === "gravity") {
        const hasMouse = mouse.x >= 0 && mouse.x <= width && mouse.y >= 0 && mouse.y <= height;

        // Draw faint cursor gravity field ring
        if (hasMouse) {
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, 45, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, 12, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(56, 189, 248, 0.4)";
          ctx.fill();
        }

        entities.forEach((p) => {
          if (hasMouse) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const minEffective = 35;
            const effectiveDist = Math.max(dist, minEffective);
            const force = (0.85 * speed) / (effectiveDist * 0.08);

            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }

          p.x += p.vx * speed;
          p.y += p.vy * speed;

          p.vx *= 0.985;
          p.vy *= 0.985;

          // Wrap edges
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Draw particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      // Simulation mode: Constellation
      else if (currentMode === "constellation") {
        entities.forEach((p) => {
          p.x += p.vx * speed;
          p.y += p.vy * speed;

          if (p.x <= p.radius || p.x >= width - p.radius) p.vx *= -1;
          if (p.y <= p.radius || p.y >= height - p.radius) p.vy *= -1;

          // Mouse influence
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            p.x -= (dx / dist) * 1.5;
            p.y -= (dy / dist) * 1.5;
          }
        });

        // Draw connections
        for (let i = 0; i < entities.length; i++) {
          for (let j = i + 1; j < entities.length; j++) {
            const p1 = entities[i];
            const p2 = entities[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 90) {
              const alpha = (1 - dist / 90) * 0.35;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }

        // Draw nodes
        entities.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 6;
          ctx.shadowColor = "#38bdf8";
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      // Simulation mode: Rigid Body Bouncing Balls
      else if (currentMode === "physics") {
        const gravity = 0.28 * speed;
        const friction = 0.99;

        entities.forEach((ball) => {
          ball.vy += gravity;
          ball.vx *= friction;
          ball.vy *= friction;

          ball.x += ball.vx * speed;
          ball.y += ball.vy * speed;

          // Floor collision
          if (ball.y + ball.radius >= height) {
            ball.y = height - ball.radius;
            ball.vy = -ball.vy * ball.restitution;
          }
          // Ceiling collision
          if (ball.y - ball.radius <= 0) {
            ball.y = ball.radius;
            ball.vy = -ball.vy * ball.restitution;
          }
          // Walls collision
          if (ball.x + ball.radius >= width) {
            ball.x = width - ball.radius;
            ball.vx = -ball.vx * ball.restitution;
          }
          if (ball.x - ball.radius <= 0) {
            ball.x = ball.radius;
            ball.vx = -ball.vx * ball.restitution;
          }

          // Mouse push
          const dx = ball.x - mouse.x;
          const dy = ball.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < ball.radius + 35) {
            const push = (ball.radius + 35 - dist) * 0.15;
            ball.vx += (dx / (dist || 1)) * push;
            ball.vy += (dy / (dist || 1)) * push;
          }

          // Draw ball
          ctx.beginPath();
          ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
          ctx.fillStyle = ball.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = ball.color;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Inner reflection highlight
          ctx.beginPath();
          ctx.arc(ball.x - ball.radius * 0.3, ball.y - ball.radius * 0.3, ball.radius * 0.25, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
          ctx.fill();
        });
      }
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, [initEntities]);

  // Handle mode changes
  const switchMode = (newMode) => {
    setMode(newMode);
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      initEntities(rect.width, rect.height, newMode);
    }
  };

  // Mouse move handlers
  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    stateRef.current.mouse.x = e.clientX - rect.left;
    stateRef.current.mouse.y = e.clientY - rect.top;
  };

  const handleMouseLeave = () => {
    stateRef.current.mouse.x = -1000;
    stateRef.current.mouse.y = -1000;
  };

  const handleCanvasClick = (e) => {
    triggerBurst();
  };

  return (
    <section id="lab" ref={containerRef} className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400">
          {t("lab.eyebrow")}
        </p>
        <h2 className="text-4xl font-semibold sm:text-5xl">{t("lab.title")}</h2>
        <p className="mt-5 text-balance text-base leading-7 text-gray-600 dark:text-gray-300">
          {t("lab.desc")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative mt-12 overflow-hidden rounded-[2.5rem] border border-black/10 dark:border-white/10 bg-white/75 dark:bg-[#0c0c0e]/90 shadow-xl backdrop-blur-xl"
      >
        {/* Canvas Workspace */}
        <div className="relative w-full h-[460px] sm:h-[520px] bg-gradient-to-b from-black/[0.02] to-black/[0.06] dark:from-black/40 dark:to-black/80 cursor-crosshair overflow-hidden">
          <canvas
            ref={canvasRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleCanvasClick}
            className="w-full h-full block"
          />

          {/* Floating Telemetry HUD */}
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 pointer-events-none select-none">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-black/70 backdrop-blur border border-black/10 dark:border-white/10 text-xs font-mono font-medium text-gray-800 dark:text-gray-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{fps} {t("lab.fps")}</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-black/70 backdrop-blur border border-black/10 dark:border-white/10 text-xs font-mono text-gray-600 dark:text-gray-300 shadow-sm">
              <span>{entityCount} {t("lab.entities")}</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-black/70 backdrop-blur border border-black/10 dark:border-white/10 text-[11px] font-mono text-sky-600 dark:text-sky-400 shadow-sm">
              <span>60 FPS Physics Engine</span>
            </div>
          </div>

          {/* Hint Overlay */}
          <div className="absolute bottom-4 left-4 sm:left-auto sm:right-4 pointer-events-none select-none">
            <p className="text-[11px] font-medium text-gray-400 dark:text-gray-500 bg-white/80 dark:bg-black/60 px-3 py-1 rounded-full backdrop-blur border border-black/5 dark:border-white/5">
              {t("lab.hint")}
            </p>
          </div>
        </div>

        {/* Controls Toolbar Bar */}
        <div className="p-4 sm:p-6 bg-white/90 dark:bg-[#121216]/95 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Mode Selector */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/5 dark:border-white/5 w-full md:w-auto overflow-x-auto">
            <button
              onClick={() => switchMode("gravity")}
              className={`flex-1 md:flex-initial px-4 py-2 rounded-xl text-xs font-semibold transition ${
                mode === "gravity"
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              }`}
            >
              {t("lab.modeGravity")}
            </button>
            <button
              onClick={() => switchMode("constellation")}
              className={`flex-1 md:flex-initial px-4 py-2 rounded-xl text-xs font-semibold transition ${
                mode === "constellation"
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              }`}
            >
              {t("lab.modeConstellation")}
            </button>
            <button
              onClick={() => switchMode("physics")}
              className={`flex-1 md:flex-initial px-4 py-2 rounded-xl text-xs font-semibold transition ${
                mode === "physics"
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              }`}
            >
              {t("lab.modePhysics")}
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
            <button
              onClick={triggerBurst}
              type="button"
              className="px-4 py-2 rounded-xl text-xs font-semibold border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/10 hover:bg-sky-50 dark:hover:bg-sky-500/20 text-sky-600 dark:text-sky-400 transition active:scale-95 shadow-sm"
            >
              {t("lab.burst")}
            </button>
            <button
              onClick={() => switchMode(mode)}
              type="button"
              className="px-4 py-2 rounded-xl text-xs font-semibold border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition active:scale-95 shadow-sm"
            >
              {t("lab.reset")}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
