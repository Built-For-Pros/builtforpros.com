import { ArrowRight, BarChart3, Search, Wrench } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { whatWeDoPillars } from "@/content/site";

const pillarIcons = [Wrench, Search, BarChart3] as const;

export function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      className="anchor-target section-shell border-t border-[color:var(--border-subtle)]"
    >
      <div className="content-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="What we do"
            title="We build the marketing system that brings in better jobs."
            description="You get one coordinated system across your website, local search presence, and lead conversion workflows — not disconnected tactics."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--elevated-deep)]">
          {whatWeDoPillars.map((pillar, index) => {
            const Icon = pillarIcons[index];
            return (
              <ScrollReveal key={pillar.title} delay={index * 120}>
                <article className="grid gap-6 border-t border-[color:var(--border-subtle)] px-6 py-7 first:border-t-0 md:grid-cols-[15rem_1fr] md:items-start md:gap-8 md:px-8">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand)]">
                      {pillar.label}
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[color:var(--brand)] text-white shadow-[var(--icon-main-shadow)]">
                        <Icon className="size-4" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-bold text-[color:var(--fg)]">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <div>
                    <p className="text-base leading-7 text-[color:var(--muted)]">
                      {pillar.description}
                    </p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2 sm:gap-x-6">
                      {pillar.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm leading-6 text-[color:var(--muted)]"
                        >
                          <ArrowRight
                            className="mt-1 size-3.5 shrink-0 text-[color:var(--brand)]"
                            strokeWidth={2.2}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
