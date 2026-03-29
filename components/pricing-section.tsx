"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Calculator, ShieldCheck } from "lucide-react"

export function PricingSection() {
  const [hoursSaved, setHoursSaved] = useState(20)
  const hourlyRate = 35 // Estimation du taux horaire moyen (ex: 35€/h)
  const monthlySavings = hoursSaved * hourlyRate * 4

  return (
    <section id="pricing" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <ShieldCheck className="w-5 h-5 text-blue-400" />
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Investissement rentabilisé</p>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ne payez que si ça vous <span className="text-blue-500">rapporte</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nos offres sont construites pour être rentables dès le premier mois grâce au temps gagné et aux ventes supplémentaires.
          </motion.p>
        </div>

        {/* ROI Calculator */}
        <div className="max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 border border-gray-800 rounded-3xl p-6 sm:p-10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Calculator className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Calculez votre ROI</h3>
                <p className="text-gray-400 text-sm">Découvrez combien vous coûte votre système manuel actuel.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-white font-medium">Heures passées à répondre / qualifier (par semaine)</label>
                  <span className="text-2xl font-black text-blue-400">{hoursSaved}h</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="80"
                  step="5"
                  value={hoursSaved}
                  onChange={(e) => setHoursSaved(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>5h</span>
                  <span>80h+</span>
                </div>
              </div>

              <div className="bg-black/50 border border-gray-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Économie mensuelle estimée*</p>
                  <p className="text-3xl sm:text-4xl font-black text-green-400">{monthlySavings.toLocaleString('fr-FR')} €</p>
                  <p className="text-gray-500 text-xs mt-2">*Basé sur un coût horaire de 35€ (salaire + charges)</p>
                </div>

                <div className="text-center sm:text-right">
                  <p className="text-white font-bold mb-2">L'IA coûte 3x à 10x moins cher</p>
                  <Button
                    data-cal-namespace="15min"
                    data-cal-link="kamtech/15min"
                    data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                    className="bg-blue-600 hover:bg-blue-500 text-white w-full sm:w-auto font-bold rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                  >
                    Auditer mon potentiel
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
