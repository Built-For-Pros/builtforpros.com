import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: "Terms for using the Built for Pros website and requesting information about our services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="section-shell bg-[color:var(--canvas-soft)]">
      <article className="content-shell rounded-[32px] border border-[color:var(--border-subtle)] bg-[color:var(--elevated)] p-7 shadow-[var(--shadow-soft)] sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-strong)]">
          Terms of Service
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-[color:var(--faint)]">Last updated September 8, 2026</p>
        <div className="mt-8 grid gap-5 text-base leading-8 text-[color:var(--muted)]">
          <p>
            By using {siteConfig.url.replace("https://", "")}, you agree to
            these terms. The website is provided to describe Built for Pros
            services and to let you request a guide or book a call.
          </p>
          <p>
            Pricing, plan features, and timelines shown on this site are
            informational. A paid engagement starts only when both sides sign
            a separate service agreement. If anything on this site conflicts
            with that agreement, the signed agreement controls.
          </p>
          <p>
            Subscription plans are typically billed monthly and include a
            twelve-month initial term, with early-exit terms described in the
            FAQ and confirmed in the client agreement. Results such as search
            rankings or lead volume are not guaranteed.
          </p>
          <p>
            Website content, branding, and design are owned by Built for Pros
            unless a client agreement says otherwise. Please do not copy the
            site or present our work as your own.
          </p>
          <p>
            Questions about these terms can be sent to {siteConfig.emailDisplay}.
          </p>
        </div>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full border border-[color:var(--border-subtle)] px-5 py-3 text-sm font-medium text-[color:var(--muted)] transition hover:border-[color:var(--border-hover)] hover:text-[color:var(--fg)]"
        >
          Back to home
        </Link>
      </article>
    </main>
  );
}
