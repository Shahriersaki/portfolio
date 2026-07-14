export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-[var(--border-hairline)] px-2.5 py-1 font-[family-name:var(--font-mono)] text-[11px] text-[var(--text-secondary)]">
      {children}
    </span>
  );
}
