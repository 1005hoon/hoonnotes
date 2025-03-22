import { crimsonPro, geistMono, inter, satoshi } from "@/app/styles/fonts";
import { MainNav } from "@/components/main-nav";
import { constructMetadata } from "@/lib/utils";
import "@/styles/globals.css";
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
        <MainNav />
        {children}
      </body>
    </html>
  );
}
