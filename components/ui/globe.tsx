"use client"

import React, { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import { loadWorldData } from "@/lib/world-data-loader"
import type { Feature, Geometry } from "geojson"

export default function Globe({
  className = "",
  autoRotate = true,
}: {
  className?: string
  autoRotate?: boolean
}) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [worldData, setWorldData] = useState<Feature<Geometry, any>[]>([])
  const [rotation, setRotation] = useState([-20, -20])
  const [isHovered, setIsHovered] = useState(false)

  const width = 600
  const height = 600
  const scale = 250

  // Labels in French for major regions
  const labels = [
    { name: "EUROPE", lat: 48.8, lon: 2.3 },
    { name: "AFRIQUE", lat: 9.0, lon: 18.0 },
    { name: "ASIE", lat: 34.0, lon: 100.0 },
    { name: "AMÉRIQUES", lat: 10.0, lon: -80.0 },
    { name: "OCÉANIE", lat: -25.0, lon: 135.0 },
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countries = await loadWorldData()
        setWorldData(countries)
      } catch (error) {
        console.error("Error loading globe data:", error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (!autoRotate || isHovered) return

    const timer = setInterval(() => {
      setRotation((prev) => [prev[0] + 0.5, prev[1]])
    }, 50)

    return () => clearInterval(timer)
  }, [autoRotate, isHovered])

  useEffect(() => {
    if (!svgRef.current || worldData.length === 0) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    const projection = d3.geoOrthographic()
      .scale(scale)
      .translate([width / 2, height / 2])
      .rotate([rotation[0], rotation[1]])
      .clipAngle(90)

    const path = d3.geoPath(projection)

    // Definitions for gradients/shadows
    const defs = svg.append("defs")
    
    // Core glow
    const radialGradient = defs.append("radialGradient")
      .attr("id", "globe-gradient")
      .attr("cx", "50%")
      .attr("cy", "50%")
      .attr("r", "50%")

    radialGradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#1e3a8a")
      .attr("stop-opacity", 0.3)

    radialGradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#000000")
      .attr("stop-opacity", 0)

    // Draw the sphere background (Ocean)
    svg.append("path")
      .datum({ type: "Sphere" })
      .attr("d", path as any)
      .attr("fill", "url(#globe-gradient)")
      .attr("stroke", "#3b82f6")
      .attr("stroke-width", 0.5)
      .attr("opacity", 0.8)

    // Draw Graticule
    const graticule = d3.geoGraticule()()
    svg.append("path")
      .datum(graticule)
      .attr("d", path as any)
      .attr("fill", "none")
      .attr("stroke", "#3b82f6")
      .attr("stroke-width", 0.2)
      .attr("opacity", 0.3)

    // Draw Countries
    svg.selectAll(".country")
      .data(worldData)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", path as any)
      .attr("fill", "#1e3a8a")
      .attr("fill-opacity", 0.4)
      .attr("stroke", "#60a5fa")
      .attr("stroke-width", 0.5)
      .attr("stroke-linejoin", "round")

    // Draw Labels (French)
    svg.selectAll(".label")
      .data(labels)
      .enter()
      .append("text")
      .attr("class", "label")
      .text(d => d.name)
      .attr("x", d => {
        const coords = projection([d.lon, d.lat])
        return coords ? coords[0] : 0
      })
      .attr("y", d => {
        const coords = projection([d.lon, d.lat])
        return coords ? coords[1] : 0
      })
      .attr("fill", "white")
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      .attr("text-anchor", "middle")
      .attr("pointer-events", "none")
      .style("opacity", d => {
        const coords = projection([d.lon, d.lat])
        if (!coords) return 0
        // Check if the point is on the front side of the globe
        const geoPoint = [d.lon, d.lat]
        const visible = d3.geoDistance(geoPoint as any, ([-rotation[0], -rotation[1]] as any)) < Math.PI / 2
        return visible ? 0.8 : 0
      })

  }, [worldData, rotation])

  const handleMouseDown = (e: React.MouseEvent) => {
    const startX = e.clientX
    const startY = e.clientY
    const startRot = [...rotation]

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const dx = (moveEvent.clientX - startX) * 0.5
      const dy = (moveEvent.clientY - startY) * 0.5
      setRotation([startRot[0] + dx, startRot[1] - dy])
    }

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
  }

  return (
    <div 
      className={`relative cursor-grab active:cursor-grabbing ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={handleMouseDown}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full drop-shadow-[0_0_30px_rgba(59,130,246,0.2)]"
      />
    </div>
  )
}
