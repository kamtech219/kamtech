"use client"

import { useState, useEffect, useCallback } from "react"
import { LeLoLogo } from "./lelo-logo"
import { Button } from "./ui/button"
import { openWhatsAppChat } from "@/lib/whatsapp"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const mouseX = useMotionValue(Infinity)

  const handleAuditClick = useCallback(() => {
    openWhatsAppChat("auditGratuit")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsMobileMenuOpen(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { name: "Services", href: "/#features" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <>
      <header
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={`
          fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out w-[95%] sm:w-auto
          ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        <div
          className={`
            flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 rounded-2xl border transition-all duration-300
            ${
              isScrolled
                ? "bg-background/80 backdrop-blur-xl border-white/10 shadow-2xl"
                : "bg-background/40 backdrop-blur-md border-white/5 shadow-lg"
            }
          `}
        >
          <div className="transform transition-transform duration-200 hover:scale-105 flex-shrink-0">
            <LeLoLogo />
          </div>

          <nav className="hidden lg:flex items-center gap-2 h-10 px-2">
            {navLinks.map((link) => (
              <NavIcon key={link.name} mouseX={mouseX} title={link.name} href={link.href} />
            ))}
          </nav>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              data-cal-namespace="15min"
              data-cal-link="kamtech/15min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-semibold h-9 px-4 sm:px-6"
            >
              Obtenir mon audit gratuit
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 m-1 text-foreground/70 hover:text-foreground transition-colors rounded-xl bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 active:scale-95 touch-manipulation"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu-container"
            className="lg:hidden"
          >
            <motion.div
              key="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[40]"
            />
            <motion.div
              key="mobile-menu-content"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-[45]"
            >
              <div className="bg-background/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-y-auto max-h-[calc(100vh-8rem)] overscroll-contain">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 p-3 rounded-xl transition-all"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                    <Button
                      data-cal-namespace="15min"
                      data-cal-link="kamtech/15min"
                      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Réserver un audit
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/5 rounded-xl w-full"
                      onClick={() => {
                        openWhatsAppChat("parlerExpert")
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Parler à un expert
                    </Button>
                  </div>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavIcon({
  mouseX,
  title,
  href,
}: {
  mouseX: any
  title: string
  href: string
}) {
  let ref = useRef<HTMLDivElement>(null)

  let distance = useTransform(mouseX, (val: number) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  // Magnification effect: scales from 1 to 1.4 when cursor is close
  let scaleTransform = useTransform(distance, [-100, 0, 100], [1, 1.4, 1])
  let yTransform = useTransform(distance, [-100, 0, 100], [0, -4, 0])

  let scale = useSpring(scaleTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  let y = useSpring(yTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <motion.div
      ref={ref}
      style={{ scale, y }}
      className="px-3 py-1 relative"
    >
      <a
        href={href}
        className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
      >
        {title}
      </a>
    </motion.div>
  )
}
