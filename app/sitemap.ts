import { promises as fs } from "fs";
import path from "path";

import { MetadataRoute } from "next";

import { SITE_URL } from "@/app/constant";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articlesDirectory = path.join(
    process.cwd(),
    "app",
    "thoughts",
    "_articles"
  );
  const articles = await fs.readdir(articlesDirectory);

  const THOUGHTS_ROUTES = await Promise.all(
    articles
      .filter((article) => article.endsWith(".mdx"))
      .map(async (article) => {
        const slug = article.replace(/\.mdx$/, "");
        const { metadata } = await import(
          `./thoughts/_articles/${slug}.mdx`
        );

        return {
          url: `${SITE_URL}/thoughts/${slug}`,
          lastModified: metadata.date
            ? new Date(metadata.date.replaceAll(".", "-"))
            : undefined,
        };
      })
  );

  const latestPostDate = THOUGHTS_ROUTES.map((route) => route.lastModified)
    .filter((date): date is Date => date instanceof Date)
    .sort((a, b) => b.getTime() - a.getTime())[0];

  return [
    { url: SITE_URL, lastModified: latestPostDate },
    { url: `${SITE_URL}/thoughts`, lastModified: latestPostDate },
    ...THOUGHTS_ROUTES,
  ];
}
