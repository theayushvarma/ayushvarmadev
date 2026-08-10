import { baseURL } from "@/app/resources";
import { absoluteUrl } from "@/app/utils/url";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
