import { NextRequest, NextResponse } from "next/server";

const ATMO_BASE = "https://admindata.atmo-france.org";
const CODE_ZONE = "75056";

export async function GET(req: NextRequest) {
  const token = req.headers.get("authorization");

  if (!token) {
    return NextResponse.json({ error: "Authorization token required" }, { status: 401 });
  }

  // Single call — returns all available days (J / J+1 / J+2) at once
  const params = new URLSearchParams({
    format: "geojson",
    with_geom: "false",
    code_zone: CODE_ZONE,
  });

  const upstream = await fetch(
    `${ATMO_BASE}/api/v2/data/indices/pollens?${params.toString()}`,
    { headers: { Authorization: token } }
  );

  if (!upstream.ok) {
    return NextResponse.json(
      { error: "Failed to fetch pollen data" },
      { status: upstream.status }
    );
  }

  const data = await upstream.json();
  return NextResponse.json(data);
}
