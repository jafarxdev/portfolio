"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
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

    let animationFrameId = 0;
    let previousTime = performance.now();

    function animate(time: number) {
      const elapsed = time - previousTime;
      previousTime = time;

      if (!pausedRef.current) {
        const firstDuplicate = carouselTrack.children[companies.length] as HTMLElement | undefined;
        const cycleWidth = firstDuplicate?.offsetLeft ?? 0;
        carouselTrack.scrollLeft += elapsed * 0.025;

        if (cycleWidth && carouselTrack.scrollLeft >= cycleWidth) {
          carouselTrack.scrollLeft -= cycleWidth;
        }
      }

      animationFrameId = window.requestAnimationFrame(animate);
    }

    animationFrameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [companies.length]);

  function scroll(direction: "backward" | "forward") {
    trackRef.current?.scrollBy({
      left: direction === "forward" ? 280 : -280,
      behavior: "smooth",
    });
  }

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
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => scroll("backward")} className="carousel-button shrink-0" aria-label="Show previous employers">
          <ChevronLeft aria-hidden="true" size={20} />
        </button>
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
        <button type="button" onClick={() => scroll("forward")} className="carousel-button shrink-0" aria-label="Show next employers">
          <ChevronRight aria-hidden="true" size={20} />
        </button>
      </div>
    </section>
  );
}
