import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, LOCALES } from "../../../_lib/i18n";
import { articlesByCategory, CATEGORY_LABELS, type ArticleCategory } from "../../../_content/articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    (Object.keys(CATEGORY_LABELS) as ArticleCategory[]).map((slug) => ({ lang, slug }))
  );
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  if (!(slug in CATEGORY_LABELS)) notFound();
  const category = slug as ArticleCategory;
  const items = articlesByCategory[category];
  const base = `/african-legal-factory/${lang}`;

  return (
    <>
      <section className="alf-container pt-20 pb-10">
        <p className="alf-label mb-4"><Link href={`${base}/articles`}>{lang === "fr" ? "← Tous les articles" : "← All articles"}</Link></p>
        <h1 className="text-4xl md:text-5xl">{CATEGORY_LABELS[category]}</h1>
        <p className="mt-4 alf-muted">{items.length} {lang === "fr" ? "articles" : "articles"}</p>
      </section>
      <section className="alf-container py-10 border-t" style={{ borderColor: "var(--alf-border)" }}>
        <ul className="grid md:grid-cols-2 gap-8">
          {items.map((a) => (
            <li key={a.slug}>
              <Link href={`${base}/articles/${a.slug}`}>
                <article className="alf-card">
                  <p className="alf-label mb-2">{new Date(a.date).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
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
