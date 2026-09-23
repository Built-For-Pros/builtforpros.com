import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { siteConfig } from "@/content/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const defaultImageSrc =
  "/cta-workshop.jpg";

const defaultImageAlt =
  "Assorted tools in a workshop representing hands-on trade expertise";

const defaultTitle = (
  <>
    Stop chasing leads.
    <br />
    <span className="text-[color:var(--brand)]">Start booking jobs.</span>
  </>
);

const defaultDescription =
  "In a free 15-minute call, we'll look at your website and Google presence, talk about the work you want more of, and explain where we can help.";

type FinalCtaSectionProps = {
  title?: ReactNode;
  description?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function FinalCtaSection({
  title = defaultTitle,
  description = defaultDescription,
  ctaLabel = "Schedule a Free Call",
  ctaHref = siteConfig.primaryCtaHref,
  imageSrc = defaultImageSrc,
  imageAlt = defaultImageAlt,
}: FinalCtaSectionProps = {}) {
  return (
    <section className="relative overflow-hidden border-t border-[color:var(--feature-border-subtle)] px-5 py-24 sm:px-8 md:py-32">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-center opacity-[0.26]"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--feature-canvas)] via-[var(--feature-canvas)]/85 to-[var(--feature-canvas)]/55" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--feature-canvas)] to-transparent" />

      <div className="relative mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <h2 className="section-title text-[color:var(--feature-fg)]">
            {title}
          </h2>
          <p className="mx-auto section-intro text-[color:var(--feature-muted)]">
            {description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-8 flex justify-center">
            <a
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-7 text-sm font-bold text-white shadow-[0_2px_0_rgb(0_0_0_/_0.15)] transition hover:bg-[color:var(--brand-strong)] active:translate-y-px sm:w-auto sm:px-8"
            >
              {ctaLabel}
              <ArrowRight className="size-4" strokeWidth={2.5} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
