export function SectionHeader({
  eyebrow,
  headline,
  align = "left",
}: {
  eyebrow?: string;
  headline: string;
  align?: "left" | "center";
}) {
  return (
    <header className={align === "center" ? "text-center" : ""}>
      {eyebrow ? <p className="alf-label mb-4">{eyebrow}</p> : null}
      <h2 className="text-3xl md:text-4xl max-w-[28ch] leading-tight">
        {headline}
      </h2>
    </header>
  );
}
