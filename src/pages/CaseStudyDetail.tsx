import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { caseStudies } from "@/data/casestudies";
import { useSEO } from "@/lib/useSEO";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);

  useSEO({
    title: cs ? `${cs.client} — Case Study` : "Case Study",
    description: cs?.headline ?? "Digital marketing case study.",
  });

  if (!cs) {
    return (
      <Container className="py-24">
        <p className="text-[var(--text-secondary)]">Case study not found.</p>
        <Link to="/case-studies" className="mt-4 inline-flex items-center gap-1 text-sm" style={{ color: "var(--accent-text)" }}>
          <ArrowLeft size={14} /> Back to case studies
        </Link>
      </Container>
    );
  }

  return (
    <article>
      {/* Hero */}
      <div className="border-b border-[var(--border-hairline)] py-16 sm:py-24">
        <Container>
          <Link
            to="/case-studies"
            className="mb-8 inline-flex items-center gap-1 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
          >
            <ArrowLeft size={14} /> Back to case studies
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span
              className="rounded-full px-3 py-1 text-[11px] font-medium text-white"
              style={{ background: cs.color }}
            >
              {cs.type}
            </span>
            <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--text-muted)]">
              {cs.industry}
            </span>
          </div>

          <h1 className="mb-4 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
            {cs.client}
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-[var(--text-secondary)]">{cs.headline}</p>

          {/* Result numbers */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {cs.results.map((r) => (
              <div
                key={r.metric}
                className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] p-5"
              >
                <div
                  className="font-[family-name:var(--font-display)] text-3xl font-medium"
                  style={{ color: cs.color }}
                >
                  {r.value}
                </div>
                <div className="mt-1 text-sm font-medium text-[var(--text-primary)]">{r.metric}</div>
                <div className="mt-0.5 text-[11px] text-[var(--text-muted)]">{r.detail}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Body */}
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12">
            {/* Challenge */}
            <section>
              <h2 className="mb-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                The Challenge
              </h2>
              <p className="text-lg leading-relaxed text-[var(--text-secondary)]">{cs.challenge}</p>
            </section>

            {/* Approach */}
            <section>
              <h2 className="mb-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                My Approach
              </h2>
              <p className="text-lg leading-relaxed text-[var(--text-secondary)]">{cs.approach}</p>
            </section>

            {/* What I Did */}
            <section>
              <h2 className="mb-5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                What I Did
              </h2>
              <ul className="space-y-3">
                {cs.whatIDid.map((item) => (
                  <li key={item} className="flex gap-3 text-[var(--text-secondary)]">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: cs.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Screenshots */}
            <section>
              <h2 className="mb-5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Results Evidence
              </h2>
              <div className="space-y-4">
                <img
                  src={cs.screenshot}
                  alt={`${cs.client} performance data`}
                  className="w-full rounded-2xl border border-[var(--border-hairline)]"
                  loading="lazy"
                />
                {cs.extraScreenshot && (
                  <img
                    src={cs.extraScreenshot}
                    alt={`${cs.client} additional data`}
                    className="w-full rounded-2xl border border-[var(--border-hairline)]"
                    loading="lazy"
                  />
                )}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] p-5">
              <h3 className="mb-4 text-sm font-medium">Skills Used</h3>
              <div className="flex flex-wrap gap-2">
                {cs.skills.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] p-5">
              <h3 className="mb-4 text-sm font-medium">Key Results</h3>
              <div className="space-y-3">
                {cs.results.map((r) => (
                  <div key={r.metric} className="border-b border-[var(--border-hairline)] pb-3 last:border-0 last:pb-0">
                    <div className="font-medium" style={{ color: cs.color }}>{r.value}</div>
                    <div className="text-xs text-[var(--text-muted)]">{r.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="block rounded-2xl p-5 text-center text-white transition hover:opacity-90"
              style={{ background: cs.color }}
            >
              <p className="font-medium">Want results like these?</p>
              <p className="mt-1 text-sm opacity-80">Let's talk about your project</p>
            </Link>
          </aside>
        </div>
      </Container>
    </article>
  );
}
