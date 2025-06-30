"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { trackPageView } from "@/lib/gtm";

export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = new URL(pathname, window.location.origin);
      searchParams.forEach((value, key) => {
        url.searchParams.set(key, value);
      });

      const relativePathWithQuery = url.pathname + url.search;

      trackPageView(relativePathWithQuery);
    }
  }, [pathname, searchParams]);

  return <></>;
}
