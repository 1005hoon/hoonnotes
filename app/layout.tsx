import type { Metadata, Viewport } from "next";

// @ts-expect-error types are not available yet?
import { Suspense, unstable_ViewTransition as ViewTransition } from "react";

import cn from "clsx";
import localFont from "next/font/local";
import "katex/dist/katex.min.css";

import PageViewTracker from "@/components/page-view-tracker";
import Navbar from "@/components/navbar";
import "./globals.css";
import Script from "next/script";

const sans = localFont({
  src: "./_fonts/InterVariable.woff2",
  preload: true,
  variable: "--sans",
});

const serif = localFont({
  src: "./_fonts/LoraItalicVariable.woff2",
  preload: true,
  variable: "--serif",
});

const mono = localFont({
  src: "./_fonts/IosevkaFixedCurly-ExtendedMedium.woff2",
  preload: true,
  variable: "--mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s - hoonnotes",
    default: "hoonnotes",
  },
  description: "Product developer",
};

export const viewport: Viewport = {
  maximumScale: 1,
  colorScheme: "only light",
  themeColor: "#fcfcfc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

  return (
    <html lang="en" className="overflow-x-hidden touch-manipulation">
      <head>{gtmId && <GTMHead gtmId={gtmId} />}</head>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      <body
        className={cn(
          sans.variable,
          serif.variable,
          mono.variable,
          "w-full p-6 sm:p-10 md:p-14",
          "text-sm leading-6 sm:text-[15px] sm:leading-7 md:text-base md:leading-7",
          "text-rurikon-500",
          "antialiased"
        )}
      >
        {gtmId && <GTMBody gtmId={gtmId} />}
        <div className="fixed sm:hidden h-6 sm:h-10 md:h-14 w-full top-0 left-0 z-30 pointer-events-none content-fade-out" />
        <div className="flex flex-col mobile:flex-row">
          <Navbar />
          <main className="relative flex-1 max-w-2xl [contain:inline-size]">
            <div className="absolute w-full h-px opacity-50 bg-rurikon-border right-0 mobile:right-auto mobile:left-0 mobile:w-px mobile:h-full mobile:opacity-100" />
            <ViewTransition name="crossfade">
              <article className="pl-0 pt-6 mobile:pt-0 mobile:pl-6 sm:pl-10 md:pl-14">
                {children}
              </article>
            </ViewTransition>
          </main>
        </div>
      </body>
    </html>
  );
}

function GTMHead({ gtmId }: { gtmId: string }) {
  if (!gtmId) return <></>;

  return (
    <Script
      id="gtm-script"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}')`,
      }}
    />
  );
}

function GTMBody({ gtmId }: { gtmId: string }) {
  if (!gtmId) return <></>;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
