// Utility for WhatsApp integration with personalized messages for different sections
export const WHATSAPP_PHONE = "237658992588" // Cameroon number format

// Messages organized by section and action type
export const whatsappMessages = {
  // Hero Section
  auditGratuit: "Bonjour, je veux réserver mon audit gratuit KAMTECH IA pour voir comment automatiser mon activité. Merci!",
  parlerExpert: "Bonjour, je voudrais parler à un expert de KAMTECH IA maintenant pour discuter de mon projet.",
  
  // Header
  headerAudit: "Bonjour, je suis intéressé par l'audit gratuit KAMTECH IA. Pouvez-vous m'en dire plus?",
  
  // CTA Final Section
  placesLimitees: "Bonjour, je veux réserver une des 5 places limitées pour cet audit gratuit cette semaine!",
  contactDirect: "Bonjour, je voudrais vous contacter directement pour discuter de mes besoins en automatisation IA.",
  
  // General inquiries
  demandeGeneral: "Bonjour, je voudrais en savoir plus sur KAMTECH IA et vos services d'automatisation.",
} as const

export type WhatsAppMessageKey = keyof typeof whatsappMessages

export function getWhatsAppLink(messageKey: WhatsAppMessageKey): string {
  const message = whatsappMessages[messageKey]
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`
}

export function openWhatsAppChat(messageKey: WhatsAppMessageKey): void {
  if (typeof window !== "undefined") {
    const link = getWhatsAppLink(messageKey)
    window.open(link, "_blank")
  }
}
