import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />
      <main className="es-container py-24 text-center">
        <p className="es-eyebrow es-eyebrow-red mb-4">Error 404</p>
        <h1 className="es-h-article mx-auto">This page has been retired, moved or was never here.</h1>
        <p className="es-standfirst mt-6 mx-auto">
          Try the homepage, browse a section, or search the archive for what you were reading.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block border border-ink bg-ink px-6 py-3 font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-paper"
          >
            Return to the front page
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />
      <main className="es-container py-24 text-center">
        <p className="es-eyebrow es-eyebrow-red mb-4">Something went wrong</p>
        <h1 className="es-h-article mx-auto">This page didn't load.</h1>
        <p className="es-standfirst mt-6 mx-auto">
          Our servers had a problem serving this story. Try again, or head back to the front page.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="border border-ink bg-ink px-6 py-3 font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-paper"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-ink px-6 py-3 font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-ink"
          >
            Front page
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Evening Standard Canada — Front page" },
      {
        name: "description",
        content:
          "The day's Canadian news, politics, business, sport, culture and comment — edited by our national newsroom.",
      },
      { name: "author", content: "Evening Standard Canada" },
      { name: "theme-color", content: "#FAF9F6" },
      { property: "og:site_name", content: "Evening Standard Canada" },
      { property: "og:title", content: "Evening Standard Canada — Front page" },
      {
        property: "og:description",
        content:
          "The day's Canadian news, politics, business, sport, culture and comment — edited by our national newsroom.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@StandardCanada" },
      { name: "twitter:title", content: "Evening Standard Canada — Front page" },
      { name: "twitter:description", content: "The day's Canadian news, politics, business, sport, culture and comment — edited by our national newsroom." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4121d4af-a9c0-42a1-a479-777c18220f8e/id-preview-24f5cbd0--63c0f4b8-5d55-4604-aac2-bd02fb42302a.lovable.app-1784273941990.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4121d4af-a9c0-42a1-a479-777c18220f8e/id-preview-24f5cbd0--63c0f4b8-5d55-4604-aac2-bd02fb42302a.lovable.app-1784273941990.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsMediaOrganization",
          name: "Evening Standard Canada",
          url: "/",
          description:
            "Independent Canadian journalism from a national newsroom.",
          areaServed: "CA",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
