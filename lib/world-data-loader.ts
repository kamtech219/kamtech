import { feature } from "topojson-client"

// Keep this around for backwards compatibility or SWR fetcher
export const fetchWorldData = async (url: string) => {
  const response = await fetch(url)
  const world: any = await response.json()
  const countries = (feature(world, world.objects.countries) as any).features
  return countries
}

// Deprecate standard load in favor of SWR fetcher, but keep for compatibility if needed elsewhere
let cachedWorldData: any = null
export const loadWorldData = async () => {
  if (cachedWorldData) {
    return cachedWorldData
  }

  if (!(globalThis as any).worldDataPromise) {
    ;(globalThis as any).worldDataPromise = (async () => {
      try {
        const countries = await fetchWorldData("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
        cachedWorldData = countries
        return countries
      } catch (error) {
        console.error("Error loading world data:", error)
        ;(globalThis as any).worldDataPromise = null
        throw error
      }
    })()
  }

  return (globalThis as any).worldDataPromise
}
