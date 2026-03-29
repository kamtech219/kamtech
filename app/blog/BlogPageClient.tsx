"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ChevronLeft } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { Header } from "@/components/header";

export default function BlogPageClient() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Header />

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
          Retour à l'accueil
        </Link>

        {/* Hero Section */}
        <div className="mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6"
          >
            Le Blog de l'IA <span className="text-blue-500">pour PME</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100/60 text-xl max-w-2xl leading-relaxed"
          >
            Explorez nos dernières analyses sur l'automatisation intelligente et comment elle transforme les PME d'aujourd'hui.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300 shadow-2xl shadow-black"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-blue-600/90 backdrop-blur-md rounded-full text-xs font-bold tracking-wider uppercase">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-blue-200/50 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1.5" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-blue-100/60 text-base mb-8 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-white font-bold group/link"
                  >
                    Lire l'article
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-2 transition-transform text-blue-500" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Newsletter / CTA Section */}
      <section className="py-24 bg-gradient-to-t from-blue-900/20 to-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">Restez à l'avant-garde</h2>
          <p className="text-blue-100/60 text-lg mb-10">Recevez nos meilleures stratégies d'automatisation directement dans votre boîte mail.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="votre@email.com"
              className="px-6 py-4 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-blue-500 transition-colors min-w-[300px]"
            />
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-bold transition-all shadow-lg shadow-blue-600/20">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
