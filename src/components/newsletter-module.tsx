export function NewsletterModule() {
  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="border-y-2 border-ink py-12 lg:py-16"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="max-w-[52ch]">
          <p className="es-eyebrow es-eyebrow-red mb-3">The Standard Briefing</p>
          <h2 id="newsletter-heading" className="es-h2">
            The day's Canadian journalism, edited by our newsroom and delivered before breakfast.
          </h2>
          <p className="es-standfirst mt-4 text-[18px] lg:text-[19px]">
            Free. One email a day. No filler. Written by the same editors who shape the paper.
          </p>
        </div>
        <form
          className="flex flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Newsletter sign-up"
        >
          <label htmlFor="hp-email" className="sr-only">Email address</label>
          <input
            id="hp-email"
            type="email"
            required
            placeholder="Your email address"
            className="flex-1 border border-ink bg-paper px-4 py-3 font-sans text-[15px] text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ink"
          />
          <button
            type="submit"
            className="bg-ink px-6 py-3 font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-paper hover:bg-standard-red"
          >
            Sign up free
          </button>
        </form>
      </div>
    </section>
  );
}
