import { describe, it, beforeEach, afterEach } from "node:test"
import assert from "node:assert"
import { renderHook, act } from "@testing-library/react"
import { useDimensions } from "./use-debounced-dimensions.ts"
import "global-jsdom/register"

describe("useDimensions", () => {
  beforeEach(() => {
    // Mock getBoundingClientRect
    Element.prototype.getBoundingClientRect = () => ({
      width: 100,
      height: 200,
      top: 0,
      left: 0,
      bottom: 200,
      right: 100,
      x: 0,
      y: 0,
      toJSON: () => {}
    })
  })

  afterEach(() => {
    // Clean up
    delete (Element.prototype as any).getBoundingClientRect
  })

  it("should return { width: 0, height: 0 } initially before mount", () => {
    const ref = { current: null }
    const { result } = renderHook(() => useDimensions(ref))
    assert.deepStrictEqual(result.current, { width: 0, height: 0 })
  })

  it("should measure element dimensions on mount", () => {
    const el = document.createElement("div")
    const ref = { current: el }

    const { result } = renderHook(() => useDimensions(ref))

    // Initial render gets the mocked dimensions
    assert.deepStrictEqual(result.current, { width: 100, height: 200 })
  })

  it("should update dimensions on resize with debounce", async () => {
    const el = document.createElement("div")
    const ref = { current: el }

    const { result } = renderHook(() => useDimensions(ref))

    assert.deepStrictEqual(result.current, { width: 100, height: 200 })

    // Change dimensions
    Element.prototype.getBoundingClientRect = () => ({
      width: 300,
      height: 400,
      top: 0,
      left: 0,
      bottom: 400,
      right: 300,
      x: 0,
      y: 0,
      toJSON: () => {}
    })

    act(() => {
      window.dispatchEvent(new window.Event("resize"))
    })

    // Should not update immediately due to debounce
    assert.deepStrictEqual(result.current, { width: 100, height: 200 })

    // Wait for debounce timeout
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 300))
    })

    // Should be updated now
    assert.deepStrictEqual(result.current, { width: 300, height: 400 })
  })

  it("should not crash if ref is null on resize", async () => {
    let el: HTMLElement | null = document.createElement("div")
    const ref = { current: el }

    const { result } = renderHook(() => useDimensions(ref))

    // Change dimensions
    Element.prototype.getBoundingClientRect = () => ({
      width: 300,
      height: 400,
      top: 0,
      left: 0,
      bottom: 400,
      right: 300,
      x: 0,
      y: 0,
      toJSON: () => {}
    })

    ref.current = null

    act(() => {
      window.dispatchEvent(new window.Event("resize"))
    })

    // Wait for debounce timeout
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 300))
    })

    // Should not have updated
    assert.deepStrictEqual(result.current, { width: 100, height: 200 })
  })

  it("should clear timeout and remove event listener on unmount", async () => {
    const el = document.createElement("div")
    const ref = { current: el }

    const { result, unmount } = renderHook(() => useDimensions(ref))

    assert.deepStrictEqual(result.current, { width: 100, height: 200 })

    // Change dimensions
    Element.prototype.getBoundingClientRect = () => ({
      width: 300,
      height: 400,
      top: 0,
      left: 0,
      bottom: 400,
      right: 300,
      x: 0,
      y: 0,
      toJSON: () => {}
    })

    act(() => {
      window.dispatchEvent(new window.Event("resize"))
    })

    unmount()

    // Wait for debounce timeout
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 300))
    })

    // Since component was unmounted, it should not have processed the resize
    assert.deepStrictEqual(result.current, { width: 100, height: 200 })
  })
})
