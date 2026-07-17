import leadParliament from "@/assets/lead-parliament.jpg";
import storyToronto from "@/assets/story-toronto.jpg";
import storyPipeline from "@/assets/story-pipeline.jpg";
import storyHousing from "@/assets/story-housing.jpg";
import storyCulture from "@/assets/story-culture.jpg";
import storySport from "@/assets/story-sport.jpg";

export type Author = {
  slug: string;
  name: string;
  role: string;
  section: string;
  sectionHref: string;
  bio: string;
  expertise: string[];
  joined: string;
  location: string;
  email?: string;
  social?: { label: string; href: string }[];
};

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "keypoints"; items: string[] };

export type Article = {
  slug: string;
  category: string; // category slug
  categoryLabel: string;
  kicker?: string;
  headline: string;
  standfirst: string;
  authorSlug: string;
  published: string;
  updated?: string;
  readingMinutes: number;
  image: { src: string; alt: string; credit: string };
  body: ArticleBlock[];
  tags: string[];
  correction?: string;
};

export type Category = {
  slug: string;
  label: string;
  intro: string;
  subsections: { label: string; href: string }[];
};

// -------- Authors --------
export const authors: Record<string, Author> = {
  "james-okafor": {
    slug: "james-okafor",
    name: "James Okafor",
    role: "Business Editor",
    section: "Business",
    sectionHref: "/category/business",
    bio: "James Okafor covers Canadian business, monetary policy and the resource economy. Before joining The Standard he was a senior correspondent at the Globe and Mail and a policy analyst at the C.D. Howe Institute. He writes a weekly column on the Bank of Canada.",
    expertise: ["Monetary policy", "Banking", "Energy markets", "Corporate Canada"],
    joined: "Joined The Standard in 2023",
    location: "Toronto",
    email: "james.okafor@standard.ca",
    social: [
      { label: "X", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Bluesky", href: "#" },
    ],
  },
  "eleanor-whitfield": {
    slug: "eleanor-whitfield",
    name: "Eleanor Whitfield",
    role: "Ottawa Bureau Chief",
    section: "Politics",
    sectionHref: "/category/politics",
    bio: "Eleanor Whitfield leads The Standard's political coverage from Parliament Hill. She has reported on five federal elections and two minority governments.",
    expertise: ["Federal politics", "Cabinet", "Elections"],
    joined: "Joined The Standard in 2022",
    location: "Ottawa",
  },
  "priya-ramanathan": {
    slug: "priya-ramanathan",
    name: "Priya Ramanathan",
    role: "Senior Business Correspondent",
    section: "Business",
    sectionHref: "/category/business",
    bio: "Priya Ramanathan writes on Bay Street, financial markets and the changing face of Canadian capitalism.",
    expertise: ["Capital markets", "Banks", "Deals"],
    joined: "Joined The Standard in 2024",
    location: "Toronto",
  },
};

// -------- Categories --------
export const categories: Record<string, Category> = {
  business: {
    slug: "business",
    label: "Business & Economy",
    intro:
      "Reporting and analysis on the Canadian economy, corporate life, banking, energy and the markets — edited by James Okafor from Toronto.",
    subsections: [
      { label: "Markets", href: "#" },
      { label: "Banking", href: "#" },
      { label: "Energy", href: "#" },
      { label: "Deals", href: "#" },
      { label: "Economy", href: "#" },
      { label: "Technology", href: "#" },
    ],
  },
  politics: {
    slug: "politics",
    label: "Politics",
    intro:
      "The federal beat, the provinces, and the mechanics of power — from The Standard's Ottawa bureau.",
    subsections: [
      { label: "Ottawa", href: "#" },
      { label: "Provinces", href: "#" },
      { label: "Elections", href: "#" },
      { label: "Foreign affairs", href: "#" },
    ],
  },
};

// -------- Articles --------
export const articles: Record<string, Article> = {
  "bank-of-canada-holds-rate": {
    slug: "bank-of-canada-holds-rate",
    category: "business",
    categoryLabel: "Business",
    kicker: "Monetary policy",
    headline:
      "Bank of Canada holds key rate at 3.25% as governor signals a pause into spring",
    standfirst:
      "Tiff Macklem said the door was 'not closed' on further easing, but that the central bank now wanted 'to see the winter out' before making its next move — a shift markets read as a firm hold.",
    authorSlug: "james-okafor",
    published: "Published 14 November 2026, 10:04 EST",
    updated: "Updated 14 November 2026, 14:12 EST",
    readingMinutes: 6,
    image: {
      src: leadParliament,
      alt: "The Bank of Canada building in Ottawa on a grey autumn morning.",
      credit: "Photograph: Marie-Claire Beaulieu / The Standard",
    },
    body: [
      { type: "p", text: "The Bank of Canada left its overnight rate unchanged at 3.25 per cent on Wednesday, ending a run of three consecutive cuts and signalling that a fragile balance between weakening growth and stubborn services inflation now argues for patience rather than fresh action." },
      { type: "p", text: "In a statement that struck a noticeably more cautious tone than October's, the governing council said the risks to its two-per-cent inflation target had become 'more evenly balanced'. Rate-sensitive parts of the economy — housing, autos, big-ticket retail — were beginning to respond to earlier easing, it said, but a still-tight labour market and rising rental costs meant underlying price pressure had not yet decisively broken." },
      { type: "keypoints", items: [
        "Overnight rate held at 3.25 per cent, in line with market expectations",
        "Governor signals hold likely to continue 'into the spring'",
        "Q3 GDP tracking at 1.4 per cent, below the Bank's own forecast",
        "Core inflation eased to 2.4 per cent in September",
      ]},
      { type: "h2", text: "'We want to see the winter out'" },
      { type: "p", text: "Speaking at a press conference in Ottawa, governor Tiff Macklem said the Bank was 'not closing the door' on additional cuts, but wanted 'to see the winter out' before assessing whether more support was needed. It was, he said, 'a time to be patient — not passive'." },
      { type: "quote", text: "We have made real progress on inflation. We do not want to squander it by moving too soon or too far.", cite: "Tiff Macklem, Governor, Bank of Canada" },
      { type: "p", text: "The decision was broadly anticipated by the market. Overnight index swaps had priced roughly an 85 per cent probability of a hold going into the meeting. But the Bank's guidance was firmer than several forecasters had expected, and the Canadian dollar strengthened by half a cent against the US dollar within minutes of the release." },
      { type: "h2", text: "A slower economy, but not a stalling one" },
      { type: "p", text: "The Bank's own updated projections, published alongside the decision, trim its 2026 growth outlook to 1.6 per cent from 1.8 in July. Business investment is now expected to be 'broadly flat' through the first half of next year, and household consumption is projected to grow by just 1.1 per cent — the weakest annual pace since 2020." },
      { type: "p", text: "Even so, the Bank stopped well short of forecasting a recession. 'The economy is slowing, but it is not stalling,' Mr Macklem said. 'That distinction matters for the path of policy.'" },
      { type: "h2", text: "What Ottawa is watching" },
      { type: "p", text: "For the Carney government, the hold removes one immediate political risk — a further cut would have carried the awkward implication of an economy the finance department is publicly describing as 'resilient' needing yet more support — but it also caps how much lift monetary policy can give a fiscal update expected in three weeks." },
      { type: "p", text: "Officials briefed on the Bank's thinking said the governing council remained particularly focused on shelter costs and on wage growth in the services sector, both of which would need to soften further before another cut could be justified." },
    ],
    tags: ["Bank of Canada", "Monetary policy", "Tiff Macklem", "Inflation", "Interest rates"],
  },
  "tmx-pipeline-review": {
    slug: "tmx-pipeline-review",
    category: "business",
    categoryLabel: "Business",
    kicker: "Energy",
    headline:
      "Ottawa orders a fresh environmental review of the Trans Mountain expansion",
    standfirst:
      "Cabinet's decision follows two years of legal challenges and a rare joint intervention from three First Nations.",
    authorSlug: "james-okafor",
    published: "Published 13 November 2026, 08:20 EST",
    readingMinutes: 5,
    image: {
      src: storyPipeline,
      alt: "Aerial view of a pipeline crossing autumn boreal forest.",
      credit: "Photograph: Sebastien Roy / The Standard",
    },
    body: [
      { type: "p", text: "The federal cabinet on Tuesday ordered a fresh environmental assessment of key segments of the Trans Mountain expansion, in a decision that will delay any resumption of construction on contested sections by at least a year." },
      { type: "p", text: "The move, which had been signalled at cabinet earlier in the month, followed sustained pressure from three First Nations in British Columbia's interior and a Federal Court ruling in September that found consultation gaps in two of the pipeline's five reviewed segments." },
      { type: "h2", text: "A political calculation" },
      { type: "p", text: "For the Carney government, the review is both a legal necessity and a political calculation: a way of signalling seriousness on consultation without cancelling the project outright — a step the Prime Minister has said publicly he does not intend to take." },
    ],
    tags: ["Trans Mountain", "Energy", "First Nations", "Regulation"],
    correction: "An earlier version of this article said the review would delay construction by three years. Cabinet's order specifies a minimum delay of one year. The article was corrected on 13 November 2026.",
  },
  "bay-street-leaner-2026": {
    slug: "bay-street-leaner-2026",
    category: "business",
    categoryLabel: "Business",
    kicker: "Analysis",
    headline: "Inside the Bay Street firms quietly preparing for a leaner 2026",
    standfirst:
      "Hiring freezes, quieter trading floors and a wave of early retirements are reshaping Canada's financial capital.",
    authorSlug: "priya-ramanathan",
    published: "Published 12 November 2026",
    readingMinutes: 8,
    image: {
      src: storyToronto,
      alt: "Toronto skyline emerging from winter fog.",
      credit: "Photograph: Daniel Cheng / The Standard",
    },
    body: [
      { type: "p", text: "For most of the last decade, Bay Street's problem was that it could not hire fast enough. That is no longer the problem." },
      { type: "p", text: "Interviews with senior executives at four of Canada's five biggest banks, two mid-size dealers and three law firms paint a consistent picture: a financial capital preparing, without saying so publicly, for a materially leaner 2026." },
    ],
    tags: ["Bay Street", "Banks", "Capital markets"],
  },
  "loblaw-margin": {
    slug: "loblaw-margin",
    category: "business",
    categoryLabel: "Business",
    kicker: "Retail",
    headline:
      "Loblaw posts a slimmer margin, blaming a colder autumn and softer discretionary spending",
    standfirst:
      "The country's largest grocer said gross margin narrowed by 40 basis points in the quarter, the sharpest compression since 2022.",
    authorSlug: "james-okafor",
    published: "Published 11 November 2026",
    readingMinutes: 4,
    image: {
      src: storyHousing,
      alt: "Loblaw storefront in suburban Ontario.",
      credit: "Photograph: The Standard",
    },
    body: [
      { type: "p", text: "Loblaw Companies reported third-quarter earnings on Wednesday that undershot analyst expectations on the bottom line, with the country's largest grocer citing a colder-than-usual autumn and softer spending on higher-margin discretionary categories." },
    ],
    tags: ["Loblaw", "Retail", "Consumer"],
  },
  "shopify-ottawa-ai": {
    slug: "shopify-ottawa-ai",
    category: "business",
    categoryLabel: "Technology",
    kicker: "Technology",
    headline: "Shopify quietly moves its enterprise AI team to Ottawa, adding 220 jobs",
    standfirst:
      "The relocation, first flagged in an internal memo obtained by The Standard, is the largest single expansion of the company's Ottawa footprint since 2021.",
    authorSlug: "priya-ramanathan",
    published: "Published 10 November 2026",
    readingMinutes: 5,
    image: {
      src: storyCulture,
      alt: "Shopify office building in Ottawa.",
      credit: "Photograph: The Standard",
    },
    body: [
      { type: "p", text: "Shopify is relocating its enterprise AI engineering team to Ottawa, adding roughly 220 jobs to the capital and consolidating what has become the company's most strategically important product group in a single building." },
    ],
    tags: ["Shopify", "Technology", "Ottawa"],
  },
  "carney-cabinet-shuffle": {
    slug: "carney-cabinet-shuffle",
    category: "politics",
    categoryLabel: "Politics",
    kicker: "Ottawa",
    headline:
      "Carney reshapes cabinet in bid to steady a government running low on time",
    standfirst:
      "The Prime Minister moved four senior ministers and elevated two rookies from the backbench.",
    authorSlug: "eleanor-whitfield",
    published: "Published 14 November 2026",
    readingMinutes: 7,
    image: {
      src: leadParliament,
      alt: "Parliament Hill at dusk.",
      credit: "Photograph: Marie-Claire Beaulieu / The Standard",
    },
    body: [
      { type: "p", text: "Prime Minister Mark Carney reshuffled his cabinet on Thursday, moving four senior ministers and elevating two rookies from the backbench in what his office described as an effort to 'sharpen delivery' before the winter session." },
    ],
    tags: ["Cabinet", "Carney", "Ottawa"],
  },
};

// helpers
export function articlesByCategory(slug: string): Article[] {
  return Object.values(articles).filter((a) => a.category === slug);
}
export function articlesByAuthor(slug: string): Article[] {
  return Object.values(articles).filter((a) => a.authorSlug === slug);
}
