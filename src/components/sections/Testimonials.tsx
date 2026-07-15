import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star, Eye } from "lucide-react";
import { assetUrl } from "@/lib/assets";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  screenshot?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Shahrier did a great job! Fast response, excellent communication, delivered on time, and demonstrated great knowledge in what he does. I'll definitely work with him again! Thank you so much!",
    name: "Catarina Felix",
    role: "Client",
    company: "Portugal",
    rating: 5,
    screenshot: assetUrl("/images/testimonial-catarina.png"),
  },
  {
    quote: "Professional and polite! The results turned out great, I appreciate the time taken to focus on this project! Thank you!",
    name: "Natalie Massey",
    role: "Client",
    company: "United States",
    rating: 5,
    screenshot: assetUrl("/images/testimonial-natalie.png"),
  },
  {
    quote: "Shahrier did a great job! Delivered on time, nice communication and he is knowledgeable in what he is doing! Will work with him again.",
    name: "KSU",
    role: "Client",
    company: "United States",
    rating: 5,
    screenshot: assetUrl("/images/testimonial-ksu.png"),
  },
  {
    quote: "Shahrier Saki worked above and beyond to ensure that I was a happy customer. This seller has done a good job on my store. Highly recommended!",
    name: "DD Christy",
    role: "Client",
    company: "Canada",
    rating: 5,
    screenshot: assetUrl("/images/testimonial-ddchristy.png"),
  },
  {
    quote: "It was fast delivery, Shahrier is professional and understand his work well.",
    name: "Zia Murtaza",
    role: "Client",
    company: "Pakistan",
    rating: 4,
    screenshot: assetUrl("/images/testimonial-zia.png"),
  },
];

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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-amber-400 text-amber-400" : "text-[var(--text-muted)] opacity-30"}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [activeScreenshot, setActiveScreenshot] = useState<string | null>(null);

  return (
    <section className="border-t border-[var(--border-hairline)] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollFade>
          <p className="mb-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
            Testimonials
          </p>
          <h2 className="mb-12 font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
            What clients say
          </h2>
        </ScrollFade>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollFade key={i} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] p-6 hover:border-[var(--border-strong)] transition">
                <Quote size={20} className="mb-3 shrink-0" style={{ color: "var(--accent)" }} />
                <StarRating rating={t.rating} />
                <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                  "{t.quote}"
                </p>
                <div className="border-t border-[var(--border-hairline)] pt-4 flex flex-col justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-[11px] text-[var(--text-muted)]">
                      {t.role}, {t.company}
                    </p>
                  </div>
                  {t.screenshot && (
                    <button
                      onClick={() => setActiveScreenshot(t.screenshot || null)}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--accent-text)] hover:underline cursor-pointer self-start"
                    >
                      <Eye size={12} /> View original review
                    </button>
                  )}
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>

      {/* Verified Screenshot Lightbox Modal */}
      {activeScreenshot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setActiveScreenshot(null)}
        >
          <div
            className="relative max-w-2xl w-full rounded-2xl bg-[var(--bg-1)] p-2 shadow-2xl border border-[var(--border-hairline)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition cursor-pointer"
              onClick={() => setActiveScreenshot(null)}
            >
              ✕
            </button>
            <img
              src={activeScreenshot}
              alt="Verified testimonial screenshot"
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}

