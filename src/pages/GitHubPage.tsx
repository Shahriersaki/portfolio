import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";
import { allProjects } from "@/data/projects";
import { useSEO } from "@/lib/useSEO";

export default function GitHubPage() {
  useSEO({
    title: "GitHub",
    description: "Repositories and open-source work from Md. Shahrier Hasan Saki.",
  });

  const reposWithLinks = allProjects.filter((p) => p.githubUrl);

  return (
    <Container className="py-16 sm:py-24">
      <SectionHeading
        eyebrow="GitHub"
        title="Repositories"
        description="Pinned and notable repositories. More will be linked here as they're made public."
      />

      <a
        href={profile.social.github}
        target="_blank"
        rel="noreferrer"
        className="mb-10 inline-flex items-center gap-2 rounded-full border border-[var(--border-hairline)] px-4 py-2 text-sm font-medium transition hover:border-[var(--border-strong)]"
      >
        <GithubIcon size={14} /> View full profile <ArrowUpRight size={13} />
      </a>

      <div className="grid gap-5 sm:grid-cols-2">
        {reposWithLinks.map((project) => (
          <a
            key={project.slug}
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] p-6 transition hover:border-[var(--border-strong)]"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="flex items-center gap-2 text-base font-medium">
                <GithubIcon size={15} className="text-[var(--text-muted)]" />
                {project.name}
              </h3>
              <ArrowUpRight size={14} className="shrink-0 text-[var(--text-muted)] transition group-hover:text-[var(--accent-text)]" />
            </div>
            <p className="mb-4 text-sm text-[var(--text-secondary)]">{project.oneLiner}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </a>
        ))}

        <div className="flex flex-col justify-center rounded-2xl border border-dashed border-[var(--border-hairline)] p-6 text-sm text-[var(--text-secondary)]">
          More repositories — including the automation and Selenium test suites — will be linked
          here once they're public.
        </div>
      </div>
    </Container>
  );
}
