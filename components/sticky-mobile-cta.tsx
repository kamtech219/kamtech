"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA only after scrolling past the first section (e.g., 400px)
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] sm:hidden"
        >
          <button
            data-cal-namespace="15min"
            data-cal-link="kamtech/15min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl text-base font-semibold shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all"
          >
            Obtenir mon audit gratuit
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
