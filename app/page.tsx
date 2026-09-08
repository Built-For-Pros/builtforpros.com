import { AboutSection } from "@/components/sections/about-section";
import { CaseStudiesPreviewSection } from "@/components/sections/case-studies-preview-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LeadMagnetSection } from "@/components/sections/lead-magnet-section";
import { OutcomeStatsSection } from "@/components/sections/outcome-stats-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { WhatWeDoSection } from "@/components/sections/what-we-do-section";
import { ScrollAnchorHandler } from "@/components/scroll-anchor-handler";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createProfessionalServiceSchema } from "@/lib/seo";

export default function Home() {
  const schema = createProfessionalServiceSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteHeader />
      <ScrollAnchorHandler />
      <main className="bg-[color:var(--canvas)] text-[color:var(--fg)]">
        <HeroSection />
        <OutcomeStatsSection />
        <WhatWeDoSection />
        <CaseStudiesPreviewSection />
        <PricingSection />
        <AboutSection />
        <LeadMagnetSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
