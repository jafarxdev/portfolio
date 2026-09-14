"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Company } from "@/types/portfolio";
import { publicAssetPath } from "@/lib/public-path";

export function EmployerCarousel({ companies }: { companies: readonly Company[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const slides = [...companies, ...companies];

  useEffect(() => {
    const track = trackRef.current;
    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const carouselTrack = track;

    const intervalId = window.setInterval(() => {
      if (!pausedRef.current) {
        const firstDuplicate = carouselTrack.children[companies.length] as HTMLElement | undefined;
        const secondSlide = carouselTrack.children[1] as HTMLElement | undefined;
        const firstSlide = carouselTrack.children[0] as HTMLElement | undefined;
        const cycleWidth = firstDuplicate?.offsetLeft ?? 0;
        const slideWidth = firstSlide && secondSlide ? secondSlide.offsetLeft - firstSlide.offsetLeft : 0;

        if (!slideWidth) return;

        if (cycleWidth && carouselTrack.scrollLeft + slideWidth >= cycleWidth) {
          carouselTrack.scrollLeft = 0;
        }
        carouselTrack.scrollBy({ left: slideWidth, behavior: "smooth" });
      }
    }, 2500);

    return () => window.clearInterval(intervalId);
  }, [companies.length]);

  return (
    <section
      className="border-t border-border/60 pt-8"
      aria-label="Organizations I have worked with"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      onFocus={() => { pausedRef.current = true; }}
      onBlur={() => { pausedRef.current = false; }}
    >
      <p className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">Experience across</p>
      <div ref={trackRef} className="company-carousel" tabIndex={0}>
        {slides.map((company, index) => {
          const isDuplicate = index >= companies.length;

          return company.website ? (
            <a key={`${company.name}-${index}`} href={company.website} target="_blank" rel="noopener noreferrer" className="company-slide" aria-label={`Visit ${company.name} website`} aria-hidden={isDuplicate || undefined} tabIndex={isDuplicate ? -1 : undefined}>
              {company.logo && <Image src={publicAssetPath(company.logo.src)} alt={`${company.name} logo`} width={company.logo.width} height={company.logo.height} unoptimized className="max-h-16 max-w-32 object-contain" />}
            </a>
          ) : (
            <div key={`${company.name}-${index}`} className="company-slide" aria-hidden={isDuplicate || undefined}>
              {company.logo && <Image src={publicAssetPath(company.logo.src)} alt={`${company.name} logo`} width={company.logo.width} height={company.logo.height} unoptimized className="max-h-16 max-w-32 object-contain" />}
            </div>
          );
        })}
      </div>
    </section>
  );
}
