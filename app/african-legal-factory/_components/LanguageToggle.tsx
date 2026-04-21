"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "../_lib/i18n";

export function LanguageToggle({
  current,
  labels,
}: {
  current: Locale;
  labels: { fr: string; en: string };
}) {
  const pathname = usePathname() ?? "/african-legal-factory/fr";
  const makeHref = (target: Locale) =>
    pathname.replace(
      /\/african-legal-factory\/(fr|en)/,
      `/african-legal-factory/${target}`
    );

  return (
    <nav aria-label="Language" className="flex items-center gap-3 alf-label">
      {(["fr", "en"] as const).map((l) => (
        <Link
          key={l}
          href={makeHref(l)}
          aria-current={l === current ? "true" : undefined}
          className={l === current ? "alf-accent" : "alf-muted"}
        >
          {labels[l]}
        </Link>
      ))}
    </nav>
  );
}
