import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { caseStudies } from "@/data/casestudies";
import { useSEO } from "@/lib/useSEO";

export default function CaseStudies() {
  useSEO({
    title: "Case Studies",
    description: "Real SEO and digital marketing case studies spanning boutique hospitality, real estate lead generation, and eCommerce paid campaigns with real results.",
  });

  return (
    <Container className="py-16 sm:py-24">
      <SectionHeading
        eyebrow="Case Studies"
        title="Real work. Real results."
        description="Every case study here is built on real data — real clients, real campaigns, real numbers. No invented metrics."
      />

      <div className="space-y-8">
        {caseStudies.map((cs, i) => (
          <motion.div
            key={cs.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              to={`/case-studies/${cs.slug}`}
              className="group grid gap-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] overflow-hidden transition hover:border-[var(--border-strong)] lg:grid-cols-[380px_1fr]"
            >
              <div className="relative overflow-hidden h-56 lg:h-auto">
                <img
                  src={cs.screenshot}
                  alt={`${cs.client} results screenshot`}
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to right, transparent, ${cs.color}22)` }}
                />
              </div>

              <div className="flex flex-col justify-center p-6 lg:p-8">
                <div className="mb-4 flex items-center gap-3">
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

                <h2 className="mb-2 text-xl font-medium sm:text-2xl">{cs.client}</h2>
                <p className="mb-6 text-[var(--text-secondary)]">{cs.headline}</p>

                <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {cs.results.map((r) => (
                    <div key={r.metric} className="rounded-xl bg-[var(--bg-2)] p-3">
                      <div
                        className="font-[family-name:var(--font-display)] text-xl font-medium"
                        style={{ color: cs.color }}
                      >
                        {r.value}
                      </div>
                      <div className="mt-0.5 text-[11px] text-[var(--text-muted)]">{r.metric}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.skills.slice(0, 4).map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>

                <span
                  className="inline-flex items-center gap-1 text-sm font-medium"
                  style={{ color: cs.color }}
                >
                  Read full case study <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* E-commerce Toy Shop Quick Result Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: caseStudies.length * 0.08 }}
          className="grid gap-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] overflow-hidden lg:grid-cols-[380px_1fr]"
        >
          <div className="relative overflow-hidden h-56 lg:h-auto">
            <img
              src="/images/ecom-ads.png"
              alt="E-commerce Toy Shop Facebook Ads results"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(to right, transparent, rgba(46, 125, 50, 0.13))` }}
            />
          </div>

          <div className="flex flex-col justify-center p-6 lg:p-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-3 py-1 text-[11px] font-medium text-white bg-[#2e7d32]"
              >
                Facebook Ads
              </span>
              <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--text-muted)]">
                E-commerce · Toy Shop
              </span>
              <span className="rounded-full border border-[var(--border-hairline)] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                Quick Result
              </span>
            </div>

            <h2 className="mb-2 text-xl font-medium sm:text-2xl">E-commerce Toy Shop</h2>
            <p className="mb-6 text-[var(--text-secondary)]">
              Scaled campaign results and driving purchase intent for an online children's toy retailer using hyper-targeted Facebook Ads.
            </p>

            <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl bg-[var(--bg-2)] p-3">
                <div
                  className="font-[family-name:var(--font-display)] text-xl font-medium text-[#2e7d32]"
                >
                  9,351
                </div>
                <div className="mt-0.5 text-[11px] text-[var(--text-muted)]">Website Add-to-Carts</div>
              </div>
              <div className="rounded-xl bg-[var(--bg-2)] p-3">
                <div
                  className="font-[family-name:var(--font-display)] text-xl font-medium text-[#2e7d32]"
                >
                  $0.001
                </div>
                <div className="mt-0.5 text-[11px] text-[var(--text-muted)]">Cost per Result</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Tag>Facebook Ads</Tag>
              <Tag>Audience Targeting</Tag>
              <Tag>Budget Optimization</Tag>
              <Tag>E-commerce Marketing</Tag>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
