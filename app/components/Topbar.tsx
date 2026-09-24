export default function Topbar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-6">
      <span className="text-sm font-medium text-[color:var(--color-text)]">
        Admin Dashboard
      </span>
      <span className="text-sm text-[color:var(--color-text-muted)]">
        Signed in as Staff
      </span>
    </header>
  );
}