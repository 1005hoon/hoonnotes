import { promises as fs } from "fs";
import path from "path";
import cn from "clsx";

export default async function Page(props: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const params = await props.params;
  const { default: MDXContent, metadata } = await import(
    "../_articles/" + `${params.slug}.mdx`
  );

  return (
    <div
      className={cn(metadata.chinese && "text-justify font-zh")}
      lang={metadata.chinese ? "zh-Hans" : "en"}
    >
      <MDXContent />
    </div>
  );
}

export async function generateStaticParams() {
  const articles = await fs.readdir(
    path.join(process.cwd(), "app", "thoughts", "_articles")
  );

  return articles
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => ({
      params: {
        slug: name.replace(/\.mdx$/, ""),
      },
    }));
}

export async function generateMetadata(props: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const SITE_URL = "https://hoonnotes.com";

  const params = await props.params;
  const metadata = (await import("../_articles/" + `${params.slug}.mdx`))
    .metadata;

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${SITE_URL}/thoughts/${params.slug}`,
      siteName: "hoonnotes.com",
      // TODO: add dynamic og image
      // images: [{ url: `${siteUrl}/images/${params.slug}.png`, width: 800, height: 600 }]
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      // TODO: add dynamic twitter image
      // images: [`${siteUrl}/images/${params.slug}.png`],
    },
  };
}
