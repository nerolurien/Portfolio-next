export async function GET() {
    const apiKey = process.env.WAKATIME_API_KEY;
    const res = await fetch(`https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=${apiKey}`);
    const data = await res.json();
    return Response.json(data);
}
