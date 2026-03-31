"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { Label } from "@/components/ui/label";
import { Check, Loader2, Send } from "lucide-react";
import { toast } from "sonner";

export function ContactForm({ isInView }: { isInView: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xkopjrbj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setIsSubmitted(true);
        toast.success("Message envoyé avec succès !");
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        toast.error("Une erreur est survenue lors de l'envoi du message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
           <div className="h-10 w-1 px-0 bg-blue-600 rounded-full" />
           <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            Contactez-nous
          </h2>
        </div>
        <p className="text-[#E2E8F0] text-lg max-w-md">
          Une question ? Un projet ? Notre équipe d'experts IA vous répond sous 24h.
        </p>

        <SparklesCore
          id="contact-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={100}
          className="absolute -top-10 -left-10 h-32 w-full opacity-30 pointer-events-none"
          particleColor="#3b82f6"
        />
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Label htmlFor="name" className="text-gray-300 font-medium ml-1">Nom Complet</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jean Dupont"
              required
              autoComplete="name"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 h-12 focus:ring-blue-500/50"
            />
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <Label htmlFor="email" className="text-gray-300 font-medium ml-1">Email Professionnel</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="contact@entreprise.com"
              required
              autoComplete="email"
              inputMode="email"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 h-12 focus:ring-blue-500/50"
            />
          </motion.div>
        </div>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Label htmlFor="message" className="text-gray-300 font-medium ml-1">Votre Message</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Comment pouvons-nous vous aider ?"
            required
            inputMode="text"
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 h-40 resize-none focus:ring-blue-500/50"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full pt-4"
        >
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-xl shadow-blue-500/20 group"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                Envoi en cours...
              </span>
            ) : isSubmitted ? (
              <span className="flex items-center justify-center">
                <Check className="mr-3 h-5 w-5" />
                Message Envoyé !
              </span>
            ) : (
              <span className="flex items-center justify-center">
                Envoyer le message
                <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            )}
          </Button>
        </motion.div>
      </motion.form>
    </>
  );
}
