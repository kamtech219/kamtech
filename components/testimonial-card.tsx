'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export interface TestimonialCardProps {
  testimonial: {
    text: string;
    metric?: string;
    imageSrc: string;
    name: string;
    username: string;
    role?: string;
  };
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="border-gray-800 bg-gray-900/50 relative h-full w-full rounded-2xl border p-6 shadow-xl backdrop-blur-md flex flex-col group hover:border-blue-500/30 transition-all duration-300"
      >
        <div className="flex justify-between items-start mb-6">
          <Quote className="h-8 w-8 text-blue-500/50 -rotate-180" />
          {testimonial.metric && (
            <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30">
              {testimonial.metric}
            </span>
          )}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
          viewport={{ once: true }}
          className="text-gray-300 relative mb-8 text-sm sm:text-base leading-relaxed flex-grow italic"
        >
          "{testimonial.text}"
        </motion.p>

        {/* User info with animation */}
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
          viewport={{ once: true }}
          className="border-gray-800/60 mt-auto flex items-center gap-3 border-t pt-4"
        >
          <Avatar className="h-10 w-10 border border-gray-700 ring-blue-500/20 ring-2 ring-offset-1 ring-offset-black">
            <AvatarImage
              src={testimonial.imageSrc}
              alt={testimonial.name}
            />
            <AvatarFallback className="bg-blue-600 text-white font-bold">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <h4 className="text-white font-semibold text-sm truncate">
              {testimonial.name}
            </h4>
            <p className="text-blue-400/80 text-xs truncate">
              {testimonial.role || testimonial.username}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
