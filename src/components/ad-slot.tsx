export function AdSlot({
  size = "billboard",
  className = "",
}: {
  size?: "billboard" | "leaderboard" | "mpu";
  className?: string;
}) {
  const dims =
    size === "billboard"
      ? { h: 250, label: "970 × 250" }
      : size === "leaderboard"
        ? { h: 90, label: "728 × 90" }
        : { h: 250, label: "300 × 250" };
  return (
    <div
      role="complementary"
      aria-label="Advertisement"
      className={`es-ad ${className}`}
      style={{ minHeight: dims.h }}
    >
      <div className="flex flex-col items-center gap-1">
        <span>Advertisement</span>
        <span className="opacity-60">{dims.label}</span>
      </div>
    </div>
  );
}
