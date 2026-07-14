export interface Project {
  slug: string;
  name: string;
  year: string;
  category: string;
  oneLiner: string;
  description: string;
  businessValue: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const featuredProject: Project = {
  slug: "hotel-schema-maker",
  name: "Hotel Schema Maker",
  year: "2025",
  category: "SEO Tool",
  oneLiner: "A marketing tool that automates technical SEO for hotels — no developer required.",
  businessValue:
    "Hotels competing against OTAs need perfect structured data to win in Google. This tool removes the technical barrier entirely.",
  description:
    "Hotel Schema Maker solves a real SEO problem: generating correct, Google-compliant structured data for hotel websites is technical, repetitive, and easy to get wrong. This tool automates the entire process — detect pages, generate schema, export sitemap — so hotel marketers can focus on strategy instead of JSON syntax.",
  stack: ["React", "Vite", "Turso Database", "Render"],
  githubUrl: "https://github.com/Shahriersaki/hotel-schema-maker",
  liveUrl: "https://hotel-schema-maker.onrender.com/",
  featured: true,
};

export const otherProjects: Project[] = [
  {
    slug: "mood-music-sqa",
    name: "Mood-Based Music Recommender & SQA",
    year: "2025",
    category: "Automation & QA",
    oneLiner: "A mood-based recommender system with automated unit tests for input validation.",
    businessValue: "Demonstrates automated unit testing and graceful handling of edge cases/invalid inputs.",
    description:
      "A Python application that recommends music based on user mood (Happy, Sad, Unknown). This project focuses on software quality assurance (SQA) practices, containing automated unit tests created with PyTest to handle edge cases, valid/invalid inputs, and error states gracefully.",
    stack: ["Python", "PyTest", "SQA Automation"],
    githubUrl: "https://github.com/Shahriersaki/mood_music_sqa",
  },
  {
    slug: "hotel-sqa-automation",
    name: "Hotel Booking SQA Automation",
    year: "2025",
    category: "QA & Automation",
    oneLiner: "Automated test coverage for hotel booking systems using PyTest.",
    businessValue: "Assures that key booking and checkout processes are validated automatically, reducing manual testing time.",
    description:
      "A Software Quality Assurance (QA) automation project testing a hotel booking system using Python and PyTest to ensure all test cases pass and core booking logic remains functional.",
    stack: ["Python", "PyTest", "QA Automation"],
    githubUrl: "https://github.com/Shahriersaki/hotel-sqa-automation",
  },
  {
    slug: "ecommerce-checkout-test",
    name: "E-Commerce Checkout Automation",
    year: "2025",
    category: "QA & Automation",
    oneLiner: "Automated end-to-end checkout flow validation with Selenium and PyTest.",
    businessValue: "Ensures marketing-critical user journeys (booking, checkout) work correctly before campaigns go live.",
    description:
      "An automated testing suite using Python, Selenium WebDriver, and PyTest to validate the end-to-end checkout process on Sauce Demo. Covers login, cart addition, customer detail forms, and transaction completion.",
    stack: ["Python", "Selenium", "PyTest", "E-Commerce"],
    githubUrl: "https://github.com/Shahriersaki/ecommerce-checkout-test",
  },
  {
    slug: "selenium-login-test",
    name: "Selenium Login Automation Suite",
    year: "2025",
    category: "QA & Automation",
    oneLiner: "Automated login and credential verification tests with Selenium.",
    businessValue: "Verifies user access and form authentication security components automatically.",
    description:
      "An automated login testing project designed to validate authentication logic on a demo website using Python, Selenium WebDriver, and PyTest.",
    stack: ["Python", "Selenium", "PyTest", "Authentication"],
    githubUrl: "https://github.com/Shahriersaki/selenium-login-test",
  },
];

export const allProjects = [featuredProject, ...otherProjects];
