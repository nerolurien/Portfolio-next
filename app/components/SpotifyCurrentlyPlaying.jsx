"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

function useMusicStatus() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStatus = useCallback(async () => {
    try {
      const res = await fetch("/api/spotify/currently-playing", { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStatus();

    const interval = setInterval(() => {
      if (!document.hidden) {
        fetchStatus();
      }
    }, 6000);

    const onVisibilityChange = () => {
      if (!document.hidden) {
        fetchStatus();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [fetchStatus]);

  return { data, isLoading };
}

export default function SpotifyCurrentlyPlaying({ variant = "deck", className = "" }) {
  const { language } = useLanguage();
  const isId = language === "id";
  const { data, isLoading } = useMusicStatus();

  const isPlaying = Boolean(data?.isPlaying);
  const hasTrack = Boolean(data?.title);

  if (variant === "ticker") {
    return (
      <a
        href={data?.songUrl || "https://open.spotify.com/user/31hil227n4qwgjzabs5hiu52i6v4"}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center justify-between gap-4 border border-stone-300/80 bg-[#efece4]/70 px-3.5 py-2 font-mono text-xs transition-colors hover:border-amber-600/60 dark:border-zinc-800 dark:bg-[#111113] dark:hover:border-amber-500/50 ${className}`}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="flex items-center gap-1.5 shrink-0 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-stone-900 text-amber-400 dark:bg-zinc-900 dark:text-amber-400 border border-stone-700 dark:border-zinc-700/80">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isPlaying ? "bg-amber-400 animate-pulse" : "bg-zinc-500"
              }`}
            />
            {isPlaying
              ? isId
                ? "Diputar"
                : "Now Playing"
              : hasTrack
              ? "Last Played"
              : "Offline"}
          </span>

          <div className="min-w-0 truncate text-stone-700 dark:text-zinc-300">
            {isLoading ? (
              <span className="text-stone-400 dark:text-zinc-500">
                {isId ? "Memuat Spotify..." : "Loading Spotify..."}
              </span>
            ) : hasTrack ? (
              <span>
                <span className="font-medium text-stone-900 dark:text-[#ece8df] group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {data.title}
                </span>
                <span className="mx-1.5 text-stone-400 dark:text-zinc-600">•</span>
                <span className="text-stone-500 dark:text-zinc-400">{data.artist}</span>
              </span>
            ) : (
              <span className="text-stone-500 dark:text-zinc-500">
                {isId ? "Sedang tidak memutar lagu" : "Not playing anything right now"}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-end gap-[2px] h-3">
            {[0.4, 0.85, 0.55, 1, 0.65].map((h, i) => (
              <motion.span
                key={i}
                animate={
                  isPlaying
                    ? {
                        height: [
                          `${h * 30}%`,
                          `${h * 100}%`,
                          `${h * 45}%`,
                          `${h * 90}%`,
                          `${h * 30}%`,
                        ],
                      }
                    : { height: "25%" }
                }
                transition={{
                  duration: 0.9 + i * 0.12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`w-[2px] ${
                  isPlaying
                    ? "bg-amber-500 dark:bg-amber-400"
                    : "bg-stone-400 dark:bg-zinc-700"
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-stone-400 dark:text-zinc-500 group-hover:text-amber-500 transition-colors">
            ↗
          </span>
        </div>
      </a>
    );
  }

  return (
    <div
      className={`relative overflow-hidden border border-stone-300/90 bg-[#efece4]/90 p-4 text-left font-mono transition-colors hover:border-amber-600/50 dark:border-zinc-800 dark:bg-[#111113] dark:hover:border-amber-500/40 ${className}`}
    >
      <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-stone-300/80 dark:border-zinc-800/90 text-[10px] uppercase tracking-widest text-stone-500 dark:text-zinc-500">
        <div className="flex items-center gap-2">
          <span
            className={`inline-block h-2 w-2 rounded-full ${
              isPlaying
                ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-pulse"
                : "bg-stone-400 dark:bg-zinc-600"
            }`}
          />
          <span className="font-semibold text-stone-800 dark:text-zinc-300">
            {isPlaying
              ? isId
                ? "Sedang Diputar"
                : "Now Playing"
              : hasTrack
              ? isId
                ? "Terakhir Diputar"
                : "Last Played"
              : "Spotify"}
          </span>
        </div>
        <span>Spotify</span>
      </div>

      {isLoading ? (
        <div className="flex items-center gap-3.5 py-1 animate-pulse">
          <div className="h-12 w-12 bg-stone-300 dark:bg-zinc-800 shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-3.5 w-2/3 bg-stone-300 dark:bg-zinc-800" />
            <div className="h-2.5 w-1/2 bg-stone-300 dark:bg-zinc-800" />
          </div>
        </div>
      ) : hasTrack ? (
        <a
          href={data.songUrl || "https://open.spotify.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3.5"
        >
          <div className="relative h-12 w-12 overflow-hidden border border-stone-400/50 dark:border-zinc-700 shrink-0 bg-zinc-900">
            {data.albumImageUrl ? (
              <Image
                src={data.albumImageUrl}
                alt={data.album || "Album cover"}
                fill
                sizes="48px"
                unoptimized
                className="object-cover grayscale-[25%] contrast-110 transition duration-300 group-hover:grayscale-0 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-amber-400">
                <span className="text-xs">♪</span>
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate font-sans text-sm font-semibold text-stone-900 dark:text-[#ece8df] transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-400">
              {data.title}
            </p>
            <p className="truncate text-xs text-stone-600 dark:text-zinc-400 mt-0.5">
              {data.artist}
            </p>
          </div>

          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <div className="flex items-end gap-[2px] h-4 px-1.5 py-1 bg-stone-200/80 dark:bg-zinc-900 border border-stone-300 dark:border-zinc-800">
              {[0.5, 1, 0.6, 0.85, 0.4, 0.9].map((seed, idx) => (
                <motion.span
                  key={idx}
                  animate={
                    isPlaying
                      ? {
                          height: [
                            `${seed * 35}%`,
                            `${seed * 100}%`,
                            `${seed * 40}%`,
                            `${seed * 90}%`,
                            `${seed * 35}%`,
                          ],
                        }
                      : { height: "25%" }
                  }
                  transition={{
                    duration: 0.8 + idx * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`w-[2.5px] ${
                    isPlaying
                      ? "bg-amber-500 dark:bg-amber-400"
                      : "bg-stone-400 dark:bg-zinc-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-[10px] text-stone-400 dark:text-zinc-500 group-hover:text-amber-500">
              {isId ? "Buka ↗" : "Open ↗"}
            </span>
          </div>
        </a>
      ) : (
        <div className="flex items-center justify-between gap-3 py-1">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center border border-stone-300 dark:border-zinc-800 bg-stone-200/50 dark:bg-zinc-900 text-stone-500 dark:text-zinc-500">
              <span className="text-xs">II</span>
            </div>
            <div>
              <p className="font-sans text-sm font-medium text-stone-800 dark:text-zinc-200">
                Offline
              </p>
              <p className="text-[11px] text-stone-500 dark:text-zinc-500">
                {isId ? "Sedang tidak memutar musik" : "Not playing music right now"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
