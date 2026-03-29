import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SegmentHero } from "@/components/segments/segment-hero"
import { ObjectionHandling } from "@/components/segments/objection-handling"
import { AnimatedCTASection } from "@/components/animated-cta-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "KAMTECH IA pour Services | Gagnez 10h/semaine",
  description: "Divisez par 4 le temps passé sur le support client grâce à l'automatisation IA."
}

const beforeData = {
  title: "Trop de temps au support",
  description: "Vous passez des heures chaque jour à répondre aux mêmes questions par mail ou par téléphone. \"Quels sont vos prix ?\", \"Où êtes-vous situé ?\", \"Quels sont vos délais ?\"",
}

const bridgeData = {
  title: "Chatbot répond FAQs 24/7",
  description: "L'IA Kamtech analyse votre documentation, vos tarifs, vos processus. Elle répond aux clients de manière claire, concise et professionnelle, jour et nuit.",
}

const afterData = {
  title: "Gagnez 10h/semaine",
  description: "Vous récupérez votre temps. Vos clients obtiennent des réponses instantanées. Vous pouvez vous consacrer aux tâches à forte valeur ajoutée ou développer votre activité.",
}

const servicesObjections = [
  {
    question: "Mes prix sont sur devis ou très variables selon le client.",
    answer: "Parfait. Nous apprenons à l'IA vos critères de qualification. Elle posera les bonnes questions au prospect (budget, besoins, urgence) et vous enverra un résumé complet pour que vous puissiez faire votre devis.",
  },
  {
    question: "Je suis le seul à connaître tous les détails de mon entreprise.",
    answer: "C'est pourquoi nous faisons un atelier d'intégration avec vous. Vous nous expliquez votre fonctionnement, ou nous donnons simplement à l'IA accès à vos documents internes, votre site et vos anciennes conversations pour qu'elle apprenne.",
  },
  {
    question: "Que se passe-t-il si le bot se trompe ?",
    answer: "Nous limitons ses connaissances strictement à votre base de données (RAG : Retrieval-Augmented Generation). S'il ne sait pas, il est programmé pour dire : « Je ne suis pas sûr, un membre de l'équipe va vous recontacter. »"
  }
]

export default function ServicesSegment() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <main className="pt-20">
        <SegmentHero
          segment="Prestataires de Services"
          title="Arrêtez de répondre aux mêmes questions 50 fois par semaine"
          subtitle="Automatisez votre support et la qualification de vos prospects avec une IA qui connaît votre métier sur le bout des doigts."
          before={beforeData}
          bridge={bridgeData}
          after={afterData}
        />
        <ObjectionHandling objections={servicesObjections} />
        <AnimatedCTASection />
      </main>
      <Footer />
    </div>
  )
}
