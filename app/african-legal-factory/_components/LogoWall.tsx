export function LogoWall({ names }: { names: string[] }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 border-t border-b py-8"
        style={{ borderColor: "var(--alf-border)" }}>
      {names.map((n) => (
        <li
          key={n}
          className="alf-label text-center py-2"
          style={{ letterSpacing: "0.1em" }}
        >
          {n}
        </li>
      ))}
    </ul>
  );
}
