import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Target, Zap, Code2, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { profile } from "@/data/profile";
import { caseStudies } from "@/data/casestudies";
import { useSEO } from "@/lib/useSEO";
import { Testimonials } from "@/components/sections/Testimonials";

const STATS = [
  { value: "1.54M", label: "Organic impressions managed", sub: "Boutique Hotel & Spa — 3 months" },
  { value: "33→7", label: "Keyword position jump", sub: "Napa Valley Luxury Resort" },
  { value: "318K+", label: "People reached via ads", sub: "Almadina — $0.07 CPM" },
  { value: "4+", label: "Years of experience", sub: "Across 6 companies" },
];

const PILLARS = [
  {
    icon: TrendingUp,
    title: "SEO Strategy",
    color: "#0f6e56",
    skills: ["Technical SEO", "Hotel SEO", "Local SEO", "Entity SEO", "Content Strategy", "Link Building", "AEO & GEO"],
  },
  {
    icon: Target,
    title: "Digital Marketing",
    color: "#1565c0",
    skills: ["Google Ads", "Facebook Ads", "Lead Generation", "Content Marketing", "OTA Marketing", "Analytics & Reporting"],
  },
  {
    icon: Zap,
    title: "AI & Automation",
    color: "#6a1b9a",
    skills: ["ChatGPT", "Claude", "Gemini", "Prompt Engineering", "Python Automation", "Workflow Design"],
  },
  {
    icon: Code2,
    title: "Development",
    color: "#e65100",
    skills: ["React", "Python", "Node.js", "MongoDB", "REST APIs", "SEO Tools"],
  },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ScrollFade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  useSEO({
    title: "Home",
    description:
      "Md. Shahrier Hasan Saki — Data-Driven SEO Expert, Digital Marketer, and Software Developer with 4+ years of experience in technical SEO, paid media, AI automation, and software development.",
  });

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(circle, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--accent)" }}
          aria-hidden="true"
        />

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:items-center">
            <div>
              <FadeUp delay={0}>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-hairline)] px-4 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ background: "var(--accent)" }} />
                    <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
                  </span>
                  <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--text-secondary)]">
                    Available for new opportunities
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.08}>
                <h1 className="font-[family-name:var(--font-display)] text-4xl leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl max-w-3xl">
                  Data-Driven SEO Expert & Digital Marketer with a <span style={{ color: "var(--accent-text)" }}>Developer's Mindset</span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]">
                  Data-driven Digital Marketing Professional with 4+ years of experience in SEO, technical marketing, paid media, AI automation, and software development. Passionate about solving complex business challenges by combining analytical thinking, emerging technologies, and performance marketing to create sustainable growth.
                </p>
                <div className="mt-4 flex items-center gap-6 text-xs text-[var(--text-muted)] font-[family-name:var(--font-mono)]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" /> SEO & Technical Marketing
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" /> AI & Automation
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" /> Software Development
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.22}>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition hover:opacity-85"
                    style={{ background: "var(--text-primary)", color: "var(--bg-0)" }}
                  >
                    See my work <ArrowRight size={15} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-6 py-3 text-sm font-medium transition hover:border-[var(--accent)]"
                  >
                    Get in touch
                  </Link>
                  <a
                    href={profile.resumeUrl}
                    download
                    className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition underline-offset-4 hover:underline"
                  >
                    Download CV
                  </a>
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.25}>
              <div className="relative mx-auto max-w-[260px] lg:max-w-none">
                <div className="absolute -inset-3 rounded-2xl opacity-20 blur-xl" style={{ background: "var(--accent)" }} aria-hidden="true" />
                <img
                  src="/images/profile.png"
                  alt="Md. Shahrier Hasan Saki"
                  className="relative w-full rounded-2xl border border-[var(--border-hairline)] object-cover aspect-square shadow-2xl"
                  width={260}
                  height={260}
                />
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="border-y border-[var(--border-hairline)] py-14">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <ScrollFade key={s.label} delay={i * 0.07}>
                <div>
                  <div
                    className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-medium"
                    style={{ color: "var(--accent-text)" }}
                  >
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm font-medium text-[var(--text-primary)]">{s.label}</div>
                  <div className="mt-0.5 font-[family-name:var(--font-mono)] text-[11px] text-[var(--text-muted)]">{s.sub}</div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHAT I DO ─────────────────────────────────────── */}
      <section className="py-24">
        <Container>
          <ScrollFade>
            <p className="mb-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
              What I do
            </p>
            <h2 className="mb-12 font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
              Four disciplines, one professional
            </h2>
          </ScrollFade>

          <div className="grid gap-5 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <ScrollFade key={p.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] p-6 h-full transition hover:border-[var(--border-strong)]">
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: `${p.color}18` }}
                  >
                    <p.icon size={20} style={{ color: p.color }} />
                  </div>
                  <h3 className="mb-3 text-lg font-medium">{p.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {p.skills.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>

          <ScrollFade delay={0.2}>
            <div className="mt-6 text-center">
              <Link
                to="/skills"
                className="inline-flex items-center gap-1 text-sm text-[var(--accent-text)] hover:underline underline-offset-4"
              >
                View all skills <ArrowRight size={13} />
              </Link>
            </div>
          </ScrollFade>
        </Container>
      </section>

      {/* ── CASE STUDIES PREVIEW ─────────────────────────── */}
      <section className="border-t border-[var(--border-hairline)] py-24">
        <Container>
          <ScrollFade>
            <div className="mb-12 flex items-end justify-between gap-6">
              <div>
                <p className="mb-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  Case studies
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
                  Real work. Real results.
                </h2>
              </div>
              <Link
                to="/case-studies"
                className="hidden shrink-0 items-center gap-1 text-sm text-[var(--accent-text)] sm:flex hover:underline underline-offset-4"
              >
                All case studies <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollFade>

          <div className="grid gap-5 sm:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <ScrollFade key={cs.slug} delay={i * 0.08}>
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="group flex flex-col rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] overflow-hidden transition hover:border-[var(--border-strong)]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={cs.screenshot}
                      alt={`${cs.client} results`}
                      className="w-full h-48 object-cover object-top transition group-hover:scale-105 duration-500"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{ background: `linear-gradient(to top, ${cs.color}33, transparent)` }}
                    />
                    <span
                      className="absolute top-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-medium text-white"
                      style={{ background: cs.color }}
                    >
                      {cs.type}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <p className="mb-1 font-[family-name:var(--font-mono)] text-[11px] text-[var(--text-muted)]">{cs.industry}</p>
                    <h3 className="mb-2 text-lg font-medium">{cs.client}</h3>
                    <p className="mb-4 text-sm text-[var(--text-secondary)] flex-1">{cs.headline}</p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {cs.results.slice(0, 2).map((r) => (
                        <div key={r.metric} className="rounded-lg bg-[var(--bg-2)] p-3">
                          <div className="font-[family-name:var(--font-display)] text-xl font-medium" style={{ color: cs.color }}>
                            {r.value}
                          </div>
                          <div className="text-[11px] text-[var(--text-muted)]">{r.metric}</div>
                        </div>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm" style={{ color: cs.color }}>
                      Read case study <ArrowUpRight size={13} />
                    </span>
                  </div>
                </Link>
              </ScrollFade>
            ))}
          </div>
        </Container>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <Testimonials />

      {/* ── FEATURED TOOL ─────────────────────────────────── */}
      <section className="border-t border-[var(--border-hairline)] py-24">
        <Container>
          <ScrollFade>
            <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] p-8 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <span
                    className="mb-4 inline-block rounded-full px-3 py-1 font-[family-name:var(--font-mono)] text-[11px] font-medium text-white"
                    style={{ background: "var(--accent)" }}
                  >
                    Tool I Built
                  </span>
                  <h2 className="mb-3 font-[family-name:var(--font-display)] text-2xl tracking-tight sm:text-3xl">
                    Hotel Schema Maker
                  </h2>
                  <p className="mb-5 max-w-lg text-[var(--text-secondary)]">
                    A production SEO tool that automates technical SEO for hotels — detecting website pages, generating Google-compliant JSON-LD schema, and building XML sitemaps. Built because this problem needed solving, not because it was a course project.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://hotel-schema-maker.onrender.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:opacity-85"
                      style={{ background: "var(--text-primary)", color: "var(--bg-0)" }}
                    >
                      Live demo <ArrowUpRight size={14} />
                    </a>
                    <Link
                      to="/projects/hotel-schema-maker"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-2.5 text-sm font-medium transition hover:border-[var(--accent)]"
                    >
                      How it works
                    </Link>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end">
                  {["React", "Vite", "Turso", "Render"].map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </ScrollFade>
        </Container>
      </section>
    </>
  );
}
