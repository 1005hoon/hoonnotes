import { GTMEvent } from "@/types/gtm";

export function trackPageView(url: string) {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "page_view",
      page: url,
    });
    console.debug("page_view", url);
  } else {
    console.warn("GTM dataLayer is not available");
  }
}

export function trackEvent(data: GTMEvent) {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(data);
    console.debug("event", data);
  } else {
    console.warn("GTM dataLayer is not available");
  }
}
