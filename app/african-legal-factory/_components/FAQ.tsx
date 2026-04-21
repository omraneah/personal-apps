export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="alf-prose">
      {items.map((item, i) => (
        <details
          key={i}
          className="border-t last:border-b"
          style={{ borderColor: "var(--alf-border)" }}
        >
          <summary>{item.q}</summary>
          <p className="pb-6 alf-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
