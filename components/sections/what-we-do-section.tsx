import { ArrowRight, MapPin, Monitor, MessageSquare, Plus } from "lucide-react";
import { siteConfig } from "@/content/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const services = [
  {
    title: "Custom websites",
    description:
      "Showcase your work with a fast, mobile-friendly site that makes it easy to request an estimate.",
    features: ["Make a strong first impression", "Turn interest into inquiries", "Spend less time managing your site"],
    icon: Monitor,
  },
  {
    title: "Local search",
    description:
      "Get your Google Business Profile, services, and service areas in shape so nearby customers can find you.",
    features: ["Get found by nearby customers", "Reach people looking for you", "Build a stronger local presence"],
    icon: MapPin,
  },
  {
    title: "Reviews & follow-up",
    description:
      "Collect more reviews and keep inquiries moving with missed-call texts and automatic follow-up.",
    features: ["Build trust before the first call", "Keep potential customers engaged", "Let fewer opportunities slip away"],
    icon: MessageSquare,
  },
];

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="anchor-target section-shell py-24 md:py-36 border-t border-[color:var(--border-subtle)] bg-[color:var(--canvas)]">
      <div className="content-shell text-center">
        <ScrollReveal>
          <p className="eyebrow">What we do</p>
          <h2 className="mx-auto mt-4 max-w-3xl section-title">
            <span className="block text-[color:var(--fg)]">You’ve built a great business.</span>
            <span className="mt-2 block text-[color:var(--fg)]">
              We make sure it{" "}
              <span className="inline-block whitespace-nowrap text-[color:var(--brand)]">
                shows up online.
              </span>
            </span>
          </h2>
          <p className="section-intro mx-auto text-[color:var(--muted)]">
            Give customers the confidence to choose you. We handle your website, local visibility, and follow-up so you can focus on the work.
          </p>
        </ScrollReveal>

        <div className="mt-20 grid gap-14 px-6 md:mt-24 lg:grid-cols-3 lg:gap-12">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 60} className="h-full">
              <article className="relative mx-auto flex h-full w-full max-w-md flex-col rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--service-card-bg)] px-6 pb-6 pt-10 text-left xl:px-8">
                <div className="absolute left-0 top-0 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--service-card-bg)]">
                  <service.icon className="size-6 text-[color:var(--brand)]" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="text-xl font-bold leading-snug tracking-tight text-[color:var(--fg)]">{service.title}</h3>
                <p className="mt-4 grow text-base leading-7 text-[color:var(--muted)]">{service.description}</p>
                <ul className="mt-6 space-y-3 lg:min-h-32 border-t border-[color:var(--border-subtle)] pt-5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm leading-6 text-[color:var(--muted)]">
                      <Plus className="mt-1 size-4 shrink-0 text-[color:var(--brand)]" strokeWidth={2} aria-hidden />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-16 md:mt-20">
          <a
            href={siteConfig.primaryCtaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-7 text-sm font-bold text-white shadow-[0_2px_0_rgb(0_0_0_/_0.15)] transition hover:bg-[color:var(--brand-strong)] active:translate-y-px sm:w-auto sm:px-8"
          >
            {siteConfig.primaryCtaLabel}
            <ArrowRight className="size-4" strokeWidth={2.5} aria-hidden />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
