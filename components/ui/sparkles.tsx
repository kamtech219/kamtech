"use client";
import React, { useId, useEffect, useState } from "react";
import { useMousePosition } from "../hooks/use-mouse-position";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export const SparklesCore = (props: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const mousePosition = useMousePosition();
  const particles = React.useRef<Particle[]>([]);
  const idToUse = id || useId();

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const resizeCanvas = () => {
          canvas.width = canvas.offsetWidth;
          canvas.height = canvas.offsetHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const createParticles = () => {
          const density = particleDensity || 100;
          for (let i = 0; i < density; i++) {
            particles.current.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              size: Math.random() * ((maxSize || 1) - (minSize || 0.1)) + (minSize || 0.1),
              speedX: (Math.random() - 0.5) * (speed || 1),
              speedY: (Math.random() - 0.5) * (speed || 1),
              opacity: Math.random(),
            });
          }
        };
        createParticles();

        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particles.current.forEach((p) => {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = particleColor || "#FFFFFF";
            ctx.globalAlpha = p.opacity;
            ctx.fill();
          });
          requestAnimationFrame(animate);
        };
        animate();
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id={idToUse}
      className={className}
      style={{
        background: background || "transparent",
        display: "block",
      }}
    />
  );
};
