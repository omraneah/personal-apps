# personal-apps

A collection of personal tools deployed at [apps.boringsystems.app](https://apps.boringsystems.app).

These apps are not linked publicly from the main site. If you have the link, you can use them.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) — single repo, multiple apps as routes
- [Tailwind CSS 4](https://tailwindcss.com)
- Deployed on [Vercel](https://vercel.com) under the `apps.boringsystems.app` subdomain

## Apps

| App | Route | Description |
|-----|-------|-------------|
| [Pollen Tracker](./apps/pollen-tracker/README.md) | `/pollen-tracker` | Daily grass pollen forecast for Paris (Atmo France + RNSA + CAMS) |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create a `.env.local` at the repo root:

```
ATMO_USERNAME=your_atmo_france_username
ATMO_PASSWORD=your_atmo_france_password
```

Required by the Pollen Tracker to authenticate against the Atmo France API server-side. Register at [admindata.atmo-france.org](https://admindata.atmo-france.org).

## Adding a new app

1. Create `app/<app-name>/page.tsx` (and any sub-routes you need)
2. Add API routes under `app/api/<app-name>/`
3. Register the app in `app/page.tsx` (the hub `APPS` array)
4. Add `apps/<app-name>/README.md` with its own documentation

## Structure

```
personal-apps/
├── app/
│   ├── page.tsx                    # Hub landing page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css
│   ├── pollen-tracker/             # Pollen Tracker app
│   │   ├── page.tsx
│   │   └── dashboard/page.tsx
│   └── api/
│       └── pollen-tracker/         # Pollen Tracker API routes
│           ├── auth/token/
│           ├── auth/login/
│           ├── pollen/
│           └── history/grass/
├── apps/
│   └── pollen-tracker/
│       └── README.md               # App-specific documentation
└── public/
    └── data/
        └── rnsa-paris-grass.json   # Pre-processed historical pollen data
```
