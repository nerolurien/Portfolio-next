"use client";

import React, { useEffect, useState, useMemo } from "react";
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
      } catch {
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
      return "bg-stone-300/60 dark:bg-zinc-800/75 border-transparent";
    }
    if (level === 1 || count === 1) {
      return "bg-amber-300/80 dark:bg-amber-900/80 border-amber-400/50 dark:border-amber-800";
    }
    if (level === 2 || (count >= 2 && count <= 3)) {
      return "bg-amber-400 dark:bg-amber-700 border-amber-500 dark:border-amber-600";
    }
    if (level === 3 || (count >= 4 && count <= 7)) {
      return "bg-amber-500 dark:bg-amber-500 border-amber-600 dark:border-amber-400";
    }
    return "bg-amber-600 dark:bg-amber-400 border-amber-700 dark:border-amber-300";
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
    <div className="relative mt-14 w-full border border-stone-300/90 bg-[#efece4]/60 p-6 sm:p-8 dark:border-zinc-800 dark:bg-[#111113]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-300/80 dark:border-zinc-800">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-400">
              GitHub
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Live
            </span>
          </div>
          <h3 className="mt-1 font-display text-2xl font-normal text-stone-900 dark:text-[#ece8df]">
            {isId ? "Aktivitas Kontribusi GitHub" : "GitHub Contributions"}
          </h3>
        </div>

        <a
          href="https://github.com/nerolurien"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider border border-stone-400/80 dark:border-zinc-700 bg-transparent text-stone-800 dark:text-zinc-200 hover:border-stone-900 hover:bg-stone-900 hover:text-white dark:hover:border-amber-400 dark:hover:text-amber-400 transition"
        >
          <span>github.com/nerolurien</span>
          <span>↗</span>
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-stone-300/80 dark:border-zinc-800 divide-y sm:divide-y-0 sm:divide-x divide-stone-300/80 dark:divide-zinc-800">
        <div className="py-4 sm:pr-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-stone-500 dark:text-zinc-500">
            {isId ? "Total Kontribusi" : "Total Commits"}
          </p>
          <p className="font-display text-3xl font-normal mt-1 text-stone-900 dark:text-[#ece8df]">
            {loading ? "-" : (data?.totalContributions ?? 100)}
          </p>
          <p className="font-mono text-[10px] text-stone-400 dark:text-zinc-500 mt-0.5">
            {isId ? "1 tahun terakhir" : "last 12 months"}
          </p>
        </div>

        <div className="py-4 sm:px-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-stone-500 dark:text-zinc-500">
            {isId ? "Hari Aktif" : "Active Days"}
          </p>
          <p className="font-display text-3xl font-normal mt-1 text-stone-900 dark:text-[#ece8df]">
            {loading ? "-" : (data?.activeDays ?? 24)}
          </p>
          <p className="font-mono text-[10px] text-stone-400 dark:text-zinc-500 mt-0.5">
            {isId ? "hari ngoding" : "days with commits"}
          </p>
        </div>

        <div className="py-4 sm:px-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-stone-500 dark:text-zinc-500">
            {isId ? "Streak Terpanjang" : "Longest Streak"}
          </p>
          <p className="font-display text-3xl font-normal mt-1 text-amber-600 dark:text-amber-400">
            {loading ? "-" : `${data?.maxStreak ?? 5}${isId ? " hr" : "d"}`}
          </p>
          <p className="font-mono text-[10px] text-stone-400 dark:text-zinc-500 mt-0.5">
            {isId ? "hari berturut-turut" : "in a row"}
          </p>
        </div>

        <div className="py-4 sm:pl-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-stone-500 dark:text-zinc-500">
            {isId ? "Terbanyak Sehari" : "Best Day"}
          </p>
          <p className="font-display text-3xl font-normal mt-1 text-stone-900 dark:text-[#ece8df]">
            {loading ? "-" : `${data?.maxContributionsDay ?? 23}`}
          </p>
          <p className="font-mono text-[10px] text-stone-400 dark:text-zinc-500 mt-0.5 truncate">
            {loading
              ? ""
              : data?.maxContributionsDate
              ? formatDate(data.maxContributionsDate)
              : isId
              ? "kontribusi"
              : "commits"}
          </p>
        </div>
      </div>

      <div className="relative overflow-x-auto py-6 scrollbar-thin">
        {loading ? (
          <div className="h-28 flex items-center justify-center font-mono text-xs text-stone-500 dark:text-zinc-500">
            <span>{isId ? "Memuat data GitHub..." : "Loading GitHub data..."}</span>
          </div>
        ) : (
          <div className="min-w-[720px] select-none">
            <div className="relative h-5 mb-1 font-mono text-[10px] uppercase text-stone-400 dark:text-zinc-500">
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
              <div className="flex flex-col justify-between h-[100px] font-mono text-[9px] uppercase text-stone-400 dark:text-zinc-500 pr-2 select-none">
                <span>{isId ? "Sen" : "Mon"}</span>
                <span>{isId ? "Rab" : "Wed"}</span>
                <span>{isId ? "Jum" : "Fri"}</span>
              </div>

              <div className="flex items-center gap-[3px]">
                {weeks.map((week, wIdx) => (
                  <div key={`week-${wIdx}`} className="flex flex-col gap-[3px]">
                    {week.map((day, dIdx) => {
                      if (!day) {
                        return (
                          <div
                            key={`empty-${wIdx}-${dIdx}`}
                            className="w-[11px] h-[11px] opacity-0"
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
                          className={`w-[11px] h-[11px] border transition-transform duration-150 hover:scale-125 cursor-crosshair ${getColorClass(
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

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-stone-300/80 dark:border-zinc-800 font-mono text-[11px] text-stone-500 dark:text-zinc-500">
        <p>@nerolurien</p>

        <div className="flex items-center gap-2 text-[10px] uppercase">
          <span>{isId ? "Sedikit" : "Less"}</span>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 bg-stone-300/60 dark:bg-zinc-800" />
            <span className="w-2.5 h-2.5 bg-amber-300/80 dark:bg-amber-900" />
            <span className="w-2.5 h-2.5 bg-amber-400 dark:bg-amber-700" />
            <span className="w-2.5 h-2.5 bg-amber-500 dark:bg-amber-500" />
            <span className="w-2.5 h-2.5 bg-amber-600 dark:bg-amber-400" />
          </div>
          <span>{isId ? "Banyak" : "More"}</span>
        </div>
      </div>

      {hoveredCell && (
        <div
          className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full px-3 py-1.5 bg-stone-900 dark:bg-[#ece8df] text-[#ece8df] dark:text-[#0b0b0c] font-mono text-[11px] shadow-xl whitespace-nowrap mb-2 border border-amber-500/40"
          style={{
            left: `${hoveredCell.x}px`,
            top: `${hoveredCell.y - 6}px`,
          }}
        >
          <span className="font-bold">
            {hoveredCell.count === 0
              ? isId
                ? "0 kontribusi"
                : "0 commits"
              : isId
              ? `${hoveredCell.count} kontribusi`
              : `${hoveredCell.count} ${hoveredCell.count === 1 ? "commit" : "commits"}`}
          </span>{" "}
          <span className="opacity-75">• {formatDate(hoveredCell.date)}</span>
        </div>
      )}
    </div>
  );
}
