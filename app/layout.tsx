import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "KAMTECH IA | Automatisation WhatsApp & Chatbot IA pour PME",
  description: "Augmentez vos conversions de 30-60% avec un chatbot WhatsApp IA. Déploiement en 7 jours. Garantie 30 jours. Obtenir mon audit gratuit.",
  generator: "v0.app",
  keywords: ["chatbot WhatsApp", "automatisation IA", "PME", "conversion", "chatbot IA", "WhatsApp bot", "automatisation marketing"],
  openGraph: {
    title: "KAMTECH IA | Chatbot WhatsApp & Automatisation IA",
    description: "Transformez vos ventes avec l'IA. +60% conversions, 10-13h gagnées/semaine, déploiement 7 jours. Obtenir mon audit gratuit.",
    type: "website",
    url: "https://kamtech.ai",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
