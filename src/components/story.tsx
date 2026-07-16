import type { Story } from "@/content/homepage";

function SectionLabel({ story }: { story: Story }) {
  return (
    <a
      href={story.sectionHref}
      className="es-eyebrow es-eyebrow-red mb-2 inline-block hover:underline"
    >
      {story.kicker ?? story.section}
    </a>
  );
}

function Byline({ story, className = "" }: { story: Story; className?: string }) {
  return (
    <p className={`es-meta mt-3 ${className}`}>
      <span className="text-ink font-semibold">{story.author}</span>
      {story.authorRole ? <span className="text-muted-foreground">, {story.authorRole}</span> : null}
      {story.publishedAt ? <span className="text-muted-foreground"> · {story.publishedAt}</span> : null}
    </p>
  );
}

export function LeadStory({ story }: { story: Story }) {
  return (
    <article className="grid gap-6 lg:grid-cols-12 lg:gap-10">
      {story.image && (
        <a href={story.href} className="es-story-link block lg:col-span-7">
          <figure>
            <img
              src={story.image.src}
              alt={story.image.alt}
              width={1600}
              height={1067}
              className="block w-full aspect-[3/2] object-cover"
            />
            <figcaption className="es-caption mt-2">{story.image.credit}</figcaption>
          </figure>
        </a>
      )}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <SectionLabel story={story} />
        <a href={story.href} className="es-story-link">
          <h1 className="es-h-lead">{story.headline}</h1>
        </a>
        {story.standfirst && (
          <p className="es-standfirst mt-5">{story.standfirst}</p>
        )}
        <Byline story={story} />
      </div>
    </article>
  );
}

export function SupportingLead({ story }: { story: Story }) {
  return (
    <article>
      {story.image && (
        <a href={story.href} className="es-story-link block">
          <figure>
            <img
              src={story.image.src}
              alt={story.image.alt}
              width={1200}
              height={800}
              loading="lazy"
              className="block w-full aspect-[3/2] object-cover"
            />
          </figure>
        </a>
      )}
      <div className="mt-4">
        <SectionLabel story={story} />
        <a href={story.href} className="es-story-link">
          <h2 className="es-h3">{story.headline}</h2>
        </a>
        {story.standfirst && (
          <p className="es-meta font-serif mt-2 text-[16px] leading-[1.45] text-ink-soft">
            {story.standfirst}
          </p>
        )}
        <Byline story={story} />
      </div>
    </article>
  );
}

export function TextStory({ story, showByline = true }: { story: Story; showByline?: boolean }) {
  return (
    <article>
      <SectionLabel story={story} />
      <a href={story.href} className="es-story-link">
        <h3 className="es-h-compact">{story.headline}</h3>
      </a>
      {showByline && <Byline story={story} className="mt-2 text-[13px]" />}
    </article>
  );
}

export function ImageStory({ story }: { story: Story }) {
  return (
    <article>
      {story.image && (
        <a href={story.href} className="es-story-link block mb-3">
          <img
            src={story.image.src}
            alt={story.image.alt}
            width={1200}
            height={800}
            loading="lazy"
            className="block w-full aspect-[3/2] object-cover"
          />
        </a>
      )}
      <SectionLabel story={story} />
      <a href={story.href} className="es-story-link">
        <h3 className="es-h-card">{story.headline}</h3>
      </a>
      {story.standfirst && (
        <p className="mt-2 font-serif text-[15px] leading-[1.5] text-ink-soft">
          {story.standfirst}
        </p>
      )}
      <Byline story={story} className="mt-2 text-[13px]" />
    </article>
  );
}

export function OpinionCard({ story }: { story: Story }) {
  const initials = story.author.split(" ").map((s) => s[0]).slice(0, 2).join("");
  return (
    <article className="flex gap-4">
      <div
        aria-hidden
        className="shrink-0 h-14 w-14 rounded-full bg-ink text-paper flex items-center justify-center font-serif text-[18px] font-bold"
      >
        {initials}
      </div>
      <div className="min-w-0">
        <p className="es-eyebrow es-eyebrow-red mb-1">Comment · {story.kicker ?? story.author}</p>
        <a href={story.href} className="es-story-link">
          <h3 className="es-h-card">{story.headline}</h3>
        </a>
        <p className="es-meta mt-2 text-[13px]">
          {story.authorRole ?? story.author}
          {story.publishedAt ? ` · ${story.publishedAt}` : ""}
        </p>
      </div>
    </article>
  );
}

export function LatestRow({ story }: { story: Story }) {
  return (
    <a href={story.href} className="es-story-link block py-3">
      <span className="es-eyebrow es-eyebrow-red">{story.section}</span>
      <h4 className="es-h-compact mt-1.5">{story.headline}</h4>
      <p className="es-meta mt-1 text-[12px]">{story.publishedAt}</p>
    </a>
  );
}
