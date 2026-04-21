import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, LOCALES } from "../../../_lib/i18n";
import { articles, articlesBySlug, CATEGORY_LABELS } from "../../../_content/articles";
import { BlockRenderer } from "../../../_components/BlockRenderer";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    articles.map((a) => ({ lang, slug: a.slug }))
  );
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const article = articlesBySlug[slug];
  if (!article) notFound();
  const base = `/african-legal-factory/${lang}`;

  return (
    <article className="alf-container pt-20 pb-20">
      <p className="alf-label mb-4">
        <Link href={`${base}/articles`}>
          {lang === "fr" ? "← Articles" : "← Articles"}
        </Link>
      </p>
      <header className="alf-prose mb-10">
        <p className="alf-label mb-3">
          {new Date(article.date).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", { year: "numeric", month: "long", day: "numeric" })}
          {" · "}{article.author}
          {" · "}{article.categories.map((c) => CATEGORY_LABELS[c]).join(", ")}
        </p>
        <h1 className="text-3xl md:text-4xl leading-[1.2]">{article.title}</h1>
      </header>
      <div className="alf-prose">
        <BlockRenderer blocks={article.blocks} />
      </div>
      <nav aria-label="Categories" className="mt-16 pt-8 border-t alf-label flex flex-wrap gap-x-5 gap-y-2"
           style={{ borderColor: "var(--alf-border)" }}>
        {article.categories.map((c) => (
          <Link key={c} href={`${base}/categorie/${c}`}>{CATEGORY_LABELS[c]}</Link>
        ))}
      </nav>
    </article>
  );
}
