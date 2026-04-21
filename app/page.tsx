import Link from "next/link";

const APPS = [
  {
    slug: "pollen-tracker",
    title: "Pollen Tracker",
    description: "Daily grass pollen forecast for Paris — live Atmo France data with RNSA and CAMS historical chart.",
    icon: "🌿",
    href: "/pollen-tracker",
  },
  {
    slug: "african-legal-factory",
    title: "African Legal Factory",
    description: "Rebuild of africanlegalfactory.com — bilingual (FR/EN) legaltech site for the African startup ecosystem.",
    icon: "⚖️",
    href: "/african-legal-factory",
  },
] as const;

export default function HubPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-5">
        <p className="text-xs text-gray-400 font-mono tracking-widest uppercase mb-1">
          Portfolio of Personal Apps — Created with AI Agents
        </p>
        <h1 className="text-lg font-bold text-gray-800">Personal Apps</h1>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-10">
        <ul className="flex flex-col gap-3">
          {APPS.map((app) => (
            <li key={app.slug}>
              <Link
                href={app.href}
                className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm hover:border-gray-300 hover:shadow transition-all group"
              >
                <span className="text-2xl mt-0.5">{app.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors">
                    {app.title}
                  </p>
                  <p className="text-sm text-gray-400 mt-0.5">{app.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer className="px-6 py-4 text-center text-xs text-gray-300 border-t border-gray-100">
        <a
          href="https://boringsystems.app"
          className="hover:text-gray-500 transition-colors"
        >
          boringsystems.app
        </a>
      </footer>
    </div>
  );
}
