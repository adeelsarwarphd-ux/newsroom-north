import leadParliament from "@/assets/lead-parliament.jpg";
import storyToronto from "@/assets/story-toronto.jpg";
import storyPipeline from "@/assets/story-pipeline.jpg";
import storySport from "@/assets/story-sport.jpg";
import storyCulture from "@/assets/story-culture.jpg";
import storyHousing from "@/assets/story-housing.jpg";

export type Story = {
  slug: string;
  section: string;
  sectionHref: string;
  kicker?: string;
  headline: string;
  standfirst?: string;
  author: string;
  authorRole?: string;
  publishedAt: string; // display string
  image?: { src: string; alt: string; credit: string };
  href: string;
  type?: "reporting" | "analysis" | "comment" | "review" | "sponsored";
};

export const breaking: { headline: string; href: string; time: string } | null = {
  headline:
    "Bank of Canada holds key rate at 3.25% as governor signals a pause into spring",
  href: "#",
  time: "14 minutes ago",
};

export const lead: Story = {
  slug: "carney-cabinet-shuffle",
  section: "Politics",
  sectionHref: "/category/politics",
  headline:
    "Carney reshapes cabinet in bid to steady a government running low on time",
  standfirst:
    "The Prime Minister moved four senior ministers and elevated two rookies from the backbench, betting that a leaner front bench can carry a fragile agenda through a difficult winter session.",
  author: "Eleanor Whitfield",
  authorRole: "Ottawa Bureau Chief",
  publishedAt: "Published 4 hours ago · Updated 42 minutes ago",
  image: {
    src: leadParliament,
    alt: "Parliament Hill in Ottawa at dusk with the Peace Tower silhouetted against a pink sky.",
    credit: "Photograph: Marie-Claire Beaulieu / The Standard",
  },
  href: "#",
  type: "reporting",
};

export const supportingLeads: Story[] = [
  {
    slug: "tmx-pipeline-review",
    section: "Business",
    sectionHref: "/category/business",
    headline:
      "Ottawa orders a fresh environmental review of the Trans Mountain expansion",
    standfirst:
      "Cabinet's decision follows two years of legal challenges and a rare joint intervention from three First Nations.",
    author: "James Okafor",
    publishedAt: "3 hours ago",
    image: {
      src: storyPipeline,
      alt: "Aerial view of a pipeline crossing autumn boreal forest.",
      credit: "Photograph: Sebastien Roy / The Standard",
    },
    href: "#",
    type: "reporting",
  },
  {
    slug: "toronto-fog-economy",
    section: "Toronto",
    sectionHref: "/category/toronto",
    headline:
      "Inside the Bay Street firms quietly preparing for a leaner 2026",
    standfirst:
      "Hiring freezes, quieter trading floors and a wave of early retirements are reshaping Canada's financial capital.",
    author: "Priya Ramanathan",
    publishedAt: "Yesterday",
    image: {
      src: storyToronto,
      alt: "Toronto skyline emerging from winter fog.",
      credit: "Photograph: Daniel Cheng / The Standard",
    },
    href: "#",
    type: "analysis",
  },
];

export const latest: Story[] = [
  {
    slug: "l1",
    section: "News",
    sectionHref: "/category/news",
    headline:
      "Ontario paramedics vote to strike as contract talks collapse in Queen's Park",
    author: "Rachel Adler",
    publishedAt: "38 min ago",
    href: "#",
  },
  {
    slug: "l2",
    section: "World",
    sectionHref: "/category/world",
    headline:
      "European leaders press Washington on a joint framework for Arctic shipping lanes",
    author: "Tomasz Kaminski",
    publishedAt: "1 hr ago",
    href: "#",
  },
  {
    slug: "l3",
    section: "Business",
    sectionHref: "/category/business",
    headline:
      "Loblaw posts a slimmer margin, blaming a colder autumn and softer discretionary spending",
    author: "James Okafor",
    publishedAt: "2 hr ago",
    href: "#",
  },
  {
    slug: "l4",
    section: "Politics",
    sectionHref: "/category/politics",
    headline:
      "Bloc leader accuses Ottawa of \u2018drift\u2019 as language file returns to the Commons",
    author: "Isabelle Tremblay",
    publishedAt: "3 hr ago",
    href: "#",
  },
  {
    slug: "l5",
    section: "Sport",
    sectionHref: "/category/sport",
    headline:
      "Maple Leafs edge Bruins in overtime as Matthews returns from a two\u2011week absence",
    author: "Chris Doyle",
    publishedAt: "3 hr ago",
    href: "#",
  },
  {
    slug: "l6",
    section: "Technology",
    sectionHref: "/category/technology",
    headline:
      "Shopify quietly moves its enterprise AI team to Ottawa, adding 220 jobs",
    author: "Nadia Farooq",
    publishedAt: "5 hr ago",
    href: "#",
  },
];

