"use client"

import type React from "react"
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google"
import { Suspense, useEffect, useState } from "react"
import { getCalApi } from "@calcom/embed-react"
import { Toaster } from "sonner"
import Loader from "@/components/ui/loader"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { NoSSRWrapper } from "@/components/no-ssr-wrapper"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
})

function ClientLayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [showLoader, setShowLoader] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
    
    // Check if the initial fast rendering logic already completed
    if (document.readyState === "complete") {
      setIsReady(true);
      return;
    }

    let hasLoaded = false;
    const handleLoad = () => {
      hasLoaded = true;
      setIsReady(true);
      setShowLoader(false);
    };

    window.addEventListener("load", handleLoad);

    // If load takes more than 500ms, set showLoader to true
    // Note: We don't hide children, we just overlay the loader to avoid layout shift
    const timer = setTimeout(() => {
      if (!hasLoaded) {
        setShowLoader(true);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <html lang="fr" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Critical CSS to prevent FOUC / render-blocking white screen */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body, html {
              background-color: #000000 !important;
              color: #ffffff;
              margin: 0;
              padding: 0;
            }
            #loader-kamtech {
              position: fixed;
              top: 0; left: 0; width: 100vw; height: 100vh;
              background-color: #000000;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 9999;
              transition: opacity 0.3s ease-out;
            }
            .loader-hidden {
              opacity: 0;
              pointer-events: none;
              visibility: hidden;
            }
          `
        }} />
      </head>
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} bg-black text-white antialiased`} suppressHydrationWarning>
        {/* The loader overlay. Rendered by React but only visible when showLoader && !isReady */}
        <NoSSRWrapper>
          <div
            id="loader-kamtech"
            className={(!showLoader || isReady) ? "loader-hidden" : ""}
            aria-hidden={!showLoader || isReady}
          >
            {showLoader && !isReady && <Loader />}
          </div>
        </NoSSRWrapper>

        {/* We ALWAYS render children in place so SSR produces the actual HTML structure immediately.
            The loader just sits on top if the page hasn't finished loading after 500ms. */}
        <div>
          {children}
          <NoSSRWrapper>
            <StickyMobileCTA />
            <ExitIntentPopup />
          </NoSSRWrapper>
          <Toaster richColors position="top-right" />
        </div>
      </body>
    </html>
  )
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense
      fallback={
        <html lang="fr" className="dark" suppressHydrationWarning>
          <head>
            <style dangerouslySetInnerHTML={{
              __html: `body, html { background-color: #000000 !important; }`
            }} />
          </head>
          <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} bg-black text-white antialiased`} suppressHydrationWarning>
            {/* Minimal fallback state */}
          </body>
        </html>
      }
    >
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </Suspense>
  )
}
