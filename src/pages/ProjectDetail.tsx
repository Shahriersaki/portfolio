import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { EntityGraph } from "@/components/sections/EntityGraph";
import { allProjects } from "@/data/projects";
import { useSEO } from "@/lib/useSEO";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = allProjects.find((p) => p.slug === slug);

  useSEO({
    title: project ? project.name : "Project",
    description: project?.oneLiner ?? "Project case study.",
  });

  if (!project) {
    return (
      <Container className="py-24">
        <p className="text-[var(--text-secondary)]">Project not found.</p>
        <Link to="/projects" className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--accent-text)]">
          <ArrowLeft size={14} /> Back to projects
        </Link>
      </Container>
    );
  }

  const isFeatured = project.slug === "hotel-schema-maker";

  return (
    <Container className="py-16 sm:py-24">
      <Link
        to="/projects"
        className="mb-8 inline-flex items-center gap-1 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
      >
        <ArrowLeft size={14} /> Back to projects
      </Link>

      <div className="mb-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--accent-text)]">
        {project.year}
      </div>
      <h1 className="mb-5 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
        {project.name}
      </h1>
      <p className="mb-6 max-w-2xl text-lg text-[var(--text-secondary)]">{project.oneLiner}</p>

      <div className="mb-10 flex flex-wrap items-center gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-4 py-2 text-sm font-medium text-[var(--bg-0)] transition hover:opacity-85"
          >
            Live demo <ArrowUpRight size={14} />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-hairline)] px-4 py-2 text-sm font-medium transition hover:border-[var(--border-strong)]"
          >
            <GithubIcon size={14} /> Source
          </a>
        )}
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
        <div className="space-y-10">
          {isFeatured ? (
            <>
              <section>
                <h2 className="mb-3 text-sm font-medium uppercase tracking-[0.08em] text-[var(--text-muted)]">
                  The problem
                </h2>
                <p className="text-[var(--text-secondary)]">
                  Hotel websites almost never ship correct, complete structured data on their own.
                  Generating Google-compliant JSON-LD schema by hand — for the Hotel entity itself,
                  its address, reviews, offers, and geo data — is repetitive, easy to get wrong, and
                  has to be redone for every property. In hotel SEO specifically, where independent
                  and boutique properties are competing against OTAs with far larger technical teams,
                  that gap adds up.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-sm font-medium uppercase tracking-[0.08em] text-[var(--text-muted)]">
                  The approach
                </h2>
                <p className="text-[var(--text-secondary)]">
                  Rather than another schema generator that just fills a form and spits out static
                  code, Hotel Schema Maker starts from the hotel's own website. A user enters the
                  hotel's information and the app detects the site's actual pages, then generates
                  schema and a sitemap around that real structure — so the output matches what's
                  actually live on the site, not a generic template.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-sm font-medium uppercase tracking-[0.08em] text-[var(--text-muted)]">
                  What it does
                </h2>
                <ul className="space-y-2">
                  {[
                    "Detects a hotel website's pages automatically",
                    "Generates Google-compliant JSON-LD schema",
                    "Creates an XML sitemap from the same page data",
                    "Saves projects so work can be picked back up later",
                    "Supports multiple users",
                    "Exports finished files with one click",
                  ].map((f) => (
                    <li key={f} className="flex gap-2.5 text-[var(--text-secondary)]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-sm font-medium uppercase tracking-[0.08em] text-[var(--text-muted)]">
                  Built with
                </h2>
                <p className="text-[var(--text-secondary)]">
                  A React and Vite front end, Turso as the database layer, deployed on Render.
                  Building it end to end — not just the SEO logic but the auth, project storage, and
                  export pipeline — was the part that pulled me further into full-stack development
                  alongside SEO work.
                </p>
              </section>
            </>
          ) : (
            <section>
              <h2 className="mb-3 text-sm font-medium uppercase tracking-[0.08em] text-[var(--text-muted)]">
                Overview
              </h2>
              <p className="text-[var(--text-secondary)]">{project.description}</p>
            </section>
          )}
        </div>

        <aside className="space-y-8">
          {isFeatured && <EntityGraph />}
          <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] p-5">
            <h3 className="mb-3 text-sm font-medium">Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
}
