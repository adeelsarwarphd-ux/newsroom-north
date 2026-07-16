import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Masthead } from "./masthead";

const primaryLeft = [
  { label: "News", to: "/category/news" },
  { label: "Politics", to: "/category/politics" },
  { label: "Business", to: "/category/business" },
  { label: "Sport", to: "/category/sport" },
];
const primaryRight = [
  { label: "Culture", to: "/category/culture" },
  { label: "Lifestyle", to: "/category/lifestyle" },
  { label: "Going Out", to: "/category/going-out" },
  { label: "Comment", to: "/category/comment" },
];
const secondary = [
  "Canada",
  "World",
  "Toronto",
  "Vancouver",
  "Economy",
  "Technology",
  "Media",
  "Opinion",
];

function todayInCanada() {
  try {
    return new Intl.DateTimeFormat("en-CA", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "America/Toronto",
    }).format(new Date());
  } catch {
    return "";
  }
}

export function SiteHeader() {
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const date = todayInCanada();

  return (
    <header className="w-full">
      {/* Utility row */}
      <div className="border-b border-rule bg-paper">
        <div className="es-container flex h-9 items-center justify-between">
          <div className="es-caption hidden sm:flex items-center gap-4">
            <span className="uppercase tracking-[0.06em] font-medium text-ink-soft">
              {date}
            </span>
            <span aria-hidden className="text-rule">|</span>
            <span className="uppercase tracking-[0.06em] font-semibold text-ink">
              Canada Edition
            </span>
          </div>
          <div className="es-caption flex items-center gap-4 ml-auto">
            <button
              type="button"
              className="hover:text-ink"
              aria-label="Search"
            >
              Search
            </button>
            <span aria-hidden className="text-rule hidden sm:inline">|</span>
            <a href="#newsletter" className="hidden sm:inline hover:text-ink">
              Newsletter
            </a>
            <span aria-hidden className="text-rule hidden sm:inline">|</span>
            <a href="#account" className="hidden sm:inline hover:text-ink">
              Sign in
            </a>
          </div>
        </div>
      </div>

      {/* Masthead row */}
      <div className="bg-paper">
        <div className="es-container relative flex items-center justify-between gap-6 py-6 lg:py-10">
          {/* Left nav (desktop) */}
          <nav
            aria-label="Primary left"
            className="hidden lg:flex flex-1 items-center gap-6"
          >
            {primaryLeft.map((n) => (
              <Link
                key={n.label}
                to={n.to as never}
                params={{}}
                className="text-[13px] font-semibold uppercase tracking-[0.06em] font-sans text-ink hover:text-standard-red"
                activeProps={{ style: { color: "var(--color-standard-red)" } }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="lg:hidden text-[12px] font-semibold uppercase tracking-[0.06em] font-sans"
          >
            Menu
          </button>

          {/* Masthead */}
          <Link to="/" className="shrink-0 mx-auto lg:mx-6" aria-label="Evening Standard Canada — home">
            <Masthead />
          </Link>

          <button
            type="button"
            aria-label="Search"
            className="lg:hidden text-[12px] font-semibold uppercase tracking-[0.06em] font-sans"
          >
            Search
          </button>

          {/* Right nav (desktop) */}
          <nav
            aria-label="Primary right"
            className="hidden lg:flex flex-1 items-center justify-end gap-6"
          >
            {primaryRight.map((n) => (
              <Link
                key={n.label}
                to={n.to as never}
                params={{}}
                className="text-[13px] font-semibold uppercase tracking-[0.06em] font-sans text-ink hover:text-standard-red"
                activeProps={{ style: { color: "var(--color-standard-red)" } }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Thin rule + secondary nav */}
        <div className="border-y border-rule">
          <div className="es-container">
            <nav
              aria-label="Secondary"
              className="flex gap-5 overflow-x-auto py-2 text-[12px] font-medium uppercase tracking-[0.06em] font-sans text-ink-soft scrollbar-none"
            >
              {secondary.map((s) => (
                <a key={s} href="#" className="whitespace-nowrap hover:text-ink">
                  {s}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Sticky compact bar */}
      <div
        aria-hidden={!compact}
        className={`fixed inset-x-0 top-0 z-40 border-b border-rule bg-paper transition-transform duration-200 ${
          compact ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="es-container flex h-12 items-center gap-6">
          <Link to="/" className="font-serif text-[18px] font-bold tracking-tight text-ink">
            <span>Evening Standard</span>
            <span className="text-standard-red"> · CA</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 ml-2 text-[12px] font-semibold uppercase tracking-[0.06em] font-sans text-ink-soft">
            {primaryLeft.concat(primaryRight).slice(0, 6).map((n) => (
              <Link key={n.label} to={n.to as never} params={{}} className="hover:text-ink">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.06em] font-sans text-ink-soft">
            <button type="button" className="hover:text-ink" aria-label="Search">Search</button>
            <button type="button" className="hover:text-ink md:hidden" aria-label="Menu">Menu</button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-paper">
          <div className="es-container flex h-14 items-center justify-between border-b border-rule">
            <span className="es-eyebrow">Menu</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="text-[12px] font-semibold uppercase tracking-[0.06em] font-sans"
              aria-label="Close menu"
            >
              Close
            </button>
          </div>
          <nav className="es-container py-6 flex flex-col divide-y divide-rule">
            {primaryLeft.concat(primaryRight).map((n) => (
              <Link
                key={n.label}
                to={n.to as never}
                params={{}}
                onClick={() => setMenuOpen(false)}
                className="py-4 font-serif text-2xl font-bold text-ink"
              >
                {n.label}
              </Link>
            ))}
            <div className="py-4 flex flex-wrap gap-4 text-[12px] font-semibold uppercase tracking-[0.06em] font-sans text-ink-soft">
              {secondary.map((s) => (
                <a key={s} href="#" onClick={() => setMenuOpen(false)}>{s}</a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
