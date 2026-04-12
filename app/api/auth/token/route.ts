import { NextResponse } from "next/server";

const ATMO_BASE = "https://admindata.atmo-france.org";
const USERNAME = "ahmedomrane";
const PASSWORD = "QgQ5f@v@jFN5x!H";

// Server-side token cache — shared across requests for the lifetime of the process
let cachedToken: string | null = null;
let expiresAt: number = 0; // unix ms

async function fetchFreshToken(): Promise<string> {
  const res = await fetch(`${ATMO_BASE}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: USERNAME, password: PASSWORD }),
  });

  if (!res.ok) {
    throw new Error(`Atmo login failed: ${res.status}`);
  }

  const data = await res.json();

  // Extract JWT from response (may be data.token, data.jwt, or the raw string)
  let token: string | null = null;
  if (typeof data === "string" && data.includes(".")) {
    token = data;
  } else if (typeof data.token === "string") {
    token = data.token;
  } else if (typeof data.jwt === "string") {
    token = data.jwt;
  } else {
    // Fallback: find any JWT-shaped string in the response
    const match = JSON.stringify(data).match(/"([A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+)"/);
    if (match) token = match[1];
  }

  if (!token) throw new Error("No token found in Atmo login response");

  // Decode expiry from JWT payload (exp claim, unix seconds)
  try {
    const payload = JSON.parse(Buffer.from(token.split(".")[1], "base64url").toString());
    // Expire the cache 5 minutes before the real expiry as a safety margin
    expiresAt = payload.exp ? (payload.exp - 300) * 1000 : Date.now() + 23 * 60 * 60 * 1000;
  } catch {
    expiresAt = Date.now() + 23 * 60 * 60 * 1000; // fallback: 23 hours
  }

  cachedToken = token;
  return token;
}

export async function GET() {
  // Return cached token if still valid
  if (cachedToken && Date.now() < expiresAt) {
    return NextResponse.json({ token: cachedToken });
  }

  try {
    const token = await fetchFreshToken();
    return NextResponse.json({ token });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to authenticate" },
      { status: 502 }
    );
  }
}
