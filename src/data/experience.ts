export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  arrangement: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "razib-marketing",
    company: "Razib Marketing",
    role: "SEO Specialist",
    arrangement: "On-site, full-time",
    start: "Dec 2025",
    end: "Present",
    summary:
      "Leading SEO strategy for a US-based hospitality agency — helping independent and boutique hotels compete against OTAs in organic search and grow direct bookings.",
    highlights: [
      "Runs comprehensive technical audits, keyword research, and on/off-page optimization tailored to the hotel industry.",
      "Manages Google Search Console and GA4 reporting, turning data into clear action plans that support direct booking growth.",
      "Produces SEO-optimized content for hotel websites, OTA listings, and blog channels — maintaining each property's brand voice.",
      "Coordinates with a US-based team to align SEO with Google Ads, Display, and Social campaigns.",
    ],
    tags: ["Hotel SEO", "Technical SEO", "GA4", "Content Strategy", "OTA Marketing"],
  },
  {
    id: "yellow-bee-marketing",
    company: "Yellow Bee Marketing",
    role: "SEO Specialist & Content Writer",
    arrangement: "Remote, part-time",
    start: "Dec 2025",
    end: "Present",
    summary:
      "Managing end-to-end SEO and content strategy for multiple client accounts simultaneously — translating briefs into structured roadmaps with clear deliverables.",
    highlights: [
      "Manages SEO and content planning across multiple client projects with consistent quality and on-time delivery.",
      "Translates client goals into structured project roadmaps with milestones and task lists.",
      "Acts as the main point of contact between clients and the web and design teams.",
      "Produces website copy and social content aligned to each client's brand voice and search objectives.",
    ],
    tags: ["Content Strategy", "SEO", "Client Management", "Copywriting"],
  },
  {
    id: "times-research",
    company: "Times Research & Innovation Ltd.",
    role: "SEO Specialist",
    arrangement: "Full-time",
    start: "Jul 2025",
    end: "Dec 2025",
    summary:
      "Grew organic traffic across a portfolio of client websites through structured audits, content gap analysis, and outreach — while mentoring junior team members.",
    highlights: [
      "Delivered organic growth through comprehensive SEO audits and content gap analysis.",
      "Managed client reporting cycles and led outreach initiatives.",
      "Mentored junior team members on SEO fundamentals and best practices.",
    ],
    tags: ["SEO Audits", "Content Gap Analysis", "Outreach", "Mentoring"],
  },
  {
    id: "almadina-abason",
    company: "Almadina Abason Limited",
    role: "Digital Marketer",
    arrangement: "Full-time",
    start: "Oct 2024",
    end: "Jun 2025",
    summary:
      "Ran performance-driven marketing campaigns across SEO and Facebook Ads with a focus on lead generation — and applied Python automation to speed up campaign reporting.",
    highlights: [
      "Planned and executed lead-generation campaigns across SEO and Facebook Ads.",
      "Directed creation of visual content including motion graphics and promotional videos.",
      "Built Python automation scripts to streamline data collection and campaign performance analysis.",
    ],
    tags: ["Facebook Ads", "Lead Generation", "Python Automation", "Video Marketing"],
  },
  {
    id: "cocoa-lab",
    company: "Cocoa Lab Bangladesh",
    role: "Digital Marketing Specialist",
    arrangement: "Full-time",
    start: "Jan 2023",
    end: "Jul 2024",
    summary:
      "Owned the full digital marketing cycle — from SEO and content to paid campaigns across Google and Facebook — using analytics to continuously improve results.",
    highlights: [
      "Owned keyword strategy, on-page optimization, content creation, link building, and performance tracking.",
      "Managed Google Ads and Facebook Ads campaigns, refining targeting to maximize ROI.",
      "Used analytics to identify opportunities and continuously improve campaign performance.",
    ],
    tags: ["Google Ads", "Facebook Ads", "SEO", "Link Building", "Analytics"],
  },
  {
    id: "e-comfy",
    company: "E-Comfy Solutions",
    role: "E-commerce SEO Specialist",
    arrangement: "Full-time",
    start: "May 2022",
    end: "Jan 2023",
    summary:
      "First dedicated SEO role — improving product discoverability and organic rankings for clients across Shopify, Etsy, and eBay marketplaces.",
    highlights: [
      "Led SEO operations across Shopify, Etsy, and eBay — improving product discoverability and organic rankings.",
      "Created SEO-optimized product and category content for multiple clients.",
      "Monitored KPIs and delivered regular performance reports.",
    ],
    tags: ["E-commerce SEO", "Shopify", "Etsy", "eBay", "Product SEO"],
  },
];

export const education = {
  degree: "B.Sc. in Computer Science & Engineering",
  school: "City University, Dhaka",
  year: "2024",
  earlier: {
    credential: "Higher Secondary Certificate (Science)",
    school: "Amin Model Town College",
    year: "2018",
  },
};
