export function Masthead({ compact = false }: { compact?: boolean }) {
  // Restrained editorial wordmark. Replace with supplied SVG when available.
  const scale = compact ? 0.6 : 1;
  return (
    <div className="flex flex-col items-center text-ink" style={{ transform: `scale(${scale})`, transformOrigin: "center" }}>
      <span className="es-eyebrow tracking-[0.24em] text-ink-soft mb-1.5 flex items-center gap-2">
        <span aria-hidden>Canada Edition</span>
        <MapleLeaf className="h-3 w-3 text-standard-red" />
      </span>
      <span
        className="font-serif font-bold text-ink leading-none"
        style={{
          fontSize: "clamp(28px, 4.8vw, 44px)",
          letterSpacing: "-0.02em",
        }}
      >
        Evening&nbsp;Standard
      </span>
      <span className="mt-1.5 h-px w-32 bg-ink" aria-hidden />
    </div>
  );
}

function MapleLeaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 2l1.6 3.9 4.1-.6-1.5 3.7 3.8 2.2-3.4 2.3 1.1 4-3.9-1 .3 4.2L12 18.4 9.9 20.7l.3-4.2-3.9 1 1.1-4L4 11.2l3.8-2.2L6.3 5.3l4.1.6L12 2z" />
    </svg>
  );
}
