import { JSDOM } from "jsdom"
import fs from "fs"

const { window } = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
  url: "http://localhost",
  pretendToBeVisual: true
})

global.window = window
global.document = window.document
// navigator is readonly, maybe don't set it if it errors
Object.defineProperty(global, 'navigator', {
    value: window.navigator,
    configurable: true,
    writable: true
});

global.requestAnimationFrame = (cb) => setTimeout(cb, 0)

// Provide a mock fetch
global.fetch = async (url) => {
  if (url.includes("countries-110m.json")) {
    return {
      json: async () => ({ type: "Topology", objects: { countries: { type: "GeometryCollection", geometries: [] } }, arcs: [], transform: {scale: [1,1], translate: [0,0]} })
    }
  }
  throw new Error("Unknown URL")
}

import("./benchmark-globe.tsx").catch(e => console.error(e))
