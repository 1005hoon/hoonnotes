"use client";

import { trackEvent } from "@/lib/gtm";
import Link from "next/link";

type PostItemProps = {
  slug: string;
  title: any;
  date: any;
  sort: number;
};

export default function PostItem({ post }: { post: PostItemProps }) {
  const { slug, title, date } = post;

  function handlePostClick() {
    trackEvent({
      event: "post_click",
      post_title: title,
      post_slug: slug,
    });
  }

  return (
    <li className="font-medium">
      <Link
        href={`/thoughts/${slug}`}
        className="group flex gap-1 justify-between items-center"
        draggable={false}
        onClick={handlePostClick}
      >
        <span className="block text-rurikon-500 group-hover:text-rurikon-700">
          {title}
        </span>
        <span className="text-sm dot-leaders flex-1 text-rurikon-100 font-normal group-hover:text-rurikon-500 transition-colors group-hover:transition-none leading-none" />
        <time className="block text-rurikon-200 tabular-nums font-normal tracking-tighter group-hover:text-rurikon-500 transition-colors group-hover:transition-none self-start">
          {date}
        </time>
      </Link>
    </li>
  );
}
