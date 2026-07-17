import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NewsletterModule } from "@/components/newsletter-module";
import { AdSlot } from "@/components/ad-slot";
import { SupportingLead, TextStory, LatestRow } from "@/components/story";
import { categories, articles, articlesByCategory, authors } from "@/content/site";
import type { Article } from "@/content/site";
import type { Story } from "@/content/homepage";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const cat = categories[params.slug];
    if (!cat) throw notFound();
    const list = articlesByCategory(params.slug);
    if (list.length === 0) throw notFound();
    return { cat, list };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Section not found — Evening Standard Canada" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.cat.label} — Evening Standard Canada`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.cat.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.cat.intro },
      ],
      links: [{ rel: "canonical", href: `/category/${loaderData.cat.slug}` }],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-paper">
      <SiteHeader />
      <main className="es-container py-24 text-center">
        <p className="es-eyebrow es-eyebrow-red mb-4">Section</p>
        <h1 className="es-h-article mx-auto">This section is not published yet.</h1>
        <p className="es-standfirst mt-6 mx-auto">Try the front page or another section from the main navigation.</p>
        <Link to="/" className="mt-8 inline-block border border-ink bg-ink px-6 py-3 font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-paper">Front page</Link>
      </main>
      <SiteFooter />
    </div>
  ),
});

function toStory(a: (typeof articles)[string]): Story {
  const author = authors[a.authorSlug];
  return {
    slug: a.slug,
    section: a.categoryLabel,
    sectionHref: `/category/${a.category}`,
    kicker: a.kicker,
    headline: a.headline,
    standfirst: a.standfirst,
    author: author?.name ?? "Staff",
    authorRole: author?.role,
    publishedAt: a.published.replace(/^Published\s*/, ""),
    image: a.image,
    href: `/article/${a.slug}`,
  };
}

function CategoryPage() {
  const data = Route.useLoaderData() as { cat: (typeof import("@/content/site").categories)[string]; list: Article[] };
  const { cat, list } = data;
  const [featured, ...rest] = list;
  const featStory = toStory(featured);
  const supporting: Story[] = rest.slice(0, 4).map(toStory);
  const feed: Story[] = rest.slice(4).map(toStory);

  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />

      <main id="main">
        <section className="es-container pt-8 lg:pt-12">
          <nav className="es-caption mb-6">
            <Link to="/" className="hover:text-ink">Home</Link>
            <span className="mx-2 text-rule">/</span>
            <span className="text-ink">{cat.label}</span>
          </nav>

          <header className="border-b border-rule pb-8">
            <p className="es-eyebrow es-eyebrow-red mb-3">Section</p>
            <h1 className="es-h-article">{cat.label}</h1>
            <p className="es-standfirst mt-5">{cat.intro}</p>
            <nav aria-label="Subsections" className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[12px] font-semibold uppercase tracking-[0.06em] font-sans text-ink-soft">
              {cat.subsections.map((s) => (
                <a key={s.label} href={s.href} className="hover:text-ink">{s.label}</a>
              ))}
            </nav>
          </header>

          {/* Featured + supporting */}
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <SupportingLead story={featStory} />
            </div>
            <aside className="lg:col-span-4">
              <h2 className="es-section-head"><span>Latest in {cat.label}</span></h2>
              <div className="divide-y divide-rule border-t border-b border-rule">
                {supporting.slice(0, 4).map((s) => (
                  <LatestRow key={s.slug} story={s} />
                ))}
              </div>
            </aside>
          </div>

          <hr className="es-rule my-14" />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {supporting.map((s) => (
              <div key={s.slug} className="border-t border-rule pt-6">
                <TextStory story={s} />
              </div>
            ))}
          </div>
        </section>

        <div className="es-container mt-16 lg:mt-24">
          <AdSlot size="leaderboard" />
        </div>

        {feed.length > 0 && (
          <section className="es-container mt-16 lg:mt-24">
            <h2 className="es-section-head"><span>More {cat.label}</span></h2>
            <div className="divide-y divide-rule border-t border-b border-rule">
              {feed.map((s) => <LatestRow key={s.slug} story={s} />)}
            </div>
          </section>
        )}

        <div className="es-container mt-20 lg:mt-28">
          <NewsletterModule />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
