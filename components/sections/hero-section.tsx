import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { hero, siteConfig } from "@/content/site";

export function HeroSection() {
  return (
    <section className="hero-section relative flex min-h-dvh items-center overflow-hidden bg-[color:var(--hero-canvas)]">
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center opacity-[0.32]"
        sizes="100vw"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--hero-canvas)] via-[var(--hero-canvas)]/88 to-[var(--hero-canvas)]/25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--hero-canvas)] via-transparent to-[var(--hero-canvas)]/40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgb(249_99_2_/_0.12),transparent_65%)]" />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-7xl flex-col items-center justify-center px-5 pb-24 pt-32 text-center sm:pb-28 sm:pt-36 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <ScrollReveal animation="fade-in">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
              {hero.eyebrow}
            </p>
            <h1 className="flex flex-col gap-1 text-pretty text-[2.7rem] font-bold leading-[1.08] tracking-tight text-[color:var(--hero-fg)] sm:text-[4.2rem] md:text-[5rem] lg:text-[5.75rem]">
              {hero.titleLines.map((line) => (
                <span key={line} className="min-w-0">
                  {line.split(/(marketing)/).map((part, index) =>
                    part === "marketing" ? (
                      <span key={index} className="relative inline-block">
                        {part}
                        <svg className="pointer-events-none absolute -bottom-[0.2em] left-0 h-[0.22em] w-full overflow-visible text-[color:var(--brand)]" viewBox="0 0 320 14" fill="none" preserveAspectRatio="none" aria-hidden="true">
                          <path className="heading-underline" d="M 3 10 Q 155 1 317 7" pathLength="1" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                      </span>
                    ) : part,
                  )}
                </span>
              ))}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <p className="mx-auto mt-10 max-w-[60ch] text-lg leading-7 text-[color:var(--hero-muted)] sm:mt-12 sm:text-xl sm:leading-8">
              {hero.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={420}>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
              <a
                href={siteConfig.heroSecondaryCtaHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white shadow-[0_1px_0_rgb(255_255_255_/_0.04)_inset] transition hover:border-white/40 hover:bg-white/10 sm:px-8"
              >
                {siteConfig.heroSecondaryCtaLabel}
              </a>
              <a
                href={siteConfig.primaryCtaHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-7 text-sm font-bold text-white shadow-[0_2px_0_rgb(0_0_0_/_0.15)] transition hover:bg-[color:var(--brand-strong)] active:translate-y-px sm:px-8"
              >
                {siteConfig.heroPrimaryCtaLabel}
                <ArrowRight className="size-4" strokeWidth={2.5} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
