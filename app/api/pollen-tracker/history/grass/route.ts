import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

const OPEN_METEO_URL = "https://air-quality-api.open-meteo.com/v1/air-quality";
const LAT = 48.8566;
const LON = 2.3522;

interface DataPoint { date: string; value: number }

export async function GET() {
  // ── CAMS / Open-Meteo ──────────────────────────────────────────────────────
  const today = new Date().toISOString().split("T")[0];
  const params = new URLSearchParams({
    latitude: String(LAT),
    longitude: String(LON),
    hourly: "grass_pollen",
    start_date: "2022-01-01",
    end_date: today,
    timezone: "Europe/Paris",
  });

  const omRes = await fetch(`${OPEN_METEO_URL}?${params.toString()}`, {
    next: { revalidate: 3600 },
  });

  let cams: DataPoint[] = [];
  if (omRes.ok) {
    const raw = await omRes.json();
    const times: string[] = raw.hourly?.time ?? [];
    const values: (number | null)[] = raw.hourly?.grass_pollen ?? [];
    const dailyMap = new Map<string, number>();
    for (let i = 0; i < times.length; i++) {
      const date = times[i].split("T")[0];
      const val = values[i];
      if (val !== null && val > 0) {
        const prev = dailyMap.get(date) ?? 0;
        if (val > prev) dailyMap.set(date, val);
      }
    }
    cams = Array.from(dailyMap.entries())
      .map(([date, value]) => ({ date, value: Math.round(value * 10) / 10 }))
      .sort((a, b) => a.date.localeCompare(b.date));
  }

  // ── RNSA station data ──────────────────────────────────────────────────────
  let rnsa: DataPoint[] = [];
  try {
    const raw = readFileSync(join(process.cwd(), "public/data/rnsa-paris-grass.json"), "utf-8");
    rnsa = (JSON.parse(raw) as DataPoint[]).filter((p) => p.date >= "2010-01-01");
  } catch {
    // file missing — return cams only
  }

  return NextResponse.json({ cams, rnsa });
}
