import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description: string;
}

const SITE_NAME = "Shahrier Hasan Saki";

export function useSEO({ title, description }: SEOOptions) {
  useEffect(() => {
    document.title = `${title} — ${SITE_NAME}`;

    const setMeta = (selector: string, content: string) => {
      const el = document.head.querySelector(selector);
      if (el) el.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', `${title} — ${SITE_NAME}`);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', `${title} — ${SITE_NAME}`);
    setMeta('meta[name="twitter:description"]', description);
  }, [title, description]);
}
