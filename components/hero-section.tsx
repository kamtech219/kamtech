"use client"

import { useCallback, useEffect, useState } from "react"
import { Button } from "./ui/button"
import { ArrowRight, ShieldCheck, Zap, Clock } from "lucide-react"
import { ParticleTextEffect } from "./particle-text-effect"
import { InfiniteSlider } from "./ui/infinite-slider"
import { ProgressiveBlur } from "./ui/progressive-blur"
import { openWhatsAppChat } from "@/lib/whatsapp"
import { motion, AnimatePresence } from "framer-motion"

export function HeroSection() {
  const handleExpertClick = useCallback(() => {
    openWhatsAppChat("parlerExpert")
  }, [])

  const headlines = [
    "Pendant que vous dormez, vos clients demandent votre prix",
    "Automatisez 80% de votre support et boostez vos ventes de 25%"
  ]
  const [currentHeadline, setCurrentHeadline] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [headlines.length])

  return (
    <section className="py-16 sm:py-24 px-4 relative overflow-hidden min-h-screen flex flex-col justify-between">
      <div className="flex-1 flex items-start justify-center pt-20">
        <ParticleTextEffect words={["KAMTECH", "IA", "CHATBOT", "KAMTECH"]} />
      </div>

      <div className="container mx-auto text-center relative z-10 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-block px-3 sm:px-4 py-2 bg-blue-500/10 border rounded-full border-blue-500/30 backdrop-blur-md">
            <p className="text-xs sm:text-sm font-semibold text-blue-400">Audit offert avec essai de 7 jours</p>
          </div>

          <div className="h-[120px] sm:h-[100px] mb-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentHeadline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight"
              >
                {headlines[currentHeadline]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-300 mb-10 text-balance">
            <span className="block mb-4">
              Récupérez <strong className="text-white">20h par semaine</strong> et divisez votre temps de réponse par 10.
            </span>
            <span className="block text-blue-400 font-bold">
              Déployé en 7 jours. Résultats garantis ou remboursés.
            </span>
          </h2>

          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <Button 
                data-cal-namespace="15min"
                data-cal-link="kamtech/15min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                size="lg" 
                className="bg-blue-600 hover:bg-blue-500 text-white group text-sm sm:text-base font-bold w-full sm:w-auto px-8 h-14 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1"
              >
                Réserver mon audit gratuit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
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

          <div className="mt-8 mb-4">
            <div className="group relative m-auto max-w-6xl">
              <div className="flex flex-col items-center md:flex-row">
                <div className="md:max-w-44 md:border-r md:border-gray-600 md:pr-6 mb-4 md:mb-0">
                  <p className="text-center md:text-end text-sm text-gray-400 font-medium">Ils nous font confiance</p>
                </div>
                <div className="relative py-4 md:w-[calc(100%-11rem)]">
                  <InfiniteSlider durationOnHover={20} duration={40} gap={112}>
                    <div className="flex">
                      <img
                        className="mx-auto h-5 w-fit invert opacity-60 hover:opacity-100 transition-opacity"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/nvidia-TAN2JNiFDeluYk9hlkv4qXwWtfx5Cy.svg"
                        alt="Nvidia Logo"
                        height="20"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-4 w-fit invert opacity-60 hover:opacity-100 transition-opacity"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/column-qYeLfzzj1ni9E7PhooLL6Mzip5Zeb4.svg"
                        alt="Column Logo"
                        height="16"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-4 w-fit invert opacity-60 hover:opacity-100 transition-opacity"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/github-twQNbc5nAy2jUs7yh5xic8hsEfBYpQ.svg"
                        alt="GitHub Logo"
                        height="16"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-5 w-fit invert opacity-60 hover:opacity-100 transition-opacity"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/nike-H0OCso4JdUtllUTdAverMAjJmcKVXU.svg"
                        alt="Nike Logo"
                        height="20"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-5 w-fit invert opacity-60 hover:opacity-100 transition-opacity"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/lemonsqueezy-ZL7mmIzqR10hWcodoO19ajha8AS9VK.svg"
                        alt="Lemon Squeezy Logo"
                        height="20"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-4 w-fit invert opacity-60 hover:opacity-100 transition-opacity"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/laravel-sDCMR3A82V8F6ycZymrDlmiFpxyUd4.svg"
                        alt="Laravel Logo"
                        height="16"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-7 w-fit invert opacity-60 hover:opacity-100 transition-opacity"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/lilly-Jhslk9VPUVAVK2SCJmCGTEbqKMef5v.svg"
                        alt="Lilly Logo"
                        height="28"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-6 w-fit invert opacity-60 hover:opacity-100 transition-opacity"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/openai-5TPubXl1hnLxeIs4ygVSLjJcUoBOCB.svg"
                        alt="OpenAI Logo"
                        height="24"
                        width="auto"
                      />
                    </div>
                  </InfiniteSlider>

                  <ProgressiveBlur
                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                    direction="left"
                    blurIntensity={1}
                  />
                  <ProgressiveBlur
                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                    direction="right"
                    blurIntensity={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
