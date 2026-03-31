import { feature } from "topojson-client"
import type { Topology, GeometryCollection } from "topojson-specification"
import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson"

export interface WorldAtlasTopology extends Topology {
  objects: {
    countries: GeometryCollection
    land: GeometryCollection
  }
}

let cachedWorldData: FeatureCollection<Geometry, GeoJsonProperties>["features"] | null = null

export const loadWorldData = async (): Promise<FeatureCollection<Geometry, GeoJsonProperties>["features"]> => {
  if (cachedWorldData) {
    return cachedWorldData
  }

  if (!(globalThis as any).worldDataPromise) {
    ;(globalThis as any).worldDataPromise = (async () => {
      try {
        const response = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
        const world: WorldAtlasTopology = await response.json()
        const countries = feature(world, world.objects.countries) as FeatureCollection<Geometry, GeoJsonProperties>
        cachedWorldData = countries.features
        return countries.features
      } catch (error) {
        console.error("Error loading world data:", error)
        // Reset the promise on error so we can retry later
        ;(globalThis as any).worldDataPromise = null
        throw error
      }
    })()
  }

  return (globalThis as any).worldDataPromise
}
