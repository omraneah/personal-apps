"use client";

import { useState, useEffect, useCallback } from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from "recharts";

// ─── Hardcoded zone ───────────────────────────────────────────────────────────
const ZONE = { code: "75056", label: "Paris", aasqa: "11", source: "Airparif" };

// ─── Pollen species catalogue ─────────────────────────────────────────────────
const POLLEN_TYPES = [
  { key: "gram", label: "Graminées",  icon: "🌾", latin: "Poaceae"   },
  { key: "ambr", label: "Ambroisie",  icon: "🌼", latin: "Ambrosia"  },
  { key: "arm",  label: "Armoise",    icon: "🌿", latin: "Artemisia" },
  { key: "aul",  label: "Aulne",      icon: "🌳", latin: "Alnus"     },
  { key: "boul", label: "Bouleau",    icon: "🌲", latin: "Betula"    },
  { key: "oliv", label: "Olivier",    icon: "🫒", latin: "Olea"      },
] as const;
type PollenKey = (typeof POLLEN_TYPES)[number]["key"];

// ─── Risk levels ──────────────────────────────────────────────────────────────
const RISK: Record<number, { label: string; dot: string; row: string; text: string }> = {
  0: { label: "N/D",               dot: "bg-gray-300",   row: "",              text: "text-gray-400"   },
  1: { label: "Très faible",       dot: "bg-green-400",  row: "bg-green-50",   text: "text-green-700"  },
  2: { label: "Faible",            dot: "bg-lime-400",   row: "bg-lime-50",    text: "text-lime-700"   },
  3: { label: "Moyen",             dot: "bg-yellow-400", row: "bg-yellow-50",  text: "text-yellow-700" },
  4: { label: "Élevé",             dot: "bg-orange-400", row: "bg-orange-50",  text: "text-orange-700" },
  5: { label: "Très élevé",        dot: "bg-red-500",    row: "bg-red-50",     text: "text-red-700"    },
  6: { label: "Extrêmement élevé", dot: "bg-purple-600", row: "bg-purple-50",  text: "text-purple-700" },
};

// ─── Types ────────────────────────────────────────────────────────────────────
interface PollenProps {
  code_zone: string; lib_zone: string; date_ech: string;
  code_gram: number; conc_gram: number;
  code_ambr: number; conc_ambr: number;
  code_arm:  number; conc_arm:  number;
  code_aul:  number; conc_aul:  number;
  code_boul: number; conc_boul: number;
  code_oliv: number; conc_oliv: number;
  pollen_resp: string; lib_qual: string;
}
interface DayRow { date: string; label: string; props: PollenProps | null }
interface HistoryPoint { date: string; value: number }
interface HistoryData { cams: HistoryPoint[]; rnsa: HistoryPoint[] }

// ─── Helpers ──────────────────────────────────────────────────────────────────
function codeOf(p: PollenProps, k: PollenKey): number {
  return p[`code_${k}` as keyof PollenProps] as number;
}
function concOf(p: PollenProps, k: PollenKey): number {
  return p[`conc_${k}` as keyof PollenProps] as number;
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function RiskDot({ code }: { code: number }) {
  const r = RISK[code] ?? RISK[0];
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`inline-block w-2.5 h-2.5 rounded-full ${r.dot}`} />
      <span className={`text-xs font-medium ${r.text}`}>{r.label}</span>
    </span>
  );
}

