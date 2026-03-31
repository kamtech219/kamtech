import React, { Profiler } from "react"
import { createRoot } from "react-dom/client"
import Globe from "./components/ui/globe"

let mountTimes: number[] = []

const onRender = (
  id: string,
  phase: "mount" | "update" | "nested-update",
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number
) => {
  if (phase === "mount") {
    mountTimes.push(actualDuration)
  }
}

const container = document.createElement("div")
document.body.appendChild(container)
const root = createRoot(container)

async function runBenchmark() {
  console.log("Warming up globe data...")
  // We want to simulate the component remounting AFTER the data is already fetched
  // or at least let SWR cache it.

  root.render(
    <Profiler id="Globe" onRender={onRender}>
      <Globe autoRotate={false} />
    </Profiler>
  )

  await new Promise(r => setTimeout(r, 2000))
  mountTimes = []

  console.log("Running benchmark: remounting Globe 50 times...")

  for (let i = 0; i < 50; i++) {
    root.render(null)
    await new Promise(r => setTimeout(r, 10))
    root.render(
      <Profiler id="Globe" onRender={onRender}>
        <Globe autoRotate={false} />
      </Profiler>
    )
    await new Promise(r => setTimeout(r, 20)) // allow time for effects to run and updates to happen
  }

  const avg = mountTimes.reduce((a, b) => a + b, 0) / mountTimes.length
  console.log(`Average mount time: ${avg.toFixed(2)}ms`)
  console.log(`Max mount time: ${Math.max(...mountTimes).toFixed(2)}ms`)
  console.log(`Min mount time: ${Math.min(...mountTimes).toFixed(2)}ms`)
}

runBenchmark()
