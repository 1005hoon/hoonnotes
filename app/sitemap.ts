import { promises as fs } from "fs";
import path from "path";

import { MetadataRoute } from "next";

import { SITE_URL } from "@/app/constant";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const STATIC_ROUTES = ["/", "/thoughts", "/projects"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const articlesDirectory = path.join(
    process.cwd(),
    "app",
    "thoughts",
    "_articles"
  );
  const articles = await fs.readdir(articlesDirectory);

  const THOUGHTS_ROUTES = articles
    .filter((article) => article.endsWith(".mdx"))
    .map((article) => ({
      url: `${SITE_URL}/thoughts/${article.replace(/\.mdx$/, "")}`,
      lastModified: new Date(),
    }));

  return [...STATIC_ROUTES, ...THOUGHTS_ROUTES];
}
