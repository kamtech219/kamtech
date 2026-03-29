import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { ProcessSection } from "@/components/process-section"
import { AnimatedFeaturesSection } from "@/components/animated-features-section"
import { ArcCarouselSection } from "@/components/arc-carousel-section"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import { AnimatedCTASection } from "@/components/animated-cta-section"
import { Footer } from "@/components/footer"
import { FloatingDock } from "@/components/ui/floating-dock"
import { Home, Zap, Settings, MessageCircle, HelpCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <ProblemSection />
        <ProcessSection />
        <AnimatedFeaturesSection />
        <ArcCarouselSection />
        <TestimonialsCarousel />
        <PricingSection />
        <FAQSection />
        <ContactSection />
        <AnimatedCTASection />
      </main>

      <Footer />
    </div>
  )
}
