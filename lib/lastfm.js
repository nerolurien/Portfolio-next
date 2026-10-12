const apiKey = process.env.LASTFM_API_KEY;
const username = process.env.LASTFM_USERNAME;

const LASTFM_ENDPOINT = "https://ws.audioscrobbler.com/2.0/";

export const getRecentTracks = async () => {
  if (!apiKey || !username) {
    return null;
  }

  const url = `${LASTFM_ENDPOINT}?method=user.getrecenttracks&user=${encodeURIComponent(
    username
  )}&api_key=${encodeURIComponent(apiKey)}&format=json&limit=1`;

  return fetch(url, {
    headers: {
      "User-Agent": "Portfolio/1.0",
    },
    cache: "no-store",
  });
};
