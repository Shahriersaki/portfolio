import { assetUrl } from "@/lib/assets";

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  type: string;
  color: string;
  headline: string;
  challenge: string;
  approach: string;
  whatIDid: string[];
  results: { metric: string; value: string; detail: string }[];
  skills: string[];
  screenshot: string;
  extraScreenshot?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "boutique-hotel-spa",
    client: "Boutique Hotel & Spa (NDA Protected)",
    industry: "Hospitality",
    type: "SEO Case Study",
    color: "#0f6e56",
    headline: "Growing organic visibility for a boutique hotel competing against OTAs",
    challenge:
      "A boutique hotel and spa needed to grow its organic presence and compete against large OTA platforms like Booking.com and Expedia that dominate hotel search results. The goal was to increase direct search visibility and reduce dependence on paid OTA listings.",
    approach:
      "I ran a full technical SEO audit, rebuilt the content strategy around high-intent hotel keywords, improved on-page optimization across all key pages, and implemented Google-compliant structured data to improve rich result eligibility.",
    whatIDid: [
      "Conducted a full technical SEO audit and fixed crawlability issues",
      "Researched and mapped high-intent keywords to each page",
      "Rewrote and optimized all key landing pages for target queries",
      "Implemented Hotel JSON-LD schema markup for rich results",
      "Built and optimized Google Search Console reporting workflow",
      "Created SEO-optimized blog content targeting local travel queries",
      "Monitored performance weekly and adjusted strategy based on GSC data",
    ],
    results: [
      { metric: "Impressions", value: "+25%", detail: "1.23M → 1.54M in 3 months" },
      { metric: "Clicks", value: "+8%", detail: "6.17K → 6.67K in 3 months" },
      { metric: "Avg Position", value: "9.7", detail: "Improved from 12.2 — solid page 1" },
      { metric: "Growth Period", value: "3 months", detail: "Consistent upward trend" },
    ],
    skills: ["Technical SEO", "Hotel SEO", "Content Strategy", "Schema Markup", "GA4", "Google Search Console"],
    screenshot: assetUrl("/images/hotel-perla-gsc.png"),
    extraScreenshot: assetUrl("/images/hotel-perla-comparison.png"),
  },
  {
    slug: "napa-valley-luxury-resort",
    client: "Napa Valley Luxury Resort (NDA Protected)",
    industry: "Hospitality — Napa Valley",
    type: "SEO Case Study",
    color: "#1565c0",
    headline: "Taking a Napa Valley hotel from page 3 to page 1 for competitive keywords",
    challenge:
      "A luxury hotel in Napa Valley was buried on page 3 for its most important keywords — including high-volume terms like 'hotels in napa ca' with 8,100 monthly searches. Ranking on page 3 means virtually no organic traffic. The challenge was to break through into page 1 against established competitors.",
    approach:
      "I focused on a combination of technical fixes, aggressive keyword targeting, and content optimization. Rather than targeting everything at once, I prioritized the keywords with the highest traffic potential and clearest ranking opportunity — then built content and authority around those specific terms.",
    whatIDid: [
      "Identified highest-opportunity keywords through detailed competitor analysis",
      "Fixed technical issues preventing proper crawling and indexation",
      "Rebuilt page content around target keyword clusters",
      "Improved internal linking structure to pass authority to key pages",
      "Optimized meta titles and descriptions for click-through rate",
      "Built location-specific content targeting Napa Valley travel intent",
      "Implemented structured data for hotel amenities and offers",
    ],
    results: [
      { metric: "hotels in napa ca", value: "33 → 7", detail: "↑26 positions — 8,100 monthly searches" },
      { metric: "napa hotels with pool", value: "9 → 3", detail: "↑6 positions — 390 monthly searches" },
      { metric: "hotels near french laundry", value: "8 → 3", detail: "↑5 positions — 320 monthly searches" },
      { metric: "napa hotels with spa", value: "41 → 16", detail: "↑25 positions — 720 monthly searches" },
    ],
    skills: ["Keyword Research", "On-page SEO", "Technical SEO", "Content Strategy", "Competitor Analysis", "Local SEO"],
    screenshot: assetUrl("/images/senza-rankings.png"),
  },
  {
    slug: "lakeside-historic-inn",
    client: "Lakeside Historic Inn (NDA Protected)",
    industry: "Hospitality",
    type: "SEO Case Study",
    color: "#e65100",
    headline: "Building consistent organic traffic for an independent inn",
    challenge:
      "An independent historic inn needed consistent organic search visibility to drive direct bookings and reduce reliance on OTA commissions. The focus was on building steady, reliable traffic across multiple properties.",
    approach:
      "Managed SEO across two properties simultaneously — focusing on technical health, content optimization, and maintaining strong CTR through well-crafted meta descriptions and titles that stand out in search results.",
    whatIDid: [
      "Managed SEO for two properties simultaneously",
      "Optimized all pages for target keywords and search intent",
      "Maintained strong average CTR through optimized title tags and meta descriptions",
      "Built location-specific content for travel intent queries",
      "Regular GSC monitoring and performance reporting",
      "Implemented structured data and technical improvements",
    ],
    results: [
      { metric: "Total Clicks", value: "3.48K", detail: "Consistent organic traffic" },
      { metric: "Impressions", value: "50.2K", detail: "Strong search visibility" },
      { metric: "CTR", value: "6.9%", detail: "Well above industry average of 2-3%" },
      { metric: "Avg Position", value: "8.7", detail: "Solid top-of-page-1 presence" },
    ],
    skills: ["Hotel SEO", "Technical SEO", "Content Strategy", "Google Search Console", "CTR Optimization"],
    screenshot: assetUrl("/images/dune-gsc-2.png"),
    extraScreenshot: assetUrl("/images/dune-gsc-1.png"),
  },
  {
    slug: "almadina-real-estate",
    client: "Almadina Abason Limited",
    industry: "Real Estate",
    type: "Paid Ads Case Study",
    color: "#6a1b9a",
    headline: "Generating real estate leads at scale through Facebook Ads",
    challenge:
      "Almadina needed to generate qualified leads for real estate properties at an efficient cost. The challenge was reaching the right audience in a competitive real estate market while keeping cost per result low across both awareness and conversion campaigns.",
    approach:
      "I built a full-funnel Facebook Ads strategy — running awareness campaigns to build reach at scale, engagement campaigns to qualify audience interest, and lead generation campaigns to capture contact details. Each campaign was continuously optimized based on performance data.",
    whatIDid: [
      "Built and managed a full-funnel Facebook Ads strategy from scratch",
      "Created and tested multiple ad creatives including motion graphics and videos",
      "Set up awareness campaigns reaching 300K+ people efficiently",
      "Ran engagement campaigns generating hundreds of messaging conversations",
      "Built lead generation campaigns capturing 600+ qualified meta leads",
      "Directed creation of visual content including motion graphics and promotional videos",
      "Applied Python automation to streamline campaign performance reporting",
      "Continuously optimized targeting, creatives, and budgets based on data",
    ],
    results: [
      { metric: "Total Reach", value: "318K+", detail: "Awareness campaign at $0.07 CPM" },
      { metric: "Meta Leads", value: "600+", detail: "Qualified leads at $1.28 per lead" },
      { metric: "Total Impressions", value: "460K+", detail: "Across all campaigns combined" },
      { metric: "Engagement", value: "600+", detail: "Messaging conversations generated" },
    ],
    skills: ["Facebook Ads", "Lead Generation", "Campaign Management", "Ad Copywriting", "Video Marketing", "Python Automation"],
    screenshot: assetUrl("/images/fb-ads-almadina.png"),
  },
];
