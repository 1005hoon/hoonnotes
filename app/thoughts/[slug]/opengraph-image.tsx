import { promises as fs } from "fs";
import path from "path";

import { ImageResponse } from "next/og";

export { generateStaticParams } from "./page";

export const alt = "hoonnotes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const decodedSlug = decodeURIComponent(params.slug);

  const { metadata } = await import(`../_articles/${decodedSlug}.mdx`);

  const fontsDirectory = path.join(process.cwd(), "assets", "fonts");
  const bold = await fs.readFile(
    path.join(fontsDirectory, "Pretendard-Bold.otf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "88px 96px",
          backgroundColor: "#fcfcfc",
          fontFamily: "Pretendard",
        }}
      >
        <div
          style={{
            fontSize: metadata.title.length > 18 ? 80 : 96,
            fontWeight: 700,
            color: "#1e2125",
            lineHeight: 1.25,
            wordBreak: "keep-all",
            textWrap: "balance",
            maxWidth: 1008,
          }}
        >
          {metadata.title}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Pretendard", data: bold, weight: 700 }],
    }
  );
}
