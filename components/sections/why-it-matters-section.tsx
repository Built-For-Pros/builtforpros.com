import { ScrollReveal } from "@/components/ui/scroll-reveal";

const questions = [
  { title: "Do you do the work I need?", text: "Clear services and project photos help homeowners see whether you're right for their job." },
  { title: "Can I trust you with my home?", text: "Recent reviews and a well-maintained website give people more to go on than a name and a phone number." },
  { title: "How do I get an estimate?", text: "An easy way to call, a simple form, and a prompt response help turn that interest into a conversation." },
];

export function WhyItMattersSection() {
  return (
    <section id="why-it-matters" className="anchor-target section-shell border-y border-[color:var(--border-subtle)] bg-[color:var(--canvas-soft)]">
      <div className="content-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
        <ScrollReveal>
          <p className="eyebrow">Why it matters</p>
          <h2 className="mt-4 max-w-lg section-title">The next job starts before the first call.</h2>
          <p className="section-intro text-[color:var(--muted)]">Whether someone gets your name from a neighbor or finds you on Google, your online presence helps them decide whether to get in touch.</p>
          <p className="mt-4 max-w-[60ch] text-base leading-7 sm:text-lg text-[color:var(--muted)]">You’ve already done the work to build a reputation. Your website, profile, and reviews should help people see it.</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--elevated)] p-6 sm:p-8">
            <h3 className="border-b border-[color:var(--border-subtle)] pb-6 text-lg font-semibold leading-7 text-[color:var(--fg)] sm:text-xl">What a homeowner needs to know:</h3>
            <div className="divide-y divide-[color:var(--border-subtle)]">
              {questions.map((question, index) => (
                <div key={question.title} className="py-6 last:pb-0">
                  <h4 className="flex gap-4 text-lg font-semibold leading-7"><span className="font-mono text-sm font-normal text-[color:var(--brand)]" aria-hidden>0{index + 1}</span>{question.title}</h4>
                  <p className="mt-2 pl-8 text-base leading-7 text-[color:var(--muted)]">{question.text}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
