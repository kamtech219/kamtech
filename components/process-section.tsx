"use client"
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { CheckCircle2, Search, Settings, GraduationCap, TrendingUp } from 'lucide-react';
import { BentoCard } from '@/components/ui/bento-card';

export function ProcessSection() {
  const steps = [
    {
      icon: <Search className="size-6" />,
      title: "Obtenir mon audit gratuit",
      description: "Analyse complète de vos opportunités d'automatisation. On identifie où vous perdez le plus de temps.",
      metric: "Jour 1",
      size: 'medium'
    },
    {
      icon: <Settings className="size-6" />,
      title: "Configuration IA",
      description: "Déploiement de votre chatbot et connexion à vos outils (CRM, Email, Sheets).",
      metric: "Jours 2-3",
      size: 'medium'
    },
    {
      icon: <GraduationCap className="size-6" />,
      title: "Lancement & Formation",
      description: "Mise en service et formation de votre équipe. Vous êtes autonomes dès le premier jour.",
      metric: "Jour 4",
      size: 'medium'
    },
    {
      icon: <TrendingUp className="size-6" />,
      title: "Optimisation ROI",
      description: "Suivi hebdomadaire et ajustements pour maximiser vos conversions en continu.",
      metric: "Jours 5+",
      size: 'medium'
    },
  ];

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
    <section id="process" className="py-16 sm:py-24 px-4 bg-black relative overflow-hidden">
        {/* Subtle Background Glow (Green) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            className="mb-4 sm:mb-6 inline-block px-3 sm:px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-green-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">La solution en 7 jours</p>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            De l'audit à l'automatisation <span className="text-green-500">complète</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Un processus rapide, sans code et sans délai technique pour commencer à scaler immédiatement.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, i) => (
            <BentoCard
              key={i}
              title={step.title}
              description={step.description}
              icon={step.icon}
              metric={step.metric}
              variant="green"
              className="md:col-span-3"
            />
          ))}
        </motion.div>
        
        <motion.div
          className="mt-16 p-5 sm:p-8 rounded-2xl border border-green-500/10 bg-green-500/5 backdrop-blur-sm text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-green-400 font-semibold mb-2">Zéro délai technique</p>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Vous n'avez besoin d'aucune compétence technique. Nous gérons l'intégralité du setup. Votre seule mission : accueillir vos nouveaux clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
