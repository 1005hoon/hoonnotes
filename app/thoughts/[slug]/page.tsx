import { promises as fs } from "fs";
import path from "path";

import cn from "clsx";

import { SITE_URL } from "@/app/constant";
import JsonLd from "@/components/json-ld";

export default async function Page(props: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const params = await props.params;
  const decodedSlug = decodeURIComponent(params.slug);

  const { default: MDXContent, metadata } = await import(
    "../_articles/" + `${decodedSlug}.mdx`
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metadata.title,
    description: metadata.description,
    author: {
      "@type": "Person",
      name: "Hoon Oh",
      url: SITE_URL,
    },
    datePublished: metadata.date,
    dateModified: metadata.date,
    publisher: {
      "@type": "Person",
      name: "Hoon Oh",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/thoughts/${params.slug}`,
    },
    articleSection: "Thoughts",
    inLanguage: metadata.korean ? "ko-KR" : "en-US",
  };

  return (
    <div
      className={cn(metadata.korean && "text-justify font-ko")}
      lang={metadata.korean ? "ko-KR" : "en"}
    >
      <MDXContent />
      <JsonLd data={jsonLd} />
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
  const params = await props.params;
  const decodedSlug = decodeURIComponent(params.slug);

  const metadata = (await import("../_articles/" + `${decodedSlug}.mdx`))
    .metadata;

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${SITE_URL}/thoughts/${decodedSlug}`,
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
