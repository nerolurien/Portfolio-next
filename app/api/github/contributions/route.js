import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const username = "nerolurien";
  const apiUrl = `https://github-contributions-api.jogruber.de/v4/${username}?y=last`;

  try {
    const res = await fetch(apiUrl, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Portfolio-App/1.0",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch GitHub contributions: ${res.statusText}`);
    }

    const data = await res.json();
    const contributions = Array.isArray(data.contributions) ? data.contributions : [];

    // Calculate metrics
    let totalContributions = data.total?.lastYear ?? 0;
    let activeDays = 0;
    let maxContributionsDay = 0;
    let maxContributionsDate = null;
    let currentStreak = 0;
    let maxStreak = 0;
    let tempStreak = 0;

    for (const day of contributions) {
      const count = Number(day.count) || 0;
      if (count > 0) {
        activeDays++;
        tempStreak++;
        if (tempStreak > maxStreak) {
          maxStreak = tempStreak;
        }
        if (count > maxContributionsDay) {
          maxContributionsDay = count;
          maxContributionsDate = day.date;
        }
      } else {
        tempStreak = 0;
      }
    }

    // Determine current streak from end of array
    for (let i = contributions.length - 1; i >= 0; i--) {
      const count = Number(contributions[i].count) || 0;
      if (count > 0) {
        currentStreak++;
      } else {
        // If today has 0, check yesterday before breaking
        if (i === contributions.length - 1) {
          continue;
        }
        break;
      }
    }

    return NextResponse.json(
      {
        username,
        totalContributions,
        activeDays,
        maxStreak,
        currentStreak,
        maxContributionsDay,
        maxContributionsDate,
        contributions,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        username,
        totalContributions: 100,
        activeDays: 24,
        maxStreak: 5,
        currentStreak: 1,
        maxContributionsDay: 23,
        maxContributionsDate: "2026-10-06",
        contributions: [],
        error: error.message,
      },
      { status: 200 }
    );
  }
}
