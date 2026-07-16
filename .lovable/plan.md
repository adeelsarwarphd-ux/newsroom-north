This is a large, multi-template redesign. I want to confirm scope and phasing before I start building, because your brief describes a full publication (15+ templates, CMS, ads, SEO, structured data) and this Lovable project currently ships only a placeholder home page. There's no CMS, no article store, and no existing About/Editorial/Corrections/Contact routes in this codebase — the pages you mention live on your production site, not here.

I'll build this as static, front-end-only templates with realistic placeholder editorial content. CMS, real ads, and live news mechanics are out of scope for this pass — I'll leave clean component boundaries so they slot in later.

## Phase 1 — Foundation (this turn)

- Design system in `src/styles.css`: Source Serif 4 + Inter loaded via root head; tokens for editorial black `#111`, charcoal `#242424`, paper white `#FAF9F6`, border grey `#D8D8D8`, secondary grey `#666`, standard red `#C8102E`; square corners, thin rules, no shadows/gradients.
- Typography scale exactly per spec (H1 54–64, article H1 48–58, H2 30–34, body 19/1.65, standfirst 22–24, labels 12–13 uppercase Inter 0.06em).
- 12-col grid, 1360 max width, 24 gutters, 64–88 section rhythm.
- Root `__root.tsx`: real title/description/OG, Source Serif + Inter `<link>` tags, semantic layout.
- Site chrome: `SiteHeader` (utility row w/ date + "Canada Edition" + search/newsletter, centered masthead wordmark w/ subtle maple leaf, split nav News/Politics/Business/Sport | Culture/Lifestyle/Going Out/Comment, thin rule, sticky compact variant on scroll) and `SiteFooter` (Publication / Sections / Newsroom / Company / Legal columns per spec, dark).
- Homepage rebuilt as edited hierarchy: breaking strip (conditional), lead story (large image, oversized serif H1, standfirst), 2 supporting leads, Latest vertical feed, From Canada, Politics, Business & Economy, Comment (opinion cards w/ author headshots), Culture, Sport, Lifestyle & Going Out, numbered Most Read, newsletter module. Mixed module types — not a card grid.

## Phase 2 — Article + category + author

- `/article/$slug` — breadcrumbs, section label, article H1, standfirst, byline w/ role + published/updated + reading time, share tools, hero w/ caption + credit, narrow 680–740 reading column w/ serif 19/1.65, pull quotes, fact box, related-story block, correction notice component, tags, author bio, more-from-author, related stories, newsletter. Analysis and Opinion variants via prop (Opinion adds larger author presentation + disclaimer).
- `/category/$slug` — category H1 + intro, featured lead, supporting stories, subcategory nav, latest list, most read, pagination, newsletter. Templates cover News/Politics/Business/Sport/Culture/Lifestyle/Going Out/Homes/Comment.
- `/author/$slug` — headshot, name, role, bio, expertise, joined date, socials, recent + most-read articles, related corrections.
- `/authors` — searchable directory with section filter.
- `/newsroom` — mission, ownership, editor-in-chief, section editors, reporters, contributors, contact, tip submission, corrections process, editorial + AI policy links, commercial independence.

## Phase 3 — Institutional + polish

- `/about`, `/editorial-policy`, `/corrections`, `/contact`, `/privacy`, `/cookies`, `/terms`, `/advertising`, `/accessibility`, `/newsletter`, `/submit-tip`, `/search`, custom 404.
- Reusable component library extracted: LeadStory, StoryCard, CompactStory, TextStory, NumberedList, LatestFeed, OpinionCard, AuthorCard, BreakingBanner, LiveIndicator, PullQuote, FactBox, Timeline, KeyPoints, RelatedBlock, NewsletterModule, CorrectionNotice, SponsoredNotice, AdSlot (reserved dimensions).
- SEO: per-route head with title/description/OG/twitter, canonical + og:url self-referencing, NewsArticle / Person / Organization / BreadcrumbList JSON-LD on the right routes, sitemap.xml server route, robots.txt.

## Technical notes

- Static content: I'll create `src/content/` with typed fixtures (articles, authors, categories) so templates render meaningfully without a backend. Swappable for CMS later.
- No Lovable Cloud this pass — you didn't ask for auth/DB and CMS integration is out of scope.
- Logo: your brief says use the supplied masthead SVG, but none is attached. I'll build a restrained wordmark ("Evening Standard" in Source Serif with a small "CANADA" eyebrow and subtle maple leaf glyph) and leave a clean swap point when you provide the asset.
- Ads: reserved `<AdSlot>` containers with fixed dimensions and clear "Advertisement" labels, no real ad scripts.

## What I need from you

1. Confirm Phase 1 scope is what you want this turn (foundation + homepage). I'd rather ship Phase 1 well than half-build all three phases.
2. Confirm placeholder editorial content is fine, or send real headlines/authors you want on the home page.
3. Confirm no masthead SVG is coming — I'll build the wordmark version.

Reply "go" (or with adjustments) and I'll start on Phase 1.