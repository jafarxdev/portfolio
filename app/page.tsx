import { ArrowRight, CheckCircle2, FileText, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { companies, keyAreas, projects, specializations, stats } from "@/data/portfolio";
import { publicAssetPath } from "@/lib/public-path";

const architecturePrinciples = [
  "Clear service boundaries and maintainable domain models",
  "Secure, well-documented APIs and integrations",
  "Performance measured at the database and application layers",
  "Automated testing and delivery practices that reduce risk",
  "Observability that makes production behavior easy to understand",
  "Resilient workflows that handle failures and recover gracefully",
  "Authentication, authorization, and data protection by design",
  "AI integrations grounded in clear evaluation and responsible use",
  "Scalable designs that support growth without unnecessary complexity",
  "Reliable data models, migrations, and database performance",
  "Clear API contracts that simplify frontend and service integration",
  "Event-driven patterns for responsive, decoupled business workflows",
  "Accessible interfaces that make complex tasks easier to complete",
  "Documentation that helps teams operate, extend, and support systems",
] as const;

export default function HomePage() {
  return (
    <>
      <section className="site-container flex min-h-screen items-center py-24">
        <div className="max-w-4xl space-y-8">
          <div className="badge"><Sparkles aria-hidden="true" size={14} /> Software Developer & AI Software Engineer</div>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Building scalable software and{" "}
            <span className="gradient-text">intelligent AI solutions</span>
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            I&apos;m Jafar Madadi, a Software Developer and AI Software Engineer with 5+ years of experience building enterprise software across telecommunications, banking, and business operations. I specialize in full-stack development, backend engineering, system integration, workflow automation, and AI application integration.
          </p>

          <div className="grid max-w-md grid-cols-2 gap-4 pt-2">
            {stats.map((stat) => {
              const isBlue = stat.accent === "blue";
              return (
                <div key={stat.label} className={`stat-card ${isBlue ? "stat-card-blue" : "stat-card-purple"}`}>
                  <div className="flex items-center justify-between">
                    <span className={isBlue ? "text-blue-500" : "text-purple-500"} aria-hidden="true">●</span>
                    <TrendingUp aria-hidden="true" size={16} className="text-muted-foreground" />
                  </div>
                  <p className={`mt-2 text-3xl font-bold ${isBlue ? "text-blue-600 dark:text-blue-400" : "text-purple-600 dark:text-purple-400"}`}>{stat.value}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{stat.unit}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3">
            {keyAreas.map(({ icon: Icon, label }) => (
              <div key={label} className="key-area">
                <Icon aria-hidden="true" size={16} className="text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a href="#projects" className="primary-button">View projects <ArrowRight aria-hidden="true" size={17} /></a>
            <a href={publicAssetPath("/resume.pdf")} target="_blank" rel="noopener noreferrer" className="secondary-button"><FileText aria-hidden="true" size={17} /> View CV</a>
            <Link href="/contact" className="text-button">Contact me</Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border/60 pt-8 text-sm text-muted-foreground">
            <span className="uppercase tracking-wider">Experience across</span>
            {companies.map((company) => <span key={company} className="font-semibold text-foreground/70">{company}</span>)}
          </div>
        </div>
      </section>

      <section id="projects" className="site-container page-section scroll-mt-24">
        <div className="mb-10 flex items-end justify-between gap-5">
          <SectionHeading
            eyebrow="Selected work"
            title="Systems designed around real operational needs"
            description="A selection of enterprise and product work, with the challenge, contribution, and outcome made explicit."
          />
          <Link href="/experience" className="hidden shrink-0 text-sm font-semibold text-blue-600 hover:text-blue-700 sm:block dark:text-blue-400">View experience <span aria-hidden="true">→</span></Link>
        </div>
        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>

      <section className="site-container page-section">
        <SectionHeading
          eyebrow="Engineering depth"
          title="Architecture that supports delivery"
          description="I approach architecture as a set of practical decisions that make software easier to operate, change, test, and understand."
        />
        <div className="mt-10 grid gap-7 lg:grid-cols-[.9fr_1.1fr]">
          <div className="soft-card">
            <h3 className="text-xl font-semibold">Design priorities</h3>
            <ul className="mt-6 space-y-4">
              {architecturePrinciples.map((principle) => (
                <li key={principle} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-blue-500" size={18} />
                  {principle}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {specializations.map(({ icon: Icon, ...item }) => (
              <article key={item.title} className="soft-card last:sm:col-span-2">
                <Icon aria-hidden="true" className="mb-5 text-blue-500" size={28} />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${item.title} technologies`}>
                  {item.technologies.map((technology) => <li key={technology} className="tech-pill">{technology}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
