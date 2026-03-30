import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  metadataBase: new URL("https://kamtech.online"),
  title: "KAMTECH IA | Automatisation WhatsApp & Chatbot IA pour PME",
  description: "Augmentez vos conversions de 30-60% avec un chatbot WhatsApp IA. Déploiement en 7 jours. Garantie 30 jours. Obtenir mon audit gratuit.",
  generator: "v0.app",
  keywords: ["chatbot WhatsApp", "automatisation IA", "PME", "conversion", "chatbot IA", "WhatsApp bot", "automatisation marketing"],
  openGraph: {
    title: "KAMTECH IA | Chatbot WhatsApp & Automatisation IA",
    description: "Transformez vos ventes avec l'IA. +60% conversions, 10-13h gagnées/semaine, déploiement 7 jours. Obtenir mon audit gratuit.",
    type: "website",
    url: "https://kamtech.online",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KAMTECH IA",
    url: "https://kamtech.online",
    logo: "https://kamtech.online/icon.svg",
    description: "Automatisation WhatsApp & Chatbot IA pour PME",
  }

  return (
    <ClientLayout>
      <Script
        defer
        src="https://umami.kamtech.online/script.js"
        data-website-id="ffe15763-97ed-4db8-88e3-7f3923a42ce2"
        strategy="afterInteractive"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </ClientLayout>
  )
}
