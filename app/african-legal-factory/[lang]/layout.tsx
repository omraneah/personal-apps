import { notFound } from "next/navigation";
import { getDictionary, hasLocale, LOCALES } from "../_lib/i18n";
import { Nav } from "../_components/Nav";
import { Footer } from "../_components/Footer";

export const dynamicParams = false;

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Nav dict={dict} lang={lang} />
      <main>{children}</main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
