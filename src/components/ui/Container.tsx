import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-5xl px-6 ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--accent-text)]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-[var(--text-secondary)]">{description}</p>}
    </div>
  );
}
