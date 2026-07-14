import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { experience } from "@/data/experience";
import { useSEO } from "@/lib/useSEO";

export default function Experience() {
  useSEO({
    title: "Experience",
    description: "Professional experience across SEO, digital marketing, and technical roles.",
  });

  return (
    <Container className="py-16 sm:py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Four years, six roles, one throughline"
        description="Each move added a technical layer to the last — from marketplace SEO, to full agency strategy, to building the tools that support it."
      />

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border-hairline)] sm:left-[7px]" />

        <div className="space-y-10">
          {experience.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="relative pl-8"
            >
              <span
                className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2"
                style={{
                  borderColor: i === 0 ? "var(--accent)" : "var(--border-strong)",
                  background: "var(--bg-0)",
                }}
              />

              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-medium">{role.company}</h3>
                <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--text-muted)]">
                  {role.start} — {role.end}
                </span>
              </div>
              <p className="mb-3 text-sm text-[var(--text-secondary)]">
                {role.role} · {role.arrangement}
              </p>
              <p className="mb-4 max-w-2xl text-[var(--text-secondary)]">{role.summary}</p>

              <ul className="mb-4 space-y-1.5">
                {role.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm text-[var(--text-secondary)]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {role.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
