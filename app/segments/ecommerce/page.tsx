import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SegmentHero } from "@/components/segments/segment-hero"
import { ObjectionHandling } from "@/components/segments/objection-handling"
import { AnimatedCTASection } from "@/components/animated-cta-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "KAMTECH IA pour E-commerce | Récupérez 35% de paniers",
  description: "Récupérez les paniers abandonnés sur WhatsApp. Votre boutique ouverte H24 avec un agent de vente IA."
}

const beforeData = {
  title: "Panier abandonné",
  description: "Votre prospect met un article au panier, hésite sur la livraison ou la taille, et quitte le site sans rien acheter. C'est de l'argent perdu.",
}

const bridgeData = {
  title: "Chatbot engage avec offres",
  description: "Le bot Kamtech envoie un message WhatsApp avec un code promo, répond à ses doutes (taille, livraison, etc.) de manière personnalisée.",
}

const afterData = {
  title: "Récupérez 35% paniers",
  description: "Le client est rassuré et achète. Votre chiffre d'affaires augmente automatiquement, sans aucun effort de votre équipe marketing.",
}

const ecommerceObjections = [
  {
    question: "WhatsApp n'est-il pas trop intrusif pour relancer un client ?",
    answer: "Tout dépend de la manière dont c'est fait. Avec un opt-in clair sur votre site et un message apportant de la valeur (comme une offre ou une aide), le taux de conversion sur WhatsApp est jusqu'à 3x supérieur à l'email, avec un taux d'ouverture de 98%.",
  },
  {
    question: "Mon catalogue a 5 000 produits. Le bot peut-il tout mémoriser ?",
    answer: "Absolument. Nous connectons l'IA à votre base de données produits (via API ou fichier CSV). Le bot peut conseiller un client sur n'importe quel produit de votre catalogue instantanément.",
  },
  {
    question: "Comment gérer les retours ou les suivis de commande ?",
    answer: "Le bot s'intègre avec votre CMS (Shopify, WooCommerce, etc.) pour donner le statut de livraison en temps réel et guider le client dans la procédure de retour si nécessaire, réduisant de moitié les tickets support."
  }
]

export default function EcommerceSegment() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <main className="pt-20">
        <SegmentHero
          segment="E-commerce"
          title="Transformez les hésitations en ventes avec un vendeur IA 24/7"
          subtitle="Ne perdez plus 70% de vos visiteurs. Un chatbot WhatsApp engage vos prospects, répond à leurs doutes et sauve vos paniers abandonnés."
          before={beforeData}
          bridge={bridgeData}
          after={afterData}
        />
        <ObjectionHandling objections={ecommerceObjections} />
        <AnimatedCTASection />
      </main>
      <Footer />
    </div>
  )
}
