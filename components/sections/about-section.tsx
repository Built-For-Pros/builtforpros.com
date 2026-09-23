import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { founderStory, siteConfig } from "@/content/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function AboutSection() {
  return (
    <section id="about" className="anchor-target section-shell border-y border-[color:var(--border-subtle)] bg-[color:var(--canvas-soft)]">
      <div className="content-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        <ScrollReveal>
          <figure className="mx-auto max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-2xl bg-[color:var(--elevated)]">
              <Image src="/founder.png" alt="Matt, founder of Built for Pros" width={1024} height={1024} className="aspect-[4/5] w-full object-cover" sizes="(max-width: 1024px) 448px, 430px" />
            </div>
          </figure>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="eyebrow">About Built for Pros</p>
          <h2 className="mt-4 max-w-xl section-title">Built by someone<br className="hidden sm:block" /> who’s done the work.</h2>
          <div className="section-intro space-y-4 text-[color:var(--muted)]">
            {founderStory.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-8 grid gap-6 border-y border-[color:var(--border-subtle)] py-6 sm:grid-cols-2">
            <div><p className="text-2xl font-bold">10+ years</p><p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">Hands-on experience in the trades</p></div>
            <div><p className="text-lg font-semibold">Google UX Design</p><p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">Professional Certificates</p></div>
          </div>
          <a href={siteConfig.primaryCtaHref} target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-7 py-3 text-center text-sm font-bold text-white shadow-[0_2px_0_rgb(0_0_0_/_0.15)] transition hover:bg-[color:var(--brand-strong)] active:translate-y-px sm:w-auto sm:px-8">Let’s talk about your business <ArrowUpRight className="size-4 shrink-0" aria-hidden /></a>
        </ScrollReveal>
      </div>
    </section>
  );
}
