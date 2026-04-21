import Link from "next/link";
import type { Dictionary } from "../_content/dictionary";
import type { Locale } from "../_lib/i18n";

export function Footer({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const base = `/african-legal-factory/${lang}`;
  const primary = [
    { label: dict.nav.offres, href: `${base}/offres` },
    { label: dict.nav.academy, href: `${base}/alf-academy` },
    { label: dict.nav.articles, href: `${base}/articles` },
    { label: dict.nav.experts, href: `${base}/formateurs` },
    { label: dict.nav.mission, href: `${base}/mission-et-valeurs` },
    { label: dict.nav.gallery, href: `${base}/galerie` },
    { label: dict.nav.contact, href: `${base}/contact` },
    { label: dict.nav.newsletter, href: `${base}/newsletter` },
  ];

  return (
    <footer
      className="border-t mt-24"
      style={{ borderColor: "var(--alf-border)" }}
    >
      <div className="alf-container grid grid-cols-1 md:grid-cols-3 gap-10 py-16">
        <div>
          <p className="alf-label mb-4">{dict.meta.siteName}</p>
          <p className="alf-muted max-w-[32ch]">{dict.meta.tagline}</p>
        </div>
        <nav aria-label="Primary" className="grid grid-cols-2 gap-x-4 gap-y-2">
          {primary.map((l) => (
            <Link key={l.href} href={l.href} className="alf-muted hover:text-current">
              {l.label}
            </Link>
          ))}
        </nav>
        <div>
          <p className="alf-label mb-4">{dict.footer.contactLabel}</p>
          <p>
            <a href={`tel:${dict.footer.phone.replace(/\s/g, "")}`} className="alf-muted">
              {dict.footer.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${dict.footer.email}`} className="alf-muted">
              {dict.footer.email}
            </a>
          </p>
          <ul className="mt-4 flex gap-4">
            {dict.footer.social.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="alf-label">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="border-t"
        style={{ borderColor: "var(--alf-border)" }}
      >
        <div className="alf-container flex flex-col md:flex-row justify-between gap-3 py-6 alf-label">
          <p>{dict.footer.rights}</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {dict.footer.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="alf-muted">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={dict.footer.poweredByHref}
                target="_blank"
                rel="noopener noreferrer"
                className="alf-muted"
              >
                {dict.footer.poweredBy}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
