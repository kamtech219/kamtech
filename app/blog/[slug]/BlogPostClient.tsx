"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ChevronLeft, User, Share2, ArrowRight, Twitter, Linkedin, Link2, Facebook, MessageCircle } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { Header } from "@/components/header";
import { toast } from "sonner";

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = post?.title || "";

    switch (platform) {
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
        break;
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
        break;
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
        break;
      case "whatsapp":
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + url)}`, "_blank");
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        toast.success("Lien de l'article copié !");
        break;
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
          <Link href="/blog" className="text-blue-500 hover:underline">Retour au blog</Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Header />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        style={{ scaleX: "var(--scroll-progress)" }}
      />

      <article className="pt-32 pb-20">
        {/* Header Content */}
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8 group"
          >
            <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
            Retour au blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="px-4 py-1.5 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-full text-xs font-bold tracking-wider uppercase mb-6 inline-block">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-blue-100/40 mb-12 pb-12 border-b border-white/10">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-medium">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime} de lecture
              </div>
            </div>
          </motion.div>
        </div>

        {/* Featured Image */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="prose prose-invert prose-blue max-w-none
              prose-h2:text-3xl prose-h2:font-playfair prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-blue-100/70 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6
              prose-li:text-blue-100/70 prose-li:text-lg
              prose-strong:text-white prose-strong:font-bold
              prose-ul:my-8 prose-ul:list-disc prose-ul:pl-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-blue-100/40 font-medium tracking-wider uppercase">Partager l'article</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleShare("twitter")}
                  title="Partager sur X"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-400/20 hover:border-blue-400/30 transition-all text-blue-400"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare("linkedin")}
                  title="Partager sur LinkedIn"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-600/30 transition-all text-blue-600"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare("facebook")}
                  title="Partager sur Facebook"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-800/20 hover:border-blue-800/30 transition-all text-blue-800"
                >
                  <Facebook className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare("whatsapp")}
                  title="Partager sur WhatsApp"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all text-emerald-500"
                >
                  <MessageCircle className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare("copy")}
                  title="Copier le lien"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-white/50"
                >
                  <Link2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="max-w-5xl mx-auto px-6 mt-32">
          <h2 className="text-3xl font-playfair font-bold mb-12">Articles similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                <div className="flex gap-6 items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all">
                  <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-blue-500 uppercase mb-2 block">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block p-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">
            PRÊT À PASSER À L'IA ?
          </div>
          <h2 className="text-4xl font-playfair font-bold mb-8">Transformons ensemble votre entreprise</h2>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all group"
          >
            Démarrer un audit gratuit
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
