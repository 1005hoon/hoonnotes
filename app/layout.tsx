import "@/app/styles/globals.css";
import { constructMetadata } from "@/lib/utils/functions";
import { crimsonPro, geistMono, inter, satoshi } from "@/styles/fonts";
import { Viewport } from "next";

export const metadata = constructMetadata();
export const viewport: Viewport = {
  themeColor: "#ffcfaf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${satoshi.variable} ${inter.variable} ${geistMono.variable} ${crimsonPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
