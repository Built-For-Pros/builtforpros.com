import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "How Built for Pros collects, uses, and protects information submitted through this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="section-shell bg-[color:var(--canvas-soft)]">
      <article className="content-shell rounded-[32px] border border-[color:var(--border-subtle)] bg-[color:var(--elevated)] p-7 shadow-[var(--shadow-soft)] sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-strong)]">
          Privacy Policy
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-[color:var(--faint)]">Last updated September 8, 2026</p>
        <div className="mt-8 grid gap-5 text-base leading-8 text-[color:var(--muted)]">
          <p>
            Built for Pros (&quot;we,&quot; &quot;us&quot;) operates{" "}
            {siteConfig.url.replace("https://", "")}. This policy explains what
            information we collect on this website and how we use it.
          </p>
          <p>
            When you use the lead form, we collect the name and email address
            you submit so we can send the requested guide and follow up about
            our services. If you email us at {siteConfig.emailDisplay} or book
            a call through our scheduling link, we also receive the contact
            details you choose to share.
          </p>
          <p>
            We use that information only to respond to you, deliver requested
            materials, and operate the business. We do not sell personal
            information. Form submissions may be forwarded to our email or
            form-processing tools so we can reply.
          </p>
          <p>
            This site may use standard hosting, analytics, and security logs
            that record technical data such as browser type, pages visited, and
            approximate location derived from IP address. Those logs are used
            to keep the site working and understand how it is used.
          </p>
          <p>
            You can ask us to update or delete your contact information by
            emailing {siteConfig.emailDisplay}.
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
