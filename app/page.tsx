import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { ProcessSection } from "@/components/process-section"
import { Footer } from "@/components/footer"

const AnimatedFeaturesSection = dynamic(() => import("@/components/animated-features-section").then(mod => mod.AnimatedFeaturesSection), { ssr: false })
const ArcCarouselSection = dynamic(() => import("@/components/arc-carousel-section").then(mod => mod.ArcCarouselSection), { ssr: false })
const TestimonialsCarousel = dynamic(() => import("@/components/testimonials-carousel"), { ssr: false })
const PricingSection = dynamic(() => import("@/components/pricing-section").then(mod => mod.PricingSection), { ssr: false })
const FAQSection = dynamic(() => import("@/components/faq-section").then(mod => mod.FAQSection), { ssr: false })
const ContactSection = dynamic(() => import("@/components/contact-section"), { ssr: false })
const AnimatedCTASection = dynamic(() => import("@/components/animated-cta-section").then(mod => mod.AnimatedCTASection), { ssr: false })

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
