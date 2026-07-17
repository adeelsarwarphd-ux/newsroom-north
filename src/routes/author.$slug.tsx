import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NewsletterModule } from "@/components/newsletter-module";
import { TextStory } from "@/components/story";
import { authors, articlesByAuthor } from "@/content/site";
import type { Article, Author } from "@/content/site";
import type { Story } from "@/content/homepage";

export const Route = createFileRoute("/author/$slug")({
  loader: ({ params }) => {
    const author = authors[params.slug];
    if (!author) throw notFound();
    return { author, articles: articlesByAuthor(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Author not found" }, { name: "robots", content: "noindex" }] };
    const { author } = loaderData;
    const title = `${author.name}, ${author.role} — Evening Standard Canada`;
    return {
      meta: [
        { title },
        { name: "description", content: author.bio.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: author.bio.slice(0, 155) },
      ],
      links: [{ rel: "canonical", href: `/author/${author.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: author.name,
            jobTitle: author.role,
            worksFor: { "@type": "NewsMediaOrganization", name: "Evening Standard Canada" },
            description: author.bio,
            url: `/author/${author.slug}`,
          }),
        },
      ],
    };
  },
  component: AuthorPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-paper">
      <SiteHeader />
      <main className="es-container py-24 text-center">
        <h1 className="es-h-article mx-auto">Author not found.</h1>
        <Link to="/" className="mt-8 inline-block border border-ink bg-ink px-6 py-3 font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-paper">Front page</Link>
      </main>
      <SiteFooter />
    </div>
  ),
});

function AuthorPage() {
  const data = Route.useLoaderData() as { author: Author; articles: Article[] };
  const { author, articles: list } = data;
  const initials = author.name.split(" ").map((s: string) => s[0]).slice(0, 2).join("");
  const stories: Story[] = list.map((a: Article) => ({
    slug: a.slug,
    section: a.categoryLabel,
    sectionHref: `/category/${a.category}`,
    kicker: a.kicker,
    headline: a.headline,
    standfirst: a.standfirst,
    author: author.name,
    authorRole: author.role,
    publishedAt: a.published.replace(/^Published\s*/, ""),
    image: a.image,
    href: `/article/${a.slug}`,
  }));

  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />

      <main id="main">
        <section className="es-container pt-8 lg:pt-12">
          <nav className="es-caption mb-6">
            <Link to="/" className="hover:text-ink">Home</Link>
            <span className="mx-2 text-rule">/</span>
            <a href="/authors" className="hover:text-ink">Authors</a>
            <span className="mx-2 text-rule">/</span>
            <span className="text-ink">{author.name}</span>
          </nav>

          <header className="grid gap-8 border-b border-rule pb-10 md:grid-cols-[160px_1fr] md:gap-10">
            <div className="h-40 w-40 rounded-full bg-ink text-paper flex items-center justify-center font-serif text-5xl font-bold">
              {initials}
            </div>
            <div>
              <p className="es-eyebrow es-eyebrow-red mb-3">{author.role}</p>
              <h1 className="es-h-article">{author.name}</h1>
              <p className="es-standfirst mt-5">{author.bio}</p>
              <dl className="mt-6 grid grid-cols-2 gap-y-3 gap-x-8 text-[13px] font-sans max-w-xl">
                <dt className="text-muted-foreground uppercase tracking-[0.06em] text-[11px] font-semibold">Beat</dt>
                <dd className="text-ink"><a href={author.sectionHref} className="hover:underline">{author.section}</a></dd>
                <dt className="text-muted-foreground uppercase tracking-[0.06em] text-[11px] font-semibold">Based in</dt>
                <dd className="text-ink">{author.location}</dd>
                <dt className="text-muted-foreground uppercase tracking-[0.06em] text-[11px] font-semibold">At The Standard</dt>
                <dd className="text-ink">{author.joined}</dd>
                {author.email && (<>
                  <dt className="text-muted-foreground uppercase tracking-[0.06em] text-[11px] font-semibold">Contact</dt>
                  <dd className="text-ink"><a href={`mailto:${author.email}`} className="hover:underline">{author.email}</a></dd>
                </>)}
              </dl>
              {author.expertise.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {author.expertise.map((e) => (
                    <span key={e} className="border border-rule px-3 py-1 text-[11px] font-sans font-semibold uppercase tracking-[0.06em] text-ink-soft">{e}</span>
                  ))}
                </div>
              )}
              {author.social && (
                <div className="mt-6 flex gap-5 text-[12px] font-sans font-semibold uppercase tracking-[0.06em] text-ink-soft">
                  {author.social.map((s) => (
                    <a key={s.label} href={s.href} className="hover:text-ink">{s.label}</a>
                  ))}
                </div>
              )}
            </div>
          </header>

          <section className="mt-14">
            <h2 className="es-section-head"><span>Recent by {author.name}</span></h2>
            {stories.length === 0 ? (
              <p className="es-meta">No published articles yet.</p>
            ) : (
              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {stories.map((s) => (
                  <div key={s.slug} className="border-t border-rule pt-6">
                    <TextStory story={s} />
                  </div>
                ))}
              </div>
            )}
          </section>
        </section>

        <div className="es-container mt-20 lg:mt-28">
          <NewsletterModule />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
