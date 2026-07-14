import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] p-6 transition hover:border-[var(--border-strong)]"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-medium">{project.name}</h3>
        <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--text-muted)]">{project.year}</span>
      </div>
      <p className="mb-5 flex-1 text-sm text-[var(--text-secondary)]">{project.oneLiner}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
      <span className="inline-flex items-center gap-1 text-sm text-[var(--accent-text)] opacity-0 transition group-hover:opacity-100">
        View project <ArrowRight size={13} />
      </span>
    </Link>
  );
}
