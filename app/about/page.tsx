import type { Metadata } from "next";
import { Award, ExternalLink, FileText, GraduationCap, Languages, MapPin, PlaySquare } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { education, languages, profile, recognition, skillGroups } from "@/data/portfolio";
import { publicAssetPath } from "@/lib/public-path";
import { resolveSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Jafar Madadi's software engineering background, architecture expertise, education, languages, and professional recognition.",
  alternates: { canonical: new URL("about", resolveSiteUrl()).toString() },
};

export default function AboutPage() {
  return (
    <section className="site-container page-section">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_.82fr]">
          <div>
            <div className="badge"><MapPin aria-hidden="true" size={14} /> {profile.location}</div>
            <h1 className="mt-7 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">Engineering systems that make <span className="gradient-text">complex work feel clear.</span></h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              I am a Software Developer and AI Software Engineer with 5+ years of experience designing, developing, and maintaining enterprise-grade software systems across telecommunications, banking, and business operations.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
              My work spans software architecture, backend engineering, full-stack development, database design, RESTful APIs, microservices, testing, performance optimization, and technical documentation. I am expanding my expertise in AI-assisted development and AI application integration while collaborating with cross-functional teams to deliver scalable, maintainable, business-focused software.
            </p>
          </div>
          <figure className="interactive-card relative overflow-hidden rounded-2xl border border-border bg-background p-2 shadow-xl">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
              <Image
                src={publicAssetPath("/jafar-madadi-at-work.jpg")}
                alt="Jafar Madadi working at a computer"
                fill
                quality={85}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent px-5 pb-5 pt-16 text-sm font-medium text-white">
                Building reliable systems, one workflow at a time.
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Capabilities"
            title="Technical expertise"
            description="Core competencies across full-stack development, backend engineering, system design, AI integration, and reliable software delivery."
          />
          <div className="mt-9 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <section key={group.title} className="soft-card" aria-labelledby={`skills-${group.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <h3 id={`skills-${group.title.toLowerCase().replace(/\s+/g, "-")}`} className="text-lg font-semibold text-blue-600 dark:text-blue-400">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => <li key={skill} className="tech-pill">{skill}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-7 lg:grid-cols-[1.15fr_.85fr]">
          <article className="soft-card">
            <div className="mb-5 flex items-center gap-3"><GraduationCap aria-hidden="true" className="text-blue-500" /><h2 className="text-xl font-semibold">Education</h2></div>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={`${item.institution}-${item.degree}`} className={index > 0 ? "border-t border-border pt-6" : ""}>
                  <h3 className="font-semibold">{item.degree}</h3>
                  <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">{item.institution} · {item.period}</p>
                  {"status" in item && <p className="mt-1 text-sm text-muted-foreground">Status: {item.status}</p>}
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="soft-card">
            <div className="mb-5 flex items-center gap-3"><Languages aria-hidden="true" className="text-purple-500" /><h2 className="text-xl font-semibold">Languages</h2></div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {languages.map((language) => <li key={language}>{language}</li>)}
            </ul>
          </article>
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Growth & contribution"
            title="Certifications and knowledge sharing"
            description="Professional certifications and community work that complement day-to-day engineering practice."
          />
          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {recognition.map((item) => {
              const content = <>
                <div className="flex items-start justify-between gap-4">
                  <Award aria-hidden="true" className="text-blue-500" size={24} />
                  {"credentialUrl" in item && <ExternalLink aria-hidden="true" className="certificate-link-icon" size={18} />}
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.year}</p>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
              </>;

              return "credentialUrl" in item ? (
                <a key={item.title} href={item.credentialUrl} target="_blank" rel="noopener noreferrer" className="soft-card certificate-link group block">
                  {content}
                </a>
              ) : (
                <article key={item.title} className="soft-card">
                  {content}
                </article>
              );
            })}
          </div>
          <article className="soft-card mt-6 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex gap-4">
              <PlaySquare aria-hidden="true" className="mt-1 shrink-0 text-purple-500" size={25} />
              <div>
                <h3 className="font-semibold">Jafar Explains</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">Educational videos about technology, future skills, personal growth, health, business, and community development.</p>
              </div>
            </div>
            <a href={profile.youtube} target="_blank" rel="noopener noreferrer" className="secondary-button shrink-0">Visit channel <span aria-hidden="true">↗</span></a>
          </article>
        </div>

        <div className="mt-12 text-center"><a href={publicAssetPath("/resume.pdf")} target="_blank" rel="noopener noreferrer" className="primary-button"><FileText aria-hidden="true" size={17} /> View CV</a></div>
      </div>
    </section>
  );
}
