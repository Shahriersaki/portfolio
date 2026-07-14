import { Container, SectionHeading } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { useSEO } from "@/lib/useSEO";

interface LabItem {
  title: string;
  description: string;
  status: "Live" | "In progress" | "Planned";
  tags: string[];
}

// Add new experiments here as they're built — this list is designed to grow.
const labs: LabItem[] = [
  {
    title: "More experiments coming soon",
    description:
      "This space is for smaller, ongoing work — SEO tools, AI experiments, automation scripts, and open-source utilities that don't need a full case study.",
    status: "Planned",
    tags: ["SEO Tools", "AI", "Automation"],
  },
];

export default function Labs() {
  useSEO({
    title: "Labs",
    description: "Ongoing experiments in SEO tooling, AI workflows, automation scripts, and technical SEO.",
  });

  return (
    <Container className="py-16 sm:py-24">
      <SectionHeading
        eyebrow="Labs"
        title="Experiments"
        description="Smaller, ongoing builds — SEO tools, AI workflows, automation scripts, and technical SEO utilities. This section grows over time."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {labs.map((lab) => (
          <div key={lab.title} className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] p-6">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-base font-medium">{lab.title}</h3>
              <span className="rounded-full border border-[var(--border-hairline)] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                {lab.status}
              </span>
            </div>
            <p className="mb-4 text-sm text-[var(--text-secondary)]">{lab.description}</p>
            <div className="flex flex-wrap gap-2">
              {lab.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
