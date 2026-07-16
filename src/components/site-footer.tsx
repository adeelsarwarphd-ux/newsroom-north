const columns = [
  {
    heading: "The Standard",
    body: "Evening Standard Canada is an independent national newsroom, publishing reporting, analysis and comment on Canadian public life from Ottawa, Toronto, Vancouver and beyond.",
    links: [
      { label: "About", href: "/about" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Sections",
    links: [
      { label: "News", href: "/category/news" },
      { label: "Politics", href: "/category/politics" },
      { label: "Business", href: "/category/business" },
      { label: "Sport", href: "/category/sport" },
      { label: "Culture", href: "/category/culture" },
      { label: "Lifestyle", href: "/category/lifestyle" },
      { label: "Going Out", href: "/category/going-out" },
      { label: "Homes", href: "/category/homes" },
      { label: "Comment", href: "/category/comment" },
    ],
  },
  {
    heading: "Newsroom",
    links: [
      { label: "Editorial team", href: "/newsroom#team" },
      { label: "All authors", href: "/authors" },
      { label: "Contributors", href: "/newsroom#contributors" },
      { label: "Editorial policy", href: "/editorial-policy" },
      { label: "Corrections", href: "/corrections" },
      { label: "Submit a story or tip", href: "/submit-tip" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About the publisher", href: "/about" },
      { label: "Ownership", href: "/about#ownership" },
      { label: "Advertising", href: "/advertising" },
      { label: "Careers", href: "/careers" },
      { label: "Syndication", href: "/syndication" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of use", href: "/terms" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Cookie policy", href: "/cookies" },
      { label: "Promotion rules", href: "/promotions" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="dark bg-background text-foreground mt-16 lg:mt-24">
      <div className="es-container py-14 lg:py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {columns.map((col, i) => (
            <div key={col.heading} className={i === 0 ? "col-span-2 md:col-span-3 lg:col-span-2" : ""}>
              <h4 className="es-eyebrow text-foreground mb-4">{col.heading}</h4>
              {"body" in col && col.body ? (
                <p className="text-[15px] leading-[1.55] text-muted-foreground max-w-[42ch] mb-4 font-serif">
                  {col.body}
                </p>
              ) : null}
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="font-sans text-[14px] text-muted-foreground hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              {i === 0 && (
                <form
                  className="mt-6 flex max-w-sm gap-0 border border-rule"
                  onSubmit={(e) => e.preventDefault()}
                  aria-label="Newsletter sign-up"
                >
                  <label htmlFor="footer-email" className="sr-only">Email address</label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    placeholder="Your email address"
                    className="flex-1 bg-transparent px-3 py-2.5 font-sans text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-foreground text-background px-4 font-sans text-[12px] font-semibold uppercase tracking-[0.08em]"
                  >
                    Sign up
                  </button>
                </form>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="es-container flex flex-col-reverse gap-3 py-5 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-[12px] text-muted-foreground">
            © {new Date().getFullYear()} Evening Standard Canada. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4 font-sans text-[12px] text-muted-foreground">
            <li><a href="/terms" className="hover:text-foreground">Terms</a></li>
            <li><a href="/privacy" className="hover:text-foreground">Privacy</a></li>
            <li><a href="/cookies" className="hover:text-foreground">Cookies</a></li>
            <li><a href="/accessibility" className="hover:text-foreground">Accessibility</a></li>
            <li><a href="/contact" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
