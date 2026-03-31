"use client";
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Code, Layers, TrendingUp, Zap, MessageSquare, Bot, X } from 'lucide-react';

import { BentoCard } from '@/components/ui/bento-card';

const items = [
  {
    title: 'Chatbot WhatsApp IA 24/7',
    description: 'Bénéfice : Ne perdez plus jamais un seul lead. Réponse immédiate, même la nuit.',
    icon: <MessageSquare className="size-6" />,
    size: 'large' as const,
  },
  {
    title: 'Qualification Auto',
    description: 'Bénéfice : Concentrez-vous sur les prospects chauds et évitez les curieux.',
    icon: <Bot className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Automatisations n8n',
    description: 'Bénéfice : Zéro double saisie. Tout atterrit direct dans votre CRM/Google Sheets.',
    icon: <Code className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'ROI Garanti',
    description: 'Bénéfice : +25% de conversion moyenne constatée dès le 1er mois.',
    icon: <TrendingUp className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'Déploiement en 7j',
    description: 'Bénéfice : Résultats immédiats sans aucun effort technique de votre côté.',
    icon: <Zap className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Support & Stratégie',
    description: 'Bénéfice : Un système qui évolue et apprend de vos clients chaque semaine.',
    icon: <Layers className="size-6" />,
    size: 'large' as const,
  },
];

export function AnimatedFeaturesSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="features" className="py-16 sm:py-24 px-4 bg-black relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Votre infrastructure de croissance <span className="text-blue-500">automatisée</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#E2E8F0] max-w-2xl mx-auto">
            Nous construisons des systèmes intelligents qui qualifient, engagent et convertissent vos prospects sans intervention humaine.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {items.map((item, i) => (
            <BentoCard
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              variant="blue"
              className={cn(
                item.size === 'large'
                  ? 'md:col-span-4'
                  : item.size === 'medium'
                    ? 'md:col-span-3'
                    : 'md:col-span-2',
                'h-full',
              )}
            />
          ))}
        </motion.div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Pourquoi KAMTECH IA fait la différence</h3>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="grid grid-cols-3 border-b border-gray-800 bg-black/50 p-4 sm:p-6">
              <div className="col-span-1 text-[#E2E8F0] font-semibold text-sm sm:text-base">Fonctionnalité</div>
              <div className="col-span-1 text-center text-[#E2E8F0] font-semibold text-sm sm:text-base">Humain / Manuel</div>
              <div className="col-span-1 text-center text-blue-400 font-bold text-sm sm:text-base">KAMTECH IA</div>
            </div>

            <div className="grid grid-cols-3 border-b border-gray-800/50 p-4 sm:p-6 hover:bg-gray-800/30 transition-colors">
              <div className="col-span-1 text-white text-sm sm:text-base">Disponibilité</div>
              <div className="col-span-1 flex justify-center items-center text-[#E2E8F0] text-sm">9h - 18h, Lundi au Vendredi</div>
              <div className="col-span-1 flex justify-center items-center text-white font-semibold text-sm"><span className="text-green-400 mr-2">✓</span> 24/7/365</div>
            </div>

            <div className="grid grid-cols-3 border-b border-gray-800/50 p-4 sm:p-6 hover:bg-gray-800/30 transition-colors">
              <div className="col-span-1 text-white text-sm sm:text-base">Temps de réponse</div>
              <div className="col-span-1 flex justify-center items-center text-[#E2E8F0] text-sm">Minutes / Heures</div>
              <div className="col-span-1 flex justify-center items-center text-white font-semibold text-sm"><span className="text-green-400 mr-2">✓</span> Instantané (3s)</div>
            </div>

            <div className="grid grid-cols-3 border-b border-gray-800/50 p-4 sm:p-6 hover:bg-gray-800/30 transition-colors">
              <div className="col-span-1 text-white text-sm sm:text-base">Capacité simultanée</div>
              <div className="col-span-1 flex justify-center items-center text-[#E2E8F0] text-sm">1 à 3 conv. à la fois</div>
              <div className="col-span-1 flex justify-center items-center text-white font-semibold text-sm"><span className="text-green-400 mr-2">✓</span> Illimitée</div>
            </div>

            <div className="grid grid-cols-3 border-b border-gray-800/50 p-4 sm:p-6 hover:bg-gray-800/30 transition-colors">
              <div className="col-span-1 text-white text-sm sm:text-base">Erreurs & Oublis</div>
              <div className="col-span-1 flex justify-center items-center text-red-400 text-sm"><X className="w-4 h-4 mr-1" /> Fréquent</div>
              <div className="col-span-1 flex justify-center items-center text-white font-semibold text-sm"><span className="text-green-400 mr-2">✓</span> Zéro oubli</div>
            </div>

            <div className="grid grid-cols-3 p-4 sm:p-6 hover:bg-gray-800/30 transition-colors">
              <div className="col-span-1 text-white text-sm sm:text-base">Coût mensuel</div>
              <div className="col-span-1 flex justify-center items-center text-[#E2E8F0] text-sm">Salaire temps plein</div>
              <div className="col-span-1 flex justify-center items-center text-blue-400 font-bold text-sm">À partir de 97€</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
