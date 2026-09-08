"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  caseStudiesSection,
  caseStudyPreviews,
  type CaseStudyPreview,
} from "@/content/site";

import "swiper/css";
import "swiper/css/effect-creative";

const CASE_STUDY_CREATIVE_EFFECT = {
  limitProgress: 1,
  prev: {
    translate: ["-22%", 0, -320],
    scale: 0.9,
    opacity: 0,
  },
  next: {
    translate: ["22%", 0, -320],
    scale: 0.9,
    opacity: 0,
  },
};

const CASE_STUDY_CONTENT_MOTION =
  "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

function caseStudyCarouselSlides() {
  const items = caseStudyPreviews;
  if (items.length === 0) return [];
  return [...items, ...items, ...items];
}

function initCaseStudySwiper(swiper: SwiperType) {
  if (swiper.destroyed || !swiper.params) return;
  swiper.update();
  if (swiper.params.loop) {
    swiper.slideToLoop(0, 0);
  } else {
    swiper.slideTo(0, 0);
  }
}

function contentMotionClass(isActive: boolean) {
  return `${CASE_STUDY_CONTENT_MOTION} ${
    isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
  }`;
}

function CaseStudiesCarouselSkeleton() {
  return (
    <div className="mx-auto w-full max-w-3xl" aria-hidden>
      <div className="min-h-[32rem] rounded-2xl border border-[color:var(--case-study-card-border)] bg-[color:var(--case-study-card-bg)] shadow-[var(--case-study-card-shadow)] sm:min-h-[36rem]" />
    </div>
  );
}

const CASE_STUDY_NAV_BUTTON =
  "inline-flex size-11 items-center justify-center rounded-full border border-[color:var(--case-study-card-border)] bg-[color:var(--case-study-card-bg)] text-[color:var(--case-study-card-fg)] transition hover:border-[color:var(--brand)]/40 hover:text-[color:var(--brand)]";

function CaseStudySlide({
  study,
  isActive,
}: {
  study: CaseStudyPreview;
  isActive: boolean;
}) {
  return (
    <article
      className={`mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-[color:var(--case-study-card-border)] bg-[color:var(--case-study-card-bg)] transition-[box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        isActive
          ? "shadow-[var(--case-study-card-shadow-active)]"
          : "shadow-[var(--case-study-card-shadow)]"
      }`}
      aria-hidden={!isActive}
    >
      <div
        className={`bg-[color:var(--case-study-card-image-bg)] ${contentMotionClass(isActive)}`}
        style={{ transitionDelay: isActive ? "80ms" : "0ms" }}
      >
        <Image
          src={study.imageUrl}
          alt={study.imageAlt}
          width={3454}
          height={1934}
          quality={95}
          className="h-auto w-full"
          sizes="(max-width: 768px) 100vw, 1920px"
        />
      </div>

      <div className="border-t border-[color:var(--case-study-card-border)] px-6 py-6 sm:px-8 sm:py-7">
        <h3
          className={`text-2xl font-bold leading-tight text-[color:var(--case-study-card-fg)] sm:text-3xl ${contentMotionClass(isActive)}`}
          style={{ transitionDelay: isActive ? "140ms" : "0ms" }}
        >
          {study.company}
        </h3>

        <blockquote
          className={`mt-5 border-l-2 border-[color:var(--brand)] pl-4 ${contentMotionClass(isActive)}`}
          style={{ transitionDelay: isActive ? "180ms" : "0ms" }}
        >
          <p className="text-sm leading-relaxed text-[color:var(--case-study-card-muted)] sm:text-[0.94rem]">
            &ldquo;{study.quote}&rdquo;
          </p>
          <footer className="mt-3 flex items-center gap-3">
            <Image
              src={study.quoteImageUrl}
              alt={study.quoteImageAlt}
              width={40}
              height={40}
              quality={90}
              className="size-10 rounded-full object-cover"
            />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[color:var(--case-study-card-fg)]">
                {study.quoteName}
              </p>
              <p className="text-xs text-[color:var(--case-study-card-muted)]">
                {study.quoteRole}
              </p>
            </div>
          </footer>
        </blockquote>

        <dl
          className={`mt-6 grid grid-cols-3 gap-3 border-t border-[color:var(--case-study-card-border)] pt-5 ${contentMotionClass(isActive)}`}
          style={{ transitionDelay: isActive ? "260ms" : "0ms" }}
        >
          {study.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dd className="text-2xl font-bold tabular-nums text-[color:var(--case-study-card-fg)] sm:text-3xl">
                {stat.value}
              </dd>
              <dt className="mt-1 text-[11px] font-medium uppercase tracking-wider text-[color:var(--case-study-card-muted)] sm:text-xs">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

export function CaseStudiesPreviewSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const didInitRef = useRef(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const slides = caseStudyCarouselSlides();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSwiperInit = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
    if (didInitRef.current) return;
    didInitRef.current = true;
    initCaseStudySwiper(swiper);
    setIsReady(true);
  }, []);

  return (
    <section
      id="case-studies"
      className="anchor-target section-shell border-t border-[color:var(--case-study-section-border)] bg-[color:var(--case-study-section-bg)]"
    >
      <div className="content-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow={caseStudiesSection.eyebrow}
            title={caseStudiesSection.title}
            description={caseStudiesSection.description}
            align="center"
            tone="default"
          />
        </ScrollReveal>

        <div
          className={`case-studies-slider relative mt-12 lg:px-16${isReady ? " is-ready" : ""}`}
        >
          {!isReady && <CaseStudiesCarouselSkeleton />}

          {isMounted && (
            <Swiper
              className={isReady ? "case-studies-swiper--visible" : "case-studies-swiper--hidden"}
              modules={[Autoplay, EffectCreative]}
              effect="creative"
              creativeEffect={CASE_STUDY_CREATIVE_EFFECT}
              centeredSlides
              loop
              loopAdditionalSlides={caseStudyPreviews.length}
              observer
              observeParents
              resizeObserver
              speed={800}
              spaceBetween={32}
              threshold={12}
              longSwipesRatio={0.35}
              slidesPerView={1}
              watchOverflow={false}
              autoplay={{ delay: 15000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              onSwiper={handleSwiperInit}
              onInit={handleSwiperInit}
              onResize={initCaseStudySwiper}
            >
              {slides.map((study, index) => (
                <SwiperSlide key={`${study.company}-${index}`}>
                  {({ isActive }) => (
                    <CaseStudySlide study={study} isActive={isActive} />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {isReady && (
            <>
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                className={`${CASE_STUDY_NAV_BUTTON} absolute top-1/2 z-10 -translate-y-1/2 shadow-lg max-lg:hidden lg:-left-14`}
                aria-label="Previous case study"
              >
                <ChevronLeft className="size-5" strokeWidth={2} />
              </button>

              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                className={`${CASE_STUDY_NAV_BUTTON} absolute top-1/2 z-10 -translate-y-1/2 shadow-lg max-lg:hidden lg:-right-14`}
                aria-label="Next case study"
              >
                <ChevronRight className="size-5" strokeWidth={2} />
              </button>

              <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
                <button
                  type="button"
                  onClick={() => swiperRef.current?.slidePrev()}
                  className={CASE_STUDY_NAV_BUTTON}
                  aria-label="Previous case study"
                >
                  <ChevronLeft className="size-5" strokeWidth={2} />
                </button>
                <button
                  type="button"
                  onClick={() => swiperRef.current?.slideNext()}
                  className={CASE_STUDY_NAV_BUTTON}
                  aria-label="Next case study"
                >
                  <ChevronRight className="size-5" strokeWidth={2} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
