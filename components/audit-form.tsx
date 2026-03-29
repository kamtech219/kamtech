"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

type Step = 1 | 2 | 3

interface FormData {
  name: string
  email: string
  companySize: string
  need: string
}

export function AuditForm() {
  const [step, setStep] = useState<Step>(1)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    companySize: "",
    need: ""
  })

  useEffect(() => {
    if (step === 3) {
      (async function () {
        const cal = await getCalApi()
        cal("ui", {
          theme: "dark",
          styles: { branding: { brandColor: "#3b82f6" } },
          hideEventTypeDetails: false,
          layout: "month_view"
        })
      })()
    }
  }, [step])

  const handleNext = () => setStep((s) => Math.min(s + 1, 3) as Step)
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1) as Step)

  const updateFormData = (key: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const isStep1Valid = formData.name.length > 2 && formData.email.includes("@")
  const isStep2Valid = formData.companySize !== "" && formData.need !== ""

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-gray-900 rounded-2xl border border-gray-800 shadow-xl overflow-hidden">
      {/* Progress Bar */}
      <div className="w-full bg-gray-800 h-2 rounded-full mb-8 overflow-hidden">
        <motion.div
          className="h-full bg-blue-600"
          initial={{ width: "33%" }}
          animate={{ width: `${(step / 3) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Commençons par les bases</h3>
              <p className="text-gray-400">Pour qui allons-nous réaliser cet audit gratuit ?</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300">Prénom & Nom</Label>
                <Input
                  id="name"
                  placeholder="Jean Dupont"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email professionnel</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jean@entreprise.com"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white h-12"
                />
              </div>
            </div>

            <Button
              onClick={handleNext}
              disabled={!isStep1Valid}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold mt-4"
            >
              Continuer <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Votre contexte</h3>
              <p className="text-gray-400">Pour nous permettre de préparer l'audit.</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <Label className="text-gray-300">Taille de l'entreprise</Label>
                <div className="grid grid-cols-2 gap-3">
                  {["1-10", "11-50", "51-200", "200+"].map((size) => (
                    <div
                      key={size}
                      onClick={() => updateFormData("companySize", size)}
                      className={`p-3 text-center rounded-lg border cursor-pointer transition-all ${
                        formData.companySize === size
                          ? "bg-blue-600/20 border-blue-500 text-blue-400"
                          : "bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500"
                      }`}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-gray-300">Principal besoin</Label>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Automatisation du support client",
                    "Génération & qualification de leads",
                    "Automatisation des prises de rendez-vous",
                    "Autre"
                  ].map((need) => (
                    <div
                      key={need}
                      onClick={() => updateFormData("need", need)}
                      className={`p-3 rounded-lg border cursor-pointer transition-all flex items-center gap-3 ${
                        formData.need === need
                          ? "bg-blue-600/20 border-blue-500 text-blue-400"
                          : "bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        formData.need === need ? "border-blue-500" : "border-gray-500"
                      }`}>
                        {formData.need === need && <div className="w-2 h-2 rounded-full bg-blue-500" />}
                      </div>
                      {need}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <Button
                variant="outline"
                onClick={handlePrev}
                className="w-12 h-12 p-0 border-gray-700 bg-transparent text-gray-300 hover:bg-gray-800"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                onClick={handleNext}
                disabled={!isStep2Valid}
                className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              >
                Voir les créneaux disponibles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <div className="text-center mb-2">
              <h3 className="text-xl font-bold text-white mb-1 flex items-center justify-center gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5" />
                Super ! Plus qu'à choisir un horaire.
              </h3>
              <p className="text-sm text-gray-400">Fuseau horaire détecté automatiquement.</p>
            </div>

            <div className="w-full bg-white rounded-xl overflow-hidden min-h-[400px]">
              <Cal
                namespace="15min"
                calLink="kamtech/15min"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{
                  name: formData.name,
                  email: formData.email,
                  notes: `Taille: ${formData.companySize} | Besoin: ${formData.need}`,
                  layout: "month_view"
                }}
              />
            </div>

            <Button
              variant="ghost"
              onClick={handlePrev}
              className="text-gray-400 hover:text-white w-full"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
