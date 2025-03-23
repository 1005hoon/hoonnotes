import { crimsonPro, geistMono, inter, satoshi } from "@/app/styles/fonts";
import { MainNav } from "@/components/main-nav";
import { Providers } from "@/components/providers";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satoshi.variable} ${inter.variable} ${geistMono.variable} ${crimsonPro.variable} text-gray-1200 mx-auto min-h-screen max-w-3xl overflow-x-hidden px-6 py-12 antialiased sm:py-32 md:overflow-x-visible md:py-16`}
      >
        <Providers>
          <MainNav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
