"use client";

import { motion } from "framer-motion";
import Globe from "@/components/ui/globe";

export function ContactSidebar({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="relative hidden md:flex items-center justify-center p-8 bg-gradient-to-br from-blue-600/10 to-transparent overflow-hidden"
    >
      {/* Globe should be absolute to not push text */}
      <div className="absolute inset-0 z-0 opacity-80 scale-110">
        <Globe
          className="w-full h-full"
          autoRotate={true}
        />
      </div>

      {/* Text content stays in relative z-10 */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-6">
        <div className="max-w-xs mb-20">
          <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">
            L'IA sans frontières.
          </h3>
          <p className="text-blue-100/70 text-base leading-relaxed">
            Rejoignez les entreprises qui automatisent déjà leur succès avec KAMTECH IA.
          </p>
        </div>

        {/* Trust Badge stays at bottom */}
        <div className="absolute bottom-8 left-8 right-8 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-between">
          <div className="flex -space-x-2">
            {[1,2,3].map(i => (
              <div key={i} className="h-9 w-9 rounded-full border-2 border-slate-900 bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                {String.fromCharCode(64+i)}
              </div>
            ))}
          </div>
          <p className="text-xs text-blue-200/90 font-medium tracking-wide">
            +50 entreprises nous font confiance
          </p>
        </div>
      </div>
    </motion.div>
  );
}
