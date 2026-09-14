import type { Metadata } from "next";
import { BriefcaseBusiness, ExternalLink } from "lucide-react";
import Image from "next/image";
import { experience } from "@/data/portfolio";
import { publicAssetPath } from "@/lib/public-path";
import { resolveSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description: "Jafar Madadi's software engineering experience across telecom, banking, business operations, and vehicle tracking systems.",
  alternates: { canonical: new URL("experience", resolveSiteUrl()).toString() },
};

export default function ExperiencePage() {
  return (
    <section className="site-container page-section">
      <div className="mx-auto max-w-4xl">
        <div className="badge"><BriefcaseBusiness aria-hidden="true" size={14} /> Professional journey</div>
        <h1 className="mt-7 text-4xl font-bold tracking-tight md:text-5xl">From hands-on delivery to <span className="gradient-text">enterprise system design.</span></h1>
        <p className="section-copy text-lg">Five-plus years building, improving, and supporting production systems across telecom, banking, business operations, and vehicle tracking.</p>

        <ol className="mt-14 space-y-10" aria-label="Professional experience">
          {experience.map((item) => (
            <li key={`${item.company}-${item.period}`}>
              <article className="relative border-l-2 border-blue-500/25 pl-7">
                <span className="timeline-dot" aria-hidden="true" />
                <div className="soft-card">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div className="flex items-start gap-3">
                      {item.logo && item.website && (
                        <a href={item.website} target="_blank" rel="noopener noreferrer" className="flex h-12 w-16 shrink-0 items-center justify-center rounded-md border border-border bg-white p-1.5 dark:bg-white" aria-label={`Visit ${item.company} website`}>
                          <Image src={publicAssetPath(item.logo.src)} alt="" width={item.logo.width} height={item.logo.height} unoptimized className="max-h-full max-w-full object-contain" />
                        </a>
                      )}
                      <div>
                        <h2 className="text-xl font-semibold">{item.role}</h2>
                        <p className="mt-1 flex flex-wrap items-center gap-x-2 font-medium text-blue-600 dark:text-blue-400">
                          {item.company}
                          {item.website && <a href={item.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs hover:underline">Website <ExternalLink aria-hidden="true" size={13} /></a>}
                        </p>
                      </div>
                    </div>
                    <span className="whitespace-nowrap text-sm text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="mt-5 text-sm font-medium leading-6 text-foreground/85">{item.summary}</p>
                  <ul className="mt-5 space-y-3">
                    {item.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />{bullet}</li>)}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
