import { JSDOM } from "jsdom"

const { window } = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
  url: "http://localhost",
  pretendToBeVisual: true
})

global.window = window
global.document = window.document
Object.defineProperty(global, 'navigator', { value: window.navigator, configurable: true, writable: true })
global.requestAnimationFrame = (cb) => setTimeout(cb, 0)
global.fetch = async (url) => ({ json: async () => ({ type: "Topology", objects: { countries: { type: "GeometryCollection", geometries: [] } }, arcs: [], transform: {scale: [1,1], translate: [0,0]} }) })

import("./benchmark-renders.tsx").catch(e => console.error(e))
