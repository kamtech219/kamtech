"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { ContactForm } from "@/components/contact-form";
import { ContactSidebar } from "@/components/contact-sidebar";

export default function ContactSection() {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="bg-black relative w-full overflow-hidden py-16 md:py-24 border-t border-white/5">
      {/* Background Glows (Thematic Blue) */}
      <div
        className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: `radial-gradient(circle at center, #3b82f6, transparent 70%)`,
        }}
      />
      <div
        className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
        style={{
          background: `radial-gradient(circle at center, #1d4ed8, transparent 70%)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="border border-white/10 bg-gray-900/40 mx-auto max-w-6xl overflow-hidden rounded-[28px] shadow-2xl backdrop-blur-md">
          <div className="grid md:grid-cols-2">
            <div className="relative p-8 md:p-12" ref={formRef}>
              <ContactForm isInView={isInView} />
            </div>

            {/* Sidebar with 3D Globe */}
            <ContactSidebar isInView={isInView} />
          </div>
        </div>
      </div>
    </section>
  );
}
