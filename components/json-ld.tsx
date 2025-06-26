import Script from "next/script";

export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <Script
      id={`json-ld-${data.headline}`}
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
