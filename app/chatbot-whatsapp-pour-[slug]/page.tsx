import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimatedCTASection } from "@/components/animated-cta-section";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import { BentoCard } from "@/components/ui/bento-card";
import { AlertCircle, Clock, CheckCircle, Zap } from "lucide-react";
import { seoPagesData } from "@/lib/seo-data";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const pageData = seoPagesData.find((p) => p.slug === params.slug);

  if (!pageData) {
    return {
      title: "Page introuvable | KAMTECH",
    };
  }

  return {
    title: pageData.title,
    description: pageData.description,
  };
}

export default function SEOPage({ params }: { params: { slug: string } }) {
  const pageData = seoPagesData.find((p) => p.slug === params.slug);

  if (!pageData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <main className="pt-20">

        {/* Hero / H1 Section */}
        <section className="py-20 px-4 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="container mx-auto relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              {pageData.h1}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {pageData.description}
            </p>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 px-4 bg-black">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Les défis actuels
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {pageData.problem.map((prob, idx) => (
                <BentoCard
                  key={idx}
                  title={prob.title}
                  description={prob.description}
                  icon={idx % 2 === 0 ? <Clock className="size-6" /> : <AlertCircle className="size-6" />}
                  metric={prob.metric}
                  variant="red"
                  className="h-full"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 px-4 bg-gray-900/50">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">Notre Solution</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {pageData.solution.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              {pageData.solution.description}
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-black">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Pourquoi nous choisir ?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pageData.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-colors">
                  <div className="bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="text-blue-400 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <TestimonialsCarousel />

        {/* CTA */}
        <AnimatedCTASection />

      </main>
      <Footer />
    </div>
  );
}
