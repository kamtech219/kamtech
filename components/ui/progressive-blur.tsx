"use client"
import { cn } from "@/lib/utils"
import { type HTMLMotionProps, motion } from "motion/react"

export const GRADIENT_ANGLES = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
}

export type ProgressiveBlurProps = {
  direction?: keyof typeof GRADIENT_ANGLES
  blurLayers?: number
  className?: string
  blurIntensity?: number
} & HTMLMotionProps<"div">

export function ProgressiveBlur({
  direction = "bottom",
  blurLayers = 8,
  className,
  blurIntensity = 0.25,
  ...props
}: ProgressiveBlurProps) {
  const layers = Math.max(blurLayers, 2)
  const segmentSize = 1 / (blurLayers + 1)
  const angle = GRADIENT_ANGLES[direction]

  return (
    <div className={cn("relative", className)}>
      {Array.from({ length: layers }).map((_, index) => {
        const stop1 = index * segmentSize * 100
        const stop2 = (index + 1) * segmentSize * 100
        const stop3 = (index + 2) * segmentSize * 100
        const stop4 = (index + 3) * segmentSize * 100

        const gradient = `linear-gradient(${angle}deg, rgba(255, 255, 255, 0) ${stop1}%, rgba(255, 255, 255, 1) ${stop2}%, rgba(255, 255, 255, 1) ${stop3}%, rgba(255, 255, 255, 0) ${stop4}%)`

        return (
          <motion.div
            key={index}
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              maskImage: gradient,
              WebkitMaskImage: gradient,
              backdropFilter: `blur(${index * blurIntensity}px)`,
            }}
            {...props}
          />
        )
      })}
    </div>
  )
}
