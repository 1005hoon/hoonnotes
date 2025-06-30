import PostItem from "@/components/post-item";
import { promises as fs } from "fs";
import Link from "next/link";
import path from "path";

export const metadata = {
  title: "Thoughts",
};

// In the future we can have a pagination here e.g. /1/*.mdx
const articlesDirectory = path.join(
  process.cwd(),
  "app",
  "thoughts",
  "_articles"
);

export default async function Page() {
  const articles = await fs.readdir(articlesDirectory);

  const items = [];
  for (const article of articles) {
    if (!article.endsWith(".mdx")) continue;
    const module = await import("./_articles/" + article);

    if (!module.metadata) throw new Error("Missing `metadata` in " + article);

    items.push({
      slug: article.replace(/\.mdx$/, ""),
      title: module.metadata.title,
      date: module.metadata.date || "-",
      sort: Number(module.metadata.date?.replaceAll(".", "") || 0),
    });
  }
  items.sort((a, b) => b.sort - a.sort);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <PostItem key={item.slug} post={item} />
        ))}
      </ul>
    </div>
  );
}
