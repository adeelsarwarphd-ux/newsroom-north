import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NewsletterModule } from "@/components/newsletter-module";
import { AdSlot } from "@/components/ad-slot";
import { TextStory } from "@/components/story";
import { articles, authors, categories, articlesByCategory } from "@/content/site";
import type { Article, ArticleBlock, Author, Category } from "@/content/site";
import type { Story } from "@/content/homepage";

export const Route = createFileRoute("/article/$slug")({
  loader: ({ params }) => {
    const article = articles[params.slug];
    if (!article) throw notFound();
    const author = authors[article.authorSlug];
    const category = categories[article.category];
    const related = articlesByCategory(article.category)
      .filter((a) => a.slug !== article.slug)
      .slice(0, 3);
    return { article, author, category, related };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    const { article, author } = loaderData;
    const title = `${article.headline} — Evening Standard Canada`;
    return {
      meta: [
        { title },
        { name: "description", content: article.standfirst },
        { property: "og:title", content: article.headline },
        { property: "og:description", content: article.standfirst },
        { property: "og:type", content: "article" },
        { property: "og:image", content: article.image.src },
        { name: "twitter:image", content: article.image.src },
        { name: "author", content: author?.name ?? "The Standard" },
        { property: "article:author", content: author?.name ?? "The Standard" },
        { property: "article:section", content: article.categoryLabel },
      ],
      links: [{ rel: "canonical", href: `/article/${article.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: article.headline,
            description: article.standfirst,
            image: [article.image.src],
            datePublished: article.published,
            dateModified: article.updated ?? article.published,
            author: author ? { "@type": "Person", name: author.name, url: `/author/${author.slug}` } : undefined,
            publisher: {
              "@type": "NewsMediaOrganization",
              name: "Evening Standard Canada",
            },
            articleSection: article.categoryLabel,
            keywords: article.tags.join(", "),
          }),
        },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-paper">
      <SiteHeader />
      <main className="es-container py-24 text-center">
        <p className="es-eyebrow es-eyebrow-red mb-4">Not found</p>
        <h1 className="es-h-article mx-auto">This article isn't available.</h1>
        <p className="es-standfirst mt-6 mx-auto">It may have been retired, moved, or the link may be wrong.</p>
        <Link to="/" className="mt-8 inline-block border border-ink bg-ink px-6 py-3 font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-paper">Front page</Link>
      </main>
      <SiteFooter />
    </div>
  ),
});

function ArticlePage() {
  const data = Route.useLoaderData() as { article: Article; author: Author | undefined; category: Category | undefined; related: Article[] };
  const { article, author, category, related } = data;
  const initials = author?.name.split(" ").map((s: string) => s[0]).slice(0, 2).join("") ?? "TS";

  const relatedStories: Story[] = related.map((a: Article) => {
    const au = authors[a.authorSlug];
    return {
      slug: a.slug,
      section: a.categoryLabel,
      sectionHref: `/category/${a.category}`,
      kicker: a.kicker,
      headline: a.headline,
      standfirst: a.standfirst,
      author: au?.name ?? "Staff",
      authorRole: au?.role,
      publishedAt: a.published.replace(/^Published\s*/, ""),
      image: a.image,
      href: `/article/${a.slug}`,
    };
  });

  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />

      <main id="main">
        <article>
          {/* Header */}
          <div className="es-container pt-8 lg:pt-12">
            <nav className="es-caption mb-6">
              <Link to="/" className="hover:text-ink">Home</Link>
              <span className="mx-2 text-rule">/</span>
              {category ? (
                <a href={`/category/${category.slug}`} className="hover:text-ink">{category.label}</a>
              ) : (
                <span>{article.categoryLabel}</span>
              )}
              <span className="mx-2 text-rule">/</span>
              <span className="text-ink">{article.kicker ?? article.categoryLabel}</span>
            </nav>

            <div className="mx-auto max-w-[820px]">
              <p className="es-eyebrow es-eyebrow-red mb-4">{article.kicker ?? article.categoryLabel}</p>
              <h1 className="es-h-article">{article.headline}</h1>
              <p className="es-standfirst mt-6">{article.standfirst}</p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-rule py-5">
                {author && (
                  <a href={`/author/${author.slug}`} className="flex items-center gap-3 hover:opacity-80">
                    <span aria-hidden className="h-10 w-10 rounded-full bg-ink text-paper flex items-center justify-center font-serif text-[14px] font-bold">
                      {initials}
                    </span>
                    <span>
                      <span className="block text-[14px] font-sans font-semibold text-ink">{author.name}</span>
                      <span className="block es-caption">{author.role}</span>
                    </span>
                  </a>
                )}
                <div className="es-caption">
                  <div>{article.published}</div>
                  {article.updated && <div>{article.updated}</div>}
                  <div>{article.readingMinutes} min read</div>
                </div>
                <div className="ml-auto flex gap-4 text-[12px] font-sans font-semibold uppercase tracking-[0.06em] text-ink-soft">
                  <button type="button" className="hover:text-ink">Share</button>
                  <button type="button" className="hover:text-ink">Save</button>
                  <button type="button" className="hover:text-ink">Print</button>
                </div>
              </div>
            </div>
          </div>

          {/* Hero */}
          <div className="es-container mt-10">
            <figure className="mx-auto max-w-[1100px]">
              <img
                src={article.image.src}
                alt={article.image.alt}
                width={2000}
                height={1333}
                className="block w-full aspect-[3/2] object-cover"
              />
              <figcaption className="es-caption mt-3 max-w-[820px]">
                {article.image.alt} <span className="text-ink-soft">·</span> {article.image.credit}
              </figcaption>
            </figure>
          </div>

          {/* Body */}
          <div className="es-container mt-12 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-start-3 lg:col-span-8">
              {article.correction && (
                <aside className="mb-8 border-l-4 border-standard-red bg-[color-mix(in_oklab,var(--color-standard-red)_6%,transparent)] p-5">
                  <p className="es-eyebrow es-eyebrow-red mb-2">Correction</p>
                  <p className="font-serif text-[16px] leading-[1.5] text-ink">{article.correction}</p>
                </aside>
              )}

              <div className="es-prose mx-auto max-w-[720px]">
                {article.body.map((block, i) => {
                  if (block.type === "p") return <p key={i}>{block.text}</p>;
                  if (block.type === "h2") return <h2 key={i} className="es-h2 mt-10 mb-4">{block.text}</h2>;
                  if (block.type === "quote") return (
                    <blockquote key={i} className="my-10 border-l-2 border-ink pl-6">
                      <p className="font-serif text-[24px] leading-[1.3] text-ink italic">"{block.text}"</p>
                      {block.cite && <cite className="es-caption mt-3 not-italic block">— {block.cite}</cite>}
                    </blockquote>
                  );
                  if (block.type === "keypoints") return (
                    <aside key={i} className="my-10 border border-rule p-6">
                      <p className="es-eyebrow mb-4">Key points</p>
                      <ul className="space-y-2 font-serif text-[17px] leading-[1.4]">
                        {block.items.map((it, j) => (
                          <li key={j} className="flex gap-3"><span aria-hidden className="text-standard-red">■</span><span>{it}</span></li>
                        ))}
                      </ul>
                    </aside>
                  );
                  return null;
                })}
              </div>

              {/* Tags */}
              <div className="mx-auto max-w-[720px] mt-12 flex flex-wrap gap-2">
                {article.tags.map((t) => (
                  <a key={t} href="#" className="border border-rule px-3 py-1 text-[11px] font-sans font-semibold uppercase tracking-[0.06em] text-ink-soft hover:border-ink hover:text-ink">
                    {t}
                  </a>
                ))}
              </div>

              {/* Author bio */}
              {author && (
                <aside className="mx-auto max-w-[720px] mt-14 border-t border-rule pt-8 flex gap-5">
                  <span aria-hidden className="shrink-0 h-16 w-16 rounded-full bg-ink text-paper flex items-center justify-center font-serif text-[20px] font-bold">
                    {initials}
                  </span>
                  <div>
                    <p className="es-eyebrow mb-1">About the author</p>
                    <h3 className="es-h-card"><a href={`/author/${author.slug}`} className="hover:underline">{author.name}</a></h3>
                    <p className="es-caption mt-1">{author.role} · {author.location}</p>
                    <p className="mt-3 font-serif text-[16px] leading-[1.5] text-ink-soft">{author.bio}</p>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </article>

        <div className="es-container mt-16 lg:mt-24">
          <AdSlot size="billboard" />
        </div>

        {relatedStories.length > 0 && (
          <section className="es-container mt-16 lg:mt-24">
            <h2 className="es-section-head"><span>More from {article.categoryLabel}</span></h2>
            <div className="grid gap-10 md:grid-cols-3">
              {relatedStories.map((s) => (
                <div key={s.slug} className="border-t border-rule pt-6">
                  <TextStory story={s} />
                </div>
              ))}
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
