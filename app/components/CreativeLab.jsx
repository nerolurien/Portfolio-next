"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

export default function CreativeLab() {
  const { t } = useLanguage();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [mode, setMode] = useState("gravity");
  const [particleDensity] = useState(70);
  const [speedMultiplier] = useState(1);
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

  const initEntities = useCallback((width, height, targetMode) => {
    const entities = [];
    const count =
      targetMode === "physics"
        ? Math.min(30, Math.floor(stateRef.current.density / 2.5))
        : stateRef.current.density;

    if (targetMode === "gravity") {
      for (let i = 0; i < count; i++) {
        entities.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          radius: Math.random() * 2.5 + 1.5,
          color: i % 3 === 0 ? "#f59e0b" : i % 3 === 1 ? "#ece8df" : "#d97706",
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
          color: "#f59e0b",
        });
      }
    } else if (targetMode === "physics") {
      const palette = ["#f59e0b", "#ece8df", "#d97706", "#a8a29e", "#fbbf24"];
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

      if (currentMode === "gravity") {
        const hasMouse = mouse.x >= 0 && mouse.x <= width && mouse.y >= 0 && mouse.y <= height;

        if (hasMouse) {
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, 45, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(245, 158, 11, 0.28)";
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, 12, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(245, 158, 11, 0.45)";
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

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      } else if (currentMode === "constellation") {
        entities.forEach((p) => {
          p.x += p.vx * speed;
          p.y += p.vy * speed;

          if (p.x <= p.radius || p.x >= width - p.radius) p.vx *= -1;
          if (p.y <= p.radius || p.y >= height - p.radius) p.vy *= -1;

          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            p.x -= (dx / dist) * 1.5;
            p.y -= (dy / dist) * 1.5;
          }
        });

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
              ctx.strokeStyle = `rgba(245, 158, 11, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }

        entities.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 6;
          ctx.shadowColor = "#f59e0b";
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      } else if (currentMode === "physics") {
        const gravity = 0.28 * speed;
        const friction = 0.99;

        entities.forEach((ball) => {
          ball.vy += gravity;
          ball.vx *= friction;
          ball.vy *= friction;

          ball.x += ball.vx * speed;
          ball.y += ball.vy * speed;

          if (ball.y + ball.radius >= height) {
            ball.y = height - ball.radius;
            ball.vy = -ball.vy * ball.restitution;
          }
          if (ball.y - ball.radius <= 0) {
            ball.y = ball.radius;
            ball.vy = -ball.vy * ball.restitution;
          }
          if (ball.x + ball.radius >= width) {
            ball.x = width - ball.radius;
            ball.vx = -ball.vx * ball.restitution;
          }
          if (ball.x - ball.radius <= 0) {
            ball.x = ball.radius;
            ball.vx = -ball.vx * ball.restitution;
          }

          const dx = ball.x - mouse.x;
          const dy = ball.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < ball.radius + 35) {
            const push = (ball.radius + 35 - dist) * 0.15;
            ball.vx += (dx / (dist || 1)) * push;
            ball.vy += (dy / (dist || 1)) * push;
          }

          ctx.beginPath();
          ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
          ctx.fillStyle = ball.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = ball.color;
          ctx.fill();
          ctx.shadowBlur = 0;

          ctx.beginPath();
          ctx.arc(
            ball.x - ball.radius * 0.3,
            ball.y - ball.radius * 0.3,
            ball.radius * 0.25,
            0,
            Math.PI * 2
          );
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

  const switchMode = (newMode) => {
    setMode(newMode);
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      initEntities(rect.width, rect.height, newMode);
    }
  };

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

  const handleCanvasClick = () => {
    triggerBurst();
  };

  return (
    <section
      id="lab"
      ref={containerRef}
      className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16 border-t border-stone-300/80 dark:border-zinc-800/90"
    >
      <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
            {t("lab.eyebrow")}
          </p>
          <h2 className="mt-3 font-display text-4xl font-normal tracking-tight text-stone-900 dark:text-[#ece8df] sm:text-5xl">
            {t("lab.title")}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-stone-600 dark:text-zinc-400 sm:text-base">
          {t("lab.desc")}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden border border-stone-300/90 dark:border-zinc-800 bg-[#111113]"
      >
        <div className="relative w-full h-[440px] sm:h-[500px] bg-[#0d0d0f] cursor-crosshair overflow-hidden">
          <canvas
            ref={canvasRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleCanvasClick}
            className="w-full h-full block"
          />

          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 pointer-events-none select-none font-mono text-[11px]">
            <div className="flex items-center gap-2 px-3 py-1 bg-[#141417]/90 border border-zinc-800 text-zinc-200">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>
                {fps} {t("lab.fps")}
              </span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#141417]/90 border border-zinc-800 text-zinc-400">
              <span>
                {entityCount} {t("lab.entities")}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-[#141417]/90 border border-zinc-800 text-amber-400">
              <span>HTML5 Canvas 2D</span>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 sm:left-auto sm:right-4 pointer-events-none select-none">
            <p className="font-mono text-[11px] text-zinc-400 bg-[#141417]/90 px-3 py-1 border border-zinc-800">
              {t("lab.hint")}
            </p>
          </div>
        </div>

        <div className="p-4 sm:px-6 bg-[#efece4] dark:bg-[#111113] border-t border-stone-300/90 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto">
            <button
              onClick={() => switchMode("gravity")}
              className={`flex-1 md:flex-initial px-4 py-2 uppercase tracking-wider transition ${
                mode === "gravity"
                  ? "bg-stone-900 text-[#f6f4ef] dark:bg-[#ece8df] dark:text-[#0b0b0c] font-semibold"
                  : "border border-stone-300 dark:border-zinc-800 text-stone-600 dark:text-zinc-400 hover:border-stone-600 dark:hover:border-zinc-600"
              }`}
            >
              01. {t("lab.modeGravity")}
            </button>
            <button
              onClick={() => switchMode("constellation")}
              className={`flex-1 md:flex-initial px-4 py-2 uppercase tracking-wider transition ${
                mode === "constellation"
                  ? "bg-stone-900 text-[#f6f4ef] dark:bg-[#ece8df] dark:text-[#0b0b0c] font-semibold"
                  : "border border-stone-300 dark:border-zinc-800 text-stone-600 dark:text-zinc-400 hover:border-stone-600 dark:hover:border-zinc-600"
              }`}
            >
              02. {t("lab.modeConstellation")}
            </button>
            <button
              onClick={() => switchMode("physics")}
              className={`flex-1 md:flex-initial px-4 py-2 uppercase tracking-wider transition ${
                mode === "physics"
                  ? "bg-stone-900 text-[#f6f4ef] dark:bg-[#ece8df] dark:text-[#0b0b0c] font-semibold"
                  : "border border-stone-300 dark:border-zinc-800 text-stone-600 dark:text-zinc-400 hover:border-stone-600 dark:hover:border-zinc-600"
              }`}
            >
              03. {t("lab.modePhysics")}
            </button>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
            <button
              onClick={triggerBurst}
              type="button"
              className="px-4 py-2 uppercase tracking-wider border border-amber-600/50 bg-amber-500/10 text-amber-700 dark:text-amber-400 hover:bg-amber-500 hover:text-black transition"
            >
              ⚡ {t("lab.burst")}
            </button>
            <button
              onClick={() => switchMode(mode)}
              type="button"
              className="px-4 py-2 uppercase tracking-wider border border-stone-400 dark:border-zinc-700 text-stone-700 dark:text-zinc-300 hover:bg-stone-900 hover:text-white dark:hover:bg-[#ece8df] dark:hover:text-black transition"
            >
              ↺ {t("lab.reset")}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
