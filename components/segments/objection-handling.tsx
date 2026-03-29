"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MessageCircleQuestion } from "lucide-react"

interface Objection {
  question: string;
  answer: string;
}

interface ObjectionHandlingProps {
  objections: Objection[];
}

export function ObjectionHandling({ objections }: ObjectionHandlingProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 bg-black relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <MessageCircleQuestion className="w-12 h-12 text-blue-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Vous avez des doutes ? <span className="text-blue-500">C'est normal.</span>
          </h2>
          <p className="text-lg text-gray-400">
            Voici les questions les plus fréquentes que se posent nos clients avant de se lancer.
          </p>
        </div>

        <div className="space-y-4">
          {objections.map((objection, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden transition-colors hover:bg-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-white pr-8">{objection.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-300 leading-relaxed border-t border-white/5">
                      {objection.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
