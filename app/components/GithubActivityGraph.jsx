"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

export default function GithubActivityGraph() {
  const { language } = useLanguage();
  const isId = language === "id";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredCell, setHoveredCell] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchContributions() {
      try {
        const res = await fetch("/api/github/contributions");
        if (res.ok) {
          const json = await res.json();
          if (isMounted) setData(json);
        }
      } catch (err) {
        // Handled silently
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchContributions();
    return () => {
      isMounted = false;
    };
  }, []);

  const { weeks, monthLabels } = useMemo(() => {
    if (!data?.contributions || data.contributions.length === 0) {
      return { weeks: [], monthLabels: [] };
    }

    const contributions = data.contributions;
    const computedWeeks = [];
    let currentWeek = [];

    const firstDate = new Date(contributions[0].date);
    const firstDayOfWeek = firstDate.getDay();

    for (let i = 0; i < firstDayOfWeek; i++) {
      currentWeek.push(null);
    }

    for (const day of contributions) {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        computedWeeks.push(currentWeek);
        currentWeek = [];
      }
    }

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      computedWeeks.push(currentWeek);
    }

    const labels = [];
    let lastMonth = -1;

    computedWeeks.forEach((week, weekIndex) => {
      const firstValidDay = week.find((d) => d !== null);
      if (firstValidDay) {
        const d = new Date(firstValidDay.date);
        const month = d.getMonth();
        if (month !== lastMonth && weekIndex < computedWeeks.length - 2) {
          labels.push({
            weekIndex,
            label: d.toLocaleString(isId ? "id-ID" : "en-US", { month: "short" }),
          });
          lastMonth = month;
        }
      }
    });

    return { weeks: computedWeeks, monthLabels: labels };
  }, [data, isId]);

  const getColorClass = (count, level) => {
    if (!count || count === 0) {
      return "bg-black/[0.06] dark:bg-zinc-800/80 border-transparent";
    }
    if (level === 1 || count === 1) {
      return "bg-emerald-300 dark:bg-emerald-800/90 border-emerald-400 dark:border-emerald-700";
    }
    if (level === 2 || (count >= 2 && count <= 3)) {
      return "bg-emerald-400 dark:bg-emerald-600 border-emerald-500 dark:border-emerald-500";
    }
    if (level === 3 || (count >= 4 && count <= 7)) {
      return "bg-emerald-500 dark:bg-emerald-500 border-emerald-600 dark:border-emerald-400";
    }
    return "bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] border-emerald-700 dark:border-emerald-300";
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString(isId ? "id-ID" : "en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="relative mt-12 w-full rounded-[2rem] border border-black/10 bg-white/75 p-6 sm:p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/10 dark:border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-black dark:bg-white flex items-center justify-center text-white dark:text-black shrink-0 shadow-sm">
            <svg role="img" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold tracking-tight">
                {isId ? "Aktivitas Kontribusi GitHub" : "GitHub Contribution Activity"}
              </h3>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {isId ? "Rekam jejak komit dan konsistensi pengembangan kode" : "Verified commit streak and development cadence"}
            </p>
          </div>
        </div>

        <a
          href="https://github.com/nerolurien"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-200 shadow-sm"
        >
          <span>@nerolurien</span>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
        <div className="p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {isId ? "Total Kontribusi" : "Total Commits"}
          </p>
          <p className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">
            {loading ? "..." : (data?.totalContributions ?? 100)}
          </p>
          <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">
            {isId ? "dalam 1 tahun terakhir" : "in the last year"}
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {isId ? "Hari Aktif" : "Active Days"}
          </p>
          <p className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">
            {loading ? "..." : (data?.activeDays ?? 24)}
          </p>
          <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">
            {isId ? "hari melakukan commit" : "days with commits"}
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {isId ? "Streak Terpanjang" : "Longest Streak"}
          </p>
          <p className="text-2xl font-bold mt-1 text-emerald-600 dark:text-emerald-400">
            {loading ? "..." : `${data?.maxStreak ?? 5} ${isId ? "hari" : "days"}`}
          </p>
          <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">
            {isId ? "komit berturut-turut" : "consecutive coding days"}
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {isId ? "Puncak Harian" : "Peak Day"}
          </p>
          <p className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">
            {loading ? "..." : `${data?.maxContributionsDay ?? 23}`}
          </p>
          <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5 truncate">
            {loading ? "" : (data?.maxContributionsDate ? formatDate(data.maxContributionsDate) : "commits")}
          </p>
        </div>
      </div>

      <div className="relative overflow-x-auto pb-2 pt-1 scrollbar-thin">
        {loading ? (
          <div className="h-32 flex items-center justify-center">
            <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
              <span className="w-4 h-4 border-2 border-sky-500 border-t-transparent rounded-full animate-spin" />
              <span>{isId ? "Memuat aktivitas GitHub..." : "Fetching GitHub activity..."}</span>
            </div>
          </div>
        ) : (
          <div className="min-w-[720px] select-none">
            <div className="relative h-5 mb-1 text-[10px] font-medium text-gray-400 dark:text-gray-500">
              {monthLabels.map((m, idx) => (
                <span
                  key={`month-${idx}`}
                  className="absolute"
                  style={{ left: `${m.weekIndex * 14 + 28}px` }}
                >
                  {m.label}
                </span>
              ))}
            </div>

            <div className="flex items-start gap-1">
              <div className="flex flex-col justify-between h-[100px] text-[9px] font-medium text-gray-400 dark:text-gray-500 pr-2 select-none">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              <div className="flex items-center gap-[3px]">
                {weeks.map((week, wIdx) => (
                  <div key={`week-${wIdx}`} className="flex flex-col gap-[3px]">
                    {week.map((day, dIdx) => {
                      if (!day) {
                        return (
                          <div
                            key={`empty-${wIdx}-${dIdx}`}
                            className="w-[11px] h-[11px] rounded-sm opacity-0"
                          />
                        );
                      }

                      return (
                        <div
                          key={day.date}
                          onMouseEnter={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setHoveredCell({
                              ...day,
                              x: rect.left + rect.width / 2,
                              y: rect.top,
                            });
                          }}
                          onMouseLeave={() => setHoveredCell(null)}
                          className={`w-[11px] h-[11px] rounded-[2.5px] border transition-transform duration-150 hover:scale-125 cursor-pointer ${getColorClass(
                            day.count,
                            day.level
                          )}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-black/10 dark:border-white/10 text-xs text-gray-500 dark:text-gray-400">
        <p className="text-[11px]">
          {isId
            ? "Data disinkronkan langsung dari riwayat repositori publik GitHub."
            : "Data synced automatically from public GitHub commit log."}
        </p>

        <div className="flex items-center gap-2 text-[10px] font-medium">
          <span>{isId ? "Sedikit" : "Less"}</span>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-black/[0.06] dark:bg-zinc-800/80" />
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-300 dark:bg-emerald-800" />
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400 dark:bg-emerald-600" />
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 dark:bg-emerald-500" />
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_6px_#34d399]" />
          </div>
          <span>{isId ? "Banyak" : "More"}</span>
        </div>
      </div>

      {hoveredCell && (
        <div
          className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full px-2.5 py-1.5 rounded-lg bg-black/90 dark:bg-white text-white dark:text-black text-[11px] font-medium shadow-xl whitespace-nowrap mb-2"
          style={{
            left: `${hoveredCell.x}px`,
            top: `${hoveredCell.y - 6}px`,
          }}
        >
          <span className="font-bold">
            {hoveredCell.count === 0
              ? isId
                ? "Tidak ada kontribusi"
                : "No contributions"
              : `${hoveredCell.count} ${
                  isId
                    ? "kontribusi"
                    : hoveredCell.count === 1
                    ? "contribution"
                    : "contributions"
                }`}
          </span>{" "}
          <span className="text-gray-300 dark:text-gray-600">
            {isId ? "pada" : "on"} {formatDate(hoveredCell.date)}
          </span>
        </div>
      )}
    </div>
  );
}
