import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { services } from "@/data/services";
import { useSEO } from "@/lib/useSEO";

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

export default function Services() {
  useSEO({
    title: "Services",
    description:
      "SEO strategy, hotel SEO, technical audits, content writing, paid advertising, AI workflows, and marketing automation — services by Md. Shahrier Hasan Saki.",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(circle, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeading
              eyebrow="Services"
              title="What I can do for your business"
              description="Every service I offer comes from real project experience — not theory. Whether you need a full SEO strategy or a one-time technical audit, here is exactly what I deliver."
            />
          </motion.div>
        </Container>
      </section>

      {/* Service Cards */}
      <section className="pb-24">
        <Container>
          <div className="space-y-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <ScrollFade key={service.slug} delay={i * 0.06}>
                  <div
                    className={`rounded-2xl border bg-[var(--bg-1)] overflow-hidden transition hover:border-[var(--border-strong)] ${
                      service.specialist
                        ? "border-[var(--accent)] ring-1 ring-[var(--accent)]/20"
                        : "border-[var(--border-hairline)]"
                    }`}
                  >
                    <div className="p-6 sm:p-8">
                      <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                            style={{ background: `${service.color}18` }}
                          >
                            <Icon size={22} style={{ color: service.color }} />
                          </div>
                          <div>
                            <h2 className="text-xl font-medium sm:text-2xl">{service.title}</h2>
                            {service.specialist && (
                              <span className="mt-1 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium text-white" style={{ background: "var(--accent)" }}>
                                <Star size={10} fill="currentColor" /> Specialist Service
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="mb-6 max-w-3xl text-[var(--text-secondary)] leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
                        <div>
                          <h3 className="mb-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                            What's included
                          </h3>
                          <ul className="grid gap-2 sm:grid-cols-2">
                            {service.included.map((item) => (
                              <li key={item} className="flex gap-2.5 text-sm text-[var(--text-secondary)]">
                                <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: service.color }} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end lg:justify-end">
                          {service.tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollFade>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border-hairline)] py-24">
        <Container>
          <ScrollFade>
            <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] p-8 text-center sm:p-12">
              <h2 className="mb-3 font-[family-name:var(--font-display)] text-2xl tracking-tight sm:text-3xl">
                Ready to grow your online presence?
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-[var(--text-secondary)]">
                Tell me about your project and I will put together a tailored plan. No generic proposals — every recommendation is based on your specific data and goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition hover:opacity-85"
                  style={{ background: "var(--text-primary)", color: "var(--bg-0)" }}
                >
                  Get in touch <ArrowRight size={15} />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-6 py-3 text-sm font-medium transition hover:border-[var(--accent)]"
                >
                  See past results
                </Link>
              </div>
            </div>
          </ScrollFade>
        </Container>
      </section>
    </>
  );
}
