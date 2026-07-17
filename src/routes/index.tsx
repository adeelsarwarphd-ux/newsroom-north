import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BreakingBanner } from "@/components/breaking-banner";
import { NewsletterModule } from "@/components/newsletter-module";
import { AdSlot } from "@/components/ad-slot";
import {
  LeadStory,
  SupportingLead,
  TextStory,
  ImageStory,
  OpinionCard,
  LatestRow,
} from "@/components/story";
import {
  breaking,
  lead,
  supportingLeads,
  latest,
  fromCanada,
  opinion,
  culture,
  sport,
  mostRead,
} from "@/content/homepage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evening Standard Canada — Front page" },
      {
        name: "description",
        content:
          "The day's Canadian news, politics, business, sport, culture and comment — edited by our national newsroom.",
      },
      { property: "og:title", content: "Evening Standard Canada — Front page" },
      {
        property: "og:description",
        content:
          "The day's Canadian news, politics, business, sport, culture and comment — edited by our national newsroom.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function SectionHead({ title, more }: { title: string; more?: string }) {
  return (
    <h2 className="es-section-head">
      <span>{title}</span>
      {more && (
        <a href={more} className="es-section-more font-sans hover:text-ink">
          See all →
        </a>
      )}
    </h2>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-paper">
      {breaking && <BreakingBanner {...breaking} />}
      <SiteHeader />

      <main id="main">
        {/* Lead + supporting */}
        <section className="es-container pt-8 lg:pt-12">
          <LeadStory story={lead} />

          <hr className="es-rule my-10 lg:my-14" />

          <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
            {supportingLeads.map((s) => (
              <SupportingLead key={s.slug} story={s} />
            ))}
          </div>
        </section>

        <div className="es-container mt-14 lg:mt-20">
          <AdSlot size="leaderboard" />
        </div>

        {/* Latest + From Canada */}
        <section className="es-container mt-16 lg:mt-24 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead title="Latest" more="/latest" />
            <div className="divide-y divide-rule border-t border-b border-rule">
              {latest.map((s) => (
                <LatestRow key={s.slug} story={s} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <SectionHead title="From Canada" more="/category/canada" />
            <div className="grid gap-10 md:grid-cols-2">
              {/* Lead of From Canada — image-led */}
              <div className="md:col-span-2">
                <ImageStory story={fromCanada[0]} />
              </div>
              {fromCanada.slice(1).map((s) => (
                <div key={s.slug} className="border-t border-rule pt-6">
                  <TextStory story={s} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comment */}
        <section className="es-container mt-20 lg:mt-28">
          <SectionHead title="Comment" more="/category/comment" />
          <div className="grid gap-10 md:grid-cols-3">
            {opinion.map((s) => (
              <OpinionCard key={s.slug} story={s} />
            ))}
          </div>
        </section>

        <div className="es-container mt-16 lg:mt-24">
          <AdSlot size="billboard" />
        </div>

        {/* Culture */}
        <section className="es-container mt-20 lg:mt-28">
          <SectionHead title="Culture" more="/category/culture" />
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <ImageStory story={culture[0]} />
            </div>
            <div className="lg:col-span-5 divide-y divide-rule">
              {culture.slice(1).map((s) => (
                <div key={s.slug} className="py-5 first:pt-0 last:pb-0">
                  <TextStory story={s} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sport */}
        <section className="es-container mt-20 lg:mt-28">
          <SectionHead title="Sport" more="/category/sport" />
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <ImageStory story={sport[0]} />
            </div>
            <div className="lg:col-span-5 divide-y divide-rule">
              {sport.slice(1).map((s) => (
                <div key={s.slug} className="py-5 first:pt-0 last:pb-0">
                  <TextStory story={s} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Most read */}
        <section className="es-container mt-20 lg:mt-28">
          <SectionHead title="Most read" />
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {mostRead.map((s, i) => (
              <li key={s.slug} className="border-t-2 border-ink pt-4">
                <div className="flex items-start gap-4">
                  <span className="font-serif text-[44px] font-bold leading-none text-standard-red">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="es-eyebrow text-ink-soft mb-1.5">{s.section}</p>
                    <a href={s.href} className="es-story-link">
                      <h3 className="es-h-compact">{s.headline}</h3>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Newsletter */}
        <div className="es-container mt-20 lg:mt-28">
          <NewsletterModule />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
