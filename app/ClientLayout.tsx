"use client"

import type React from "react"
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google"
import { Suspense, useEffect, useState } from "react"
import { getCalApi } from "@calcom/embed-react"
import { Toaster } from "sonner"
import Loader from "@/components/ui/loader"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import { ExitIntentPopup } from "@/components/exit-intent-popup"

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
  const [isLoading, setIsLoading] = useState(true);

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
    
    // Simulate initial loading for premium feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} bg-black text-white antialiased`}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {children}
            <StickyMobileCTA />
            <ExitIntentPopup />
            <Toaster richColors position="top-right" />
          </>
        )}
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
        <html lang="fr" className="dark">
          <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} bg-black text-white antialiased`}>
            <Loader />
          </body>
        </html>
      }
    >
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </Suspense>
  )
}
