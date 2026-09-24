export default function Home() {
  return (
    <main className="p-8">
      <div className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 max-w-md">
        <h1 className="text-xl font-semibold text-[color:var(--color-accent)]">
          FINDIT
        </h1>
        <p className="mt-2 text-[color:var(--color-text-muted)]">
        Design tokens are working if this card is white, the border is
        light grey, and &ldquo;FINDIT&rdquo; is blue.
        </p>
      </div>
    </main>
  );
}