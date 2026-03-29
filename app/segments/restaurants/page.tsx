import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SegmentHero } from "@/components/segments/segment-hero"
import { ObjectionHandling } from "@/components/segments/objection-handling"
import { AnimatedCTASection } from "@/components/animated-cta-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "KAMTECH IA pour Restaurants | Plus de réservations, moins d'attente",
  description: "Automatisez vos réservations WhatsApp. Ne perdez plus aucune table parce que vous étiez trop occupé pour répondre.",
}

const beforeData = {
  title: "Perdez réservations",
  description: "Le client écrit à 20h. Vous êtes en plein service, impossible de répondre. À 22h, quand vous regardez enfin, il a déjà réservé ailleurs.",
}

const bridgeData = {
  title: "Chatbot répond instantanément",
  description: "Notre IA Kamtech prend le relais. Elle répond en 2 secondes, propose les menus, prend la réservation et la note dans votre agenda.",
}

const afterData = {
  title: "Réservez 40% plus tables",
  description: "Votre salle est pleine. Vos clients apprécient la réactivité, et vous pouvez enfin vous concentrer sur la cuisine et le service en salle.",
}

const restaurantObjections = [
  {
    question: "Mes clients veulent parler à un humain, pas à un robot.",
    answer: "L'IA Kamtech est conçue pour être chaleureuse et naturelle. De plus, 80% des clients préfèrent une réponse immédiate d'un bot à une attente de plusieurs heures pour un humain. Si le bot ne comprend pas, il peut toujours vous transférer la conversation.",
  },
  {
    question: "Comment le bot gère-t-il les allergies ou les demandes spéciales ?",
    answer: "Vous pouvez entraîner l'IA avec toutes vos spécificités (menus, allergènes, placement). Si une demande sort de son champ de compétence, elle prévient qu'un membre de l'équipe prendra le relais pour cette demande précise.",
  },
  {
    question: "Est-ce compliqué à installer avec mon système de réservation actuel ?",
    answer: "Pas du tout ! Nous pouvons connecter l'IA à la plupart des outils de réservation du marché (TheFork, Zenchef, etc.) ou simplement lui faire utiliser un Google Calendar. Tout est prêt en 7 jours.",
  }
]

export default function RestaurantSegment() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <main className="pt-20">
        <SegmentHero
          segment="Restaurants"
          title="Ne laissez plus une table vide à cause d'un message non lu"
          subtitle="Automatisez vos réservations WhatsApp et concentrez-vous sur ce qui compte vraiment : l'expérience de vos clients en salle."
          before={beforeData}
          bridge={bridgeData}
          after={afterData}
        />
        <ObjectionHandling objections={restaurantObjections} />
        <AnimatedCTASection />
      </main>
      <Footer />
    </div>
  )
}
