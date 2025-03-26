import { crimsonPro, geistMono, inter, satoshi } from "@/app/styles/fonts";
import { MainNav } from "@/components/main-nav";
import { Providers } from "@/components/providers";
import { constructMetadata } from "@/lib/utils";
import "@/styles/globals.css";
import { unstable_ViewTransition as ViewTransition } from "react";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satoshi.variable} ${inter.variable} ${geistMono.variable} ${crimsonPro.variable} mx-auto max-w-[692px] overflow-x-hidden bg-gray-100 px-6 py-12 antialiased sm:py-32 md:overflow-x-visible md:py-16`}
      >
        <Providers>
          <MainNav />
          <ViewTransition name="crossfade">
            <div>{children}</div>
          </ViewTransition>
        </Providers>
      </body>
    </html>
  );
}
