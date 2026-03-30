"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Combien de temps avant de voir des résultats ?",
    answer:
      "Vous commencez à voir des résultats dans les 7 jours suivant le déploiement. En moyenne, nos clients observent une augmentation de 30 à 60% du taux de conversion et gagnent 10-13 heures par collaborateur chaque semaine. C'est rapidement payant.",
  },
  {
    question: "Est-ce que c'est compliqué à mettre en place ?",
    answer:
      "Non, zéro complexité. On s'occupe de tout. Vous n'avez besoin d'aucune compétence technique — pas de code, pas de développeur. Déploiement moyen : 7 jours. Notre équipe vous guide à chaque étape et vous forme à l'utilisation.",
  },
  {
    question: "Combien ça coûte ?",
    answer:
      "Chaque projet est différent. C'est pourquoi on commence par un audit gratuit pour vous proposer une solution adaptée à votre budget et vos objectifs. Pas de forfait rigide, on adapte à vos besoins réels. Vous payez pour les résultats, pas pour de l'air.",
  },
  {
    question: "Quelle différence avec un simple chatbot basique ?",
    answer:
      "Un chatbot basique répond à des questions préenregistrées. KAMTECH IA comprend le contexte, qualifie automatiquement vos prospects, s'intègre à vos outils existants (CRM, Google Sheets, email), et s'améliore chaque semaine. C'est un système, pas un robot.",
  },
  {
    question: "Est-ce que ça fonctionne pour mon secteur ?",
    answer:
      "Oui. Nos solutions fonctionnent dans tous les secteurs : commerce, immobilier, BTP, services, restauration, santé, éducation, B2B. On a des clients dans chaque secteur. On configure en fonction de votre activité spécifique et vos processus uniques.",
  },
  {
    question: "Est-ce que je garde le contrôle ?",
    answer:
      "Totalement. Vous définissez le ton, les réponses, les scénarios. On vous forme à l'utilisation. Vous restez maître de votre système et pouvez l'ajuster à tout moment. Aucun algorithme \"boîte noire\" qui échappe à votre contrôle.",
  },
  {
    question: "Puis-je intégrer avec mes outils existants ?",
    answer:
      "Bien sûr. Nous connectons votre système à vos outils existants : CRM, Google Sheets, Stripe, email, WhatsApp, Zapier, et bien d'autres. C'est justement l'avantage de notre approche — tout fonctionne ensemble, pas d'usine à gaz.",
  },
  {
    question: "Que se passe-t-il après le déploiement ?",
    answer:
      "Nous assurons un suivi continu. Vous suivez vos résultats en temps réel via notre dashboard. Chaque semaine, on optimise votre système pour augmenter vos résultats. Support 24/7. Vous n'êtes jamais seul.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 bg-black relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            className="mb-4 sm:mb-6 inline-block px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">FAQ</p>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Questions fréquentes
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Tout ce que vous devez savoir sur KAMTECH IA.
          </motion.p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-border/20 rounded-lg bg-card/50 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-4 sm:px-6 py-4 text-left flex items-start sm:items-center justify-between hover:bg-white/5 transition-colors gap-4"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-sm sm:text-base md:text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-[#E2E8F0] transition-transform flex-shrink-0 mt-1 sm:mt-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-4 sm:px-6 pb-4 border-t border-border/10">
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
