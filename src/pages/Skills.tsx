import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/ui/Container";
import { useSEO } from "@/lib/useSEO";
import {
  TrendingUp,
  Target,
  Cpu,
  Code2,
  Briefcase,
  Layers,
  Award,
  Clock,
} from "lucide-react";

interface SkillGroup {
  label: string;
  level: "Expert" | "Advanced" | "Proficient";
  percentage: number;
  skills: string[];
}

interface SkillSection {
  category: string;
  icon: any;
  color: string;
  bg: string;
  description: string;
  groups: SkillGroup[];
}

const SKILL_SECTIONS: SkillSection[] = [
  {
    category: "SEO",
    icon: TrendingUp,
    color: "#0f6e56",
    bg: "#0f6e5614",
    description: "My primary discipline — every layer of search engine optimization from technical to content.",
    groups: [
      {
        label: "Technical SEO",
        level: "Expert",
        percentage: 95,
        skills: ["Technical Audits", "Schema Markup", "Structured Data", "Core Web Vitals", "Crawlability", "Indexation", "Site Speed", "Mobile Optimization", "Canonical URLs", "robots.txt", "XML Sitemaps"],
      },
      {
        label: "Strategy & Research",
        level: "Expert",
        percentage: 90,
        skills: ["Keyword Research", "Competitor Analysis", "Content Gap Analysis", "Search Intent Mapping", "Entity SEO", "Topical Authority", "Link Building", "Outreach"],
      },
      {
        label: "Specializations",
        level: "Expert",
        percentage: 95,
        skills: ["Hotel SEO", "Local SEO", "E-commerce SEO", "OTA Optimization", "AI Search Optimization", "AEO", "GEO", "Google Business Profile"],
      },
      {
        label: "Tools & Platforms",
        level: "Expert",
        percentage: 92,
        skills: ["Google Search Console", "GA4", "SEMrush", "Ahrefs", "Screaming Frog", "Google Tag Manager"],
      },
    ],
  },
  {
    category: "Digital Marketing",
    icon: Target,
    color: "#1565c0",
    bg: "#1565c014",
    description: "End-to-end campaign management across paid and organic channels.",
    groups: [
      {
        label: "Paid Advertising",
        level: "Expert",
        percentage: 90,
        skills: ["Facebook Ads", "Google Ads", "Audience Targeting", "Retargeting", "A/B Testing", "Budget Optimization", "Campaign Management", "Ad Copywriting"],
      },
      {
        label: "Content & Social",
        level: "Advanced",
        percentage: 85,
        skills: ["Content Strategy", "Content Marketing", "Copywriting", "Blog Writing", "Hotel Descriptions", "OTA Listings", "Social Media Marketing", "Email Marketing"],
      },
      {
        label: "Analytics & Reporting",
        level: "Expert",
        percentage: 90,
        skills: ["GA4", "Facebook Ads Manager", "Google Ads Dashboard", "KPI Reporting", "Performance Analysis", "Conversion Optimization", "Lead Generation"],
      },
    ],
  },
  {
    category: "AI & Automation",
    icon: Cpu,
    color: "#6a1b9a",
    bg: "#6a1b9a14",
    description: "Integrating AI tools into real workflows and building automation that saves hours.",
    groups: [
      {
        label: "AI Tools",
        level: "Expert",
        percentage: 92,
        skills: ["ChatGPT", "Claude", "Gemini", "AI-assisted Research", "Prompt Engineering", "AI Workflow Design", "AI Content Strategy"],
      },
      {
        label: "Automation & Testing",
        level: "Advanced",
        percentage: 85,
        skills: ["Python Automation", "Selenium WebDriver", "PyTest", "API Testing", "Unit Testing", "Workflow Automation", "Process Automation", "Data Collection Scripts"],
      },
    ],
  },
  {
    category: "Development",
    icon: Code2,
    color: "#e65100",
    bg: "#e6510014",
    description: "Full-stack development skills — used to build real tools that marketing teams need.",
    groups: [
      {
        label: "Frontend",
        level: "Advanced",
        percentage: 80,
        skills: ["React", "JavaScript", "TypeScript", "Vite", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"],
      },
      {
        label: "Backend & Database",
        level: "Advanced",
        percentage: 78,
        skills: ["Node.js", "Python", "MongoDB", "SQL", "Turso", "REST APIs", "Express.js"],
      },
      {
        label: "Tools & Workflow",
        level: "Advanced",
        percentage: 82,
        skills: ["Git", "GitHub", "GitHub Actions", "Vercel", "Render", "VS Code", "Terminal", "CI/CD"],
      },
    ],
  },
  {
    category: "Project Management",
    icon: Briefcase,
    color: "#2e7d32",
    bg: "#2e7d3214",
    description: "Client coordination, project planning, and cross-timezone collaboration.",
    groups: [
      {
        label: "Client & Team",
        level: "Advanced",
        percentage: 85,
        skills: ["Client Communication", "Requirement Gathering", "Cross-timezone Collaboration", "Stakeholder Reporting", "Project Planning", "Milestone Tracking", "Technical Documentation"],
      },
    ],
  },
];

function ScrollFade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Skills() {
  useSEO({
    title: "Skills",
    description: "Complete skills inventory — SEO, digital marketing, AI & automation, development, and project management.",
  });

  // Calculate total skill count
  const totalSkills = SKILL_SECTIONS.reduce((acc, s) => {
    return acc + s.groups.reduce((gAcc, g) => gAcc + g.skills.length, 0);
  }, 0);

  return (
    <Container className="py-16 sm:py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Everything I bring to the table"
        description="Four years of experience across SEO, digital marketing, AI, and development — organized by discipline."
      />

      {/* Summary Cards */}
      <div className="mb-12 grid gap-4 grid-cols-1 sm:grid-cols-3">
        <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] p-5 flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-500">
            <Layers size={18} />
          </div>
          <div>
            <div className="font-[family-name:var(--font-mono)] text-2xl font-bold">{totalSkills}</div>
            <div className="text-xs text-[var(--text-muted)]">Verified Technical Skills</div>
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] p-5 flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
            <Award size={18} />
          </div>
          <div>
            <div className="font-[family-name:var(--font-mono)] text-2xl font-bold">5 Pillars</div>
            <div className="text-xs text-[var(--text-muted)]">Integrated Disciplines</div>
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] p-5 flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
            <Clock size={18} />
          </div>
          <div>
            <div className="font-[family-name:var(--font-mono)] text-2xl font-bold">4+ Years</div>
            <div className="text-xs text-[var(--text-muted)]">Professional Experience</div>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        {SKILL_SECTIONS.map((section, i) => {
          const Icon = section.icon;
          const sectionSkillsCount = section.groups.reduce((acc, g) => acc + g.skills.length, 0);

          return (
            <ScrollFade key={section.category} delay={i * 0.05}>
              <div className="rounded-2xl border border-[var(--border-hairline)] overflow-hidden">
                {/* Header */}
                <div className="p-6 sm:p-8" style={{ background: section.bg }}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                        style={{ background: `${section.color}18` }}
                      >
                        <Icon size={22} style={{ color: section.color }} />
                      </div>
                      <div>
                        <h2
                          className="font-[family-name:var(--font-display)] text-2xl font-medium"
                          style={{ color: section.color }}
                        >
                          {section.category}
                        </h2>
                        <p className="mt-1 text-sm text-[var(--text-secondary)]">{section.description}</p>
                      </div>
                    </div>
                    <span
                      className="shrink-0 rounded-full px-3 py-1 text-[11px] font-medium text-white"
                      style={{ background: section.color }}
                    >
                      {sectionSkillsCount} skills
                    </span>
                  </div>
                </div>

                {/* Skill groups */}
                <div className="divide-y divide-[var(--border-hairline)] bg-[var(--bg-1)]">
                  {section.groups.map((group) => (
                    <div key={group.label} className="p-6 sm:p-8">
                      {/* Subgroup Header with Level and Progress Bar */}
                      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                            {group.label}
                          </h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--text-muted)] uppercase">
                            {group.level}
                          </span>
                          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-[var(--bg-2)] border border-[var(--border-hairline)]">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${group.percentage}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.1 }}
                              className="h-full rounded-full"
                              style={{ background: section.color }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border px-3 py-1.5 text-sm transition hover:border-[var(--accent)] hover:text-[var(--accent-text)] hover:bg-[var(--accent-bg)] cursor-default"
                            style={{ borderColor: "var(--border-hairline)", color: "var(--text-secondary)" }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFade>
          );
        })}
      </div>
    </Container>
  );
}
