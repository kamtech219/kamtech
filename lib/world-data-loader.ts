import { feature } from "topojson-client"
import type { Topology, GeometryCollection } from "topojson-specification"
import type { Feature, Geometry } from "geojson"

let cachedWorldData: Feature<Geometry, any>[] | null = null

export const loadWorldData = async (): Promise<Feature<Geometry, any>[]> => {
  if (cachedWorldData) {
    return cachedWorldData
  }

  const globalObj = globalThis as { worldDataPromise?: Promise<Feature<Geometry, any>[]> }

  if (!globalObj.worldDataPromise) {
    globalObj.worldDataPromise = (async () => {
      try {
        const response = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
        const world = await response.json() as Topology<{ countries: GeometryCollection }>

        // We know that `feature` returning a FeatureCollection for a GeometryCollection
        const countries = feature(world, world.objects.countries) as unknown as { features: Feature<Geometry, any>[] }

        cachedWorldData = countries.features
        return countries.features
      } catch (error) {
        console.error("Error loading world data:", error)
        // Reset the promise on error so we can retry later
        globalObj.worldDataPromise = undefined
        throw error
      }
    })()
  }

  return globalObj.worldDataPromise
}
