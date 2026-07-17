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
  const [bold, regular] = await Promise.all([
    fs.readFile(path.join(fontsDirectory, "Pretendard-Bold.otf")),
    fs.readFile(path.join(fontsDirectory, "Pretendard-Regular.otf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          backgroundColor: "#fcfcfc",
          fontFamily: "Pretendard",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 96,
            top: 80,
            bottom: 80,
            width: 1,
            backgroundColor: "#d8dbdf",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: 56,
            paddingTop: 40,
          }}
        >
          <div
            style={{
              fontSize: metadata.title.length > 24 ? 56 : 68,
              fontWeight: 700,
              color: "#1e2125",
              lineHeight: 1.3,
              wordBreak: "keep-all",
            }}
          >
            {metadata.title}
          </div>
          {metadata.description && (
            <div
              style={{
                fontSize: 30,
                fontWeight: 400,
                color: "#697381",
                marginTop: 28,
                lineHeight: 1.5,
                wordBreak: "keep-all",
              }}
            >
              {metadata.description}
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: 56,
            fontSize: 26,
            fontWeight: 400,
            color: "#8c95a1",
          }}
        >
          <div>hoonnotes.me</div>
          {metadata.date && <div>{metadata.date.replaceAll(".", "-")}</div>}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Pretendard", data: bold, weight: 700 },
        { name: "Pretendard", data: regular, weight: 400 },
      ],
    }
  );
}
