import { assetUrl } from "@/lib/assets";

export const profile = {
  name: "Md. Shahrier Hasan Saki",
  role: "Data-Driven SEO Expert & Digital Marketer",
  roleSubtitle: "SEO · Automation · AI · Development",
  location: "Dhaka, Bangladesh",
  email: "shahrierseopro@gmail.com",
  tagline: "I help businesses grow online — through strategy, content, and the tools I build to make it faster.",
  summary:
    "Data-driven Digital Marketing Professional with 4+ years of experience in SEO, technical marketing, paid media, AI automation, and software development. Passionate about solving complex business challenges by combining analytical thinking, emerging technologies, and performance marketing to create sustainable growth.",
  social: {
    linkedin: "https://www.linkedin.com/in/seo-expert-saki/",
    github: "https://github.com/Shahriersaki",
    leetcode: "https://leetcode.com/u/tlIY7zMbuS/",
    hackerrank: "https://www.hackerrank.com/profile/shahrierseopro",
  },
  resumeUrl: assetUrl("/resume/Shahrier-Hasan-Saki-Resume.pdf"),
};

export interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  description: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "SEO",
    icon: "📈",
    color: "#0f6e56",
    description: "End-to-end search strategy — from technical audits to content and link building.",
    skills: [
      "Technical SEO",
      "On-page SEO",
      "Off-page SEO",
      "Hotel SEO",
      "Local SEO",
      "Entity SEO",
      "Content Strategy",
      "Keyword Research",
      "Technical Audits",
      "Google Search Console",
      "GA4",
      "AI Search Optimization",
      "AEO",
      "GEO",
      "Link Building",
      "Competitor Analysis",
    ],
  },
  {
    category: "Digital Marketing",
    icon: "🎯",
    color: "#1565c0",
    description: "Performance campaigns, paid media, and content that drives measurable results.",
    skills: [
      "Google Ads",
      "Facebook Ads",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Lead Generation",
      "Campaign Management",
      "Conversion Optimization",
      "Analytics & Reporting",
      "Brand Strategy",
      "OTA Marketing",
      "Copywriting",
    ],
  },
  {
    category: "AI & Automation",
    icon: "🤖",
    color: "#6a1b9a",
    description: "AI-powered workflows, prompt engineering, and automation scripts that save hours.",
    skills: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Prompt Engineering",
      "AI Workflow Design",
      "AI Research",
      "Python Automation",
      "Selenium",
      "PyTest",
      "API Testing",
      "Workflow Automation",
      "Process Automation",
    ],
  },
  {
    category: "Development",
    icon: "⚡",
    color: "#e65100",
    description: "Full-stack skills to build the tools marketing teams actually need.",
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "SQL",
      "Git",
      "GitHub",
      "Vite",
      "REST APIs",
      "Turso",
      "Render",
    ],
  },
];

export const whatIDo = [
  {
    icon: "📈",
    title: "SEO Strategy",
    description:
      "Technical audits, keyword research, content planning, and link building — for agencies, hotels, and e-commerce brands. I've managed SEO across Shopify, Etsy, eBay, and hospitality platforms.",
  },
  {
    icon: "🎯",
    title: "Digital Marketing",
    description:
      "End-to-end campaign management across Google Ads, Facebook Ads, and social channels. I translate business goals into measurable marketing plans with clear KPIs.",
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    description:
      "I integrate AI tools into real marketing workflows — for content creation, research, reporting, and process automation. I also build custom Python scripts to eliminate repetitive work.",
  },
  {
    icon: "⚡",
    title: "Technical Tools",
    description:
      "When the right tool doesn't exist, I build it. Hotel Schema Maker is a production app used to automate technical SEO for hotels — built with React, Vite, and a live database.",
  },
];
