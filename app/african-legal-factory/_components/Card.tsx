export function Card({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="alf-card">
      {title ? <h3 className="text-xl mb-3">{title}</h3> : null}
      <div className="space-y-3">{children}</div>
    </article>
  );
}
