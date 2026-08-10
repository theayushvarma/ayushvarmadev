import { baseURL } from "@/app/resources";

const ROOT = baseURL.replace(/\/+$/, "");

/** Absolute URL for any site path. Never produces `//` or a missing slash. */
export function absoluteUrl(path: string = ""): string {
  if (!path) return ROOT;
  return `${ROOT}${path.startsWith("/") ? "" : "/"}${path}`;
}

/** Absolute URL of the dynamic OG image for a given title. */
export function ogUrl(title: string): string {
  return absoluteUrl(`/og?title=${encodeURIComponent(title)}`);
}
