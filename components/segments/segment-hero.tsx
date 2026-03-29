"use client"

import { useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, XCircle, CheckCircle2, Zap } from "lucide-react"
import { openWhatsAppChat } from "@/lib/whatsapp"
import { motion } from "framer-motion"

interface SegmentHeroProps {
  segment: string;
  title: string;
  subtitle: string;
  before: {
    title: string;
    description: string;
  };
  after: {
    title: string;
    description: string;
  };
  bridge: {
    title: string;
    description: string;
  };
}

export function SegmentHero({ segment, title, subtitle, before, after, bridge }: SegmentHeroProps) {
  const handleExpertClick = useCallback(() => {
    openWhatsAppChat("parlerExpert")
  }, [])

  return (
    <section className="py-24 px-4 relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/10 to-black z-0" />

      <div className="container mx-auto relative z-10 pt-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="mb-6 inline-block px-4 py-2 bg-blue-500/10 border rounded-full border-blue-500/30 backdrop-blur-md">
            <p className="text-sm font-semibold text-blue-400">Solutions pour {segment}</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              data-cal-namespace="15min"
              data-cal-link="kamtech/15min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white group font-semibold px-8"
            >
              Réserver mon audit gratuit
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={handleExpertClick}
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 bg-transparent font-semibold px-8"
            >
              Parler à un expert
            </Button>
          </div>
        </div>

        {/* Before / After / Bridge Framework */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-red-950/20 border border-red-900/50 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />
            <XCircle className="h-10 w-10 text-red-500 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">Avant : <span className="text-red-400">{before.title}</span></h3>
            <p className="text-gray-400 leading-relaxed">{before.description}</p>
          </motion.div>

          {/* Bridge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-blue-950/20 border border-blue-900/50 rounded-2xl p-8 relative overflow-hidden transform md:-translate-y-4"
          >
             <div className="absolute top-0 left-0 w-full h-1 bg-blue-500" />
            <Zap className="h-10 w-10 text-blue-500 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">La Solution : <span className="text-blue-400">{bridge.title}</span></h3>
            <p className="text-gray-400 leading-relaxed">{bridge.description}</p>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-green-950/20 border border-green-900/50 rounded-2xl p-8 relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
            <CheckCircle2 className="h-10 w-10 text-green-500 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">Après : <span className="text-green-400">{after.title}</span></h3>
            <p className="text-gray-400 leading-relaxed">{after.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
