"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if mouse moves to the top of the viewport (leaving the page)
      // Only trigger once per session
      if (e.clientY <= 0 && !hasTriggered) {
        setIsVisible(true)
        setHasTriggered(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasTriggered])

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-lg overflow-hidden bg-gray-900 border border-white/10 rounded-3xl shadow-2xl"
          >
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-blue-500/20 rounded-full blur-[60px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />

            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors hover:bg-white/10 rounded-full z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative p-8 sm:p-10 text-center flex flex-col items-center">
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <p className="text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  Attendez ! Ne partez pas les mains vides
                </p>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                Vous perdez 20 heures par semaine ?
              </h3>

              <p className="text-gray-300 text-base mb-8 max-w-md">
                Laissez-nous vous montrer comment un chatbot IA peut automatiser vos ventes et votre support. Sans engagement.
              </p>

              <button
                data-cal-namespace="15min"
                data-cal-link="kamtech/15min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                onClick={() => setIsVisible(false)} // Close the popup when opening cal.com modal
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-base font-bold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group"
              >
                Recevoir mon plan personnalisé
              </button>

              <p className="mt-4 text-sm text-gray-500">
                15 minutes. 100% gratuit. Déployable en 7 jours.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
