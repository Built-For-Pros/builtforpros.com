import { Rocket, Search, Users } from "lucide-react";

import { outcomeStats } from "@/content/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const iconMap = {
  rocket: Rocket,
  search: Search,
  users: Users,
} as const;

export function OutcomeStatsSection() {
  return (
    <section className="border-y border-[color:var(--border-subtle)] bg-[color:var(--canvas-soft)] py-12 sm:py-14">
      <div className="content-shell">
        <ScrollReveal>
          <div className="grid min-w-0 gap-8 md:grid-cols-3 md:gap-0">
            {outcomeStats.map((stat, index) => {
              const Icon = iconMap[stat.icon];

              return (
                <div
                  key={stat.label}
                  className={`mx-auto min-w-0 max-w-sm text-center md:px-6 lg:px-10 ${
                    index < outcomeStats.length - 1
                      ? "md:border-r md:border-[color:var(--border-subtle)]"
                      : ""
                  }`}
                >
                  <div className="mx-auto flex size-10 items-center justify-center rounded-full border border-[color:var(--border-subtle)] text-[color:var(--brand)]">
                    <Icon className="size-4" strokeWidth={2} />
                  </div>
                  <p className="mt-4 text-4xl font-bold tracking-tight text-[color:var(--fg)] sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--brand)]">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                    {stat.detail}
                  </p>

                  {index < outcomeStats.length - 1 ? (
                    <div className="mx-auto mt-8 h-px w-24 bg-[color:var(--border-subtle)] md:hidden" />
                  ) : null}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