function PollenDropdown({ value, onChange }: { value: PollenKey; onChange: (k: PollenKey) => void }) {
  const sel = POLLEN_TYPES.find((t) => t.key === value)!;
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as PollenKey)}
        className="appearance-none pl-8 pr-8 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
      >
        {POLLEN_TYPES.map((t) => (
          <option key={t.key} value={t.key}>
            {t.icon}  {t.label} — {t.latin}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2">{sel.icon}</span>
      <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▼</span>
    </div>
  );
}

// ─── Grass History Chart ──────────────────────────────────────────────────────

type YearFilter = "2022" | "2023" | "2024" | "2025" | "2026" | "2010s" | "Tout";

function filterByYear(points: HistoryPoint[], y: YearFilter): HistoryPoint[] {
  if (y === "Tout")   return points;
  if (y === "2010s")  return points.filter((p) => p.date >= "2010" && p.date < "2020");
  return points.filter((p) => p.date.startsWith(y));
}

function mergeForChart(
  rnsa: HistoryPoint[],
  cams: HistoryPoint[],
  yearFilter: YearFilter,
): { date: string; rnsa?: number; cams?: number }[] {
  const map = new Map<string, { rnsa?: number; cams?: number }>();
  for (const p of filterByYear(rnsa, yearFilter)) map.set(p.date, { ...map.get(p.date), rnsa: p.value });
  for (const p of filterByYear(cams, yearFilter)) map.set(p.date, { ...map.get(p.date), cams: p.value });
  return Array.from(map.entries())
    .map(([date, vals]) => ({ date, ...vals }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function HistoryTooltip({ active, payload, label }: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  const formatted = new Date((label ?? "") + "T00:00:00").toLocaleDateString("fr-FR", {
    day: "numeric", month: "long", year: "numeric",
  });
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md px-3 py-2 text-sm min-w-[160px]">
      <p className="text-gray-400 text-xs mb-1">{formatted}</p>
      {payload.map((entry) => (
        <p key={entry.name} className="font-semibold" style={{ color: entry.color }}>
          {entry.name === "rnsa" ? "RNSA (mesuré)" : "CAMS (modèle)"}
          {" · "}{entry.value} gr/m³
        </p>
      ))}
    </div>
  );
}

function GrassHistoryChart() {
  const [data, setData] = useState<HistoryData>({ cams: [], rnsa: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [yearFilter, setYearFilter] = useState<YearFilter>("2025");

  useEffect(() => {
    fetch("/api/pollen-tracker/history/grass")
      .then((r) => r.json())
      .then((d: HistoryData) => { setData(d); setLoading(false); })
      .catch(() => { setError("Erreur de chargement"); setLoading(false); });
  }, []);

  const chartData = mergeForChart(data.rnsa, data.cams, yearFilter);
  const hasRnsa = chartData.some((p) => p.rnsa !== undefined);
  const hasCams = chartData.some((p) => p.cams !== undefined);

  const isMultiYear = yearFilter === "Tout" || yearFilter === "2010s";
  const ticks = chartData
    .filter((p) => isMultiYear ? p.date.endsWith("-01-01") : p.date.endsWith("-01"))
    .map((p) => p.date);
  const tickFmt = isMultiYear
    ? (date: string) => new Date(date + "T00:00:00").getFullYear().toString()
    : (date: string) => new Date(date + "T00:00:00").toLocaleDateString("fr-FR", { month: "short" });

  const peakSource = hasRnsa ? "rnsa" : "cams";
  const peakPoint = chartData.reduce<{ date: string; rnsa?: number; cams?: number } | null>(
    (best, p) => ((p[peakSource] ?? 0) > (best?.[peakSource] ?? 0) ? p : best), null
  );
  const peakValue = peakPoint?.[peakSource] ?? 0;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span>🌾</span>
          <span className="text-sm font-semibold text-gray-700">
            Graminées — historique <span className="font-normal text-gray-400">Paris</span>
          </span>
        </div>
        <div className="flex flex-wrap gap-1">
          {(["2026", "2025", "2024", "2023", "2022", "2010s", "Tout"] as YearFilter[]).map((y) => (
            <button
              key={y}
              onClick={() => setYearFilter(y)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                yearFilter === y ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 pt-4 pb-2">
        {loading && (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin h-6 w-6 rounded-full border-2 border-emerald-200 border-t-emerald-500" />
          </div>
        )}
        {error && <div className="text-red-500 text-sm text-center py-10">{error}</div>}
        {!loading && !error && chartData.length === 0 && (
          <div className="text-gray-400 text-sm text-center py-10">Pas de données pour {yearFilter}</div>
        )}
        {!loading && !error && chartData.length > 0 && (
          <>
            <div className="mb-3 flex items-center justify-between flex-wrap gap-2 text-xs text-gray-500">
              <div className="flex items-center gap-3">
                {hasRnsa && (
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block w-5 h-0.5 bg-emerald-500 rounded" />
                    RNSA mesuré
                  </span>
                )}
                {hasCams && (
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block w-5 h-0.5 bg-blue-400 rounded" style={{ borderTop: "2px dashed #60a5fa", background: "none" }} />
                    CAMS modèle
                  </span>
                )}
              </div>
              {peakPoint && (
                <span>
                  Pic : <span className="font-semibold text-gray-700">{peakValue} gr/m³</span>
                  {" "}le{" "}
                  {new Date(peakPoint.date + "T00:00:00").toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}
                  {" "}<span className="text-gray-400">({peakSource.toUpperCase()})</span>
                </span>
              )}
            </div>

            <ResponsiveContainer width="100%" height={230}>
              <AreaChart data={chartData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
                <defs>
                  <linearGradient id="rnsaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="camsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#60a5fa" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis dataKey="date" ticks={ticks} tickFormatter={tickFmt} tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} unit=" gr" />
                <Tooltip content={<HistoryTooltip />} />
                <ReferenceLine y={10} stroke="#facc15" strokeDasharray="4 3" label={{ value: "Moyen", position: "insideTopRight", fontSize: 9, fill: "#ca8a04" }} />
                <ReferenceLine y={50} stroke="#f97316" strokeDasharray="4 3" label={{ value: "Élevé",  position: "insideTopRight", fontSize: 9, fill: "#c2410c" }} />
                <Area type="monotone" dataKey="rnsa" name="rnsa" stroke="#10b981" strokeWidth={1.5} fill="url(#rnsaGrad)" dot={false} activeDot={{ r: 3, fill: "#10b981" }} connectNulls={false} />
                <Area type="monotone" dataKey="cams" name="cams" stroke="#60a5fa" strokeWidth={1.5} strokeDasharray="5 3" fill="url(#camsGrad)" dot={false} activeDot={{ r: 3, fill: "#60a5fa" }} connectNulls={false} />
              </AreaChart>
            </ResponsiveContainer>

            <p className="text-right text-xs text-gray-300 mt-1">
              gr/m³ — pic journalier · RNSA : mesure trap · CAMS : modèle Open-Meteo
            </p>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Forecast table ───────────────────────────────────────────────────────────

function ForecastTable({ pollenKey, onPollenChange }: {
  pollenKey: PollenKey;
  onPollenChange: (k: PollenKey) => void;
}) {
  // Token is fetched here — only this section depends on it
  const [token, setToken] = useState<string | null>(null);
  const [tokenError, setTokenError] = useState("");
  const [rows, setRows] = useState<DayRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  const bootstrap = useCallback(async () => {
    setTokenError("");
    setLoading(true);

    let tok = localStorage.getItem("pollen-tracker:atmo_token");
    if (!tok) {
      try {
        const res = await fetch("/api/pollen-tracker/auth/token");
        const data = await res.json();
        if (!res.ok || !data.token) {
          setTokenError(data.error || "Impossible de récupérer le token");
          setLoading(false);
          return;
        }
        localStorage.setItem("pollen-tracker:atmo_token", data.token);
        tok = data.token;
      } catch {
        setTokenError("Erreur de connexion au serveur");
        setLoading(false);
        return;
      }
    }
    setToken(tok);
  }, []);

  useEffect(() => { bootstrap(); }, [bootstrap]);

  const fetchForecast = useCallback(async (tok: string) => {
    setFetchError("");
    try {
      const res = await fetch("/api/pollen-tracker/pollen", {
        headers: { Authorization: `Bearer ${tok}` },
      });
      const json = await res.json();
      const features: PollenProps[] = (json?.features ?? []).map(
        (f: { properties: PollenProps }) => f.properties
      );
      features.sort((a, b) => a.date_ech.localeCompare(b.date_ech));
      const today = new Date().toISOString().split("T")[0];
      setRows(
        features.map((props) => {
          const iso = props.date_ech.split("T")[0];
          const exactDate = new Date(iso + "T00:00:00").toLocaleDateString("fr-FR", {
            day: "numeric", month: "long", year: "numeric",
          });
          const dayName = iso < today ? "Hier" : iso === today ? "Aujourd'hui" : "Demain";
          return { date: iso, label: `${dayName} (${exactDate})`, props };
        })
      );
    } catch {
      setFetchError("Erreur lors de la récupération des données");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token) fetchForecast(token);
  }, [token, fetchForecast]);

  const refreshToken = () => {
    localStorage.removeItem("pollen-tracker:atmo_token");
    setToken(null);
    setRows([]);
    bootstrap();
  };

  const selType = POLLEN_TYPES.find((t) => t.key === pollenKey)!;

  return (
    <div className="flex flex-col gap-4">
      {/* Controls row */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Zone : <span className="font-semibold text-gray-700">{ZONE.label}</span>
          <span className="ml-2 text-xs text-gray-400">INSEE {ZONE.code} · AASQA {ZONE.aasqa}</span>
        </p>
        <div className="flex items-center gap-3">
          <PollenDropdown value={pollenKey} onChange={onPollenChange} />
          <button
            onClick={refreshToken}
            className="text-xs text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
          >
            Actualiser token
          </button>
        </div>
      </div>

      {/* Token error */}
      {tokenError && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl flex items-center justify-between">
          <span>{tokenError}</span>
          <button onClick={bootstrap} className="text-xs underline ml-4 cursor-pointer">Réessayer</button>
        </div>
      )}

      {/* Fetch error */}
      {fetchError && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
          {fetchError}
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2">
          <span>{selType.icon}</span>
          <span className="text-sm font-semibold text-gray-700">
            {selType.label} <span className="font-normal text-gray-400">— {selType.latin}</span>
          </span>
        </div>

        {loading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin h-6 w-6 rounded-full border-2 border-emerald-200 border-t-emerald-500" />
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100">
                <th className="text-left px-5 py-2.5 font-medium">Date</th>
                <th className="text-center px-4 py-2.5 font-medium">Indice</th>
                <th className="text-center px-4 py-2.5 font-medium">Conc. (gr/m³)</th>
                <th className="text-left px-5 py-2.5 font-medium">Risque</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const code = row.props ? codeOf(row.props, pollenKey) : 0;
                const conc = row.props ? concOf(row.props, pollenKey) : null;
                const r = RISK[code] ?? RISK[0];
                return (
                  <tr key={row.date} className={`border-b border-gray-50 last:border-0 ${r.row}`}>
                    <td className="px-5 py-3 text-gray-700 font-medium whitespace-nowrap">{row.label}</td>
                    <td className={`px-4 py-3 text-center font-bold text-base ${r.text}`}>
                      {row.props ? `${code}/6` : "—"}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-600 tabular-nums">
                      {conc !== null ? conc : "—"}
                    </td>
                    <td className="px-5 py-3">
                      {row.props
                        ? <RiskDot code={code} />
                        : <span className="text-gray-300 text-xs">Aucune donnée</span>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const [pollenKey, setPollenKey] = useState<PollenKey>("gram");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-2">
        <span className="text-xl">🌿</span>
        <div>
          <span className="font-bold text-gray-800">Indice Pollinique</span>
          <span className="text-gray-400 text-sm ml-2">— {ZONE.label} · {ZONE.source}</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-6">
        {/* Forecast — fetches token, loads independently */}
        <ForecastTable pollenKey={pollenKey} onPollenChange={setPollenKey} />

        {/* History chart — no token needed, loads immediately */}
        <GrassHistoryChart />

        <p className="text-xs text-gray-300 text-center">
          Source : Atmo France / {ZONE.source} — Licence ODbL
        </p>
      </main>
    </div>
  );
}
