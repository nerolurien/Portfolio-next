"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      // Graceful fallback
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

export default function SpotifyCurrentlyPlaying({ className = "" }) {
  const { data, isLoading } = useMusicStatus();

  const isPlaying = Boolean(data?.isPlaying);
  const hasTrack = Boolean(data?.title);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 ${className}`}
    >
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-[#1ED760]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {isPlaying ? "Listening Now" : hasTrack ? "Last Played" : "Spotify"}
          </span>
        </div>

        {isPlaying ? (
          <div className="flex items-end gap-1 h-3.5">
            <motion.span
              animate={{ height: ["30%", "100%", "50%", "90%", "30%"] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 rounded-full bg-[#1ED760]"
            />
            <motion.span
              animate={{ height: ["80%", "30%", "100%", "40%", "80%"] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
              className="w-1 rounded-full bg-[#1ED760]"
            />
            <motion.span
              animate={{ height: ["40%", "90%", "30%", "100%", "40%"] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="w-1 rounded-full bg-[#1ED760]"
            />
          </div>
        ) : (
          <span className="h-2 w-2 rounded-full bg-gray-400 dark:bg-zinc-600" />
        )}
      </div>

      {isLoading ? (
        <div className="flex items-center gap-3 animate-pulse">
          <div className="h-12 w-12 rounded-xl bg-black/5 dark:bg-white/10 shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-3.5 w-3/4 rounded bg-black/5 dark:bg-white/10" />
            <div className="h-3 w-1/2 rounded bg-black/5 dark:bg-white/10" />
          </div>
        </div>
      ) : hasTrack ? (
        <a
          href={data.songUrl || "https://open.spotify.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3.5"
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-black/10 dark:border-white/10 shrink-0">
            {data.albumImageUrl ? (
              <Image
                src={data.albumImageUrl}
                alt={data.album || "Album cover"}
                fill
                sizes="48px"
                unoptimized
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-zinc-200 dark:bg-zinc-800">
                <span className="text-xs text-zinc-500">♪</span>
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-gray-900 dark:text-white transition group-hover:text-[#1ED760]">
              {data.title}
            </p>
            <p className="truncate text-xs text-gray-600 dark:text-gray-400 mt-0.5">
              {data.artist}
            </p>
          </div>

          <svg
            className="w-4 h-4 text-gray-400 opacity-0 -translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#1ED760]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      ) : (
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/5">
            <svg
              className="w-6 h-6 text-gray-400 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Not playing
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Spotify is currently offline
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
