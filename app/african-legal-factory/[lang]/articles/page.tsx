import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale } from "../../_lib/i18n";
import { articles, CATEGORY_LABELS } from "../../_content/articles";

export default async function ArticlesIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const base = `/african-legal-factory/${lang}`;

  const sorted = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <section className="alf-container pt-20 pb-10">
        <p className="alf-label mb-4">{lang === "fr" ? "Ressources" : "Resources"}</p>
        <h1 className="text-4xl md:text-5xl">
          {lang === "fr" ? "Articles juridiques" : "Legal articles"}
        </h1>
        <p className="mt-6 alf-muted max-w-[52ch]">
          {lang === "fr"
            ? "Guides pratiques et décryptages pour structurer votre startup en Afrique francophone."
            : "Practical guides and analysis to structure your startup in Francophone Africa."}
        </p>
      </section>
      <section className="alf-container py-8 border-t" style={{ borderColor: "var(--alf-border)" }}>
        <nav aria-label="Categories" className="flex flex-wrap gap-x-5 gap-y-2 alf-label">
          {Object.entries(CATEGORY_LABELS).map(([slug, label]) => (
            <Link key={slug} href={`${base}/categorie/${slug}`}>{label}</Link>
          ))}
        </nav>
      </section>
      <section className="alf-container py-10 border-t" style={{ borderColor: "var(--alf-border)" }}>
        <ul className="grid md:grid-cols-2 gap-8">
          {sorted.map((a) => (
            <li key={a.slug}>
              <Link href={`${base}/articles/${a.slug}`}>
                <article className="alf-card hover:bg-[color:var(--alf-bg)] transition">
                  <p className="alf-label mb-2">
                    {new Date(a.date).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", { year: "numeric", month: "long", day: "numeric" })}
                    {" · "}{a.categories.map((c) => CATEGORY_LABELS[c]).join(", ")}
                  </p>
                  <h2 className="text-xl mb-3">{a.title}</h2>
                  <p className="alf-muted">{a.excerpt}</p>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
