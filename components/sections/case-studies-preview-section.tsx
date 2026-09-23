"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import { designExamples } from "@/content/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CaseStudiesPreviewSection() {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case "ArrowRight": next = (index + 1) % designExamples.length; break;
      case "ArrowLeft": next = (index + designExamples.length - 1) % designExamples.length; break;
      case "Home": next = 0; break;
      case "End": next = designExamples.length - 1; break;
      default: return;
    }
    event.preventDefault();
    setSelected(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section id="case-studies" className="anchor-target section-shell overflow-hidden bg-[color:var(--canvas)]">
      <div className="content-shell">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <div>
              <p className="eyebrow">Our work</p>
              <h2 className="mt-4 section-title">Your next customer’s first impression.</h2>
            </div>
            <p className="mx-auto section-intro text-[color:var(--muted)]">Bold or understated. Modern or traditional. We tailor the photography, typography, and layout to your trade, giving every site a distinct look and feel.</p>
          </div>
        </ScrollReveal>

        <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-2 border-b border-[color:var(--border-subtle)] sm:gap-6" role="tablist" aria-label="Website design concepts">
          {designExamples.map((example, index) => (
            <button
              key={example.id}
              ref={(element) => { tabRefs.current[index] = element; }}
              type="button"
              role="tab"
              id={`design-tab-${example.id}`}
              aria-controls={`design-panel-${example.id}`}
              aria-selected={selected === index}
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => navigate(event, index)}
              className={`min-h-20 border-b-2 px-2 py-4 text-center transition sm:px-4 ${selected === index ? "border-[color:var(--brand)] text-[color:var(--fg)]" : "border-transparent text-[color:var(--muted)] hover:text-[color:var(--fg)]"}`}
            >
              <span className="block text-sm font-semibold sm:text-lg">{example.trade}</span>
              <span className="mt-1 hidden text-sm text-[color:var(--muted)] sm:block">{example.name}</span>
            </button>
          ))}
        </div>

        {designExamples.map((example, index) => (
          <div key={example.id} role="tabpanel" id={`design-panel-${example.id}`} aria-labelledby={`design-tab-${example.id}`} hidden={selected !== index} tabIndex={0} className="mt-8">
            <figure>
              <div className="overflow-hidden rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--elevated)] shadow-[var(--shadow-soft)]">
                <Image src={example.imageUrl} alt={example.imageAlt} width={3454} height={example.id === "lineage" ? 1936 : 1934} quality={95} className="h-auto w-full" sizes="(max-width: 1200px) 100vw, 1152px" />
              </div>
              <figcaption className="flex justify-center pt-6">
                <a href={example.imageUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold transition hover:text-[color:var(--brand)]" aria-label={`View ${example.name} design at full size (opens in a new tab)`}>View full size <ArrowUpRight className="size-4" aria-hidden /></a>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}
