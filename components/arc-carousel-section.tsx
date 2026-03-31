"use client"

import Image from "next/image"
import { motion, useTime, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

interface Logo {
  name: string
  src: string
}

const logos: Logo[] = [
  {
    name: "OpenClaw",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openclaw-hms5V0ldc5uOfwg5MrpAiZ4WPIKCTp.webp",
  },
  {
    name: "Antigravity",
    src: "/images/logos/antigravity.webp",
  },
  {
    name: "Claude Code",
    src: "/images/logos/claudecode.webp",
  },
  {
    name: "Google Maps",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-maps-Bg3SMRZ6ndra8lH4C5HC8TrH28mubI.webp",
  },
  {
    name: "n8n",
    src: "/images/logos/n8n .webp",
  },
  {
    name: "OVH",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ovh-9IINYZ6TTpMwE7HBJaES0khyNAgmEf.webp",
  },
  {
    name: "Manus AI",
    src: "/images/logos/manus.webp",
  },
  {
    name: "Google Docs",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-docs-AILmvxIOgTy5Lokvb8K4QhrKCRf6zK.webp",
  },
  {
    name: "MCP",
    src: "/images/logos/mcp.webp",
  },
  {
    name: "WhatsApp",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp-BF8HUokhKBHcDraam9bZFnTTHShapm.webp",
  },
  {
    name: "Railway",
    src: "/images/logos/railway.webp",
  },
  {
    name: "Google Drive",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-drive-rR39hN0bVU1wcWGZz6CVW8xI4J41bV.webp",
  },
  {
    name: "Dokploy",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dokploy-dark-wG9RxLoFcgwCM5tUr5GzLUy1RdvNJT.webp",
  },
  {
    name: "YouTube",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youtube-cs0M0fBuHTIl4BxorlpwPleiercqBI.webp",
  },
  {
    name: "Google Sheets",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-sheets-A2vnoqxaAwJsMb3M7SYzNZYhQ1VnjR.webp",
  },
  {
    name: "OpenAI",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openai-light-8VuoGMyPtiIuH9X5CLvlSxDZV8a7Jn.webp",
  },
  {
    name: "Claude AI",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/claude-ai-bOrqFbFHeHbFbKL67sDq7zOQ6DxwJc.webp",
  },
  {
    name: "Gmail",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gmail-XuMI5j5C4JF2tqmJQnfyprS5o0v17F.webp",
  },
  {
    name: "Google Meet",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-meet-kh1EW2ImsjYzADT8yP274ZHkzXUQTP.webp",
  },
  {
    name: "Make",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/make-dNifk4teXGMODc2ZdxstDbixbuTSdd.webp",
  },
  {
    name: "Supabase",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/supabase-4wMIFyYRDYEyrGh61p0lf0ahKbIDGf.webp",
  },
]

interface MovingLogoProps {
  logo: {
    name: string
    src: string
  }
  index: number
  total: number
  radius: number
}

function MovingLogo({ logo, index, total, radius }: MovingLogoProps) {
  const time = useTime()
  
  // Continuous 360 degree rotation logic
  const angle = useTransform(time, (t) => {
    const duration = 20000 
    return (t / duration * 360 + (index / total) * 360) % 360
  })

  // Calculate coordinates based on the angle
  const x = useTransform(angle, (a) => Math.cos((a * Math.PI) / 180) * radius)
  const y = useTransform(angle, (a) => {
    // Make the arc slightly taller on mobile to clear the text
    const factor = radius < 200 ? 0.75 : 0.55
    return Math.sin((a * Math.PI) / 180) * (radius * factor)
  })
  
  const opacity = useTransform(angle, (a) => {
    const START_VISIBLE = 190
    const END_VISIBLE = 350
    if (a < START_VISIBLE || a > END_VISIBLE) return 0
    if (a < START_VISIBLE + 20) return (a - START_VISIBLE) / 20
    if (a > END_VISIBLE - 20) return (END_VISIBLE - a) / 20
    return 1
  })

  const scale = useTransform(opacity, [0, 1], [0.6, 1])

  return (
    <motion.div
      className="absolute left-1/2"
      style={{
        x,
        y,
        opacity,
        scale,
        top: radius < 200 ? "45%" : "62%", // Center point of the arch adjusted for mobile
      }}
      whileHover={{ scale: 1.15, zIndex: 50 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-900/60 backdrop-blur-md rounded-xl border border-white/5 hover:border-blue-500/50 transition-colors duration-300 flex items-center justify-center p-3 sm:p-4 -translate-x-1/2 -translate-y-1/2 shadow-2xl">
        <Image
          src={logo.src}
          alt={logo.name}
          width={80}
          height={80}
          className="w-full h-full object-contain transition-all duration-500"
        />
      </div>
    </motion.div>
  )
}

export function ArcCarouselSection() {
  const [radius, setRadius] = useState(400)

  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth
      if (w < 640) setRadius(160)
      else if (w < 1024) setRadius(300)
      else setRadius(450)
    }
    updateRadius()
    window.addEventListener("resize", updateRadius)
    return () => window.removeEventListener("resize", updateRadius)
  }, [])

  return (
    <section className="py-12 sm:py-24 bg-black overflow-hidden relative min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative w-full max-w-7xl mx-auto z-10 px-4">
        {/* Arc Carousel Area containing both text and logos */}
        <div className="relative h-[320px] sm:h-[600px] lg:h-[750px] w-full mt-4 sm:mt-8">
          
          {/* Center Content - Now positioned inside the arch */}
          <div className="absolute top-[82%] sm:top-[68%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-30 w-full max-w-3xl px-6 pointer-events-none children:pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm rounded-full px-4 py-1.5 translate-y-[-10px]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <p className="text-blue-400 text-xs sm:text-sm font-medium tracking-wider uppercase">Notre solution</p>
              </div>

              <h2
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Notre Solution
              </h2>
              <p className="text-gray-400 text-xs sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10">
                Nous transformons vos tâches répétitives en systèmes automatisés qui libèrent du temps et améliorent vos performances.
              </p>

              <motion.button
                data-cal-namespace="15min"
                data-cal-link="kamtech/15min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] pointer-events-auto"
              >
                Obtenir mon audit gratuit
              </motion.button>
            </motion.div>
          </div>

          {/* Decorative Arc Path - Adjusted for mobile */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <svg
              className="w-full h-full max-w-6xl"
              viewBox="0 0 1000 500"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d={radius < 200 ? "M 200 350 Q 500 50 800 350" : "M 50 450 Q 500 -50 950 450"} 
                stroke="url(#arcGradient)" 
                strokeWidth="2" 
                strokeDasharray="8 12"
              />
              <defs>
                <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="rgb(59, 130, 246)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Logos moving along the arch */}
          <div className="relative w-full h-full pointer-events-none">
            {logos.map((logo, index) => (
              <MovingLogo 
                key={`${logo.name}-${index}`} 
                logo={logo} 
                index={index} 
                total={logos.length} 
                radius={radius}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
