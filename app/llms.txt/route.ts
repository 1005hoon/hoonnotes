import { promises as fs } from "fs";
import path from "path";

import { SITE_URL } from "@/app/constant";

export const dynamic = "force-static";

export async function GET() {
  const articlesDirectory = path.join(
    process.cwd(),
    "app",
    "thoughts",
    "_articles"
  );
  const articles = await fs.readdir(articlesDirectory);

  const posts = await Promise.all(
    articles
      .filter((article) => article.endsWith(".mdx"))
      .map(async (article) => {
        const slug = article.replace(/\.mdx$/, "");
        const { metadata } = await import(
          `../thoughts/_articles/${slug}.mdx`
        );

        return {
          slug,
          title: metadata.title,
          description: metadata.description,
          date: metadata.date,
          sort: Number(metadata.date?.replaceAll(".", "") || 0),
        };
      })
  );
  posts.sort((a, b) => b.sort - a.sort);

  const lines = [
    "# hoonnotes",
    "",
    "> Personal site of Hoon Oh, a frontend engineer at HealingPaper, previously a founding frontend engineer at SoftlyAI. Notes on frontend engineering, product strategy, and team leadership, written in Korean and English.",
    "",
    `- [About](${SITE_URL}/): Who Hoon Oh is and what he works on`,
    "",
    "## Thoughts",
    "",
    ...posts.map((post) =>
      [
        `- [${post.title}](${SITE_URL}/thoughts/${post.slug})`,
        post.description ? `: ${post.description}` : "",
        post.date ? ` (${post.date.replaceAll(".", "-")})` : "",
      ].join("")
    ),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
