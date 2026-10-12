import { NextResponse } from "next/server";
import { getRecentTracks } from "@/lib/lastfm";
import { getCurrentlyPlaying, getRecentlyPlayed } from "@/lib/spotify";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    if (process.env.LASTFM_API_KEY && process.env.LASTFM_USERNAME) {
      const lastfmRes = await getRecentTracks();

      if (lastfmRes && lastfmRes.ok) {
        const data = await lastfmRes.json();
        const tracks = data?.recenttracks?.track;
        const currentTrack = Array.isArray(tracks) ? tracks[0] : tracks;

        if (currentTrack) {
          const isPlaying = currentTrack["@attr"]?.nowplaying === "true";
          const title = currentTrack.name || "";
          const artist = currentTrack.artist?.["#text"] || currentTrack.artist?.name || "";
          const album = currentTrack.album?.["#text"] || "";

          const images = currentTrack.image || [];
          const albumImageUrl =
            images.find((img) => img.size === "extralarge")?.["#text"] ||
            images.find((img) => img.size === "large")?.["#text"] ||
            images[images.length - 1]?.["#text"] ||
            "";

          const songUrl = currentTrack.url || "";

          return NextResponse.json(
            {
              isPlaying,
              title,
              artist,
              album,
              albumImageUrl,
              songUrl,
            },
            {
              status: 200,
              headers: {
                "Cache-Control": "public, s-maxage=5, stale-while-revalidate=10",
              },
            }
          );
        }
      }
    }

    if (process.env.SPOTIFY_CLIENT_ID && process.env.SPOTIFY_REFRESH_TOKEN) {
      const response = await getCurrentlyPlaying();

      if (response && response.status === 200) {
        const song = await response.json();
        if (song?.item && song.currently_playing_type === "track") {
          return NextResponse.json(
            {
              isPlaying: Boolean(song.is_playing),
              title: song.item.name,
              artist: song.item.artists.map((a) => a.name).join(", "),
              album: song.item.album.name,
              albumImageUrl: song.item.album.images?.[0]?.url || "",
              songUrl: song.item.external_urls?.spotify || "",
            },
            {
              status: 200,
              headers: {
                "Cache-Control": "public, s-maxage=5, stale-while-revalidate=10",
              },
            }
          );
        }
      }

      const recentResponse = await getRecentlyPlayed();
      if (recentResponse && recentResponse.status === 200) {
        const recentData = await recentResponse.json();
        const item = recentData?.items?.[0];
        if (item?.track) {
          return NextResponse.json(
            {
              isPlaying: false,
              title: item.track.name,
              artist: item.track.artists?.map((a) => a.name).join(", ") || "",
              album: item.track.album?.name || "",
              albumImageUrl: item.track.album?.images?.[0]?.url || "",
              songUrl: item.track.external_urls?.spotify || "",
            },
            {
              status: 200,
              headers: {
                "Cache-Control": "public, s-maxage=20, stale-while-revalidate=40",
              },
            }
          );
        }
      }
    }

    return NextResponse.json(
      { isPlaying: false },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { isPlaying: false },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
        },
      }
    );
  }
}
