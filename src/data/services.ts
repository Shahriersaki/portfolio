import {
  TrendingUp,
  Hotel,
  Search,
  FileText,
  Megaphone,
  Brain,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  specialist?: boolean;
  included: string[];
  tags: string[];
}

export const services: Service[] = [
  {
    slug: "seo-strategy",
    title: "SEO Strategy & Consulting",
    description:
      "End-to-end SEO strategy that connects technical health, content, and link building into a unified growth plan — built on real data, not guesswork.",
    icon: TrendingUp,
    color: "#0f6e56",
    included: [
      "Full technical audit with prioritized action plan",
      "Keyword research and search intent mapping",
      "Content gap analysis and editorial calendar",
      "Competitor analysis and positioning strategy",
      "Monthly reporting with GSC and GA4 insights",
      "Ongoing strategic guidance and check-ins",
    ],
    tags: ["Keyword Research", "Technical Audits", "Content Strategy", "GA4", "GSC"],
  },
  {
    slug: "hotel-seo",
    title: "Hotel SEO",
    description:
      "Specialized SEO for independent and boutique hotels competing against OTAs like Booking.com and Expedia. I know this niche — it is my daily work at a US hospitality agency.",
    icon: Hotel,
    color: "#0f6e56",
    specialist: true,
    included: [
      "Hotel-specific keyword strategy targeting direct booking intent",
      "JSON-LD structured data (Hotel, Offer, Review, GeoCoordinates)",
      "OTA listing optimization (Booking.com, Expedia, Google Hotels)",
      "Google Business Profile setup and optimization",
      "Local SEO for destination and amenity-based queries",
      "Competitor benchmarking against OTAs and rival properties",
    ],
    tags: ["Hotel SEO", "Schema Markup", "Local SEO", "OTA Optimization", "GBP"],
  },
  {
    slug: "technical-seo-audits",
    title: "Technical SEO Audits",
    description:
      "Deep-dive technical audits that find and fix the issues preventing search engines from crawling, indexing, and ranking your pages correctly.",
    icon: Search,
    color: "#0f6e56",
    included: [
      "Crawlability and indexation analysis",
      "Core Web Vitals and site speed assessment",
      "Schema markup audit and implementation plan",
      "Internal linking structure review",
      "Mobile usability and rendering checks",
      "Prioritized fix list with effort-to-impact scoring",
    ],
    tags: ["Technical SEO", "Core Web Vitals", "Crawlability", "Indexation", "Screaming Frog"],
  },
  {
    slug: "content-strategy",
    title: "Content Strategy & Writing",
    description:
      "SEO-driven content that ranks — from topical authority maps and keyword clusters to fully written, optimized articles, landing pages, and hotel descriptions.",
    icon: FileText,
    color: "#1565c0",
    included: [
      "Topical authority mapping and content clusters",
      "SEO-optimized blog posts and landing pages",
      "Hotel website copy and OTA listing descriptions",
      "Content briefs with target keywords and structure",
      "Meta title and description optimization",
      "Content performance tracking and iteration",
    ],
    tags: ["Content Marketing", "Copywriting", "Blog Writing", "Topical Authority"],
  },
  {
    slug: "paid-advertising",
    title: "Paid Advertising",
    description:
      "Full-funnel ad campaigns on Facebook and Google — from awareness to lead capture — built around real conversion data, not vanity metrics.",
    icon: Megaphone,
    color: "#6a1b9a",
    included: [
      "Campaign strategy and audience targeting",
      "Ad creative direction and copywriting",
      "Facebook Ads and Google Ads setup and management",
      "A/B testing for creatives, audiences, and placements",
      "Lead generation campaign optimization",
      "Weekly performance reporting and budget optimization",
    ],
    tags: ["Facebook Ads", "Google Ads", "Lead Generation", "A/B Testing", "Retargeting"],
  },
  {
    slug: "ai-workflow-integration",
    title: "AI Workflow Integration",
    description:
      "Integrating AI tools like ChatGPT, Claude, and Gemini into your marketing workflows — not as novelties, but as real productivity multipliers.",
    icon: Brain,
    color: "#e65100",
    included: [
      "Audit of current workflows for AI automation potential",
      "Custom prompt libraries for content, research, and analysis",
      "AI-assisted content creation and editing pipelines",
      "Research and competitor analysis automation",
      "Training your team on effective AI usage",
      "Custom Python scripts for AI-powered workflows",
    ],
    tags: ["ChatGPT", "Claude", "Gemini", "Prompt Engineering", "AI Workflow Design"],
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    description:
      "Custom automation scripts and workflows that eliminate hours of manual marketing work — data collection, reporting, campaign analysis, and more.",
    icon: Workflow,
    color: "#e65100",
    included: [
      "Campaign performance reporting automation",
      "Data collection and scraping scripts (Python)",
      "Automated SEO monitoring and alerting",
      "Custom dashboards and report generation",
      "Process documentation and handoff",
      "Ongoing maintenance and iteration",
    ],
    tags: ["Python Automation", "Selenium", "Workflow Automation", "Process Automation"],
  },
];
