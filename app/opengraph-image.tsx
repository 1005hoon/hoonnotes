import { ImageResponse } from "next/og";

export const alt = "hoonnotes — Hoon Oh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          backgroundColor: "#fcfcfc",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 96,
            top: 96,
            bottom: 96,
            width: 1,
            backgroundColor: "#d8dbdf",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: 56,
          }}
        >
          <div style={{ fontSize: 88, fontWeight: 700, color: "#1e2125" }}>
            hoonnotes
          </div>
          <div style={{ fontSize: 34, color: "#697381", marginTop: 24 }}>
            Hoon Oh — notes on frontend engineering, product, and teams
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
