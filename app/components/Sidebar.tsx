import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Inventory", href: "/inventory" },
  { label: "Pending Claims", href: "/claims" },
  { label: "Aging Items", href: "/aging" },
  { label: "Hand-off History", href: "/handoffs" },
];

export default function Sidebar() {
  return (
    <aside className="w-60 shrink-0 border-r border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4">
      <div className="mb-6 px-2 text-lg font-semibold text-[color:var(--color-accent)]">
        FINDIT
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-2 text-sm text-[color:var(--color-text)] hover:bg-[color:var(--color-surface-muted)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}