"use client"

import { useCallback, useMemo } from "react"
import { Button } from "./ui/button"
import { ArrowRight, ShieldCheck, Zap, Clock } from "lucide-react"
import { ParticleTextEffect } from "./particle-text-effect"
import { openWhatsAppChat } from "@/lib/whatsapp"
import { useABTest } from "@/hooks/use-ab-test"
import { AuditForm } from "./audit-form"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog"

export function HeroSection() {
  const handleExpertClick = useCallback(() => {
    openWhatsAppChat("parlerExpert")
  }, [])

  // A/B Test for Headline (5 variations)
  const headlineVariant = useABTest<"A" | "B" | "C" | "D" | "E">(
    "hero_headline",
    ["A", "B", "C", "D", "E"]
  )

  const headlines = {
    A: "Pendant que vous dormez, vos clients demandent votre prix",
    B: "Automatisez votre prospection et gagnez 20h par semaine",
    C: "Un employé IA qui répond à vos clients 24/7",
    D: "Multipliez vos ventes sans recruter avec l'IA",
    E: "Arrêtez de perdre des clients à cause des temps de réponse"
  }

  // A/B Test for CTA Button
  const ctaVariant = useABTest<"A" | "B" | "C">(
    "hero_cta",
    ["A", "B", "C"]
  )

  const ctaConfig = {
    A: { text: "Réserver mon audit gratuit", color: "bg-blue-600 hover:bg-blue-700" },
    B: { text: "Voir une démo en direct", color: "bg-indigo-600 hover:bg-indigo-700" },
    C: { text: "Découvrir la solution", color: "bg-blue-500 hover:bg-blue-600" }
  }

  return (
    <section className="py-12 sm:py-24 px-4 relative overflow-hidden min-h-[100dvh] flex flex-col justify-between">
      <div className="hidden sm:flex flex-1 items-start justify-center pt-20">
        <ParticleTextEffect words={["KAMTECH", "IA", "CHATBOT", "KAMTECH"]} />
      </div>

      <div className="container mx-auto text-center relative z-10 pt-20 sm:pt-0 pb-8 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="mb-4 sm:mb-6 inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border rounded-full border-blue-500/30 backdrop-blur-md">
            <p className="text-[11px] sm:text-sm font-semibold text-blue-400">Audit offert avec essai de 7 jours</p>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight">
            Pendant que vous dormez, vos clients demandent votre prix
          </h1>
          <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-300 mb-6 sm:mb-8 text-balance">
            <span className="hidden sm:block mb-3">
              <strong>Le problème :</strong> Vous perdez 20 heures/semaine en tâches répétitives. Vos prospects attendent une réponse pendant 24h. Votre concurrent vous double.
            </span>
            <span className="block mb-2 sm:mb-3">
              <strong>La solution :</strong> Un système IA qui travaille pour vous, qualifie vos prospects, prend des rendez-vous, et propulse votre croissance.
            </span>
            <span className="text-blue-400 font-bold text-xs sm:text-base">
              Déployé en 7 jours. Résultats en 30 jours. Garantie 100% satisfait.
            </span>
          </h2>

          <div className="flex flex-col items-center gap-4 sm:gap-6 w-full px-2 sm:px-0">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className={`${ctaVariant ? ctaConfig[ctaVariant].color : ctaConfig["A"].color} text-white group text-sm sm:text-base font-semibold w-full sm:w-auto px-8`}
                  >
                    {ctaVariant ? ctaConfig[ctaVariant].text : ctaConfig["A"].text}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="p-0 bg-transparent border-none max-w-2xl">
                  <AuditForm />
                </DialogContent>
              </Dialog>

              <Button 
                onClick={handleExpertClick}
                size="lg" 
                variant="outline" 
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent font-bold w-full sm:w-auto px-8 h-14 rounded-full transition-all hover:-translate-y-1"
              >
                Parler à un expert
              </Button>
            </div>
            
            <p className="text-gray-500 text-sm font-medium flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              Sans engagement. Aucune carte requise.
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-10 mb-16 mt-12 text-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/10 rounded-full">
                <ShieldCheck className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold">Garantie 30 jours</p>
                <p className="text-gray-400 text-xs">Satisfait ou remboursé</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-full">
                <Zap className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold">Déploiement en 72h</p>
                <p className="text-gray-400 text-xs">Clé en main</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/10 rounded-full">
                <Clock className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold">Support 24/7</p>
                <p className="text-gray-400 text-xs">Équipe dédiée</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
