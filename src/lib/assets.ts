/**
 * Resolves a public asset path relative to Vite's base URL.
 * Use this for all /public images so they work on any deployment base path.
 *
 * Example: assetUrl('/images/profile.png')
 *   → '/portfolio/images/profile.png' on GitHub Pages
 *   → '/images/profile.png' in local dev
 */
export function assetUrl(path: string): string {
  // import.meta.env.BASE_URL is injected by Vite (e.g. '/portfolio/' or '/')
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalised = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalised}`;
}
