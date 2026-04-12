import { NextRequest, NextResponse } from "next/server";

const ATMO_BASE = "https://admindata.atmo-france.org";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json({ error: "Username and password required" }, { status: 400 });
  }

  const upstream = await fetch(`${ATMO_BASE}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await upstream.json();

  if (!upstream.ok) {
    return NextResponse.json(
      { error: data.message || "Authentication failed" },
      { status: upstream.status }
    );
  }

  return NextResponse.json(data);
}
