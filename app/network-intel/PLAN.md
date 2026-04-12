# LinkedIn Network Intel — Build Plan

## What This App Does

A personal tool to explore synergies with your first-degree LinkedIn connections.
Sign in with LinkedIn, browse your connections, pick one, and get an AI-powered
brief comparing your professional trajectories and surfacing collaboration angles.

This is a private, single-user app (you are the only user).

---

## Credentials Needed Before Building

Add these to `.env.local` and to Vercel environment variables:

```env
# LinkedIn OAuth App
LINKEDIN_CLIENT_ID=
LINKEDIN_CLIENT_SECRET=

# Auth.js (generate with: openssl rand -base64 32)
AUTH_SECRET=

# Anthropic (for AI analysis)
ANTHROPIC_API_KEY=

# App URL (for OAuth redirect)
NEXTAUTH_URL=https://portfolio.boringsystems.app
```

### How to get LinkedIn credentials

1. Go to https://www.linkedin.com/developers/apps
2. Create a new app — name: "Network Intel", company: your personal page
3. Under **Auth**, add redirect URL: `https://portfolio.boringsystems.app/api/auth/callback/linkedin`
   - Also add for local dev: `http://localhost:3000/api/auth/callback/linkedin`
4. Under **Products**, request access to:
   - **Sign In with LinkedIn using OpenID Connect** (instant approval)
   - **Share on LinkedIn** (optional, instant)
   - Submit a request for **r_1st_connections** scope (may take days/weeks — app works without it, just shows a pending state)
5. Copy **Client ID** and **Client Secret** from the Auth tab

---

## Tech Stack

| Concern       | Choice                        | Notes                                      |
|---------------|-------------------------------|--------------------------------------------|
| Auth          | Auth.js v5 (next-auth)        | LinkedIn provider, JWT session             |
| LinkedIn API  | Direct fetch in Server Actions| No SDK, thin wrapper                       |
| AI            | Anthropic SDK (claude-sonnet-4-6) | Streamed analysis                      |
| UI            | Tailwind CSS                  | Already in project                         |
| Framework     | Next.js 16 App Router         | Already in project                         |

### Packages to install

```bash
npm install next-auth@beta @auth/core @anthropic-ai/sdk
```

---

## File Structure to Create

```
app/
  network-intel/
    PLAN.md                          ← this file
    layout.tsx                       ← auth guard: redirect to /network-intel if no session
    page.tsx                         ← sign-in page (LinkedIn OAuth button)
    dashboard/
      page.tsx                       ← connections list + search input
    compare/
      [id]/
        page.tsx                     ← side-by-side profile view + streaming AI brief

  api/
    auth/
      [...nextauth]/
        route.ts                     ← Auth.js handler (GET + POST)
    linkedin/
      connections/
        route.ts                     ← proxies GET /v2/connections, returns paginated JSON
      profile/
        [id]/
          route.ts                   ← proxies GET /v2/people/{id}
    analyze/
      route.ts                       ← streams Claude response (POST with two profile objects)
```

---

## Auth Flow

```
/network-intel (unauthenticated)
  → renders sign-in page with "Connect LinkedIn" button
  → triggers LinkedIn OAuth (scopes: openid, profile, email, r_1st_connections)
  → callback → /api/auth/callback/linkedin
  → session cookie set (JWT, encrypted with AUTH_SECRET)
  → redirect to /network-intel/dashboard
```

The LinkedIn access token is stored inside the encrypted session and forwarded
on every API call. Auth.js handles token refresh automatically.

---

## LinkedIn API Calls

### 1. Authenticated user's own profile
```
GET https://api.linkedin.com/v2/userinfo
Headers: Authorization: Bearer {access_token}

Returns: sub, name, given_name, family_name, email, picture, locale
```
This always works — no special scope needed beyond `profile`.

### 2. First-degree connections list
```
GET https://api.linkedin.com/v2/connections?q=viewer&start=0&count=50
Headers: Authorization: Bearer {access_token}

Returns: paginated list of connections with:
  - id, firstName, lastName, headline, profilePicture
Requires: r_1st_connections scope (needs LinkedIn approval)
```
Build with graceful degradation: if scope not approved, show a "pending" banner
instead of the connections list.

### 3. Single connection profile
```
GET https://api.linkedin.com/v2/people/{connection-id}
  ?projection=(id,firstName,lastName,headline,profilePicture,vanityName)
Headers: Authorization: Bearer {access_token}
Requires: r_1st_connections scope
```

