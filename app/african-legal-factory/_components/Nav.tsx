import Link from "next/link";
import type { Dictionary } from "../_content/dictionary";
import type { Locale } from "../_lib/i18n";
import { LanguageToggle } from "./LanguageToggle";

export function Nav({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const base = `/african-legal-factory/${lang}`;
  const links: { label: string; href: string }[] = [
    { label: dict.nav.offres, href: `${base}/offres` },
    { label: dict.nav.academy, href: `${base}/alf-academy` },
    { label: dict.nav.articles, href: `${base}/articles` },
    { label: dict.nav.about, href: `${base}/a-propos` },
    { label: dict.nav.contact, href: `${base}/contact` },
  ];

  return (
    <header
      className="border-b sticky top-0 z-20 backdrop-blur"
      style={{ borderColor: "var(--alf-border)", background: "color-mix(in srgb, var(--alf-bg) 90%, transparent)" }}
    >
      <div className="alf-container flex items-center justify-between py-5">
        <Link href={base} className="flex items-baseline gap-2 alf-accent">
          <span className="text-xl" style={{ fontFamily: "var(--font-alf-display)" }}>
            ALF
          </span>
          <span className="alf-label alf-muted hidden sm:inline">
            {dict.meta.siteName}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="alf-label">
              {l.label}
            </Link>
          ))}
        </nav>
        <LanguageToggle current={lang} labels={dict.nav.langSwitch} />
      </div>
    </header>
  );
}