export const fromCanada: Story[] = [
  {
    slug: "housing-bc",
    section: "Vancouver",
    sectionHref: "/category/vancouver",
    headline:
      "British Columbia unveils a public builder to deliver 40,000 rental homes by 2030",
    standfirst:
      "The province is betting on a Crown corporation model to bypass a stalled private market.",
    author: "Alicia Wong",
    publishedAt: "6 hr ago",
    image: {
      src: storyHousing,
      alt: "Row of new townhouses under an overcast sky in suburban British Columbia.",
      credit: "Photograph: Miles Pemberton / The Standard",
    },
    href: "#",
  },
  {
    slug: "atlantic-fisheries",
    section: "Atlantic",
    sectionHref: "/category/atlantic",
    headline:
      "A season on the water: how Nova Scotia's smaller fisheries are adapting to warmer seas",
    author: "Fiona MacLeod",
    publishedAt: "Yesterday",
    href: "#",
  },
  {
    slug: "prairies-drought",
    section: "Prairies",
    sectionHref: "/category/prairies",
    headline:
      "A fourth dry winter has Saskatchewan farmers rewriting the crop plan\u2014again",
    author: "Ben Larocque",
    publishedAt: "Yesterday",
    href: "#",
  },
  {
    slug: "north-broadband",
    section: "The North",
    sectionHref: "/category/north",
    headline:
      "Northern broadband promised by 2027 as Ottawa signs a new deal with Starlink rivals",
    author: "Jenna Qavvik",
    publishedAt: "2 days ago",
    href: "#",
  },
];

export const opinion: Story[] = [
  {
    slug: "op-carney",
    section: "Comment",
    sectionHref: "/category/comment",
    kicker: "Editorial",
    headline:
      "Mr Carney's reshuffle buys time. What he does with it will define the year.",
    author: "The Standard",
    publishedAt: "Today",
    href: "#",
    type: "comment",
  },
  {
    slug: "op-priya",
    section: "Comment",
    sectionHref: "/category/comment",
    kicker: "Priya Ramanathan",
    headline:
      "Bay Street's quiet correction is not a crisis. It might be a much needed reset.",
    author: "Priya Ramanathan",
    authorRole: "Business Editor",
    publishedAt: "Today",
    href: "#",
    type: "comment",
  },
  {
    slug: "op-tomasz",
    section: "Comment",
    sectionHref: "/category/comment",
    kicker: "Tomasz Kaminski",
    headline:
      "Canada cannot outsource its Arctic policy to Washington any longer",
    author: "Tomasz Kaminski",
    authorRole: "Foreign Affairs",
    publishedAt: "Yesterday",
    href: "#",
    type: "comment",
  },
];

export const culture: Story[] = [
  {
    slug: "c-1",
    section: "Culture",
    sectionHref: "/category/culture",
    kicker: "Review",
    headline:
      "At the AGO, a new sculpture wing that finally lets the collection breathe",
    standfirst:
      "A restrained, generous rehang. Four stars.",
    author: "Helena Ashcroft",
    publishedAt: "Yesterday",
    image: {
      src: storyCulture,
      alt: "Interior of a bright, modern art gallery with sculptures on plinths.",
      credit: "Photograph: Nora Kim / The Standard",
    },
    href: "#",
    type: "review",
  },
  {
    slug: "c-2",
    section: "Books",
    sectionHref: "/category/books",
    headline: "The Booker longlist that quietly rewrote the map of Canadian fiction",
    author: "Helena Ashcroft",
    publishedAt: "2 days ago",
    href: "#",
  },
  {
    slug: "c-3",
    section: "Film",
    sectionHref: "/category/film",
    headline: "Sarah Polley's next film is smaller, stranger and unmistakably hers",
    author: "Marcus Lee",
    publishedAt: "3 days ago",
    href: "#",
  },
];

export const sport: Story[] = [
  {
    slug: "s-1",
    section: "Hockey",
    sectionHref: "/category/hockey",
    headline: "Auston Matthews on 40 minutes of ice, a quieter room and playing for keeps",
    standfirst: "An hour with the Leafs captain, back on the ice after two lost weeks.",
    author: "Chris Doyle",
    publishedAt: "Today",
    image: {
      src: storySport,
      alt: "Close-up portrait of a hockey player wearing a helmet inside an arena.",
      credit: "Photograph: Anders Holm / The Standard",
    },
    href: "#",
  },
  {
    slug: "s-2",
    section: "Football",
    sectionHref: "/category/football",
    headline: "Canada's men reach the top ten of the FIFA rankings for the first time",
    author: "Chris Doyle",
    publishedAt: "Yesterday",
    href: "#",
  },
  {
    slug: "s-3",
    section: "Tennis",
    sectionHref: "/category/tennis",
    headline: "Auger\u2011Aliassime withdraws from the ATP Finals citing a shoulder strain",
    author: "Camille Bouchard",
    publishedAt: "2 days ago",
    href: "#",
  },
];

export const mostRead: Story[] = [
  { slug: "m1", section: "Politics", sectionHref: "/category/politics", headline: "The seven names Carney kept, and why the sixth is the one to watch", author: "Eleanor Whitfield", publishedAt: "", href: "#" },
  { slug: "m2", section: "Business", sectionHref: "/category/business", headline: "Why the Bank of Canada blinked, in five charts", author: "James Okafor", publishedAt: "", href: "#" },
  { slug: "m3", section: "Comment", sectionHref: "/category/comment", headline: "A national newsroom, a national responsibility: our promise to readers", author: "The Editor", publishedAt: "", href: "#" },
  { slug: "m4", section: "Toronto", sectionHref: "/category/toronto", headline: "The Ontario Line's next station just moved, and nobody told the neighbourhood", author: "Rachel Adler", publishedAt: "", href: "#" },
  { slug: "m5", section: "Culture", sectionHref: "/category/culture", headline: "Twelve exhibitions to plan a winter around", author: "Helena Ashcroft", publishedAt: "", href: "#" },
];