### Rate limits
- Max ~100 requests/day per app in development tier
- Cache connections list in the session (don't re-fetch on every page load)
- Cache individual profiles in memory for the duration of the session

---

## Page Specifications

### `/network-intel` — Sign-in page
- Minimal: app name, one-line description, "Sign in with LinkedIn" button
- If already signed in, redirect to `/network-intel/dashboard`

### `/network-intel/dashboard` — Connections list
- Header: your avatar + name (from session)
- Search input (client-side filter, no extra API calls)
- List of connections: avatar, name, headline, company
- Each row links to `/network-intel/compare/{id}`
- If `r_1st_connections` not yet approved: show a yellow banner explaining the scope
  is pending LinkedIn review, with a link to the LinkedIn developer console
- Sign out button

### `/network-intel/compare/[id]` — Comparison view
- Two-column layout:
  - Left: your profile (name, headline, current role, email)
  - Right: their profile (name, headline, company, title)
- Below: AI brief section — streams Claude's response
- AI brief answers three questions:
  1. What professional overlap or shared context exists?
  2. What complementary strengths could make a collaboration interesting?
  3. How would you open a conversation with this person given the context?
- "Back to connections" link

---

## AI Analysis Prompt Template

```
You are helping a professional named {user.name} understand synergy potential
with one of their LinkedIn connections.

## Your profile
Name: {user.name}
Headline: {user.headline}
Email: {user.email}

## Their profile
Name: {connection.name}
Headline: {connection.headline}
Current company: {connection.company}

## Your task
Answer these three questions in plain, direct language — no fluff:

1. **Overlap** — What professional context or domain do these two people share?
2. **Complementarity** — What does each bring that the other likely doesn't?
3. **Opening move** — Given this context, how would you open a conversation?

Keep each answer to 2–4 sentences. Be specific, not generic.
```

---

## Landing Page Update (`app/page.tsx`)

Add this entry to the `APPS` array:

```ts
{
  slug: "network-intel",
  title: "LinkedIn Network Intel",
  description: "Explore synergies with your first-degree LinkedIn connections — profile comparison and AI-powered collaboration brief.",
  icon: "🔗",
  href: "/network-intel",
}
```

---

## Environment Variable Checklist

Before starting the build, verify:

- [ ] `LINKEDIN_CLIENT_ID` — from LinkedIn Developer Portal
- [ ] `LINKEDIN_CLIENT_SECRET` — from LinkedIn Developer Portal
- [ ] `AUTH_SECRET` — generate with `openssl rand -base64 32`
- [ ] `ANTHROPIC_API_KEY` — from console.anthropic.com
- [ ] `NEXTAUTH_URL` — set to production URL (or `http://localhost:3000` for local)
- [ ] Redirect URI registered in LinkedIn app: `{NEXTAUTH_URL}/api/auth/callback/linkedin`
- [ ] **Sign In with LinkedIn using OpenID Connect** product added to LinkedIn app
- [ ] `r_1st_connections` scope submitted for review (or note that dashboard will show pending state)

---

## Build Order (once creds are ready)

1. Install packages (`next-auth@beta`, `@auth/core`, `@anthropic-ai/sdk`)
2. Create `auth.ts` config at project root (Auth.js v5 pattern)
3. Create `/api/auth/[...nextauth]/route.ts`
4. Create `app/network-intel/layout.tsx` (auth guard)
5. Create `app/network-intel/page.tsx` (sign-in page)
6. Create `/api/linkedin/connections/route.ts`
7. Create `/api/linkedin/profile/[id]/route.ts`
8. Create `app/network-intel/dashboard/page.tsx`
9. Create `/api/analyze/route.ts` (streaming)
10. Create `app/network-intel/compare/[id]/page.tsx`
11. Update `app/page.tsx` to add the new app card
12. Test locally, then deploy

---

## Known Limitations

- **No message history** — LinkedIn Messaging API is partner-only. Not available for personal apps.
  Layer 2: evaluate Unipile (https://www.unipile.com) once Layer 1 is live.
- **Connection profile depth** — Only name, headline, company available via API.
  Real-time role history, skills, and education require LinkedIn partnership.
- **r_1st_connections approval** — LinkedIn may take days or weeks to approve.
  App is designed to work without it (shows pending state).
- **48-hour data retention policy** — Do not persist LinkedIn data to a database.
  Keep everything in session/memory only.
