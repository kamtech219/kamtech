import React, { Profiler } from "react"
import { createRoot } from "react-dom/client"
import Globe from "./components/ui/globe"

let renderCounts = 0

const onRender = (id, phase) => {
  renderCounts++
}

const container = document.createElement("div")
document.body.appendChild(container)
const root = createRoot(container)

async function run() {
  root.render(<Profiler id="Globe" onRender={onRender}><Globe autoRotate={false} /></Profiler>)
  await new Promise(r => setTimeout(r, 100))

  // Now remount it
  console.log("Remounting...")
  renderCounts = 0
  root.render(null)
  await new Promise(r => setTimeout(r, 10))
  root.render(<Profiler id="Globe" onRender={onRender}><Globe autoRotate={false} /></Profiler>)
  await new Promise(r => setTimeout(r, 100))

  console.log(`Render count on remount: ${renderCounts}`)
}
run()
