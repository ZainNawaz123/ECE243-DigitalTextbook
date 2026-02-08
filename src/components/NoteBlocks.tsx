type Props = { children: React.ReactNode; title?: string; };

export function Card({ children, title }: Props) {
  return (
    <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
      {title && (
        <h2 className="text-lg font-semibold tracking-tight text-neutral-100">
          {title}
        </h2>
      )}
      <div className={title ? "mt-3" : ""}>{children}</div>
    </section>
  );
}

export function Callout({
  label = "Key idea",
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
      <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-xs font-semibold text-neutral-200">
        {label}
      </div>
      <div className="mt-3 text-sm leading-relaxed text-neutral-200">
        {children}
      </div>
    </div>
  );
}

export function Bullets({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-2 space-y-2 text-sm leading-relaxed text-neutral-200">
      {children}
    </ul>
  );
}

export function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
      <span>{children}</span>
    </li>
  );
}
