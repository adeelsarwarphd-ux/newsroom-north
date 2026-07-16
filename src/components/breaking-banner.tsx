export function BreakingBanner({
  headline,
  href,
  time,
}: {
  headline: string;
  href: string;
  time: string;
}) {
  return (
    <a
      href={href}
      className="block bg-standard-red text-paper hover:no-underline"
    >
      <div className="es-container flex flex-wrap items-center gap-x-4 gap-y-1 py-2.5">
        <span className="flex items-center gap-2 shrink-0">
          <span className="es-live-dot bg-paper" style={{ background: "#fff" }} aria-hidden />
          <span className="es-eyebrow tracking-[0.08em]">Breaking</span>
        </span>
        <span className="font-serif text-[15px] leading-[1.35] font-semibold flex-1 min-w-0">
          {headline}
        </span>
        <span className="es-caption text-paper/80 shrink-0">{time}</span>
      </div>
    </a>
  );
}
