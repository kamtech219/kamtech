"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Check, ArrowRight, Calculator, ShieldCheck } from "lucide-react"
import { openWhatsAppChat } from "@/lib/whatsapp"

const pricingPlans = [
  {
    name: "Starter IA",
    price: "497€",
    period: "/mois",
    description: "Pour les indépendants qui veulent récupérer leur temps",
    features: ["Chatbot WhatsApp IA basique", "Qualification des prospects", "Prise de RDV Calendly", "Support email", "Déploiement en 7j"],
    popular: false,
  },
  {
    name: "Croissance IA",
    price: "997€",
    period: "/mois",
    description: "Pour les entreprises prêtes à scaler fort",
    features: [
      "Chatbot WhatsApp IA avancé",
      "Connexion CRM (HubSpot, Pipedrive...)",
      "Qualification ultra-précise",
      "Relances automatiques n8n",
      "Support prioritaire WhatsApp",
      "Optimisation mensuelle",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    period: "",
    description: "Automatisations sur-mesure complexes",
    features: [
      "Système n8n complet (Email, WhatsApp, SMS)",
      "Dashboard Analytics dédié",
      "Intégrations API personnalisées",
      "Support 24/7 dédié",
      "Formation de votre équipe",
      "Agent IA Voice (Téléphone)",
    ],
    popular: false,
  },
]

export function PricingSection() {
  const [hoursSaved, setHoursSaved] = useState(20)
  const hourlyRate = 35 // Estimation du taux horaire moyen (ex: 35€/h)
  const monthlySavings = hoursSaved * hourlyRate * 4

  const handleExpertClick = () => {
    openWhatsAppChat("parlerExpert")
  }

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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-card border rounded-2xl p-8 flex flex-col h-full ${
                plan.popular ? "border-blue-500/50 bg-blue-900/10 shadow-[0_0_30px_rgba(37,99,235,0.15)]" : "border-gray-800 bg-gray-900/30"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">Le plus choisi</span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-400 font-medium">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-gray-300 text-sm">
                    <Check className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button
                  onClick={plan.name === "Enterprise" ? handleExpertClick : undefined}
                  data-cal-namespace={plan.name !== "Enterprise" ? "15min" : undefined}
                  data-cal-link={plan.name !== "Enterprise" ? "kamtech/15min" : undefined}
                  className={`w-full h-12 rounded-full font-bold text-base ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                      : "bg-transparent border border-gray-600 text-white hover:bg-gray-800"
                  } group`}
                >
                  {plan.name === "Enterprise" ? "Contacter l'équipe" : "Réserver mon audit"}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <motion.div
          className="max-w-4xl mx-auto bg-green-950/20 border border-green-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8 text-green-500" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">Garantie 30 Jours "Rentable ou Remboursé"</h4>
            <p className="text-gray-400 text-sm">
              Si notre système ne vous fait pas gagner de temps ou ne génère pas de nouveaux leads qualifiés dans les 30 premiers jours, nous vous remboursons intégralement. Aucun risque pour vous.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
