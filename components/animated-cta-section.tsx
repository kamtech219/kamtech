"use client"

import { useRef, useCallback } from "react"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { BackgroundPaths } from "./ui/floating-paths"
import { openWhatsAppChat } from "@/lib/whatsapp"

export function AnimatedCTASection() {
  const contentRef = useRef<HTMLDivElement>(null)

  const handleWhatsAppClick = useCallback(() => {
    openWhatsAppChat("contactDirect")
  }, [])

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <BackgroundPaths />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      <div
        className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto">
        <div
          className="rounded-2xl p-6 sm:p-8 md:p-12 text-center animate-fade-in-up"
          ref={contentRef}
          style={{ animationDelay: "0.3s" }}
        >
          <div className="mb-4 sm:mb-6 inline-block px-3 sm:px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
            <p className="text-red-400 text-xs sm:text-sm font-semibold">⏰ Places limitées : Audit gratuit - 15 minutes</p>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg animate-fade-in-up leading-tight"
            style={{ fontFamily: "var(--font-playfair)", animationDelay: "0.5s" }}
          >
            Tous vos clients sont déjà sur WhatsApp.
            <br className="hidden sm:block" />
            Vendez-leur maintenant.
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-white/90 mb-3 sm:mb-4 max-w-2xl mx-auto drop-shadow-md animate-fade-in-up font-semibold"
            style={{ animationDelay: "0.6s" }}
          >
            Pendant qu&apos;on parle, vos concurrents automatisent.
          </p>
          <p
            className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow-md animate-fade-in-up px-2"
            style={{ animationDelay: "0.7s" }}
          >
            Prenez 15 minutes avec notre équipe pour voir EXACTEMENT comment KAMTECH IA peut transformer votre activité. Pas de vente forcée. Juste un plan d&apos;action.
          </p>
            <div className="flex flex-col items-center gap-6 w-full">
              <div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up w-full px-2"
                style={{ animationDelay: "0.9s" }}
              >
                <Button 
                  data-cal-namespace="15min"
                  data-cal-link="kamtech/15min"
                  data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white group font-semibold text-sm sm:text-base w-full sm:w-auto px-10"
                >
                  Obtenir mon audit gratuit
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 bg-transparent font-semibold text-sm sm:text-base w-full sm:w-auto px-10"
                >
                  Parler à un expert (WhatsApp)
                </Button>
              </div>

              <a 
                href="#contact" 
                className="text-white/60 hover:text-blue-400 transition-colors text-sm font-medium flex items-center gap-2 group underline-offset-4 hover:underline animate-fade-in-up"
                style={{ animationDelay: "1s" }}
              >
                Envoyer une demande par formulaire
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm px-2">
            <div className="text-white/70 text-center">
              <p className="font-semibold text-green-400">✓ Garantie 30 jours</p>
              <p className="text-xs">Satisfait ou remboursé</p>
            </div>
            <div className="text-white/70 text-center">
              <p className="font-semibold text-green-400">✓ Déploiement 48-72h</p>
              <p className="text-xs">Prêt à vendre immédiatement</p>
            </div>
            <div className="text-white/70 text-center">
              <p className="font-semibold text-green-400">✓ Support 24/7</p>
              <p className="text-xs">L&apos;équipe vous aide</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(24px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
