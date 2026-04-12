# Pollen Index — Paris

A Next.js dashboard tracking grass pollen levels in Paris, combining live forecast data from Atmo France with historical measurements and model data from two independent sources.

## Features

- **Login** — authenticates against the Atmo France API using a JWT token
- **3-day forecast** — live pollen forecast for all tracked species (graminées, ambroisie, armoise, aulne, bouleau, olivier) with risk levels and concentrations
- **Historical chart** — daily grass pollen from 2010 to present, overlaying two independent sources (RNSA station measurements vs CAMS atmospheric model), with per-year and decade filters

---

## Data Sources

### 1. Atmo France API (live forecast)

**What it provides:** Official 3-day pollen forecast for French communes, published daily by regional air quality agencies (AASQA).

**Used for:** The forecast table on the dashboard — indices and concentrations for 6 pollen species over yesterday / today / tomorrow.

**Zone:** Paris, INSEE code `75056`, provided by **Airparif** (AASQA Île-de-France).

**Fields used:**
- `code_gram`, `conc_gram` — grass (graminées) risk index (0–6) and concentration (grains/m³)
- Same fields for: `ambr` (ambroisie), `arm` (armoise), `aul` (aulne), `boul` (bouleau), `oliv` (olivier)

**Base URL:** `https://admindata.atmo-france.org`

**Endpoint:** `GET /api/v2/data/indices/pollens`

**Key parameters:**
| Parameter | Value | Description |
|---|---|---|
| `format` | `geojson` | Response format |
| `with_geom` | `false` | Skip geometry to reduce payload |
| `code_zone` | `75056` | INSEE commune code for Paris |

**Authentication:** Bearer JWT token, obtained via `POST /api/login`. Tokens are valid for 24 hours. Account registration required at [admindata.atmo-france.org](https://admindata.atmo-france.org).

**API documentation:** https://admindata.atmo-france.org/api/doc/v2

**Licence:** ODbL (Open Database Licence)

**Important limitation:** This endpoint is a **live forecast feed only** — it returns at most 3 days (yesterday, today, tomorrow) and retains no historical archive. The `date_historique` parameter listed in the spec has no effect on this endpoint.

---

### 2. RNSA — Réseau National de Surveillance Aérobiologique (historical measurements)

**What it provides:** Daily pollen trap measurements collected at physical monitoring stations across France, published as open data by the national aerobiology surveillance network.

**Used for:** The historical chart (solid green line) — actual measured grass pollen concentrations in Paris from 2010 to 2024.

**Station:** `PARIS` — Burkard volumetric sampler (trap), counts actual pollen grains captured on a sticky tape per m³ of air.

**Data coverage:** 1987–2024 (this app uses 2010–2024). Data is published per station per year as `.xls`/`.xlsx` files inside a zip archive.

**Column used:** `GRAMINEE` — daily grass pollen concentration in grains/m³.

**Data file:** Pre-processed into `public/data/rnsa-paris-grass.json` at build time. 5,867 non-zero daily readings for the Paris station (1987–2024), covering the full archive; the app filters to 2010+.

**Source dataset:** [Données historiques de surveillance des pollens et des moisissures — data.gouv.fr](https://www.data.gouv.fr/datasets/donnees-historiques-de-surveillance-des-pollens-et-des-moisissures)

**Direct download (zip, ~59 MB):** https://static.data.gouv.fr/resources/donnees-de-surveillance-des-pollens-et-des-moisissures-donnees-historiques-du-reseau-national-de-surveillance-aerobiologique-1/20250717-142928/bdd-daily-1.zip

**Published by:** RNSA — https://www.pollens.fr

**Licence:** Open data (data.gouv.fr)

**Trust level:** Highest available — direct physical measurement from a calibrated trap, same methodology as the Atmo France live data.

---

### 3. Open-Meteo / CAMS (historical model + recent data)

**What it provides:** Hourly atmospheric pollen model output for any lat/lon coordinate, derived from the Copernicus Atmosphere Monitoring Service (CAMS) European air quality model.

**Used for:** The historical chart (dashed blue line) — modeled grass pollen for Paris from 2022 to the current date, providing overlap with RNSA measurements and extending into 2025–2026 where no RNSA data exists yet.

**Coordinates:** `latitude=48.8566, longitude=2.3522` (Paris)

**Aggregation:** Hourly values are aggregated to daily peak (maximum of all 24 hourly readings per day).

**Field used:** `grass_pollen` (grains/m³)

**API endpoint:** `GET https://air-quality-api.open-meteo.com/v1/air-quality`

**Key parameters:**
| Parameter | Value | Description |
|---|---|---|
| `latitude` | `48.8566` | Paris latitude |
| `longitude` | `2.3522` | Paris longitude |
| `hourly` | `grass_pollen` | Variable to retrieve |
| `start_date` | `2022-01-01` | Start of reliable pollen data |
| `end_date` | today | End date |
| `timezone` | `Europe/Paris` | Local time alignment |

**Authentication:** None — fully free, no account required.

**API documentation:** https://open-meteo.com/en/docs/air-quality-api

**Licence:** Free for non-commercial use

**Trust level:** Model output, not a measurement. Values are systematically lower than trap measurements — CAMS peaks at ~75 gr/m³ while RNSA station peaks at 100–330 gr/m³ for the same Paris location. The seasonal timing and shape are reliable; the absolute values are not directly comparable to trap data. In the 2022–2024 overlap window both series are shown simultaneously so the scale difference is visible.

---

## Scale discrepancy between sources

The RNSA (measured) and CAMS (modelled) values are both reported in grains/m³ but differ significantly in magnitude:

| | RNSA peak (June 2023) | CAMS peak (June 2023) |
|---|---|---|
| Paris grass pollen | 132 gr/m³ | ~73 gr/m³ |

Reasons for the gap:
- CAMS operates on a ~10 km grid cell; the Paris measurement is a point in a dense urban environment
- The CAMS phenological model lags at season onset and underestimates early/late season signal
- Trap measurements count every grain; the model simulates emission + dispersion and can under-emit
- CAMS is calibrated to broad seasonal shape, not absolute accuracy at low concentrations

Both series are kept in the chart for transparency. Use RNSA for absolute concentrations; use CAMS for recent data and trend continuity into the current season.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Log in with your Atmo France account credentials (register at [admindata.atmo-france.org](https://admindata.atmo-france.org)).

## Environment

No environment variables required — the Atmo France token is obtained at login and stored in `localStorage`. The Open-Meteo API requires no authentication.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router)
- [Recharts](https://recharts.org) — chart rendering
- [Tailwind CSS 4](https://tailwindcss.com)
- [Open-Meteo](https://open-meteo.com) — CAMS pollen model
- [Atmo France API](https://admindata.atmo-france.org/api/doc/v2) — live pollen forecast
- [RNSA / data.gouv.fr](https://www.data.gouv.fr/datasets/donnees-historiques-de-surveillance-des-pollens-et-des-moisissures) — historical station data
